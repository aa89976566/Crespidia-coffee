import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { locations, social } from "@/data/shop";

export const metadata: Metadata = {
  title: "About",
  description: "The family bakery behind Crespidia in Crystal Palace.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,176,64,0.35),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(255,122,26,0.2),transparent_40%)]" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <p className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-orange-hot md:text-5xl">
            Crespidia
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink md:text-4xl">
            A family bakery in Crystal Palace
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Crespidia started as a neighbourhood coffee bakery on Anerley Hill.
            People came for cakes, coffee, and a friendly room near the park.
            Later the same family opened the coffee and bar on Anerley Road for
            evenings and longer days out.
          </p>
        </div>
      </section>

      <section className="border-y border-orange/30 bg-mist">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-ink">
              Francesca and the family
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Regulars talk about Francesca and the family feeling first. Guests
              mention homemade cakes, Turkish jam on the table, and staff who
              remember faces. It is the kind of place where people bring dogs,
              kids, and friends after a walk.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Reviews often say the cakes taste homemade and the room feels
              happy. That is what we try to keep every day.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-xl shadow-[0_8px_0_#ffb42944] ring-4 ring-white md:h-80">
            <Image
              src="/photos/crespidia-fb.jpg"
              alt="Crespidia Coffee Bakery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-ink">
            Two shops
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {locations.map((loc) => (
              <article
                key={loc.name}
                className="rounded-xl bg-white p-6 shadow-[0_6px_0_#ffb42955] ring-1 ring-orange/30"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-hot">
                  {loc.kind}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
                  {loc.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {loc.address}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {loc.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-orange/30 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-ink">
            What guests notice
          </h2>
          <ul className="mt-6 space-y-3 text-ink-soft">
            <li>Homemade cakes and celebration cakes, including gluten free options</li>
            <li>Breakfast plates, pancakes, eggs on sourdough, and French toast</li>
            <li>Good coffee, matcha lavender, and rose mint tea</li>
            <li>Flowers, plants, gifts, and sometimes vintage clothes</li>
            <li>Dogs welcome, outdoor seating, and a busy weekend brunch crowd</li>
            <li>Evenings with cocktails at the Anerley Road coffee and bar</li>
          </ul>
          <p className="mt-8 leading-relaxed text-ink-soft">
            For day to day specials and weekend energy, follow Instagram. For
            directions and recent photos from neighbours, open Google Maps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-ink shadow-[0_4px_0_#00000018] hover:bg-yellow"
            >
              Instagram
            </a>
            <a
              href={social.mapsRoad}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-orange/50 bg-cream px-5 py-2.5 text-sm font-bold text-ink hover:bg-white"
            >
              Google Maps
            </a>
            <Link
              href="/visit"
              className="rounded-full border-2 border-orange/50 bg-cream px-5 py-2.5 text-sm font-bold text-ink hover:bg-white"
            >
              Visit details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
