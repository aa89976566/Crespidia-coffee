import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1800&q=80"
          alt="Fresh bread and pastries"
          fill
          priority
          className="hero-media object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <p className="animate-rise text-sm font-semibold text-yellow">
            Near Crystal Palace Park
          </p>
          <h1 className="animate-rise-delay mt-3 font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Crespidia
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-lg text-cream/90 sm:text-xl">
            Coffee and homemade cakes on Anerley. Come in, take a seat, stay as
            long as you like.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-orange px-6 py-3 text-sm font-extrabold text-ink shadow-[0_5px_0_#00000033] transition hover:-translate-y-0.5 hover:bg-yellow"
            >
              Menu
            </Link>
            <Link
              href="/visit"
              className="rounded-full border-2 border-cream/70 px-6 py-3 text-sm font-bold text-cream transition hover:bg-cream hover:text-ink"
            >
              Opening hours
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-[family-name:var(--font-display)] text-4xl text-ink">
          Hello from the kitchen
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          We bake our cakes here and make breakfast when you order. If you have
          been walking the dog in the park, this is a good place to warm up with
          a coffee.
        </p>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Oat milk is fine. Gluten free options too, if you ask. We are not
          fancy. Just a local spot that likes looking after people.
        </p>
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div className="relative min-h-64 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80"
              alt="Cake"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-ink">
              Today&apos;s cakes
            </h2>
            <p className="mt-3 text-ink-soft">
              Usually brownies, something citrusy, and whatever else we fancied
              baking. Best to come early if you have your eye on a particular
              slice.
            </p>
            <Link
              href="/menu"
              className="mt-5 inline-flex w-fit rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-ink hover:bg-yellow"
            >
              See the full menu
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-[family-name:var(--font-display)] text-4xl text-ink">
          Stamp card
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Ask for one at the till. Six stamps and we treat you to a pastry or a
          coffee upgrade. Old school paper card. Nothing to download.
        </p>
        <Link
          href="/regulars"
          className="mt-5 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream hover:bg-ink-soft"
        >
          More about stamps
        </Link>
      </section>

      <section className="bg-orange">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-ink">
            Two doors on Anerley
          </h2>
          <p className="mt-4 text-lg text-ink/85">
            One by the park on Anerley Hill. One further along on Anerley Road
            where we stay open a bit later. Same cakes, same coffee, same lot of
            us.
          </p>
          <Link
            href="/visit"
            className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream hover:bg-ink-soft"
          >
            How to find us
          </Link>
        </div>
      </section>
    </>
  );
}
