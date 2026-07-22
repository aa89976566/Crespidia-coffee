import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find us",
  description: "Crespidia on Anerley Hill and Anerley Road, with opening hours.",
};

const locations = [
  {
    name: "Crespidia",
    role: "By the park",
    address: "48 Anerley Hill, London SE19 2AE",
    phone: "020 8659 4986",
    phoneHref: "tel:+442086594986",
    hours: [
      { day: "Tue to Fri", time: "9am to 5pm" },
      { day: "Saturday", time: "9am to 5pm" },
      { day: "Sunday", time: "10am to 5pm" },
      { day: "Monday", time: "Check Instagram" },
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Crespidia+48+Anerley+Hill+London+SE19+2AE",
    note: "The original shop near Crystal Palace Park. Vintage bits everywhere, cakes on the counter, plants and little gifts if you fancy a browse.",
  },
  {
    name: "Crespidia Coffee and Bar",
    role: "On Anerley Road",
    address: "51-53 Anerley Road, London SE19 2AS",
    phone: "07840 318007",
    phoneHref: "tel:+447840318007",
    hours: [
      { day: "Monday", time: "8am to 5pm" },
      { day: "Tuesday", time: "8am to 6:30pm" },
      { day: "Wed to Sun", time: "8am to 7:30pm" },
    ],
    map: "https://maps.app.goo.gl/vqtXvDjrXFaWsiWg6",
    note: "Handy for a laptop morning or a pastry on the way through. Later on we do drinks too. Dogs are fine.",
  },
];

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
        Find us
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Two shops, same people. Hours shift a bit on holidays, so if you are
        unsure just drop us a message on Instagram.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {locations.map((loc) => (
          <article
            key={loc.name}
            className="rounded-[1.75rem] border-2 border-ink/10 bg-white p-6 shadow-[0_8px_0_#ffa30033]"
          >
            <p className="text-sm font-semibold text-orange-hot">{loc.role}</p>
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
          Short walk from Crystal Palace station and the park gates. Plenty of
          people swing by after a dog walk.
        </p>
      </div>
    </div>
  );
}
