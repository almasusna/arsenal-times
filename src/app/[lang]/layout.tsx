import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { locales } from "@/lib/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Арсенал Таймас — Оружие и патроны в Кокшетау",
  description:
    "ТОО «Арсенал Таймас» — разработка, производство, ремонт, торговля, коллекционирование гражданского и служебного оружия и патронов к нему. Кокшетау, Казахстан.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const htmlLang = lang === "kz" ? "kk" : lang;

  return (
    <html lang={htmlLang} className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
