import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookies on the Crespidia website.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
        Cookies
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        We use a few cookies so the site works. Optional ones only if you say
        yes.
      </p>

      <div className="mt-10 space-y-6 text-ink-soft">
        <p>
          <strong className="text-ink">Essential:</strong> things like
          remembering your cookie choice.
        </p>
        <p>
          <strong className="text-ink">Optional:</strong> help us see which
          pages get visits.
        </p>
        <p>
          Clear this site in your browser settings if you want the banner
          again. Or ring us using the numbers on{" "}
          <Link href="/visit" className="font-semibold text-orange-hot underline">
            Find us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
