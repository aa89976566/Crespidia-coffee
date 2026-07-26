import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stamps",
  description: "Crespidia stamp card.",
};

export default function RegularsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-5xl text-ink">Stamp card</h1>
      <p className="mt-4 text-lg text-ink-soft">
        Ask at the counter for a paper card. Coffee or cake gets a stamp. Six
        stamps and we treat you to a pastry or a bigger drink.
      </p>

      <ol className="mt-10 space-y-6 border-y border-ink/15 py-8">
        <li>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-hot">
            1
          </p>
          <p className="mt-1 text-lg font-bold text-ink">Pick up a card</p>
          <p className="mt-1 text-ink-soft">Works in both Anerley shops.</p>
        </li>
        <li>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-hot">
            2
          </p>
          <p className="mt-1 text-lg font-bold text-ink">Collect stamps</p>
          <p className="mt-1 text-ink-soft">One stamp for coffee or cake.</p>
        </li>
        <li>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-hot">
            3
          </p>
          <p className="mt-1 text-lg font-bold text-ink">Sixth stamp treat</p>
          <p className="mt-1 text-ink-soft">
            A pastry on us, or we bump your drink up.
          </p>
        </li>
      </ol>

      <Link
        href="/visit"
        className="mt-8 inline-flex rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-ink hover:bg-yellow"
      >
        Come get one
      </Link>
    </div>
  );
}
