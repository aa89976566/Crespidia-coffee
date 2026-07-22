import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stamp card",
  description: "Crespidia stamp card for regulars.",
};

export default function RegularsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
        Stamp card
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        If you come in a lot, grab a stamp card from the counter. It is the
        old fashioned kind.
      </p>

      <div className="mt-10 rounded-[2rem] bg-orange p-8 text-ink sm:p-10">
        <p className="text-lg leading-relaxed text-ink/90">
          Buy a coffee or a cake, get a stamp. After six stamps, pick a pastry,
          bump your coffee up, or take a slice of whatever is in the case that
          day.
        </p>
        <Link
          href="/visit"
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream hover:bg-ink-soft"
        >
          Pick one up next time you visit
        </Link>
      </div>

      <div className="mt-10 space-y-4 text-ink-soft">
        <p>
          Works at both shops: Anerley Hill and Anerley Road. If you are not
          sure what counts for a stamp, just ask whoever is on.
        </p>
        <p className="text-sm">
          Offers can change a bit depending on what we have baked. We will
          always sort something nice for you.
        </p>
      </div>
    </div>
  );
}
