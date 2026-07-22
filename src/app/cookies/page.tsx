import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies",
  description: "How cookies work on the Crespidia website.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
        Cookies
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        A short note on how this website uses cookies. Nothing complicated.
      </p>

      <div className="mt-10 space-y-8 text-ink-soft">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
            Essential ones
          </h2>
          <p className="mt-2 leading-relaxed">
            These keep basic things working, like remembering whether you
            already answered the cookie banner.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
            Optional ones
          </h2>
          <p className="mt-2 leading-relaxed">
            Only if you say yes. They help us see which pages people open most,
            so we know if the menu page is doing its job.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
            Changing your mind
          </h2>
          <p className="mt-2 leading-relaxed">
            Clear this site&apos;s data in your browser and the banner comes
            back. Questions? Call the numbers on the{" "}
            <Link href="/visit" className="font-semibold text-orange-hot underline">
              Find us
            </Link>{" "}
            page.
          </p>
        </section>
      </div>
    </div>
  );
}
