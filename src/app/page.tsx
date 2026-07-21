import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    title: "Homemade cakes",
    text: "Florentines, brownies, polenta cake, and the day’s tray bakes — baked here, not bought in.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Breakfast & brunch",
    text: "Pancakes, eggs on sourdough, French toast, and strong coffee for park mornings.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4b57a8d366?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Coffee & bar",
    text: "Flat whites by day, a quiet drink by evening at our Anerley Road spot.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
];

const steps = [
  {
    n: "01",
    title: "Pop in",
    text: "Say hello — we’re two minutes from Crystal Palace Park.",
  },
  {
    n: "02",
    title: "Collect stamps",
    text: "Ask for a stamp with your coffee or cake. Six stamps = a treat on us.",
  },
  {
    n: "03",
    title: "Enjoy the perk",
    text: "Free pastry, coffee upgrade, or a slice of the day’s cake.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1800&q=80"
          alt="Fresh pastries and warm bakery light"
          fill
          priority
          className="hero-media object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <p className="animate-rise text-xs font-bold uppercase tracking-[0.25em] text-yellow">
            Crystal Palace · Anerley
          </p>
          <h1 className="animate-rise-delay mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Crespidia
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-lg text-cream/90 sm:text-xl">
            Coffee, homemade bakery, and a neighbourhood welcome — like
            stepping into a friend’s front room by the park.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-orange px-6 py-3 text-sm font-extrabold text-ink shadow-[0_5px_0_#00000033] transition hover:-translate-y-0.5 hover:bg-yellow"
            >
              See the menu
            </Link>
            <Link
              href="/visit"
              className="rounded-full border-2 border-cream/70 bg-transparent px-6 py-3 text-sm font-bold text-cream transition hover:bg-cream hover:text-ink"
            >
              Opening hours
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-hot">
            What we do
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-ink sm:text-5xl">
            A little coffee bakery with a big heart
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Independent, family-run, and rooted in Crystal Palace. Come for
            breakfast, stay for cake, bring the dog after the park.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-deep">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-ink-soft">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-orange">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/70">
              Regulars club
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-ink sm:text-5xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-ink/85">
              Inspired by the simple joy of a neighbourhood loyalty card —
              collect stamps, earn a treat, keep coming back.
            </p>
            <Link
              href="/regulars"
              className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream transition hover:bg-ink-soft"
            >
              Join the regulars
            </Link>
          </div>

          <ol className="space-y-4">
            {steps.map((step) => (
              <li
                key={step.n}
                className="flex gap-4 rounded-2xl bg-cream/90 p-4 shadow-[0_4px_0_#07272d18]"
              >
                <span className="font-[family-name:var(--font-display)] text-2xl text-orange-hot">
                  {step.n}
                </span>
                <div>
                  <p className="font-extrabold text-ink">{step.title}</p>
                  <p className="text-sm text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-cream sm:px-10 md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
              Come say hello
            </h2>
            <p className="mt-3 text-cream/80">
              Two spots on Anerley — coffee bakery by the hill, coffee & bar a
              short stroll away. Dog-friendly, gluten-free options, plant milks
              welcome.
            </p>
          </div>
          <Link
            href="/visit"
            className="mt-6 inline-flex rounded-full bg-yellow px-6 py-3 text-sm font-extrabold text-ink transition hover:bg-orange md:mt-0"
          >
            Addresses & hours
          </Link>
        </div>
      </section>
    </>
  );
}
