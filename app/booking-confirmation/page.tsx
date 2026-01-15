// app/booking-confirmation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Confirmation | Green Isle Tours",
  description: "Your booking with Green Isle Tours has been confirmed.",
};

export default function BookingConfirmationPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Your booking is confirmed</h1>
      <p className="mt-4 text-slate-600">
        Thank you for choosing Green Isle Tours. Your booking details have been confirmed
        and a confirmation email has been sent to you.
      </p>
      <p className="mt-2 text-slate-600">
        If you have any questions or need to update your plans, please contact us at{" "}
        <a href="mailto:booking@greenisletours.ie
" className="font-medium text-emerald-700 hover:underline">
          booking@greenisletours.ie

        </a>{" "}
        or call{" "}
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
          Explore more tours
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
