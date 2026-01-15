export const metadata = {
  title: "Cookie Policy | Green Isle Tours",
  description: "How Green Isle Tours uses cookies and similar technologies.",
};

export default function CookiePolicy() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">
        This Cookie Policy explains how Green Isle Tours (“we”, “our”, “us”) uses
        cookies and similar technologies on our website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device to improve your browsing
        experience and help websites function effectively.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">How We Use Cookies</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To ensure the site operates smoothly</li>
        <li>To understand how visitors use the site (analytics)</li>
        <li>To improve site performance and reliability</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Types of Cookies We Use</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Essential cookies:</strong> Required for core site functions.
        </li>
        <li>
          <strong>Analytics cookies:</strong> Help us understand site usage
          (anonymous data only).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Managing Cookies</h2>
      <p className="mb-4">
        Most browsers allow you to manage or block cookies through settings. Note
        that disabling cookies may affect your user experience.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
      <p>
        For questions, contact us at{" "}
        <a href="mailto:booking@greenisletours.ie
" className="underline">
          booking@greenisletours.ie

        </a>.
      </p>
    </main>
  );
}
