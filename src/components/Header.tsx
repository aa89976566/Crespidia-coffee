import Link from "next/link";

const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/visit", label: "Find us" },
  { href: "/about", label: "About" },
  { href: "/regulars", label: "Stamp card" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-ink sm:text-3xl">
            Crespidia
          </span>
          <span className="mt-0.5 text-xs text-ink-soft">
            Coffee, bakery and bar
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-soft transition hover:text-orange-hot"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/visit"
          className="rounded-full bg-orange px-4 py-2 text-sm font-bold text-ink shadow-[0_4px_0_#07272d22] transition hover:-translate-y-0.5 hover:bg-orange-hot"
        >
          Opening hours
        </Link>
      </div>

      <nav
        className="flex gap-4 overflow-x-auto border-t border-ink/5 px-4 py-2 md:hidden"
        aria-label="Mobile"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-semibold text-ink-soft"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
