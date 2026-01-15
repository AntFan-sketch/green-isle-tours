export const metadata = {
  title: "Terms & Conditions | Green Isle Tours",
  description:
    "Terms and conditions for booking and using Green Isle Tours services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        By booking with Green Isle Tours (“we”, “our”, “us”), you agree to the
        following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Booking & Payment</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Bookings are confirmed once we receive all required details.</li>
        <li>Payments may be requested in advance depending on the service.</li>
        <li>Prices vary depending on group size, itinerary, and transport.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Cancellations & Refunds</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Cancellations made more than 48 hours before the trip may be eligible for
          a refund.
        </li>
        <li>
          Cancellations within 48 hours or no-shows may be charged in full.
        </li>
        <li>
          Weather or safety issues may result in route changes or rescheduling.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Responsibilities</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Guests are responsible for arriving on time for pickups.</li>
        <li>
          We take every precaution to ensure safety, but guests join tours at their
          own risk.
        </li>
        <li>Damage to vehicles or property may be charged.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Privacy</h2>
      <p className="mb-4">
        We handle all personal data in accordance with our{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Contact</h2>
      <p>
        For questions about these terms, contact us at{" "}
        <a href="mailto:booking@greenisletours.ie
" className="underline">
          booking@greenisletours.ie

        </a>
        .
      </p>
    </main>
  );
}
