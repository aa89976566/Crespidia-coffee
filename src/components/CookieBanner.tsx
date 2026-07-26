"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "crespidia-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    window.localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-ink/10 bg-white p-4 shadow-xl sm:inset-x-auto sm:right-4 sm:bottom-4"
    >
      <p className="font-display text-lg text-ink">
        Cookies
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        We use some cookies to keep the site working. More info on our{" "}
        <Link href="/cookies" className="font-semibold text-orange-hot underline">
          cookies page
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-orange px-4 py-2 text-sm font-bold text-ink hover:bg-orange-hot"
        >
          OK
        </button>
        <button
          type="button"
          onClick={decline}
          className="rounded-full border border-ink/20 bg-cream px-4 py-2 text-sm font-semibold text-ink hover:bg-cream-deep"
        >
          Essentials only
        </button>
      </div>
    </div>
  );
}
