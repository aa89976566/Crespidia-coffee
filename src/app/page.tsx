import Link from "next/link";
import { gallery, neighbourNotes, fromTheShop, social } from "@/data/shop";
import { asset } from "@/lib/asset";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[86vh] overflow-hidden bg-cream-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/photos/ta-1.jpg")}
          alt="Inside Crespidia"
          className="hero-media absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2a2ecc] via-[#1d2a2e66] to-[#ffb42922]" />

        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6">
          <p className="animate-rise text-sm font-bold text-yellow">
            Crystal Palace Park end of Anerley
          </p>
          <h1 className="animate-rise-delay mt-2 font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Crespidia
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-lg text-lg text-cream sm:text-xl">
            Sunny tables, homemade cakes and a proper coffee. Pop in after the
            park or settle in for brunch.
          </p>
          <div className="animate-rise-delay-2 mt-7 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-yellow px-6 py-3 text-sm font-extrabold text-ink shadow-[0_5px_0_#00000022] transition hover:-translate-y-0.5 hover:bg-orange"
            >
              Menu
            </Link>
            <Link
              href="/visit"
              className="rounded-full bg-cream px-6 py-3 text-sm font-bold text-ink transition hover:bg-white"
            >
              Opening hours
            </Link>
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-cream/80 px-6 py-3 text-sm font-bold text-cream transition hover:bg-cream hover:text-ink"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="bg-yellow">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 text-sm font-extrabold text-ink sm:px-6">
          <p>About 4.9 on Google from neighbours</p>
          <p>Near Crystal Palace station · two shops on Anerley</p>
        </div>
      </section>

      {/* Product strips, closer to La Croissanterie category blocks */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl text-ink">On the menu</h2>
            <p className="mt-2 max-w-xl text-ink-soft">
              Favourites people name on Google. The cake tray changes, so check
              Instagram for today.
            </p>
          </div>
          <Link
            href="/menu"
            className="text-sm font-bold text-orange-hot underline underline-offset-4"
          >
            Full menu
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {fromTheShop.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(item.image)}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl text-ink">A peek inside</h2>
              <p className="mt-2 text-ink-soft">
                Guest photos and bakery mornings. More on Instagram.
              </p>
            </div>
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-ink hover:bg-yellow"
            >
              @crespidia
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {gallery.map((shot) => (
              <figure
                key={shot.src}
                className="relative aspect-square overflow-hidden bg-cream-deep"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(shot.src)}
                  alt={shot.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Review list patterned after Bloom Cafe Crystal Palace */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-4xl text-ink">
          Don&apos;t just take our word for it
        </h2>
        <p className="mt-3 text-ink-soft">
          Read what neighbours say about us on Google.
        </p>
        <p className="mt-4 text-sm font-extrabold text-ink">
          Crespidia · about 4.9 · Google reviews
        </p>

        <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
          {neighbourNotes.map((note) => (
            <blockquote key={note.text} className="py-6">
              <p className="text-base leading-relaxed text-ink">
                &ldquo;{note.text}&rdquo;
              </p>
              <footer className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
                <span className="font-bold text-ink">{note.name}</span>
                <span className="text-ink-soft">{note.meta}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <a
          href={social.mapsRoad}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-ink hover:bg-yellow"
        >
          More on Google Maps
        </a>
      </section>

      <section className="bg-orange">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-4xl text-ink">Weekends</h2>
            <p className="mt-4 text-lg text-ink/90">
              Brunch, parkrun stop offs and cakes to take home. For specials and
              opening notes, Instagram is the place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream hover:bg-ink-soft"
              >
                Instagram
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cream px-5 py-2.5 text-sm font-bold text-ink hover:bg-white"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/photos/ta-0.jpg")}
              alt="Crespidia plate"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="bg-ink px-6 py-12 text-cream sm:px-10">
          <h2 className="font-display text-4xl">Two shops on Anerley</h2>
          <p className="mt-3 max-w-2xl text-cream/85">
            Anerley Hill by the park. Anerley Road for coffee through the day
            and drinks later.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/visit"
              className="rounded-full bg-yellow px-6 py-3 text-sm font-extrabold text-ink hover:bg-orange"
            >
              Addresses and hours
            </Link>
            <Link
              href="/regulars"
              className="rounded-full bg-cream px-6 py-3 text-sm font-bold text-ink hover:bg-white"
            >
              Stamp card
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
