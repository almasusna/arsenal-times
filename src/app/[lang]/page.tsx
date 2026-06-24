import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { LanguageSwitcher } from "@/components/language-switcher";
import Image from "next/image";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang as Locale);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/arsenal-times.png"
              alt="Арсенал Таймас"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-white font-bold text-lg tracking-wide">
              Арсенал Таймас
            </span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-[#b8c5d6] hover:text-white transition-colors text-sm"
              >
                {t.nav.about}
              </a>
              <a
                href="#services"
                className="text-[#b8c5d6] hover:text-white transition-colors text-sm"
              >
                {t.nav.services}
              </a>
              <a
                href="#contacts"
                className="text-[#b8c5d6] hover:text-white transition-colors text-sm"
              >
                {t.nav.contacts}
              </a>
            </nav>
            <LanguageSwitcher currentLang={lang as Locale} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {t.hero.title1}
            <br />
            <span className="text-[#e94560]">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-[#b8c5d6] max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <a
            href="#contacts"
            className="inline-block bg-[#e94560] text-white px-10 py-4 rounded font-semibold text-lg transition-all hover:bg-[#d63851] hover:-translate-y-0.5"
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-5 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-10">
            {t.about.heading}
          </h2>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed mb-12">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-6">
              {t.about.requisites}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">{t.about.bin}</span>
                <span className="ml-2 text-[#1a1a2e] font-medium">
                  221140025076
                </span>
              </div>
              <div>
                <span className="text-gray-500">{t.about.director}</span>
                <span className="ml-2 text-[#1a1a2e] font-medium">
                  {t.about.directorName}
                </span>
              </div>
              <div className="md:col-span-2">
                <span className="text-gray-500">{t.about.address}</span>
                <span className="ml-2 text-[#1a1a2e] font-medium">
                  {t.about.addressValue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-12">
            {t.services.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-base font-semibold text-[#1a1a2e] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-5 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">{t.contacts.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                {t.contacts.phone}
              </p>
              <a
                href="tel:+77075504282"
                className="text-[#e94560] hover:underline text-lg"
              >
                8 (707) 550-42-82
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                {t.contacts.email}
              </p>
              <a
                href="mailto:Statusman1304@gmail.com"
                className="text-[#e94560] hover:underline text-lg"
              >
                Statusman1304@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                {t.contacts.addressLabel}
              </p>
              <p className="text-[#b8c5d6]">{t.contacts.addressValue}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                {t.contacts.director}
              </p>
              <p className="text-[#b8c5d6]">{t.contacts.directorName}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                {t.contacts.deputy}
              </p>
              <p className="text-[#b8c5d6]">{t.contacts.deputyName}</p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.12960052553!2d69.40586083562997!3d53.285788708890244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424c94f0f51485bf%3A0x5cd5dcbec7fcfb2c!2sUl.mira%2018%2C%20Kokshetau%20020000!5e0!3m2!1sen!2skz!4v1782107985316!5m2!1sen!2skz"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Арсенал Таймас"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f1a] text-gray-500 py-10 px-5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>{t.footer.rights}</p>
          <p>{t.footer.city}</p>
        </div>
      </footer>
    </>
  );
}
