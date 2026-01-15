import Image from "next/image";

const HERO_SRC = "/hero.webp";

const CONTACT = {
  phoneDisplay: "+353 85 157 8436",
  phoneHref: "+353851578436",
  email: "booking@greenisletours.ie",
} as const;

const tours = [
  {
    name: "Wild Atlantic Way Day Tour",
    description:
      "Dramatic coastlines, colourful villages, and postcard-perfect stops along Ireland’s famous Wild Atlantic Way.",
    duration: "Full Day",
    highlights: ["Cliffs, beaches & coastal villages", "Photo stops & free time"],
    image: "/private-wild-atlantic-way.jpg",
  },
  {
    name: "Causeway Coast & Glens",
    description:
      "Explore the Giant’s Causeway, rugged headlands, and charming coastal towns along the north coast.",
    duration: "Full Day",
    highlights: ["Giant’s Causeway", "Coastal viewpoints", "Game of Thrones locations"],
    image: "/private-causeway-coast.jpg",
  },
  {
    name: "Dublin City & Wicklow Mountains",
    description:
      "Combine Dublin’s lively streets with the peaceful scenery of the Wicklow Mountains and glacial valleys.",
    duration: "Full Day",
    highlights: ["Dublin highlights", "Wicklow Mountains", "Glendalough"],
    image: "/private-dublin-wicklow.jpg",
  },
];

const galleryImages = [
  {
    src: "/gallery1.jpg",
    alt: "Scenic Irish coastline viewed from a clifftop road",
  },
  {
    src: "/gallery2.jpg",
    alt: "Tour group standing on a viewpoint overlooking the sea",
  },
  {
    src: "/gallery3.jpg",
    alt: "Quiet country road with rolling green hills in Ireland",
  },
  {
    src: "/gallery4.jpg",
    alt: "Irish village street with colourful shop fronts",
  },
];

