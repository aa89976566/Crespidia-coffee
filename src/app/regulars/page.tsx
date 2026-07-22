import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stamps",
  description: "Crespidia stamp card.",
};

export default function RegularsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
        Stamp card
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        Pick one up at the counter. Coffee or cake gets a stamp. Six stamps and
        we give you a pastry or bump your drink up.
      </p>

      <div className="mt-10 rounded-[2rem] bg-orange p-8 text-ink">
        <p className="text-lg leading-relaxed">
          That is it really. Paper card, no app. Works in both shops.
        </p>
        <Link
          href="/visit"
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream hover:bg-ink-soft"
        >
          Come get one
        </Link>
      </div>
    </div>
  );
}
