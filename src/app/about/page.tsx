import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about Crespidia in Crystal Palace.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
            About Crespidia
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            We are a small independent coffee bakery in Crystal Palace. The
            tables do not match, the cups are china, and people seem to like
            hanging around.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Neighbours often mention the little things. Tea in a pot. Jam made
            by the owner&apos;s mum in Turkey. Cakes baked here, including
            gluten free ones when someone needs a birthday cake. It is London
            with a bit of home cooking mixed in.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-deep">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
            alt="Cafe tables and warm light"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mt-14 max-w-3xl space-y-6 text-ink-soft">
        <p>
          Most days you will find dog walkers from the park, people with
          laptops, and weekend brunch tables that fill up without much fuss.
          We sell bread and plants sometimes too, when we have them.
        </p>
        <p>
          Anerley Hill is the cosier cafe room. Anerley Road is coffee through
          the day and a quieter drink later on. Either way, say hello when you
          come in.
        </p>
      </div>

      <div className="mt-14 rounded-[2rem] bg-orange px-6 py-10 sm:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-ink sm:text-4xl">
          Come by when you are near the park
        </h2>
        <Link
          href="/visit"
          className="mt-5 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream hover:bg-ink-soft"
        >
          See where we are
        </Link>
      </div>
    </div>
  );
}
