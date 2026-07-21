import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit",
  description: "Crespidia locations, opening hours, and how to find us.",
};

const locations = [
  {
    name: "Crespidia",
    role: "Coffee bakery",
    address: "48 Anerley Hill, London SE19 2AE",
    phone: "+44 20 8659 4986",
    phoneHref: "tel:+442086594986",
    hours: [
      { day: "Tuesday – Friday", time: "9:00 – 17:00" },
      { day: "Saturday", time: "9:00 – 17:00" },
      { day: "Sunday", time: "10:00 – 17:00" },
      { day: "Monday", time: "Please check Instagram" },
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Crespidia+48+Anerley+Hill+London+SE19+2AE",
    note: "Near Crystal Palace Park — vintage room, cakes, breakfast, gifts & plants.",
  },
  {
    name: "Crespidia Coffee & Bar",
    role: "Coffee · bakery · evening drinks",
    address: "51–53 Anerley Road, London SE19 2AS",
    phone: "+44 7840 318007",
    phoneHref: "tel:+447840318007",
    hours: [
      { day: "Monday", time: "8:00 – 17:00" },
      { day: "Tuesday", time: "8:00 – 18:30" },
      { day: "Wed – Sun", time: "8:00 – 19:30" },
    ],
    map: "https://maps.app.goo.gl/vqtXvDjrXFaWsiWg6",
    note: "Quiet laptop mornings, cakes & pastries, cocktails later. Dog-friendly.",
  },
];

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-hot">
        Find us
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl text-ink">
        Visit
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Two Crespidia spots under the same welcoming owners. Hours can change
        for holidays — when in doubt, message us on Instagram.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {locations.map((loc) => (
          <article
            key={loc.name}
            className="rounded-[1.75rem] border-2 border-ink/10 bg-white p-6 shadow-[0_8px_0_#ffa30033]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-hot">
              {loc.role}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-ink">
              {loc.name}
            </h2>
            <p className="mt-3 text-ink-soft">{loc.note}</p>

            <div className="mt-6 space-y-2 text-sm">
              <p className="font-bold text-ink">{loc.address}</p>
              <p>
                <a
                  href={loc.phoneHref}
                  className="font-semibold text-orange-hot underline underline-offset-4"
                >
                  {loc.phone}
                </a>
              </p>
            </div>

            <ul className="mt-6 space-y-2 border-t border-ink/10 pt-5 text-sm">
              {loc.hours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-ink-soft">{row.day}</span>
                  <span className="font-bold text-ink">{row.time}</span>
                </li>
              ))}
            </ul>

            <a
              href={loc.map}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-extrabold text-ink transition hover:bg-yellow"
            >
              Open in Maps
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-cream-deep px-5 py-5 text-sm text-ink-soft">
        <p className="font-bold text-ink">Getting here</p>
        <p className="mt-1">
          Short walk from Crystal Palace station and the park gates. Perfect
          after a dog walk — we’re dog-friendly inside and for takeaway.
        </p>
      </div>
    </div>
  );
}
