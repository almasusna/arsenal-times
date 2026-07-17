"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/dictionaries";

type NavItem = { href: string; label: string };

export function MobileNav({
  items,
  phone,
  phoneHref,
  current,
}: {
  items: NavItem[];
  phone: string;
  phoneHref: string;
  current: Locale;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Меню"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center text-paper"
      >
        <span className="relative block h-3 w-6">
          <span className="absolute left-0 top-0 h-px w-6 bg-current" />
          <span className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-current" />
          <span className="absolute bottom-0 left-0 h-px w-6 bg-current" />
        </span>
      </button>

      {open &&
        createPortal(
          <div className="mobile-menu fixed inset-0 z-[70] flex flex-col bg-ink">
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-display text-[15px] font-medium uppercase tracking-[0.14em]">
              Arsenal Taimas
            </span>
            <button
              type="button"
              aria-label="Закрыть"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-paper"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 h-px w-5 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-5 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
            {items.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="mm-item group flex items-baseline gap-4 border-b border-hairline py-5"
                style={{ animationDelay: `${0.05 + i * 0.05}s` }}
              >
                <span className="font-display text-xs text-brass">
                  0{i + 1}
                </span>
                <span className="font-display text-3xl font-medium uppercase tracking-tight transition-colors group-hover:text-brass">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-5 border-t border-hairline px-6 py-6">
            <a
              href={phoneHref}
              className="font-display text-2xl font-medium tracking-wide text-paper transition-colors hover:text-brass"
            >
              {phone}
            </a>
            <div className="-ml-2">
              <LanguageSwitcher current={current} />
            </div>
          </div>
        </div>,
          document.body,
        )}
    </div>
  );
}
