import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regulars club",
  description:
    "How the Crespidia regulars club works — collect stamps, enjoy homemade treats.",
};

const steps = [
  {
    title: "Present your card",
    text: "Ask for a stamp card at the counter — paper cards work brilliantly for a neighbourhood bakery.",
  },
  {
    title: "Earn on every visit",
    text: "One stamp per coffee or cake purchase. Points of kindness never expire while you keep visiting.",
  },
  {
    title: "Claim your treat",
    text: "Six stamps unlock a free pastry, coffee upgrade, or a slice of the day’s homemade cake.",
  },
];

export default function RegularsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-hot">
        Fidélité · neighbourhood style
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl text-ink">
        Regulars club
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        How it works — inspired by the clear, friendly loyalty spaces of French
        bakery brands like{" "}
        <a
          href="https://www.lacroissanterie.fr/votre-espace-fidelite/presentation/"
          className="font-semibold text-orange-hot underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          La Croissanterie
        </a>
        , adapted for Crespidia’s family coffee bakery.
      </p>

      <div className="mt-10 overflow-hidden rounded-[2rem] bg-orange p-8 text-ink sm:p-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          Comment ça marche ?
        </h2>
        <p className="mt-3 max-w-xl text-ink/85">
          At the till, show your Crespidia stamp card, collect stamps with each
          visit, and enjoy homemade treats on us.
        </p>
        <Link
          href="/visit"
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream hover:bg-ink-soft"
        >
          Visit either shop to join
        </Link>
      </div>

      <ol className="mt-10 space-y-5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-5 rounded-3xl border border-ink/10 bg-white p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow font-[family-name:var(--font-display)] text-xl text-ink">
              {index + 1}
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-ink">{step.title}</h3>
              <p className="mt-1 text-ink-soft">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-sm text-ink-soft">
        Participating shops: Crespidia on Anerley Hill and Crespidia Coffee
        &amp; Bar on Anerley Road. Ask the team for today’s offer details.
      </p>
    </div>
  );
}
