// app/thank-you/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Green Isle Tours",
  description: "Thank you for contacting Green Isle Tours.",
};

export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Thank you for your enquiry</h1>
      <p className="mt-4 text-slate-600">
        We’ve received your message and will come back to you as soon as possible with
        availability, pricing, and itinerary details.
      </p>
      <p className="mt-2 text-slate-600">
        If your enquiry is urgent, you can also call us on{" "}
        <a href="tel:+353851578436" className="font-medium text-emerald-700 hover:underline">
          +353 85 157 8436
        </a>
        .
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/#tours"
          className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800"
        >
          View tours
        </Link>
        <Link
          href="/"
          className="text-sm text-emerald-700 hover:underline"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
