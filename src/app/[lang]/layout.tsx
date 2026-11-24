import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "../globals.css";
import {
  locales,
  defaultLocale,
  localeToBcp47,
  getDictionary,
  contactInfo,
  type Locale,
} from "@/lib/dictionaries";

const SITE_URL = "https://arsenaltaimas.kz";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = getDictionary(locale);

  // hreflang alternates for every locale, plus x-default.
  const languages = Object.fromEntries([
    ...locales.map((l) => [localeToBcp47[l], `/${l}`]),
    ["x-default", `/${defaultLocale}`],
  ]);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: localeToBcp47[locale],
      url: `/${locale}`,
      title: t.meta.title,
      description: t.meta.description,
      images: ["/arsenal-times.png"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GunStore",
    name: "Arsenal Taimas",
    legalName: "ТОО «Арсенал Таймас»",
    url: `${SITE_URL}/${locale}`,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    image: `${SITE_URL}/arsenal-times.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Ыбырая Алтынсарина, 18",
      addressLocality: "Кокшетау",
      addressRegion: "Акмолинская область",
      postalCode: "020000",
      addressCountry: "KZ",
    },
    taxID: t.about.binValue,
  };

  return (
    <html
      lang={localeToBcp47[locale]}
      className={`${oswald.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen bg-ink text-paper">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
