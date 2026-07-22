import type { Metadata } from "next";
import { social } from "@/data/shop";

export const metadata: Metadata = {
  title: "Find us",
  description: "Crespidia opening hours and addresses in Crystal Palace.",
};

const locations = [
  {
    name: "Anerley Hill",
    address: "48 Anerley Hill, SE19 2AE",
    phone: "020 8659 4986",
    phoneHref: "tel:+442086594986",
    hours: [
      { day: "Tue to Fri", time: "9am to 5pm" },
      { day: "Saturday", time: "9am to 5pm" },
      { day: "Sunday", time: "10am to 5pm" },
      { day: "Monday", time: "Check Instagram" },
    ],
    map: social.mapsHill,
    note: "Park side cafe. Breakfast, cakes, flowers and a bright room full of vintage finds.",
  },
  {
    name: "Anerley Road",
    address: "51-53 Anerley Road, SE19 2AS",
    phone: "07840 318007",
    phoneHref: "tel:+447840318007",
    hours: [
      { day: "Monday", time: "8am to 5pm" },
      { day: "Tuesday", time: "8am to 6:30pm" },
      { day: "Wed to Sun", time: "8am to 7:30pm" },
    ],
    map: social.mapsRoad,
    note: "Coffee and cakes in the day. Matcha, cocktails and a quieter evening drink later. Dogs welcome.",
  },
];

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-5xl text-ink">
        Find us
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">
        Two shops on Anerley. Hours can change on holidays, so a quick look at{" "}
        <a
          href={social.instagram}
          className="font-semibold text-orange-hot underline"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>{" "}
        helps before you set out.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {locations.map((loc) => (
          <article
            key={loc.name}
            className="rounded-[1.75rem] border-2 border-orange/50 bg-white p-6 shadow-[0_8px_0_#ffb42944]"
          >
            <h2 className="font-display text-3xl text-ink">
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
              Open in Google Maps
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-mist px-5 py-5 text-sm text-ink-soft">
        <p className="font-bold text-ink">Handy to know</p>
        <p className="mt-2">
          Short walk from Crystal Palace station and the park gates. Outdoor
          seating when it is warm. Takeaway coffee and cakes for dog walks.
        </p>
      </div>
    </div>
  );
}
