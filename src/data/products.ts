export type ProductLine = "core" | "compact" | "xs" | "xstyle" | "xsnova" | "superslim";

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
  /** Set when format/filter/nicotine/tar/price were provided directly, not estimated. */
  confirmedSpecs?: boolean;
};

export const productLines: Record<ProductLine, { name: { fa: string; en: string } }> = {
  core: { name: { fa: "وینستون کور", en: "Winston Core" } },
  compact: { name: { fa: "وینستون کامپکت", en: "Winston Compact" } },
  xs: { name: { fa: "وینستون ایکس‌اس", en: "Winston XS" } },
  xstyle: { name: { fa: "وینستون ایکس استایل", en: "Winston X Style" } },
  xsnova: { name: { fa: "وینستون ایکس‌اس نُوا", en: "Winston XS Nova" } },
  superslim: { name: { fa: "وینستون سوپر اسلیم", en: "Winston Super Slim" } },
};

// Generic placeholder spec block used until real format/filter/nicotine/tar
// figures are supplied for a given SKU — deliberately has no numeric
// nicotine/tar values, since those are regulated figures that must come
// from the actual approved packaging, not be guessed.
function placeholderSpecs(type: { fa: string; en: string }) {
  return [
    { label: { fa: "نوع", en: "Type" }, value: type },
    { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
    { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
  ];
}

export const products: Product[] = [
  // --- Core (formerly "Classic") ---
  {
    slug: "winston-core-red",
    line: "core",
    packColor: "#c8102e",
    accent: "#ffffff",
    name: { fa: "وینستون کور قرمز", en: "Winston Core Red" },
    tagline: { fa: "طعم کامل و اصیل", en: "The original full-bodied blend" },
    description: {
      fa: "وینستون کور قرمز نماد اصلی برند است؛ ترکیبی متعادل از توتون‌های منتخب که شخصیت کامل و شناخته‌شده وینستون را در هر پک ارائه می‌دهد.",
      en: "Winston Core Red is the brand's signature expression — a balanced blend of selected tobaccos delivering the full, familiar Winston character in every pack.",
    },
    specs: placeholderSpecs({ fa: "فول فلیور", en: "Full Flavor" }),
    featured: true,
  },
  {
    slug: "winston-core-blue",
    line: "core",
    packColor: "#1c3f94",
    accent: "#ffffff",
    name: { fa: "وینستون کور آبی", en: "Winston Core Blue" },
    tagline: { fa: "طعمی خنک و روان", en: "Cool and easy" },
    description: {
      fa: "وینستون کور آبی با تمرکز بر روانی و خنکی طعم طراحی شده و انتخابی محبوب در میان طرفداران وینستون است.",
      en: "Winston Core Blue is crafted for a cool, easy-going taste — a favorite among Winston smokers seeking a lighter profile.",
    },
    specs: placeholderSpecs({ fa: "لایت پلاس", en: "Light Plus" }),
    featured: true,
  },
  {
    slug: "winston-core-silver",
    line: "core",
    packColor: "#c9ccd1",
    accent: "#151515",
    name: { fa: "وینستون کور نقره‌ای", en: "Winston Core Silver" },
    tagline: { fa: "ملایم و متعادل", en: "Smooth and refined" },
    description: {
      fa: "وینستون کور نقره‌ای طعمی ملایم‌تر با همان استاندارد کیفی وینستون ارائه می‌دهد؛ انتخابی برای لحظات آرام‌تر.",
      en: "Winston Core Silver offers a smoother taste profile while holding to the same Winston quality standard — a choice for calmer moments.",
    },
    specs: placeholderSpecs({ fa: "لایت", en: "Light" }),
    featured: true,
  },

  // --- Compact (confirmed specs) ---
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
    confirmedSpecs: true,
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
    confirmedSpecs: true,
    specs: [
      { label: { fa: "فرمت", en: "Format" }, value: { fa: "کامپکت", en: "Compact" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "فیلتر زغالی ایرسل", en: "Aircell Charcoal Filter" } },
      { label: { fa: "نیکوتین", en: "Nicotine" }, value: { fa: "۰.۳ میلی‌گرم", en: "0.3 mg" } },
      { label: { fa: "قطران", en: "Tar" }, value: { fa: "۴ میلی‌گرم", en: "4 mg" } },
      { label: { fa: "ویژگی", en: "Feature" }, value: { fa: "LSS — ماندگاری کمتر بوی دود در اطراف شما", en: "LSS — less lingering smoke smell around you" } },
    ],
  },

  // --- XS ---
  {
    slug: "winston-xs-blue",
    line: "xs",
    packColor: "#2f4d8f",
    accent: "#ffffff",
    name: { fa: "وینستون ایکس‌اس آبی", en: "Winston XS Blue" },
    tagline: { fa: "فشرده و متعادل", en: "Compact and balanced" },
    description: {
      fa: "وینستون ایکس‌اس آبی در فرمتی فشرده‌تر عرضه می‌شود و برای مصرف‌کنندگانی طراحی شده که تجربه‌ای متعادل‌تر می‌خواهند.",
      en: "Winston XS Blue comes in a more compact format, designed for consumers looking for a more balanced experience.",
    },
    specs: placeholderSpecs({ fa: "کامپکت", en: "Compact" }),
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
    specs: placeholderSpecs({ fa: "کامپکت لایت", en: "Compact Light" }),
  },

  // --- X Style ---
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
    specs: placeholderSpecs({ fa: "لایت", en: "Light" }),
    featured: true,
  },
  {
    slug: "winston-xstyle-silver",
    line: "xstyle",
    packColor: "#c9ccd1",
    accent: "#1a1a1a",
    name: { fa: "وینستون ایکس استایل نقره‌ای", en: "Winston X Style Silver" },
    tagline: { fa: "ظرافت در طراحی و طعم", en: "Refined in design and taste" },
    description: {
      fa: "وینستون ایکس استایل نقره‌ای طعمی ملایم‌تر را در همان بسته‌بندی مدرن خانواده ایکس استایل ارائه می‌دهد.",
      en: "Winston X Style Silver offers a milder taste within the same modern X Style packaging.",
    },
    specs: placeholderSpecs({ fa: "الترا لایت", en: "Ultra Light" }),
  },

  // --- XS Nova ---
  {
    slug: "winston-xsnova-blue",
    line: "xsnova",
    packColor: "#e4d9bd",
    accent: "#1c3f94",
    name: { fa: "وینستون ایکس‌اس نُوا آبی", en: "Winston XS Nova Blue" },
    tagline: { fa: "کینگ سایز، طعم متعادل", en: "King size, balanced taste" },
    description: {
      fa: "وینستون ایکس‌اس نُوا آبی در فرمت کینگ سایز عرضه می‌شود و با فیلتر زغالی ایرسل، ماندگاری بوی دود در اطراف مصرف‌کننده را کاهش می‌دهد.",
      en: "Winston XS Nova Blue comes in a king size format and uses an Aircell charcoal filter to reduce lingering smoke smell around the smoker.",
    },
    price: { fa: "۱۲۰,۰۰۰ تومان", en: "120,000 Toman" },
    confirmedSpecs: true,
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
    slug: "winston-xsnova-silver",
    line: "xsnova",
    packColor: "#c9ccd1",
    accent: "#1a1a1a",
    name: { fa: "وینستون ایکس‌اس نُوا نقره‌ای", en: "Winston XS Nova Silver" },
    tagline: { fa: "کینگ سایز، طعم ملایم", en: "King size, smoother taste" },
    description: {
      fa: "وینستون ایکس‌اس نُوا نقره‌ای طعمی ملایم‌تر را در همان فرمت کینگ سایز خانواده نُوا ارائه می‌دهد.",
      en: "Winston XS Nova Silver offers a smoother taste within the same king size Nova format.",
    },
    specs: placeholderSpecs({ fa: "لایت", en: "Light" }),
  },
  {
    slug: "winston-xsnova-white",
    line: "xsnova",
    packColor: "#f2efe6",
    accent: "#1a1a1a",
    name: { fa: "وینستون ایکس‌اس نُوا سفید", en: "Winston XS Nova White" },
    tagline: { fa: "سبک‌ترین عضو خانواده نُوا", en: "The lightest of the Nova family" },
    description: {
      fa: "وینستون ایکس‌اس نُوا سفید سبک‌ترین طعم را در میان اعضای خانواده نُوا ارائه می‌دهد.",
      en: "Winston XS Nova White offers the lightest taste among the Nova family members.",
    },
    specs: placeholderSpecs({ fa: "الترا لایت", en: "Ultra Light" }),
  },

  // --- Super Slim ---
  {
    slug: "winston-superslim-blue",
    line: "superslim",
    packColor: "#2f4d8f",
    accent: "#ffffff",
    name: { fa: "وینستون سوپر اسلیم آبی", en: "Winston Super Slim Blue" },
    tagline: { fa: "باریک، ظریف، متعادل", en: "Slim, refined, balanced" },
    description: {
      fa: "وینستون سوپر اسلیم آبی با فرمت باریک‌تر، تجربه‌ای ظریف‌تر از مجموعه وینستون ارائه می‌دهد.",
      en: "Winston Super Slim Blue offers a more refined experience from the Winston range in a slimmer format.",
    },
    specs: placeholderSpecs({ fa: "سوپر اسلیم", en: "Super Slim" }),
  },
  {
    slug: "winston-superslim-silver",
    line: "superslim",
    packColor: "#c9ccd1",
    accent: "#1a1a1a",
    name: { fa: "وینستون سوپر اسلیم نقره‌ای", en: "Winston Super Slim Silver" },
    tagline: { fa: "باریک‌ترین و ملایم‌ترین", en: "The slimmest and smoothest" },
    description: {
      fa: "وینستون سوپر اسلیم نقره‌ای ملایم‌ترین طعم را در باریک‌ترین فرمت خانواده وینستون ارائه می‌دهد.",
      en: "Winston Super Slim Silver offers the smoothest taste in the Winston family's slimmest format.",
    },
    specs: placeholderSpecs({ fa: "سوپر اسلیم لایت", en: "Super Slim Light" }),
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByLine(line: ProductLine) {
  return products.filter((p) => p.line === line);
}
