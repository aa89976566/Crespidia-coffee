import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Crespidia in Crystal Palace.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
        About us
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Crespidia is a small coffee bakery in Crystal Palace. We bake, we make
        coffee, and we try to make the place feel easy to be in.
      </p>
      <p className="mt-4 leading-relaxed text-ink-soft">
        A lot of what we do comes from home. Family recipes, jam from Turkey,
        cakes made in our kitchen rather than bought in. If you need gluten
        free, ask. We often can help.
      </p>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[2rem] bg-cream-deep">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
          alt="Inside the cafe"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <p className="mt-8 leading-relaxed text-ink-soft">
        You will see dog walkers, people with laptops, and weekend tables full
        of breakfast. We also put out bread, plants and bits and pieces when we
        have them.
      </p>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Come say hello next time you are nearby.
      </p>

      <Link
        href="/visit"
        className="mt-8 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-bold text-ink hover:bg-yellow"
      >
        Opening hours and addresses
      </Link>
    </div>
  );
}
