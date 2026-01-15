// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greenisletours.ie"),
  title: {
    default: "Green Isle Tours | Discover Ireland with Friendly Local Guides",
    template: "%s | Green Isle Tours",
  },
  description:
    "Green Isle Tours offers friendly, welcoming tours across Ireland, including day trips, weekend breaks, multi-day tours, hen & stag parties, corporate transport and airport transfers.",
  openGraph: {
    type: "website",
    url: "https://www.greenisletours.ie",
    siteName: "Green Isle Tours",
    title: "Green Isle Tours | Explore Ireland in Comfort",
    description:
      "Private and small-group tours across Ireland. Day trips, scenic tours, hen & stag trips, corporate travel and airport transfers.",
    images: [
      {
        url: "/hero.webp",
        width: 1600,
        height: 1067,
        alt: "Waterfall in Ireland - Green Isle Tours hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Isle Tours | Ireland Day Trips & Private Tours",
    description:
      "Discover Ireland with friendly, local guides. Private tours, airport transfers and weekend breaks.",
    images: ["/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAgency",
    name: "Green Isle Tours",
    url: "https://www.greenisletours.ie",
    email: "booking@greenisletours.ie",
    telephone: "+353851578436",
    image:
      "https://www.greenisletours.ie/logo.svg",
    description:
      "Green Isle Tours provides friendly, welcoming travel experiences across Ireland including day trips, weekend breaks, private tours, hen & stag trips, airport transfers and corporate travel.",
    areaServed: "IE",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Ireland",
    },
    sameAs: [],
  };

  return (
    <html lang="en">
<head>
  {/* Favicon / logo */}
  <link
    rel="icon"
    href="/logo.svg"          // ← replace with your actual filename
    type="image/svg+xml"
  />

  {/* JSON-LD Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />

  {/* Optional GA4 Support */}
  {GA_ID && (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )}
</head>
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
