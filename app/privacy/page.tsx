export const metadata = {
  title: "Privacy Policy | Green Isle Tours",
  description: "How Green Isle Tours collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Green Isle Tours (“we”, “our”, “us”) is committed to protecting your privacy
        and ensuring your personal information is handled in accordance with the
        General Data Protection Regulation (GDPR).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">We may collect the following information:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Contact details such as name, email address, and phone number</li>
        <li>Messages or enquiries submitted through our website</li>
        <li>Booking details relating to tours or transport</li>
        <li>Technical information such as IP address and browser type</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Respond to enquiries and provide customer support</li>
        <li>Process bookings and manage travel arrangements</li>
        <li>Improve our website and customer service</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or share your personal data with third parties except:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Service providers who support our operations (e.g., email systems)</li>
        <li>When required by law or regulatory authorities</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Retention</h2>
      <p className="mb-4">
        We only retain personal data for as long as necessary to fulfil the purposes
        outlined above or to meet legal and accounting obligations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Request access to your data</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to processing or withdraw consent</li>
        <li>Request data portability</li>
      </ul>
      <p className="mb-4">
        To exercise your rights, contact us at{" "}
        <a href="mailto:booking@greenisletours.ie
" className="underline">
          booking@greenisletours.ie

        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this policy or how your data is used, contact
        us at: <strong>booking@greenisletours.ie
</strong>.
      </p>
    </main>
  );
}
