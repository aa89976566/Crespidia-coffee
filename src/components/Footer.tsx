import Link from "next/link";
import { social } from "@/data/shop";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">
            Crespidia
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/80">
            Coffee and homemade cakes by Crystal Palace Park. Bright mornings,
            busy weekends, and a warm hello.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-yellow hover:text-orange"
            >
              Instagram
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-yellow hover:text-orange"
            >
              Facebook
            </a>
            <a
              href={social.mapsRoad}
              target="_blank"
              rel="noreferrer"
              className="text-yellow hover:text-orange"
            >
              Google Maps
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-yellow">Find us</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li>48 Anerley Hill, SE19 2AE</li>
            <li>51-53 Anerley Road, SE19 2AS</li>
            <li>
              <a
                className="underline decoration-orange/60 underline-offset-4 hover:text-yellow"
                href="tel:+442086594986"
              >
                020 8659 4986
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold text-yellow">Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:text-yellow" href="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow" href="/regulars">
                Stamps
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow" href="/cookies">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-4 py-4 text-center text-xs text-cream/55">
        © {new Date().getFullYear()} Crespidia, Crystal Palace
      </div>
    </footer>
  );
}
