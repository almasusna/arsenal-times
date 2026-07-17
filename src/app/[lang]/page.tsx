import Image from "next/image";
import {
  getDictionary,
  contactInfo,
  type Locale,
} from "@/lib/dictionaries";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "@/components/mobile-nav";

const mapQuery = "Ыбырая Алтынсарина 18, Кокшетау, Казахстан";
const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  mapQuery,
)}&z=15&output=embed`;
const mapDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  mapQuery,
)}`;

import heroImg from "../../../public/images/hero.jpg";
import aboutImg from "../../../public/images/about.jpg";
import huntingImg from "../../../public/images/hunting.jpg";
import sportImg from "../../../public/images/sport.jpg";
import ammoImg from "../../../public/images/ammo.jpg";
import opticsImg from "../../../public/images/optics.jpg";
import serviceImg from "../../../public/images/service.jpg";
import consultImg from "../../../public/images/consult.jpg";
import hunterDogImg from "../../../public/images/hunter-dog.jpg";
import clayImg from "../../../public/images/clay.jpg";

const directionImages = [
  huntingImg,
  sportImg,
  ammoImg,
  opticsImg,
  serviceImg,
  consultImg,
];

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = getDictionary(locale);

  return (
    <>
      {/* Thin brass scroll-progress bar */}
      <div className="scroll-progress" aria-hidden />

      {/* Topbar */}
      <header
        id="site-header"
        className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-ink/80 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/arsenal-times.png"
              alt="Arsenal Taimas"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-display whitespace-nowrap text-[15px] font-medium uppercase tracking-[0.14em] max-[420px]:hidden">
              Arsenal Taimas
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-[13px] text-paper/75 md:flex">
            <a href="#about" className="transition-colors hover:text-brass">
              {t.nav.about}
            </a>
            <a
              href="#directions"
              className="transition-colors hover:text-brass"
            >
              {t.nav.directions}
            </a>
            <a href="#contacts" className="transition-colors hover:text-brass">
              {t.nav.contacts}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={contactInfo.phoneHref}
              className="hidden text-[13px] font-medium text-paper transition-colors hover:text-brass lg:block"
            >
              {contactInfo.phone}
            </a>
            <div className="hidden md:block">
              <LanguageSwitcher current={locale} />
            </div>
            <MobileNav
              current={locale}
              phone={contactInfo.phone}
              phoneHref={contactInfo.phoneHref}
              items={[
                { href: "#about", label: t.nav.about },
                { href: "#directions", label: t.nav.directions },
                { href: "#process", label: t.nav.process },
                { href: "#contacts", label: t.nav.contacts },
              ]}
            />
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="hero-parallax absolute inset-x-0 -top-[6%] h-[112%]">
              <Image
                src={heroImg}
                alt=""
                fill
                priority
                placeholder="blur"
                sizes="100vw"
                className="kenburns photo-tone object-cover object-[70%_center]"
              />
            </div>
          </div>
          {/* Cinematic scrims: image reads on the right, text stays legible left */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/35 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/85 to-transparent" />
          {/* Hero-local vignette (scrolls away, no per-frame repaint cost) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(130% 100% at 50% 42%, transparent 58%, rgba(0,0,0,0.34) 100%)",
            }}
          />
          <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-24 pt-32 md:px-8 md:pb-32">
            <div className="rise rise-d1 mb-6 flex items-center gap-4">
              <span className="hidden h-px w-12 bg-brass sm:block" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-brass">
                {t.hero.kicker}
              </p>
            </div>
            <h1 className="font-display max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
              <span className="rise rise-d2 block">{t.hero.title1}</span>
              <span className="rise rise-d3 block">{t.hero.title2}</span>
            </h1>
            <p className="rise rise-d4 mt-6 max-w-md text-base leading-relaxed text-paper/75 md:text-lg">
              {t.hero.subtitle}
            </p>
            <a
              href="#contacts"
              className="rise rise-d5 group mt-10 inline-flex items-center gap-3 bg-brass px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:bg-brass-bright hover:gap-4 active:translate-y-px"
            >
              {t.hero.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-hairline">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-y-10 px-4 py-16 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-y-0">
            {t.trust.map((item, i) => (
              <div
                key={i}
                className="reveal group border-l border-hairline pl-6 lg:pr-8"
              >
                <div className="hairline-x mb-3 h-px w-8 bg-brass transition-[width] duration-500 group-hover:w-14" />
                <h3 className="font-display text-lg font-medium uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16">
          <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal lg:col-span-6">
                <h2 className="font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
                  {t.about.heading}
                </h2>
                <div className="hairline-x mt-6 h-px w-16 bg-brass" />
                <p className="mt-8 text-lg leading-relaxed text-paper/85">
                  {t.about.p1}
                </p>
                <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted">
                  {t.about.p2}
                </p>
              </div>
              <div className="reveal group relative min-h-[320px] overflow-hidden lg:col-span-6">
                <Image
                  src={aboutImg}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="photo-tone object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-brass/70" />
                <span className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-brass/70" />
              </div>
            </div>

            {/* Requisites */}
            <div className="reveal mt-20 border-t border-hairline pt-10">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.24em] text-brass">
                {t.about.requisites}
              </h3>
              <dl className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="text-[13px] text-muted">{t.about.bin}</dt>
                  <dd className="mt-1 font-medium">{t.about.binValue}</dd>
                </div>
                <div>
                  <dt className="text-[13px] text-muted">{t.about.director}</dt>
                  <dd className="mt-1 font-medium">{t.about.directorName}</dd>
                </div>
                <div>
                  <dt className="text-[13px] text-muted">{t.about.deputy}</dt>
                  <dd className="mt-1 font-medium">{t.about.deputyName}</dd>
                </div>
                <div>
                  <dt className="text-[13px] text-muted">{t.about.address}</dt>
                  <dd className="mt-1 font-medium">{t.about.addressValue}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Sourcing statement */}
        <section className="border-y border-hairline">
          <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-28">
            <div className="reveal max-w-4xl">
              <div className="hairline-x mb-8 h-px w-16 bg-brass" />
              <h2 className="font-display text-3xl font-medium uppercase leading-[1.05] tracking-tight md:text-5xl">
                {t.sourcing.heading}
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/75 md:text-xl">
                {t.sourcing.body}
              </p>
            </div>
          </div>
        </section>

        {/* Directions */}
        <section id="directions" className="scroll-mt-16 bg-ink-2">
          <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <h2 className="font-display reveal text-4xl font-semibold uppercase tracking-tight md:text-5xl">
              {t.directions.heading}
            </h2>
            <div className="hairline-x mt-6 h-px w-16 bg-brass" />
            <p className="reveal mt-6 text-base text-muted">
              {t.directions.sub}
            </p>
            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
              {t.directions.items.map((item, i) => (
                <article
                  key={i}
                  className={`reveal group relative overflow-hidden ${
                    i === 0
                      ? "aspect-[2/1] md:col-span-2"
                      : i === 5
                        ? "aspect-[2/1] md:col-span-3 md:aspect-[3/1]"
                        : "aspect-square md:aspect-[1/1.05]"
                  }`}
                >
                  <Image
                    src={directionImages[i]}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="photo-tone object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="mb-3 h-px w-0 bg-brass transition-[width] duration-500 group-hover:w-10" />
                    <h3 className="font-display text-2xl font-medium uppercase tracking-wide md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process (signature scroll-drawn timeline) */}
        <section id="process" className="scroll-mt-16">
          <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <h2 className="font-display reveal text-4xl font-semibold uppercase tracking-tight md:text-5xl">
              {t.process.heading}
            </h2>
            <div className="hairline-x mt-6 h-px w-16 bg-brass" />
            <p className="reveal mt-6 text-base text-muted">{t.process.sub}</p>

            <ol className="process-track relative mt-16 max-w-3xl">
              <span
                className="process-line absolute bottom-3 left-[19px] top-3 w-px bg-brass/50"
                aria-hidden
              />
              {t.process.steps.map((step, i) => (
                <li
                  key={i}
                  className="reveal relative grid grid-cols-[40px_1fr] gap-5 pb-12 last:pb-0 md:gap-8"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-brass/50 bg-ink font-display text-sm text-brass">
                    0{i + 1}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-2xl font-medium uppercase tracking-wide md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Audience */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {(
            [
              [t.audience.hunters, hunterDogImg],
              [t.audience.shooters, clayImg],
            ] as const
          ).map(([panel, img], i) => (
            <div
              key={i}
              className="group relative flex min-h-[70dvh] items-end overflow-hidden"
            >
              <Image
                src={img}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="photo-tone object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/5 transition-opacity duration-500 group-hover:from-ink/90" />
              <div className="relative p-8 md:p-12">
                <div className="mb-4 h-px w-10 bg-brass transition-[width] duration-500 group-hover:w-16" />
                <h3 className="font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
                  {panel.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-paper/75">
                  {panel.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Location */}
        <section id="location" className="scroll-mt-16 bg-ink-2">
          <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal lg:col-span-5">
                <h2 className="font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
                  {t.location.heading}
                </h2>
                <div className="hairline-x mt-6 h-px w-16 bg-brass" />
                <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                  {t.location.sub}
                </p>
                <p className="mt-8 max-w-sm font-display text-xl leading-relaxed">
                  {t.about.addressValue}
                </p>
                <a
                  href={mapDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 border border-brass px-8 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-brass transition-colors hover:bg-brass hover:text-ink"
                >
                  {t.location.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
              <div className="reveal relative min-h-[340px] overflow-hidden border border-hairline lg:col-span-7 lg:min-h-[440px]">
                <iframe
                  title={t.location.heading}
                  src={mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{
                    border: 0,
                    filter: "grayscale(0.5) contrast(1.05) brightness(0.85)",
                  }}
                />
                <span className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l border-t border-brass/70" />
                <span className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b border-r border-brass/70" />
              </div>
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section id="contacts" className="scroll-mt-16 border-t border-hairline">
          <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
              <div className="reveal lg:col-span-5">
                <h2 className="font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl">
                  {t.contacts.heading}
                </h2>
                <div className="hairline-x mt-6 h-px w-16 bg-brass" />
                <p className="mt-6 max-w-xs text-base leading-relaxed text-muted">
                  {t.contacts.sub}
                </p>
              </div>
              <div className="reveal lg:col-span-7">
                <dl className="divide-y divide-hairline">
                  <div className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-3">
                    <dt className="text-[13px] uppercase tracking-wider text-muted">
                      {t.contacts.phone}
                    </dt>
                    <dd className="sm:col-span-2">
                      <a
                        href={contactInfo.phoneHref}
                        className="font-display text-2xl font-medium tracking-wide transition-colors hover:text-brass md:text-3xl"
                      >
                        {contactInfo.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-3">
                    <dt className="text-[13px] uppercase tracking-wider text-muted">
                      {t.contacts.email}
                    </dt>
                    <dd className="sm:col-span-2">
                      <a
                        href={contactInfo.emailHref}
                        className="text-lg font-medium transition-colors hover:text-brass"
                      >
                        {contactInfo.email}
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-3">
                    <dt className="text-[13px] uppercase tracking-wider text-muted">
                      {t.contacts.address}
                    </dt>
                    <dd className="text-base leading-relaxed sm:col-span-2">
                      {t.contacts.addressValue}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-3">
                    <dt className="text-[13px] uppercase tracking-wider text-muted">
                      {t.contacts.director}
                    </dt>
                    <dd className="text-base sm:col-span-2">
                      {t.contacts.directorName}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-3">
                    <dt className="text-[13px] uppercase tracking-wider text-muted">
                      {t.contacts.deputy}
                    </dt>
                    <dd className="text-base sm:col-span-2">
                      {t.contacts.deputyName}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-hairline bg-ink-2">
          <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/arsenal-times.png"
                  alt="Arsenal Taimas"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="font-display text-sm font-medium uppercase tracking-[0.14em]">
                  Arsenal Taimas
                </span>
              </div>
              <p className="max-w-xl text-[13px] leading-relaxed text-muted">
                {t.footer.legal}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 text-[12px] text-muted md:flex-row md:justify-between">
              <span>{t.footer.rights}</span>
              <span>{t.footer.city}</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
