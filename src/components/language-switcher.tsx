import Link from "next/link";
import { type Locale } from "@/lib/dictionaries";

const labels: Record<Locale, string> = {
  ru: "Рус",
  kz: "Қаз",
  en: "Eng",
};

export function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  return (
    <div className="flex items-center gap-1 text-sm">
      {(Object.entries(labels) as [Locale, string][]).map(([locale, label]) =>
        locale === currentLang ? (
          <span key={locale} className="text-white font-semibold px-2 py-1">
            {label}
          </span>
        ) : (
          <Link
            key={locale}
            href={`/${locale}`}
            className="text-[#b8c5d6] hover:text-white transition-colors px-2 py-1"
          >
            {label}
          </Link>
        ),
      )}
    </div>
  );
}
