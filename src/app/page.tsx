import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1800&q=80"
          alt="Pastries on a bakery counter"
          fill
          priority
          className="hero-media object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <p className="animate-rise text-sm font-semibold text-yellow">
            Crystal Palace and Anerley
          </p>
          <h1 className="animate-rise-delay mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Crespidia
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-lg text-cream/90 sm:text-xl">
            Pop in for coffee and homemade cake. We are just by the park, and
            it feels a bit like sitting in someone&apos;s front room.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-orange px-6 py-3 text-sm font-extrabold text-ink shadow-[0_5px_0_#00000033] transition hover:-translate-y-0.5 hover:bg-yellow"
            >
              What&apos;s on the menu
            </Link>
            <Link
              href="/visit"
              className="rounded-full border-2 border-cream/70 bg-transparent px-6 py-3 text-sm font-bold text-cream transition hover:bg-cream hover:text-ink"
            >
              When we&apos;re open
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-ink sm:text-5xl">
            Morning coffee, afternoon cake
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            We bake in house, pour a proper cup, and keep a table free for
            whoever wanders over after the park. Dogs are welcome. Plant milks
            too.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <article>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-cream-deep">
              <Image
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80"
                alt="Homemade cake"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-ink">
              The cake case
            </h3>
            <p className="mt-2 text-ink-soft">
              Brownies, florentines, polenta cake, big coconut macaroons.
              Whatever came out of the oven that morning usually disappears by
              mid afternoon.
            </p>
          </article>

          <article>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-cream-deep">
              <Image
                src="https://images.unsplash.com/photo-1504754524776-8f4b57a8d366?auto=format&fit=crop&w=900&q=80"
                alt="Breakfast plate"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-ink">
              Breakfast when you need it
            </h3>
            <p className="mt-2 text-ink-soft">
              Pancakes, eggs on sourdough, French toast with bacon. Good for a
              slow Saturday or a quick weekday stop before work.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-orange">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ink sm:text-5xl">
              Got a stamp card yet?
            </h2>
            <p className="mt-4 text-lg text-ink/85">
              Ask at the counter. Coffee or cake gets you a stamp. Six stamps
              and the next treat is on us.
            </p>
            <Link
              href="/regulars"
              className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream transition hover:bg-ink-soft"
            >
              How the stamp card works
            </Link>
          </div>
          <div className="mt-8 rounded-3xl bg-cream/90 p-6 text-ink md:mt-0">
            <p className="text-sm leading-relaxed text-ink-soft">
              No app, no fuss. Just a little card in your pocket for when you
              are back next week.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-cream sm:px-10">
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
            Two shops on Anerley
          </h2>
          <p className="mt-3 max-w-xl text-cream/80">
            One up on Anerley Hill near the park. One on Anerley Road for coffee
            in the day and a quiet drink later. Same friendly faces at both.
          </p>
          <Link
            href="/visit"
            className="mt-6 inline-flex rounded-full bg-yellow px-6 py-3 text-sm font-extrabold text-ink transition hover:bg-orange"
          >
            Addresses and hours
          </Link>
        </div>
      </section>
    </>
  );
}
