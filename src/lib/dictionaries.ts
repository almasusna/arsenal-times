export type Locale = "ru" | "kz" | "en";

export const locales: Locale[] = ["ru", "kz", "en"];
export const defaultLocale: Locale = "ru";

const dictionaries = {
  ru: {
    nav: {
      about: "О компании",
      services: "Услуги",
      contacts: "Контакты",
    },
    hero: {
      title1: "Надёжный партнёр в сфере",
      title2: "гражданского и служебного оружия",
      subtitle:
        "Разработка, производство, ремонт и торговля — полный цикл работ для обеспечения качества и надёжности.",
      cta: "Связаться с нами",
    },
    about: {
      heading: "О компании",
      p1: "ТОО «Арсенал Таймас» — предприятие, специализирующееся на полном цикле работ в сфере гражданского и служебного оружия: от разработки и производства до ремонта и торговли.",
      p2: "Компания осуществляет деятельность на территории Республики Казахстан и является надёжным партнёром в обеспечении качественного обслуживания.",
      requisites: "Реквизиты",
      bin: "БИН:",
      director: "Директор:",
      directorName: "Жумалин Азамат Бакытович",
      address: "Адрес:",
      addressValue:
        "020000, Акмолинская область, г. Кокшетау, ул. Ыбырая Алтынсарина, дом 18",
    },
    services: {
      heading: "Направления деятельности",
      items: [
        {
          title: "Разработка и производство",
          description:
            "Разработка и производство гражданского и служебного оружия и патронов к нему.",
        },
        {
          title: "Ремонт оружия",
          description:
            "Профессиональный ремонт и техническое обслуживание оружия всех видов.",
        },
        {
          title: "Торговля",
          description:
            "Продажа гражданского и служебного оружия и патронов к нему.",
        },
        {
          title: "Коллекционирование",
          description:
            "Коллекционирование и экспонирование оружия в соответствии с законодательством.",
        },
        {
          title: "Сервисное обслуживание",
          description:
            "Полное сервисное обслуживание, хранение и консультации.",
        },
        {
          title: "Комплексные решения",
          description: "Полный цикл — от подбора до обслуживания и ремонта.",
        },
      ],
    },
    contacts: {
      heading: "Контакты",
      phone: "ТЕЛЕФОН",
      email: "EMAIL",
      addressLabel: "АДРЕС",
      addressValue:
        "020000, Акмолинская область, г. Кокшетау, ул. Ыбырая Алтынсарина, дом 18",
      director: "ДИРЕКТОР",
      directorName: "Жумалин Азамат Бакытович",
      deputy: "ЗАМ. ДИРЕКТОРА",
      deputyName: "Исмагулов Муратбек Муратбекович",
    },
    footer: {
      rights: "© 2026 ТОО «Арсенал Таймас». Все права защищены.",
      city: "г. Кокшетау, Республика Казахстан",
    },
  },
  kz: {
    nav: {
      about: "Компания туралы",
      services: "Қызметтер",
      contacts: "Байланыс",
    },
    hero: {
      title1: "Азаматтық және қызметтік қару",
      title2: "саласындағы сенімді серіктес",
      subtitle:
        "Әзірлеу, өндіру, жөндеу және сауда — сапа мен сенімділікті қамтамасыз ету үшін жұмыстардың толық циклі.",
      cta: "Бізбен байланысу",
    },
    about: {
      heading: "Компания туралы",
      p1: "«Арсенал Таймас» ЖШС — азаматтық және қызметтік қару саласында жұмыстардың толық циклін мамандандыратын кәсіпорын: әзірлеу мен өндіруден бастап жөндеу мен саудаға дейін.",
      p2: "Компания Қазақстан Республикасы аумағында қызметін жүзеге асырады және сапалы қызмет көрсетуді қамтамасыз етудегі сенімді серіктес болып табылады.",
      requisites: "Деректемелер",
      bin: "БСН:",
      director: "Директор:",
      directorName: "Жумалин Азамат Бақытұлы",
      address: "Мекенжай:",
      addressValue:
        "020000, Ақмола облысы, Көкшетау қ., Ыбырай Алтынсарин көшесі, 18 үй",
    },
    services: {
      heading: "Қызмет бағыттары",
      items: [
        {
          title: "Әзірлеу және өндіру",
          description:
            "Азаматтық және қызметтік қару мен оған арналған оқ-дәрілерді әзірлеу және өндіру.",
        },
        {
          title: "Қаруды жөндеу",
          description:
            "Барлық түрдегі қаруларды кәсіби жөндеу және техникалық қызмет көрсету.",
        },
        {
          title: "Сауда",
          description:
            "Азаматтық және қызметтік қару мен оған арналған оқ-дәрілерді сату.",
        },
        {
          title: "Коллекциялау",
          description: "Заңнамаға сәйкес қаруды коллекциялау және көрмеге қою.",
        },
        {
          title: "Сервистік қызмет көрсету",
          description:
            "Толық сервистік қызмет көрсету, сақтау және кеңес беру.",
        },
        {
          title: "Кешенді шешімдер",
          description:
            "Таңдаудан бастап қызмет көрсету мен жөндеуге дейін толық цикл.",
        },
      ],
    },
    contacts: {
      heading: "Байланыс",
      phone: "ТЕЛЕФОН",
      email: "EMAIL",
      addressLabel: "МЕКЕНЖАЙ",
      addressValue:
        "020000, Ақмола облысы, Көкшетау қ., Ыбырай Алтынсарин көшесі, 18 үй",
      director: "ДИРЕКТОР",
      directorName: "Жумалин Азамат Бақытұлы",
      deputy: "ДИРЕКТОРДЫҢ ОРЫНБАСАРЫ",
      deputyName: "Исмағұлов Мұратбек Мұратбекұлы",
    },
    footer: {
      rights: "© 2026 «Арсенал Таймас» ЖШС. Барлық құқықтар қорғалған.",
      city: "Көкшетау қ., Қазақстан Республикасы",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      contacts: "Contacts",
    },
    hero: {
      title1: "Reliable partner in the field of",
      title2: "civilian and service weapons",
      subtitle:
        "Development, production, repair and trade — a full cycle of work to ensure quality and reliability.",
      cta: "Contact us",
    },
    about: {
      heading: "About the company",
      p1: "Arsenal Taimas LLP is an enterprise specializing in the full cycle of work in the field of civilian and service weapons: from development and production to repair and trade.",
      p2: "The company operates in the Republic of Kazakhstan and is a reliable partner in ensuring quality service.",
      requisites: "Details",
      bin: "BIN:",
      director: "Director:",
      directorName: "Zhumalin Azamat Bakytovich",
      address: "Address:",
      addressValue:
        "020000, Akmola region, Kokshetau, Ybyrai Altynsarin street, building 18",
    },
    services: {
      heading: "Areas of activity",
      items: [
        {
          title: "Development & Production",
          description:
            "Development and production of civilian and service weapons and ammunition.",
        },
        {
          title: "Weapon Repair",
          description:
            "Professional repair and maintenance of all types of weapons.",
        },
        {
          title: "Trade",
          description: "Sale of civilian and service weapons and ammunition.",
        },
        {
          title: "Collecting",
          description:
            "Collecting and exhibiting weapons in accordance with legislation.",
        },
        {
          title: "Servicing",
          description: "Full service maintenance, storage and consultations.",
        },
        {
          title: "Comprehensive Solutions",
          description: "Full cycle — from selection to maintenance and repair.",
        },
      ],
    },
    contacts: {
      heading: "Contacts",
      phone: "PHONE",
      email: "EMAIL",
      addressLabel: "ADDRESS",
      addressValue:
        "020000, Akmola region, Kokshetau, Ybyrai Altynsarin street, building 18",
      director: "DIRECTOR",
      directorName: "Zhumalin Azamat Bakytovich",
      deputy: "DEPUTY DIRECTOR",
      deputyName: "Ismagulov Muratbek Muratbekovich",
    },
    footer: {
      rights: "© 2026 Arsenal Taimas LLP. All rights reserved.",
      city: "Kokshetau, Republic of Kazakhstan",
    },
  },
};

export type Dictionary = (typeof dictionaries)["ru"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.ru;
}
