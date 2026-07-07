export type Product = {
  slug: string;
  packColor: string;
  accent: string;
  name: { fa: string; en: string };
  tagline: { fa: string; en: string };
  description: { fa: string; en: string };
  specs: { label: { fa: string; en: string }; value: { fa: string; en: string } }[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "winston-red",
    packColor: "#c8102e",
    accent: "#ffffff",
    name: { fa: "وینستون قرمز", en: "Winston Red" },
    tagline: { fa: "طعم کامل و اصیل", en: "The original full-bodied blend" },
    description: {
      fa: "وینستون قرمز نماد اصلی برند است؛ ترکیبی متعادل از توتون‌های منتخب که شخصیت کامل و شناخته‌شده وینستون را در هر پک ارائه می‌دهد.",
      en: "Winston Red is the brand's signature expression — a balanced blend of selected tobaccos delivering the full, familiar Winston character in every pack.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "فول فلیور", en: "Full Flavor" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
    featured: true,
  },
  {
    slug: "winston-silver",
    packColor: "#c9ccd1",
    accent: "#151515",
    name: { fa: "وینستون نقره‌ای", en: "Winston Silver" },
    tagline: { fa: "ملایم و متعادل", en: "Smooth and refined" },
    description: {
      fa: "وینستون نقره‌ای طعمی ملایم‌تر با همان استاندارد کیفی وینستون ارائه می‌دهد؛ انتخابی برای لحظات آرام‌تر.",
      en: "Winston Silver offers a smoother taste profile while holding to the same Winston quality standard — a choice for calmer moments.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "لایت", en: "Light" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
    featured: true,
  },
  {
    slug: "winston-blue",
    packColor: "#1c3f94",
    accent: "#ffffff",
    name: { fa: "وینستون آبی", en: "Winston Blue" },
    tagline: { fa: "طعمی خنک و روان", en: "Cool and easy" },
    description: {
      fa: "وینستون آبی با تمرکز بر روانی و خنکی طعم طراحی شده و انتخابی محبوب در میان طرفداران وینستون است.",
      en: "Winston Blue is crafted for a cool, easy-going taste — a favorite among Winston smokers seeking a lighter profile.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "لایت پلاس", en: "Light Plus" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "استاندارد", en: "Standard" } },
    ],
    featured: true,
  },
  {
    slug: "winston-xs-purple",
    packColor: "#5a2a6b",
    accent: "#e4d3ab",
    name: { fa: "وینستون ایکس‌اس بنفش", en: "Winston XS Purple" },
    tagline: { fa: "فشرده، مدرن، متفاوت", en: "Compact, modern, distinct" },
    description: {
      fa: "وینستون ایکس‌اس بنفش با فرمت فشرده و طراحی مدرن، تجربه‌ای متفاوت از مجموعه وینستون ارائه می‌کند.",
      en: "Winston XS Purple brings a compact format and modern design language to the Winston range, for a distinct experience.",
    },
    specs: [
      { label: { fa: "نوع", en: "Type" }, value: { fa: "کامپکت", en: "Compact" } },
      { label: { fa: "تعداد نخ", en: "Count" }, value: { fa: "۲۰ نخ", en: "20 cigarettes" } },
      { label: { fa: "فیلتر", en: "Filter" }, value: { fa: "کپسول‌دار", en: "Capsule" } },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