const reviews = [
  {
    name: "Sarah & Mark, UK",
    text: "Christy was an amazing guide – friendly, knowledgeable, and so flexible. We saw parts of Ireland we’d never have found on our own.",
  },
  {
    name: "Aoife, Dublin",
    text: "Our hen weekend was relaxed, great fun, and completely hassle-free. The minibus was spotless and we felt well looked after.",
  },
  {
    name: "Corporate Group, Germany",
    text: "Professional, punctual, and very accommodating with our schedule. Green Isle Tours made our client visit run smoothly.",
  },
];

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      {/* Header bar (sticky) */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Green Isle Tours logo"
              width={72}
              height={72}
              className="drop-shadow-md"
              priority
            />
            <span className="hidden sm:inline text-sm font-semibold tracking-wide text-white">
              Green Isle Tours
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-4 md:gap-6 text-sm text-white">
            <a href="#tours" className="hover:text-emerald-300">
              Tours
            </a>
            <a href="#about" className="hidden sm:inline hover:text-emerald-300">
              About
            </a>
            <a href="#gallery" className="hidden md:inline hover:text-emerald-300">
              Gallery
            </a>
            <a href="#reviews" className="hidden md:inline hover:text-emerald-300">
              Reviews
            </a>
            <a href="#contact" className="hidden sm:inline hover:text-emerald-300">
              Contact
            </a>

            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500"
            >
              Call {CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* Background image + dark overlay */}
        <div className="absolute inset-0">
          <Image
            src={HERO_SRC}
            alt="Waterfall in lush Irish landscape"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Hero content */}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center md:px-6 lg:px-8 lg:py-28">
          <p className="text-sm tracking-[0.2em] uppercase mb-3">
            Discover Ireland with us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Private &amp; Small-Group
            <br className="hidden md:block" />
            Tours Across Ireland
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-100">
            Coastlines, castles, and craic — curated itineraries on the Wild
            Atlantic Way, Causeway Coast, and beyond.
          </p>

          {/* HERO CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            {/* VIEW TOURS */}
            <a
              href="#tours"
              className="btn-cta px-6 py-3 rounded-full bg-slate-800/90 text-white hover:bg-slate-900 transition flex items-center shadow-md"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.585 10H4a1 1 0 01-.117-1.993L4 8h9.585l-3.292-3.293z" />
              </svg>
              View Tours
            </a>

            {/* CALL US */}
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="btn-cta px-6 py-3 rounded-full bg-green-700 text-white hover:bg-green-800 transition flex items-center shadow-md"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l1.83-1.83a1 1 0 011.96.32 11.72 11.72 0 003.68.59 1 1 0 011 1v2.88a1 1 0 01-1 1A17.76 17.76 0 014 6a1 1 0 011-1h2.88a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.27.96l-1.58 1.58z" />
              </svg>
              Call {CONTACT.phoneDisplay}
            </a>

            {/* WHATSAPP US */}
            <a
              href="https://wa.me/353851578436"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition flex items-center shadow-md"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M16 3C9.383 3 4 8.383 4 15c0 2.26.66 4.37 1.91 6.23L4 29l7.02-1.86A11.8 11.8 0 0016 27c6.617 0 12-5.383 12-12S22.617 3 16 3z" />
                <path d="M12.94 10.01c-.25-.55-.51-.56-.75-.57-.72-.04-1.78.44-1.78 2.39 0 1.65 1.21 3.25 1.38 3.48.17.23 2.33 3.57 5.75 4.86 2.84 1.12 3.42.9 4.04.84.62-.06 1.99-.81 2.27-1.6.28-.79.28-1.47.2-1.61-.08-.14-.31-.22-.65-.39s-2.01-.99-2.32-1.1c-.31-.11-.54-.17-.77.17-.23.34-.89 1.1-1.09 1.32-.2.22-.4.25-.74.08s-1.44-.53-2.75-1.69c-1.02-.91-1.71-2.03-1.91-2.37-.2-.34-.02-.52.15-.69.32-.32.78-.9.85-1.17.07-.27.06-.43-.02-.6-.08-.17-.7-1.77-.95-2.32z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Email under buttons */}
          <div className="mt-4 text-center md:text-left">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-white underline opacity-90 hover:opacity-100"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Bottom white gradient fade into page content */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent mix-blend-normal" />
      </section>

      {/* Tours */}
      <section id="tours" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold">Popular Tours</h2>
          <p className="mt-2 text-slate-600">
            A sample of the most requested itineraries. All tours can be tailored to your group.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {tours.map((tour) => (
              <div
                key={tour.name}
                className="rounded-xl bg-white shadow-sm border border-slate-100 overflow-hidden flex flex-col"
              >
                {/* Tour image */}
                <div className="relative h-40 w-full">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Tour content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold">{tour.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{tour.description}</p>
                  <p className="mt-3 text-sm font-medium text-slate-800">
                    Duration: {tour.duration}
                  </p>
                  <ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
                    {tour.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold">About Green Isle Tours</h2>
            <p className="mt-4 text-slate-700">
              Green Isle Tours is a friendly, welcoming tour operator dedicated to delivering
              memorable travel experiences across Ireland. We offer immersive tours of Ireland’s
              most beautiful regions, as well as exciting day trips to all the must-see landmarks
              and hidden gems.
            </p>
            <p className="mt-3 text-slate-700">
              Whether you need reliable airport transfers, fun and hassle-free hen or stag trips,
              professional transport for corporate events, or relaxing weekend breaks, we tailor
              every journey to your needs. With a warm approach, local knowledge, and a passion
              for great service, Green Isle Tours ensures every guest enjoys comfortable travel,
              stunning scenery, and an authentic taste of Ireland.
            </p>
            <ul className="mt-4 text-slate-700 space-y-1 text-sm">
              <li>• Day Trips – iconic landmarks in comfort and style</li>
              <li>• Corporate Events – seamless transport for teams and clients</li>
              <li>• Tours of Ireland – fully guided, customised multi-day tours</li>
              <li>• Weekend Breaks – relaxing, scenic short getaways</li>
              <li>• Hens &amp; Stag Trips – fun, stress-free celebrations</li>
              <li>• Airport Transfers – reliable, on-time pick-ups and drop-offs</li>
            </ul>
          </div>
          <div className="relative h-72 md:h-80 lg:h-96">
            {/* placeholder bus image slot */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-200">
              <Image
                src="/bus.jpeg"
                alt="Green Isle Tours minibus on a scenic Irish road"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p className="mt-2 text-slate-600">
            A glimpse of the scenery and experiences you can enjoy with Green Isle Tours.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative h-40 overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold">What Our Guests Say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
              >
                <p className="text-slate-700 text-sm">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking Enquiry */}
      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold">Booking Enquiry</h2>
          <p className="mt-2 text-slate-200 max-w-xl">
            Tell us a little about your trip, and we&apos;ll get back to you with options and
            availability.
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
            <form action="/api/enquire" method="POST" className="space-y-4">
            {/* Honeypot field – hidden from humans, bots will sometimes fill it */}
  <div className="hidden">
    <label>
      Company
      <input
        type="text"
        name="company"
        autoComplete="off"
      />
    </label>
  </div>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center rounded-md bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Send Enquiry
              </button>
            </form>

            <div className="space-y-4 text-sm text-slate-100">
              <p>
                Prefer to talk to someone directly? You can also reach us by phone, WhatsApp or
                email:
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${CONTACT.phoneHref}`} className="underline">
                  {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/353851578436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${CONTACT.email}`} className="underline">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Footer */}
<footer className="bg-slate-100 text-slate-700 mt-16 py-10">
  <div className="mx-auto max-w-7xl px-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    {/* Left: logo + name */}
    <div className="flex flex-col items-center md:items-start gap-3">
      <Image
        src="/logo.svg"
        alt="Green Isle Tours logo"
        width={72}
        height={72}
      />
      <p className="font-semibold text-slate-800">Green Isle Tours</p>
      <p className="text-sm text-slate-600">
        Friendly private &amp; small-group tours across Ireland.
      </p>
    </div>

    {/* Right: contact details */}
    <div className="text-sm text-slate-600 text-center md:text-right space-y-1">
      <p>
        <strong>Phone:</strong>{" "}
        <a href="tel:+353851578436" className="underline">
          +353 85 157 8436
        </a>
      </p>
      <p>
        <strong>WhatsApp:</strong>{" "}
        <a
          href="https://wa.me/353851578436"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Chat on WhatsApp
        </a>
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:booking@greenisletours.ie
" className="underline">
          booking@greenisletours.ie

        </a>
      </p>
      <p className="text-xs text-slate-500 pt-3">
        © {new Date().getFullYear()} Green Isle Tours. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}
