import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our story",
  description: "The story behind Crespidia — family hospitality in Crystal Palace.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-hot">
            Our story
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl text-ink">
            Homemade, from our family to yours
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Crespidia is an independent coffee bakery in Crystal Palace —
            reclaimed furniture, china cups, and the kind of welcome that feels
            like someone’s front room.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Guests talk about the little touches: tea in a pot, bone-handled
            knives, owner’s mother’s white cherry jam from Turkey, and cakes
            baked with care (including gluten-free celebration cakes). We blend
            neighbourhood London warmth with a touch of Turkish hospitality.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-deep">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
            alt="Warm cafe interior with wood tables"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Homemade bakery",
            text: "Cakes, pastries, and breads made here — the pastry case is half the reason people return.",
          },
          {
            title: "Park neighbours",
            text: "Dog walkers, laptop mornings, weekend brunch crowds — we’re part of daily Crystal Palace life.",
          },
          {
            title: "Two rooms, one heart",
            text: "Anerley Hill for the classic cafe; Anerley Road for coffee by day and a gentle bar by night.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-6 shadow-[0_6px_0_#ffa30044]"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] bg-orange px-6 py-10 text-center sm:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-ink sm:text-4xl">
          Come for coffee. Stay for cake.
        </h2>
        <Link
          href="/visit"
          className="mt-5 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream hover:bg-ink-soft"
        >
          Plan your visit
        </Link>
      </div>
    </div>
  );
}
