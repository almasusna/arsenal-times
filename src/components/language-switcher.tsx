import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/dictionaries";

export function LanguageSwitcher({ current }: { current: Locale }) {
  return (
    <nav aria-label="Language" className="flex items-center">
      {locales.map((locale) =>
        locale === current ? (
          <span
            key={locale}
            className="whitespace-nowrap px-2 py-1 text-[12px] font-semibold tracking-wide text-brass"
          >
            {localeNames[locale]}
          </span>
        ) : (
          <Link
            key={locale}
            href={`/${locale}`}
            className="whitespace-nowrap px-2 py-1 text-[12px] font-medium tracking-wide text-muted transition-colors hover:text-paper"
          >
            {localeNames[locale]}
          </Link>
        ),
      )}
    </nav>
  );
}
