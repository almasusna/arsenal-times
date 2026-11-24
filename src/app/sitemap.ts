import type { MetadataRoute } from "next";
import { locales, localeToBcp47 } from "@/lib/dictionaries";

const SITE_URL = "https://arsenaltaimas.kz";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [localeToBcp47[l], `${SITE_URL}/${l}`]),
  );

  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "ru" ? 1 : 0.8,
    alternates: { languages },
  }));
}
