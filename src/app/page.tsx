import Link from "next/link";
import { gallery, neighbourNotes, needToKnow, social } from "@/data/shop";
import { asset } from "@/lib/asset";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden bg-cream-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/photos/ig-counter.jpg")}
          alt="Crespidia coffee counter"
          className="hero-media absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2a2ef2] via-[#1d2a2e55] to-transparent" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6">
          <p className="animate-rise text-sm font-bold text-yellow">
            Crystal Palace · Anerley
          </p>
          <h1 className="animate-rise-delay mt-2 font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Crespidia
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-lg text-cream sm:text-xl">
            Coffee bakery and bar. Homemade cakes, brunch, and a seat after the
            park.
          </p>
          <div className="animate-rise-delay-2 mt-7 flex flex-wrap gap-3">
            <Link
              href="/visit"
              className="rounded-full bg-yellow px-6 py-3 text-sm font-extrabold text-ink shadow-[0_5px_0_#00000022] transition hover:-translate-y-0.5 hover:bg-orange"
            >
              Hours and map
            </Link>
            <Link
              href="/menu"
              className="rounded-full bg-cream px-6 py-3 text-sm font-bold text-ink transition hover:bg-white"
            >
              Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Scrapbook need-to-know: consumer priorities + bakery aesthetic */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="need-board-wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-hot">
              Crespidia
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              pop in if you{" "}
              <span className="need-underline">need</span>:
            </h2>
            <p className="mt-3 text-sm text-ink-soft sm:text-base">
              The quick answers people ask before they walk over.
            </p>
          </div>

          <div className="need-board">
            {needToKnow.map((card) => {
              const className = `need-card need-card-${card.tone}`;
              const style = { ["--tilt" as string]: card.tilt };
              const body = (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(card.image)}
                    alt={card.imageAlt}
                    className="need-photo"
                    loading="lazy"
                  />
                  <h3>{card.title}</h3>
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </>
              );

              if ("external" in card && card.external) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                    style={style}
                  >
                    {body}
                  </a>
                );
              }

              return (
                <Link
                  key={card.title}
                  href={card.href.replace(/\/$/, "") || "/"}
                  className={className}
                  style={style}
                >
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl text-ink">From the shop</h2>
              <p className="mt-2 max-w-xl text-ink-soft">
                Real Crespidia photos. Today&apos;s tray and weekend notes are
                on Instagram.
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
              <a
                key={shot.src}
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="relative aspect-square overflow-hidden bg-cream-deep"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(shot.src)}
                  alt={shot.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-4xl text-ink">Neighbours say</h2>
        <p className="mt-2 text-sm font-extrabold text-ink">
          About 4.9 on Google
        </p>

        <div className="mt-8 space-y-6">
          {neighbourNotes.map((note) => (
            <blockquote
              key={note.text}
              className="grid gap-4 border-t border-ink/15 pt-6 sm:grid-cols-[6.5rem_1fr] sm:gap-5"
            >
              <div className="relative aspect-square overflow-hidden bg-cream-deep sm:h-24 sm:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(note.image)}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-base leading-relaxed text-ink">
                  &ldquo;{note.text}&rdquo;
                </p>
                <footer className="mt-3 text-sm">
                  <span className="font-bold text-ink">{note.name}</span>
                  <span className="text-ink-soft"> · {note.meta}</span>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>

        <a
          href={social.mapsRoad}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-ink hover:bg-yellow"
        >
          Google Maps
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid overflow-hidden rounded-[1.5rem] bg-ink md:grid-cols-2">
          <div className="px-6 py-12 text-cream sm:px-10">
            <h2 className="font-display text-4xl">Two shops on Anerley</h2>
            <p className="mt-3 max-w-md text-cream/85">
              Hill for the park side bakery. Road for coffee through the day and
              drinks later.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/visit"
                className="rounded-full bg-yellow px-6 py-3 text-sm font-extrabold text-ink hover:bg-orange"
              >
                Addresses and hours
              </Link>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cream px-6 py-3 text-sm font-bold text-ink hover:bg-white"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="relative min-h-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/photos/ig-latte.jpg")}
              alt="Latte at Crespidia"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
