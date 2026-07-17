export type Locale = "ru" | "kk" | "en" | "zh" | "tr";

export const locales: Locale[] = ["ru", "kk", "en", "zh", "tr"];
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Рус",
  kk: "Қаз",
  en: "Eng",
  zh: "中文",
  tr: "Tür",
};

const dictionaries = {
  ru: {
    meta: {
      title: "Арсенал Таймас | Оружие для охоты и спортивной стрельбы в Казахстане",
      description:
        "ТОО «Арсенал Таймас»: официальные поставки гражданского оружия, боеприпасов и комплектующих для охоты и спортивной стрельбы от проверенных мировых производителей. Кокшетау, Казахстан.",
    },
    nav: {
      about: "О компании",
      directions: "Направления",
      contacts: "Контакты",
    },
    hero: {
      kicker: "Официальный поставщик в Казахстане",
      title1: "Оружие для охоты",
      title2: "и спортивной стрельбы",
      subtitle:
        "Современное гражданское оружие и комплектующие от проверенных мировых производителей.",
      cta: "Связаться с нами",
    },
    trust: [
      {
        title: "Лицензированная деятельность",
        desc: "Работаем в строгом соответствии с законодательством Республики Казахстан",
      },
      {
        title: "Проверенные поставщики",
        desc: "Прямые контракты с ведущими мировыми производителями",
      },
      {
        title: "Официальный импорт",
        desc: "Полное таможенное и разрешительное сопровождение поставок",
      },
      {
        title: "Сервис и поддержка",
        desc: "Обслуживание и консультации на всём сроке владения",
      },
    ],
    about: {
      heading: "О компании",
      p1: "ТОО «Арсенал Таймас» специализируется на официальных поставках современного гражданского оружия, боеприпасов и комплектующих для охоты и спортивной стрельбы.",
      p2: "Мы не производим оружие сами. Наша задача: отбирать проверенных мировых производителей и официально поставлять их продукцию охотникам и спортивным стрелкам Казахстана.",
      requisites: "Реквизиты",
      bin: "БИН",
      binValue: "221140025076",
      director: "Директор",
      directorName: "Жумалин Азамат Бакытович",
      deputy: "Заместитель директора",
      deputyName: "Исмагулов Муратбек Муратбекович",
      address: "Адрес",
      addressValue:
        "020000, Акмолинская область, г. Кокшетау, ул. Ыбырая Алтынсарина, дом 18",
    },
    directions: {
      heading: "Направления деятельности",
      sub: "От подбора оружия до сервисного сопровождения",
      items: [
        {
          title: "Охотничье оружие",
          desc: "Нарезное и гладкоствольное оружие для любых видов охоты",
        },
        {
          title: "Спортивное оружие",
          desc: "Оружие для стендовой и практической стрельбы",
        },
        {
          title: "Боеприпасы",
          desc: "Патроны проверенных производителей для охоты и спорта",
        },
        {
          title: "Оптика и комплектующие",
          desc: "Прицелы, кронштейны и аксессуары",
        },
        {
          title: "Сервисное обслуживание",
          desc: "Обслуживание, хранение и подготовка оружия",
        },
        {
          title: "Подбор и консультации",
          desc: "Поможем выбрать оружие под ваши задачи",
        },
      ],
    },
    audience: {
      hunters: {
        title: "Охотникам",
        desc: "Надёжное оружие и снаряжение для полевых условий Казахстана",
      },
      shooters: {
        title: "Спортивным стрелкам",
        desc: "Точное оружие и комплектующие для стенда и практической стрельбы",
      },
    },
    contacts: {
      heading: "Контакты",
      sub: "Ответим на вопросы и поможем с выбором",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      addressValue:
        "020000, Акмолинская область, г. Кокшетау, ул. Ыбырая Алтынсарина, дом 18",
      director: "Директор",
      directorName: "Жумалин Азамат Бакытович",
      deputy: "Заместитель директора",
      deputyName: "Исмагулов Муратбек Муратбекович",
    },
    footer: {
      legal:
        "Деятельность осуществляется в соответствии с законодательством Республики Казахстан. Продажа оружия производится только при наличии разрешительных документов.",
      rights: "© 2026 ТОО «Арсенал Таймас». Все права защищены.",
      city: "г. Кокшетау, Республика Казахстан",
    },
  },
  kk: {
    meta: {
      title: "Арсенал Таймас | Қазақстандағы аңшылық және спорттық ату қаруы",
      description:
        "«Арсенал Таймас» ЖШС: сенімді әлемдік өндірушілерден аңшылық пен спорттық атуға арналған азаматтық қаруды, оқ-дәрілер мен жабдықтарды ресми жеткізу. Көкшетау, Қазақстан.",
    },
    nav: {
      about: "Компания туралы",
      directions: "Бағыттар",
      contacts: "Байланыс",
    },
    hero: {
      kicker: "Қазақстандағы ресми жеткізуші",
      title1: "Аңшылық және спорттық",
      title2: "атуға арналған қару",
      subtitle:
        "Сенімді әлемдік өндірушілерден заманауи азаматтық қару мен жабдықтар.",
      cta: "Бізбен байланысу",
    },
    trust: [
      {
        title: "Лицензияланған қызмет",
        desc: "Қазақстан Республикасының заңнамасына қатаң сәйкес жұмыс істейміз",
      },
      {
        title: "Сенімді жеткізушілер",
        desc: "Жетекші әлемдік өндірушілермен тікелей келісімшарттар",
      },
      {
        title: "Ресми импорт",
        desc: "Жеткізілімдерді толық кедендік және рұқсаттық сүйемелдеу",
      },
      {
        title: "Сервис және қолдау",
        desc: "Иелену мерзімінің барлық кезеңінде қызмет көрсету және кеңес беру",
      },
    ],
    about: {
      heading: "Компания туралы",
      p1: "«Арсенал Таймас» ЖШС аңшылық пен спорттық атуға арналған заманауи азаматтық қаруды, оқ-дәрілер мен жабдықтарды ресми жеткізуге маманданған.",
      p2: "Біз қаруды өзіміз өндірмейміз. Біздің міндетіміз: сенімді әлемдік өндірушілерді таңдап, олардың өнімін Қазақстанның аңшылары мен спортшы атушыларына ресми жеткізу.",
      requisites: "Деректемелер",
      bin: "БСН",
      binValue: "221140025076",
      director: "Директор",
      directorName: "Жумалин Азамат Бақытұлы",
      deputy: "Директордың орынбасары",
      deputyName: "Исмағұлов Мұратбек Мұратбекұлы",
      address: "Мекенжай",
      addressValue:
        "020000, Ақмола облысы, Көкшетау қ., Ыбырай Алтынсарин көшесі, 18 үй",
    },
    directions: {
      heading: "Қызмет бағыттары",
      sub: "Қаруды таңдаудан сервистік сүйемелдеуге дейін",
      items: [
        {
          title: "Аңшылық қаруы",
          desc: "Аңшылықтың кез келген түріне арналған ойықты және тегіс ұңғылы қару",
        },
        {
          title: "Спорттық қару",
          desc: "Стендтік және практикалық атуға арналған қару",
        },
        {
          title: "Оқ-дәрілер",
          desc: "Аңшылық пен спортқа арналған сенімді өндірушілердің патрондары",
        },
        {
          title: "Оптика және жабдықтар",
          desc: "Көздеуіштер, кронштейндер және аксессуарлар",
        },
        {
          title: "Сервистік қызмет көрсету",
          desc: "Қаруға қызмет көрсету, сақтау және дайындау",
        },
        {
          title: "Таңдау және кеңес беру",
          desc: "Мақсатыңызға сай қару таңдауға көмектесеміз",
        },
      ],
    },
    audience: {
      hunters: {
        title: "Аңшыларға",
        desc: "Қазақстанның дала жағдайына арналған сенімді қару мен жабдық",
      },
      shooters: {
        title: "Спортшы атушыларға",
        desc: "Стенд пен практикалық атуға арналған дәл қару мен жабдықтар",
      },
    },
    contacts: {
      heading: "Байланыс",
      sub: "Сұрақтарыңызға жауап беріп, таңдауға көмектесеміз",
      phone: "Телефон",
      email: "Email",
      address: "Мекенжай",
      addressValue:
        "020000, Ақмола облысы, Көкшетау қ., Ыбырай Алтынсарин көшесі, 18 үй",
      director: "Директор",
      directorName: "Жумалин Азамат Бақытұлы",
      deputy: "Директордың орынбасары",
      deputyName: "Исмағұлов Мұратбек Мұратбекұлы",
    },
    footer: {
      legal:
        "Қызмет Қазақстан Республикасының заңнамасына сәйкес жүзеге асырылады. Қару тек рұқсат құжаттары болған жағдайда сатылады.",
      rights: "© 2026 «Арсенал Таймас» ЖШС. Барлық құқықтар қорғалған.",
      city: "Көкшетау қ., Қазақстан Республикасы",
    },
  },
  en: {
    meta: {
      title: "Arsenal Taimas | Hunting & Sport Shooting Firearms in Kazakhstan",
      description:
        "Arsenal Taimas LLP: official supply of civilian firearms, ammunition and components for hunting and sport shooting from trusted global manufacturers. Kokshetau, Kazakhstan.",
    },
    nav: {
      about: "About",
      directions: "What we do",
      contacts: "Contacts",
    },
    hero: {
      kicker: "Official supplier in Kazakhstan",
      title1: "Firearms for hunting",
      title2: "and sport shooting",
      subtitle:
        "Modern civilian firearms and components from trusted global manufacturers.",
      cta: "Contact us",
    },
    trust: [
      {
        title: "Licensed operations",
        desc: "Operating in strict compliance with the laws of the Republic of Kazakhstan",
      },
      {
        title: "Trusted suppliers",
        desc: "Direct contracts with leading global manufacturers",
      },
      {
        title: "Official import",
        desc: "Full customs and regulatory support for every delivery",
      },
      {
        title: "Service and support",
        desc: "Maintenance and advice throughout the ownership period",
      },
    ],
    about: {
      heading: "About the company",
      p1: "Arsenal Taimas LLP specializes in the official supply of modern civilian firearms, ammunition and components for hunting and sport shooting.",
      p2: "We do not manufacture firearms ourselves. Our job is to select trusted global manufacturers and officially deliver their products to hunters and sport shooters across Kazakhstan.",
      requisites: "Company details",
      bin: "BIN",
      binValue: "221140025076",
      director: "Director",
      directorName: "Azamat Zhumalin",
      deputy: "Deputy Director",
      deputyName: "Muratbek Ismagulov",
      address: "Address",
      addressValue:
        "18 Ybyrai Altynsarin St., Kokshetau, Akmola Region, 020000",
    },
    directions: {
      heading: "What we do",
      sub: "From selecting a firearm to full service support",
      items: [
        {
          title: "Hunting firearms",
          desc: "Rifled and smoothbore firearms for every type of hunt",
        },
        {
          title: "Sport firearms",
          desc: "Firearms for clay target and practical shooting",
        },
        {
          title: "Ammunition",
          desc: "Cartridges from trusted manufacturers for hunting and sport",
        },
        {
          title: "Optics and components",
          desc: "Scopes, mounts and accessories",
        },
        {
          title: "Service and maintenance",
          desc: "Maintenance, storage and preparation of firearms",
        },
        {
          title: "Selection and advice",
          desc: "We help you choose the right firearm for your needs",
        },
      ],
    },
    audience: {
      hunters: {
        title: "For hunters",
        desc: "Reliable firearms and gear for the field conditions of Kazakhstan",
      },
      shooters: {
        title: "For sport shooters",
        desc: "Precise firearms and components for clay and practical shooting",
      },
    },
    contacts: {
      heading: "Contacts",
      sub: "We answer questions and help with your choice",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue:
        "18 Ybyrai Altynsarin St., Kokshetau, Akmola Region, 020000",
      director: "Director",
      directorName: "Azamat Zhumalin",
      deputy: "Deputy Director",
      deputyName: "Muratbek Ismagulov",
    },
    footer: {
      legal:
        "All operations are conducted in accordance with the laws of the Republic of Kazakhstan. Firearms are sold only to holders of valid permits.",
      rights: "© 2026 Arsenal Taimas LLP. All rights reserved.",
      city: "Kokshetau, Republic of Kazakhstan",
    },
  },
  zh: {
    meta: {
      title: "Arsenal Taimas | 哈萨克斯坦狩猎与射击运动枪械供应商",
      description:
        "Arsenal Taimas 有限责任公司：官方供应来自全球可靠制造商的民用枪械、弹药及配件，服务于狩猎与射击运动。哈萨克斯坦科克舍套。",
    },
    nav: {
      about: "公司简介",
      directions: "业务方向",
      contacts: "联系方式",
    },
    hero: {
      kicker: "哈萨克斯坦官方供应商",
      title1: "狩猎与射击运动",
      title2: "专业枪械",
      subtitle: "来自全球可靠制造商的现代民用枪械与配件。",
      cta: "联系我们",
    },
    trust: [
      {
        title: "持牌经营",
        desc: "严格遵守哈萨克斯坦共和国法律开展业务",
      },
      {
        title: "可靠供应商",
        desc: "与全球领先制造商直接签约",
      },
      {
        title: "官方进口",
        desc: "提供完整的海关及许可手续支持",
      },
      {
        title: "服务与支持",
        desc: "在整个使用期内提供维护与咨询",
      },
    ],
    about: {
      heading: "公司简介",
      p1: "Arsenal Taimas 有限责任公司专注于官方供应用于狩猎和射击运动的现代民用枪械、弹药及配件。",
      p2: "我们不自行生产枪械。我们的职责是甄选全球可靠制造商，并将其产品正式供应给哈萨克斯坦的猎人和射击运动爱好者。",
      requisites: "公司信息",
      bin: "商业登记号",
      binValue: "221140025076",
      director: "总经理",
      directorName: "Azamat Zhumalin",
      deputy: "副总经理",
      deputyName: "Muratbek Ismagulov",
      address: "地址",
      addressValue:
        "哈萨克斯坦阿克莫拉州科克舍套市 Ybyrai Altynsarin 街18号，邮编020000",
    },
    directions: {
      heading: "业务方向",
      sub: "从枪械选购到全程服务支持",
      items: [
        {
          title: "狩猎枪械",
          desc: "适用于各类狩猎的线膛与滑膛枪械",
        },
        {
          title: "运动枪械",
          desc: "用于飞碟射击和实用射击的枪械",
        },
        {
          title: "弹药",
          desc: "可靠制造商生产的狩猎及运动用弹药",
        },
        {
          title: "光学与配件",
          desc: "瞄准镜、支架及各类配件",
        },
        {
          title: "维护服务",
          desc: "枪械的保养、存放与调校",
        },
        {
          title: "选购咨询",
          desc: "帮助您选择适合的枪械",
        },
      ],
    },
    audience: {
      hunters: {
        title: "致猎人",
        desc: "适应哈萨克斯坦野外环境的可靠枪械与装备",
      },
      shooters: {
        title: "致射击运动员",
        desc: "用于飞碟与实用射击的精准枪械及配件",
      },
    },
    contacts: {
      heading: "联系方式",
      sub: "为您解答疑问并协助选购",
      phone: "电话",
      email: "邮箱",
      address: "地址",
      addressValue:
        "哈萨克斯坦阿克莫拉州科克舍套市 Ybyrai Altynsarin 街18号，邮编020000",
      director: "总经理",
      directorName: "Azamat Zhumalin",
      deputy: "副总经理",
      deputyName: "Muratbek Ismagulov",
    },
    footer: {
      legal:
        "所有业务均依据哈萨克斯坦共和国法律开展。枪械仅向持有有效许可证的人士出售。",
      rights: "© 2026 Arsenal Taimas 有限责任公司。保留所有权利。",
      city: "哈萨克斯坦共和国科克舍套市",
    },
  },
  tr: {
    meta: {
      title: "Arsenal Taimas | Kazakistan'da Avcılık ve Atıcılık Silahları",
      description:
        "Arsenal Taimas LLP: Güvenilir küresel üreticilerden avcılık ve sportif atıcılık için sivil silah, mühimmat ve aksesuarların resmi tedariki. Kökşetau, Kazakistan.",
    },
    nav: {
      about: "Hakkımızda",
      directions: "Faaliyetler",
      contacts: "İletişim",
    },
    hero: {
      kicker: "Kazakistan'da resmi tedarikçi",
      title1: "Avcılık ve sportif atıcılık",
      title2: "için silahlar",
      subtitle:
        "Güvenilir küresel üreticilerden modern sivil silahlar ve aksesuarlar.",
      cta: "Bize ulaşın",
    },
    trust: [
      {
        title: "Lisanslı faaliyet",
        desc: "Kazakistan Cumhuriyeti mevzuatına tam uyum içinde çalışıyoruz",
      },
      {
        title: "Güvenilir tedarikçiler",
        desc: "Önde gelen küresel üreticilerle doğrudan sözleşmeler",
      },
      {
        title: "Resmi ithalat",
        desc: "Her teslimat için eksiksiz gümrük ve izin desteği",
      },
      {
        title: "Servis ve destek",
        desc: "Sahiplik süresi boyunca bakım ve danışmanlık",
      },
    ],
    about: {
      heading: "Hakkımızda",
      p1: "Arsenal Taimas LLP, avcılık ve sportif atıcılık için modern sivil silahların, mühimmatın ve aksesuarların resmi tedarikinde uzmanlaşmıştır.",
      p2: "Silah üretimi yapmıyoruz. Görevimiz, güvenilir küresel üreticileri seçmek ve ürünlerini Kazakistan'daki avcılara ve sportif atıcılara resmi olarak ulaştırmaktır.",
      requisites: "Şirket bilgileri",
      bin: "BIN",
      binValue: "221140025076",
      director: "Genel Müdür",
      directorName: "Azamat Zhumalin",
      deputy: "Genel Müdür Yardımcısı",
      deputyName: "Muratbek Ismagulov",
      address: "Adres",
      addressValue:
        "Ybyrai Altynsarin Cad. No:18, Kökşetau, Akmola Bölgesi, 020000",
    },
    directions: {
      heading: "Faaliyet alanları",
      sub: "Silah seçiminden tam servis desteğine kadar",
      items: [
        {
          title: "Av silahları",
          desc: "Her tür av için yivli ve yivsiz silahlar",
        },
        {
          title: "Spor silahları",
          desc: "Trap-skeet ve pratik atıcılık için silahlar",
        },
        {
          title: "Mühimmat",
          desc: "Av ve spor için güvenilir üreticilerden fişekler",
        },
        {
          title: "Optik ve aksesuarlar",
          desc: "Dürbünler, montaj sistemleri ve aksesuarlar",
        },
        {
          title: "Servis ve bakım",
          desc: "Silahların bakımı, saklanması ve hazırlanması",
        },
        {
          title: "Seçim ve danışmanlık",
          desc: "İhtiyacınıza uygun silahı seçmenize yardımcı oluyoruz",
        },
      ],
    },
    audience: {
      hunters: {
        title: "Avcılara",
        desc: "Kazakistan'ın arazi koşulları için güvenilir silahlar ve ekipman",
      },
      shooters: {
        title: "Sportif atıcılara",
        desc: "Trap-skeet ve pratik atıcılık için hassas silahlar ve aksesuarlar",
      },
    },
    contacts: {
      heading: "İletişim",
      sub: "Sorularınızı yanıtlıyor, seçiminizde yardımcı oluyoruz",
      phone: "Telefon",
      email: "E-posta",
      address: "Adres",
      addressValue:
        "Ybyrai Altynsarin Cad. No:18, Kökşetau, Akmola Bölgesi, 020000",
      director: "Genel Müdür",
      directorName: "Azamat Zhumalin",
      deputy: "Genel Müdür Yardımcısı",
      deputyName: "Muratbek Ismagulov",
    },
    footer: {
      legal:
        "Tüm faaliyetler Kazakistan Cumhuriyeti mevzuatına uygun olarak yürütülmektedir. Silah satışı yalnızca geçerli izin belgesi sahiplerine yapılır.",
      rights: "© 2026 Arsenal Taimas LLP. Tüm hakları saklıdır.",
      city: "Kökşetau, Kazakistan Cumhuriyeti",
    },
  },
};

export type Dictionary = (typeof dictionaries)["ru"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.ru;
}

export const contactInfo = {
  phone: "+7 707 550 42 82",
  phoneHref: "tel:+77075504282",
  email: "Statusman1304@gmail.com",
  emailHref: "mailto:Statusman1304@gmail.com",
};
