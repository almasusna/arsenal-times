import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/dictionaries";

export function LanguageSwitcher({ current }: { current: Locale }) {
  return (
    <nav aria-label="Language" className="flex items-center">
      {locales.map((locale) =>
        locale === current ? (
          <span
            key={locale}
            className="whitespace-nowrap px-1.5 py-1 text-[11px] font-semibold tracking-wide text-brass sm:px-2 sm:text-[12px]"
          >
            {localeNames[locale]}
          </span>
        ) : (
          <Link
            key={locale}
            href={`/${locale}`}
            className="whitespace-nowrap px-1.5 py-1 text-[11px] font-medium tracking-wide text-muted transition-colors hover:text-paper sm:px-2 sm:text-[12px]"
          >
            {localeNames[locale]}
          </Link>
        ),
      )}
    </nav>
  );
}
