// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">
        Sorry, we couldn’t find that page. It may have been moved or no longer exists.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Back to home
        </Link>
        <a
          href="mailto:booking@greenisletours.ie
"
          className="text-sm text-emerald-700 hover:underline"
        >
          Contact Green Isle Tours
        </a>
      </div>
    </main>
  );
}
