// app/api/enquire/route.ts
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function readFormOrJson(req: NextRequest) {
  const ctype = req.headers.get("content-type") || "";
  if (ctype.includes("application/json")) {
    const j = await req.json().catch(() => ({}));
    return {
      name: String(j.name || ""),
      email: String(j.email || ""),
      phone: String(j.phone || ""),
      message: String(j.message || ""),
      // Honeypot field
      company: String(j.company || ""),
      isFormPost: false,
    };
  }

  const fd = await req.formData();
  return {
    name: String(fd.get("name") || ""),
    email: String(fd.get("email") || ""),
    phone: String(fd.get("phone") || ""),
    message: String(fd.get("message") || ""),
    // Honeypot field
    company: String(fd.get("company") || ""),
    isFormPost: true,
  };
}

function validate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  if (name.trim().length < 2) return "Please enter your name.";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Please enter a valid email.";
  if (message.trim().length < 10) return "Please include a brief message.";
  return "";
}

function redirectTo(path: string) {
  return new Response(null, { status: 303, headers: { Location: path } });
}

function safeOneLine(s: string) {
  return s.replace(/[\r\n]+/g, " ").trim();
}

/**
 * Lightweight in-memory rate limiter (per server instance).
 * Good basic spam reduction; not shared across regions/instances.
 */
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 3; // 3 requests per minute per IP
const rateMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  const realIp = req.headers.get("x-real-ip");
  return realIp || "unknown";
}

function rateLimit(req: NextRequest) {
  const ip = getClientIp(req);
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { ok: true as const };
  }

  entry.count += 1;
  if (entry.count > RATE_MAX) return { ok: false as const, ip };
  return { ok: true as const };
}

// --- Microsoft Graph helpers ---

type GraphToken = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

let tokenCache: { token: string; expiresAtMs: number } | null = null;

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function getGraphAccessToken(): Promise<string> {
  // Cache token to avoid requesting on every enquiry
  const now = Date.now();
  if (tokenCache && tokenCache.expiresAtMs > now + 30_000) {
    return tokenCache.token;
  }

  const tenantId = requiredEnv("2907b69a-38da-4937-87bc-cd20b83c4539");
  const clientId = requiredEnv("c16f5815-e2bd-457c-b464-b060ec7fe531");
  const clientSecret = process.env.MS_CLIENT_SECRET;

  const tokenUrl = `https://login.microsoftonline.com/${encodeURIComponent(
    tenantId
  )}/oauth2/v2.0/token`;

  const body = new URLSearchParams();
  body.set("client_id", clientId);
  body.set("client_secret", clientSecret);
  body.set("grant_type", "client_credentials");
  body.set("scope", "https://graph.microsoft.com/.default");

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Graph token request failed: ${res.status} ${res.statusText} ${text}`);
  }

  const j = (await res.json()) as GraphToken;
  const expiresAtMs = now + Math.max(0, (j.expires_in || 0) * 1000);
  tokenCache = { token: j.access_token, expiresAtMs };
  return j.access_token;
}

async function graphSendMail(params: {
  sender: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  replyToEmail?: string;
  replyToName?: string;
}) {
  const accessToken = await getGraphAccessToken();

  const {
    sender,
    to,
    subject,
    html,
    text,
    replyToEmail,
    replyToName,
  } = params;

  const url = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`;

  const payload: any = {
    message: {
      subject,
      body: {
        contentType: "HTML",
        content: html,
      },
      toRecipients: [
        { emailAddress: { address: to } },
      ],
    },
    saveToSentItems: true,
  };

  // Include a plain-text alternative via "internetMessageHeaders" is not a real alt-body.
  // Graph sendMail supports only one body. We keep text for debugging/logging use.
  // Many email clients render HTML fine; this is usually acceptable.
  // If you want true multipart, we'd need to use MIME content endpoints.
  void text;

  if (replyToEmail) {
    payload.message.replyTo = [
      {
        emailAddress: {
          address: replyToEmail,
          name: replyToName ? safeOneLine(replyToName) : undefined,
        },
      },
    ];
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const textErr = await res.text().catch(() => "");
    throw new Error(`Graph sendMail failed: ${res.status} ${res.statusText} ${textErr}`);
  }
}

export async function POST(req: NextRequest) {
  const data = await readFormOrJson(req);
  const { name, email, phone, message, company, isFormPost } = data;

  // Basic rate limit (optional nice-to-have)
  const rl = rateLimit(req);
  if (!rl.ok) {
    // Avoid giving bots strong signals; treat as generic success
    if (isFormPost) return redirectTo("/thank-you");
    return Response.json({ ok: true });
  }

  // Honeypot: if filled, silently accept
  if (company && company.trim().length > 0) {
    if (isFormPost) return redirectTo("/thank-you");
    return Response.json({ ok: true });
  }

  const err = validate({ name, email, message });
  if (err) {
    if (isFormPost) return redirectTo("/?error=1");
    return Response.json({ ok: false, error: err }, { status: 400 });
  }

  try {
    const sender = process.env.MS_SENDER || "info@greenisletours.ie";
    const toEmail = process.env.TO_EMAIL || "info@greenisletours.ie";

    const safeName = safeOneLine(name);

    // Internal notification email (to booking inbox)
    const internalHtml = `
      <h2>New Booking Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "")}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `;

    const internalText =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || ""}\n\n` +
      `${message}`;

    await graphSendMail({
      sender,
      to: toEmail,
      subject: `Booking enquiry from ${safeName}`,
      html: internalHtml,
      text: internalText,
      replyToEmail: email,
      replyToName: safeName,
    });

    // Optional: customer confirmation email
    if (process.env.CUSTOMER_AUTOREPLY === "true") {
      const customerHtml = `
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for your enquiry to <strong>Green Isle Tours</strong>. We’ve received your message and we’ll get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        <p>Kind regards,<br/>Green Isle Tours</p>
      `;

      const customerText =
        `Hi ${name},\n\n` +
        `Thanks for your enquiry to Green Isle Tours. We’ve received your message and we’ll get back to you as soon as possible.\n\n` +
        `Your message:\n${message}\n\n` +
        `Kind regards,\nGreen Isle Tours`;

      await graphSendMail({
        sender,
        to: email,
        subject: "We received your booking enquiry",
        html: customerHtml,
        text: customerText,
        // Replies should go back to booking inbox
        replyToEmail: toEmail,
        replyToName: "Green Isle Tours",
      });
    }

    if (isFormPost) return redirectTo("/thank-you");
    return Response.json({ ok: true });
  } catch (e) {
    console.error(e);
    if (isFormPost) return redirectTo("/?error=1");
    return Response.json({ ok: false, error: "Email failed" }, { status: 500 });
  }
}
