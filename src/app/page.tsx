import Link from "next/link";
import { gallery, neighbourNotes, goodToKnow, social } from "@/data/shop";
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
          <p>Dogs welcome, cakes baked here, two shops on Anerley</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl text-ink">
            Come for cake. Stay for a chat.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Francesca and the family keep the room bright and busy. Guests come
            for brunch, lemon cake, Victoria sponge, strong coffee, Turkish jam
            on the table, and a seat that does not rush you out.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goodToKnow.map((item) => (
            <p
              key={item}
              className="rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-ink"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl text-ink">A peek inside</h2>
              <p className="mt-2 text-ink-soft">
                Photos from guest visits and sunny bakery mornings. More on our
                Instagram.
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

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((shot) => (
              <figure
                key={shot.src}
                className="relative aspect-square overflow-hidden rounded-2xl bg-cream-deep"
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

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-4xl text-ink">What neighbours say</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {neighbourNotes.map((note) => (
            <blockquote
              key={note.text}
              className="rounded-3xl border border-orange/40 bg-white p-5 shadow-[0_6px_0_#ffb42955]"
            >
              <p className="text-base leading-relaxed text-ink">
                &ldquo;{note.text}&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-orange-hot">
                {note.about}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-orange">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-4xl text-ink">
              Weekends get lively
            </h2>
            <p className="mt-4 text-lg text-ink/90">
              Saturdays and Sundays fill up with brunch, parkrun stop offs and
              takeaway cakes. We do not post a big event calendar here. For
              specials, cake orders and last minute opening notes, Instagram is
              the best place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream hover:bg-ink-soft"
              >
                Follow on Instagram
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
          <div className="relative min-h-72 overflow-hidden rounded-[2rem]">
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
        <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-cream sm:px-10">
          <h2 className="font-display text-4xl">Two bright spots on Anerley</h2>
          <p className="mt-3 max-w-2xl text-cream/85">
            Anerley Hill for the park side cafe. Anerley Road for coffee through
            the day and drinks later. Same baking, same welcome.
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
