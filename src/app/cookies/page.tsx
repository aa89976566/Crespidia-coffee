import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookie policy for the Crespidia website.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-hot">
        Legal
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl text-ink">
        Cookies
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        This page explains how the Crespidia website uses cookies. Structure
        and clarity take cues from bakery brand practices such as{" "}
        <a
          href="https://www.lacroissanterie.fr/votre-espace-fidelite/presentation/"
          className="font-semibold text-orange-hot underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          La Croissanterie’s loyalty presentation
        </a>{" "}
        and their site footer cookie/legal pattern.
      </p>

      <div className="mt-10 space-y-8 text-ink-soft">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
            Essential cookies
          </h2>
          <p className="mt-2 leading-relaxed">
            Needed for basic site functions — for example remembering your
            cookie preference so we do not ask every time.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
            Optional cookies
          </h2>
          <p className="mt-2 leading-relaxed">
            Help us understand visits (which pages neighbours open most). These
            are only used if you choose “Accept all” on the banner.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
            Your choices
          </h2>
          <p className="mt-2 leading-relaxed">
            You can accept all cookies or keep essential only. Clear site data
            in your browser to reset the banner. For questions, contact us via
            the phone numbers on the{" "}
            <Link href="/visit" className="font-semibold text-orange-hot underline">
              Visit
            </Link>{" "}
            page.
          </p>
        </section>
      </div>
    </div>
  );
}
