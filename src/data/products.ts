export type ProductLine = "classic" | "xs" | "xstyle" | "nova" | "compact";

export type Product = {
  slug: string;
  line: ProductLine;
  packColor: string;
  accent: string;
  name: { fa: string; en: string };
  tagline: { fa: string; en: string };
  description: { fa: string; en: string };
  price?: { fa: string; en: string };
  specs: { label: { fa: string; en: string }; value: { fa: string; en: string } }[];
  featured?: boolean;
};

export const productLines: Record<ProductLine, { name: { fa: string; en: string } }> = {
  classic: { name: { fa: "وینستون کلاسیک", en: "Winston Classic" } },
  compact: { name: { fa: "وینستون کامپکت", en: "Winston Compact" } },
  xs: { name: { fa: "وینستون ایکس‌اس", en: "Winston XS" } },
  xstyle: { name: { fa: "وینستون ایکس استایل", en: "Winston X Style" } },
  nova: { name: { fa: "وینستون نُوا", en: "Winston Nova" } },
};

export const products: Product[] = [
  {
    slug: "winston-classic-red",
    line: "classic",
    packColor: "#c8102e",
    accent: "#ffffff",
    name: { fa: "وینستون کلاسیک قرمز", en: "Winston Classic Red" },
    tagline: { fa: "طعم کامل و اصیل", en: "The original full-bodied blend" },
    description: {
      fa: "وینستون کلاسیک قرمز نماد اصلی برند است؛ ترکیبی متعادل از توتون‌های منتخب که شخصیت کامل و شناخته‌شده وینستون را در هر پک ارائه می‌دهد.",
      en: "Winston Classic Red is the brand's signature expression — a balanced blend of selected tobaccos delivering the full, familiar Winston character in every pack.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "فول فلیور", en: "Full Flavor" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
    featured: true,
  },
  {
    slug: "winston-classic-blue",
    line: "classic",
    packColor: "#1c3f94",
    accent: "#ffffff",
    name: { fa: "وینستون کلاسیک آبی", en: "Winston Classic Blue" },
    tagline: { fa: "طعمی خنک و روان", en: "Cool and easy" },
    description: {
      fa: "وینستون کلاسیک آبی با تمرکز بر روانی و خنکی طعم طراحی شده و انتخابی محبوب در میان طرفداران وینستون است.",
      en: "Winston Classic Blue is crafted for a cool, easy-going taste — a favorite among Winston smokers seeking a lighter profile.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "لایت پلاس", en: "Light Plus" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
    featured: true,
  },
  {
    slug: "winston-classic-silver",
    line: "classic",
    packColor: "#c9ccd1",
    accent: "#151515",
    name: { fa: "وینستون کلاسیک نقره‌ای", en: "Winston Classic Silver" },
    tagline: { fa: "ملایم و متعادل", en: "Smooth and refined" },
    description: {
      fa: "وینستون کلاسیک نقره‌ای طعمی ملایم‌تر با همان استاندارد کیفی وینستون ارائه می‌دهد؛ انتخابی برای لحظات آرام‌تر.",
      en: "Winston Classic Silver offers a smoother taste profile while holding to the same Winston quality standard — a choice for calmer moments.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "لایت", en: "Light" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
    featured: true,
  },
  {
    slug: "winston-compact-blue",
    line: "compact",
    packColor: "#1857c9",
    accent: "#ffffff",
    name: { fa: "وینستون کامپکت آبی", en: "Winston Compact Blue" },
    tagline: { fa: "فرمت فشرده، طعم متعادل", en: "Compact format, balanced taste" },
    description: {
      fa: "وینستون کامپکت آبی در فرمتی فشرده‌تر عرضه می‌شود و با فیلتر زغالی ایرسل، ماندگاری بوی دود در اطراف مصرف‌کننده را کاهش می‌دهد.",
      en: "Winston Compact Blue comes in a more compact format and uses an Aircell charcoal filter to reduce lingering smoke smell around the smoker.",
    },
    price: { fa: "۱۲۰,۰۰۰ تومان", en: "120,000 Toman" },
    specs: [
      { label: { fa: "فرمت", en: "Format" }, value: { fa: "کامپکت", en: "Compact" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "فیلتر زغالی ایرسل", en: "Aircell Charcoal Filter" } },
      { label: { fa: "نیکوتین", en: "Nicotine" }, value: { fa: "۰.۵ میلی‌گرم", en: "0.5 mg" } },
      { label: { fa: "قطران", en: "Tar" }, value: { fa: "۶ میلی‌گرم", en: "6 mg" } },
      { label: { fa: "ویژگی", en: "Feature" }, value: { fa: "LSS — ماندگاری کمتر بوی دود در اطراف شما", en: "LSS — less lingering smoke smell around you" } },
    ],
    featured: true,
  },
  {
    slug: "winston-compact-silver",
    line: "compact",
    packColor: "#a9c6de",
    accent: "#1a3a6b",
    name: { fa: "وینستون کامپکت نقره‌ای", en: "Winston Compact Silver" },
    tagline: { fa: "فرمت فشرده، طعم ملایم", en: "Compact format, smoother taste" },
    description: {
      fa: "وینستون کامپکت نقره‌ای طعمی ملایم‌تر را در همان فرمت فشرده و فیلتر زغالی ایرسل خانواده کامپکت ارائه می‌دهد.",
      en: "Winston Compact Silver offers a smoother taste within the same compact format and Aircell charcoal filter as the rest of the Compact family.",
    },
    price: { fa: "۱۲۰,۰۰۰ تومان", en: "120,000 Toman" },
    specs: [
      { label: { fa: "فرمت", en: "Format" }, value: { fa: "کامپکت", en: "Compact" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "فیلتر زغالی ایرسل", en: "Aircell Charcoal Filter" } },
      { label: { fa: "نیکوتین", en: "Nicotine" }, value: { fa: "۰.۳ میلی‌گرم", en: "0.3 mg" } },
      { label: { fa: "قطران", en: "Tar" }, value: { fa: "۴ میلی‌گرم", en: "4 mg" } },
      { label: { fa: "ویژگی", en: "Feature" }, value: { fa: "LSS — ماندگاری کمتر بوی دود در اطراف شما", en: "LSS — less lingering smoke smell around you" } },
    ],
  },
  {
    slug: "winston-xs-black",
    line: "xs",
    packColor: "#1a1a1a",
    accent: "#c9a86a",
    name: { fa: "وینستون ایکس‌اس مشکی", en: "Winston XS Black" },
    tagline: { fa: "فشرده و متمرکز", en: "Compact and focused" },
    description: {
      fa: "وینستون ایکس‌اس مشکی در فرمتی فشرده‌تر عرضه می‌شود و برای مصرف‌کنندگانی طراحی شده که تجربه‌ای متمرکزتر می‌خواهند.",
      en: "Winston XS Black comes in a more compact format, designed for consumers looking for a more concentrated experience.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "کامپکت", en: "Compact" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
  },
  {
    slug: "winston-xs-silver",
    line: "xs",
    packColor: "#8f939c",
    accent: "#151515",
    name: { fa: "وینستون ایکس‌اس نقره‌ای", en: "Winston XS Silver" },
    tagline: { fa: "فشرده و ملایم", en: "Compact and smooth" },
    description: {
      fa: "وینستون ایکس‌اس نقره‌ای همان فرمت فشرده خانواده ایکس‌اس را با طعمی ملایم‌تر ترکیب می‌کند.",
      en: "Winston XS Silver pairs the same compact XS format with a smoother taste profile.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "کامپکت لایت", en: "Compact Light" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
  },
  {
    slug: "winston-xstyle-blue",
    line: "xstyle",
    packColor: "#2f4d8f",
    accent: "#ffffff",
    name: { fa: "وینستون ایکس استایل آبی", en: "Winston X Style Blue" },
    tagline: { fa: "طراحی مدرن، طعم متعادل", en: "Modern design, balanced taste" },
    description: {
      fa: "وینستون ایکس استایل آبی با بسته‌بندی مدرن‌تر و طعمی متعادل، نسل تازه‌ای از خانواده وینستون را معرفی می‌کند.",
      en: "Winston X Style Blue introduces a newer generation of the Winston family with more contemporary packaging and a balanced taste.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "لایت", en: "Light" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
    featured: true,
  },
  {
    slug: "winston-xstyle-gold",
    line: "xstyle",
    packColor: "#a98a52",
    accent: "#1a1a1a",
    name: { fa: "وینستون ایکس استایل طلایی", en: "Winston X Style Gold" },
    tagline: { fa: "ظرافت در طراحی و طعم", en: "Refined in design and taste" },
    description: {
      fa: "وینستون ایکس استایل طلایی طعمی ملایم‌تر را در همان بسته‌بندی مدرن خانواده ایکس استایل ارائه می‌دهد.",
      en: "Winston X Style Gold offers a milder taste within the same modern X Style packaging.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "الترا لایت", en: "Ultra Light" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
  },
  {
    slug: "winston-nova-blue",
    line: "nova",
    packColor: "#e4d9bd",
    accent: "#1c3f94",
    name: { fa: "وینستون نُوا آبی", en: "Winston Nova Blue" },
    tagline: { fa: "کینگ سایز، طعم متعادل", en: "King size, balanced taste" },
    description: {
      fa: "وینستون نُوا آبی در فرمت کینگ سایز عرضه می‌شود و با فیلتر زغالی ایرسل، ماندگاری بوی دود در اطراف مصرف‌کننده را کاهش می‌دهد.",
      en: "Winston Nova Blue comes in a king size format and uses an Aircell charcoal filter to reduce lingering smoke smell around the smoker.",
    },
    price: { fa: "۱۲۰,۰۰۰ تومان", en: "120,000 Toman" },
    specs: [
      { label: { fa: "فرمت", en: "Format" }, value: { fa: "کینگ سایز", en: "King Size" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "فیلتر زغالی ایرسل", en: "Aircell Charcoal Filter" } },
      { label: { fa: "نیکوتین", en: "Nicotine" }, value: { fa: "۰.۵ میلی‌گرم", en: "0.5 mg" } },
      { label: { fa: "قطران", en: "Tar" }, value: { fa: "۶ میلی‌گرم", en: "6 mg" } },
      { label: { fa: "ویژگی", en: "Feature" }, value: { fa: "LSS — ماندگاری کمتر بوی دود در اطراف شما", en: "LSS — less lingering smoke smell around you" } },
    ],
    featured: true,
  },
  {
    slug: "winston-nova-indigo",
    line: "nova",
    packColor: "#232b52",
    accent: "#c9a86a",
    name: { fa: "وینستون نُوا سرمه‌ای", en: "Winston Nova Indigo" },
    tagline: { fa: "شخصیتی عمیق‌تر", en: "A deeper character" },
    description: {
      fa: "وینستون نُوا سرمه‌ای جدیدترین افزوده خانواده وینستون است که طراحی امروزی را با طعمی پرمایه‌تر همراه می‌کند.",
      en: "Winston Nova Indigo is the newest addition to the Winston family, pairing contemporary design with a richer taste.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "فول فلیور", en: "Full Flavor" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
    featured: true,
  },
  {
    slug: "winston-nova-gold",
    line: "nova",
    packColor: "#b89a5e",
    accent: "#1a1a1a",
    name: { fa: "وینستون نُوا طلایی", en: "Winston Nova Gold" },
    tagline: { fa: "ملایم و ظریف", en: "Smooth and refined" },
    description: {
      fa: "وینستون نُوا طلایی طعمی ملایم‌تر را در طراحی جدید خانواده نُوا ارائه می‌دهد.",
      en: "Winston Nova Gold delivers a smoother taste within the Nova family's new design language.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "لایت", en: "Light" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
  },
  {
    slug: "winston-nova-silver",
    line: "nova",
    packColor: "#c9ccd1",
    accent: "#1a1a1a",
    name: { fa: "وینستون نُوا نقره‌ای", en: "Winston Nova Silver" },
    tagline: { fa: "سبک‌ترین عضو خانواده نُوا", en: "The lightest of the Nova family" },
    description: {
      fa: "وینستون نُوا نقره‌ای سبک‌ترین طعم را در میان اعضای خانواده نُوا ارائه می‌دهد.",
      en: "Winston Nova Silver offers the lightest taste among the Nova family members.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "الترا لایت", en: "Ultra Light" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByLine(line: ProductLine) {
  return products.filter((p) => p.line === line);
}
