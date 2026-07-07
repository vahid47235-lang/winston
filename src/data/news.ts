export type NewsArticle = {
  slug: string;
  date: string;
  title: { fa: string; en: string };
  excerpt: { fa: string; en: string };
  body: { fa: string[]; en: string[] };
};

export const news: NewsArticle[] = [
  {
    slug: "winston-heritage-70-years",
    date: "2026-03-02",
    title: {
      fa: "هفت دهه میراث وینستون",
      en: "Seven Decades of Winston Heritage",
    },
    excerpt: {
      fa: "نگاهی به مسیر هفتاد ساله وینستون از تأسیس تا امروز و اصولی که هیچ‌گاه تغییر نکرده‌اند.",
      en: "A look back at Winston's seven-decade journey and the principles that have never changed.",
    },
    body: {
      fa: [
        "از سال ۱۹۵۴ تاکنون، وینستون بر پایه یک اصل ساده بنا شده: کیفیت هرگز قابل مذاکره نیست.",
        "این تعهد در هر مرحله از انتخاب برگ توتون تا بسته‌بندی نهایی محصول دنبال می‌شود.",
        "امروز، وینستون در بیش از هفتاد کشور در دسترس مصرف‌کنندگان بزرگسال قرار دارد.",
      ],
      en: [
        "Since 1954, Winston has been built on one simple principle: quality is never negotiable.",
        "That commitment follows through every stage, from tobacco leaf selection to final packaging.",
        "Today, Winston reaches adult consumers in more than seventy countries worldwide.",
      ],
    },
  },
  {
    slug: "responsible-marketing-commitment",
    date: "2026-01-15",
    title: {
      fa: "تعهد ما به بازاریابی مسئولانه",
      en: "Our Commitment to Responsible Marketing",
    },
    excerpt: {
      fa: "وینستون ایران چگونه استانداردهای سخت‌گیرانه بازاریابی مسئولانه را در تمام فعالیت‌های خود رعایت می‌کند.",
      en: "How Winston Iran upholds strict responsible-marketing standards across all of its activities.",
    },
    body: {
      fa: [
        "تمامی ارتباطات وینستون ایران صرفاً برای بزرگسالان بالای سن قانونی مصرف دخانیات طراحی شده است.",
        "این وب‌سایت دارای سامانه تأیید سن است و هیچ محتوایی برای افراد زیر سن قانونی در دسترس قرار نمی‌گیرد.",
        "ما از ارائه اطلاعات شفاف درباره ریسک‌های مصرف دخانیات حمایت می‌کنیم.",
      ],
      en: [
        "All Winston Iran communications are designed exclusively for adults of legal smoking age.",
        "This website includes an age-verification gate, and no content is accessible to underage visitors.",
        "We support clear, transparent information about the risks associated with tobacco use.",
      ],
    },
  },
  {
    slug: "winston-nova-launch",
    date: "2025-11-20",
    title: {
      fa: "معرفی خانواده وینستون نُوا",
      en: "Introducing the Winston Nova Family",
    },
    excerpt: {
      fa: "جدیدترین خانواده محصولات وینستون با طراحی به‌روزشده به مجموعه اضافه شد.",
      en: "The newest Winston product family arrives with an updated design to the collection.",
    },
    body: {
      fa: [
        "خانواده وینستون نُوا با هدف ارائه طراحی به‌روزتر و تنوع بیشتر به مجموعه محصولات وینستون اضافه شده است.",
        "این محصولات با همان استانداردهای کیفی وینستون تولید و توزیع می‌شوند.",
      ],
      en: [
        "The Winston Nova family joins the collection with an updated design language and broader variety.",
        "These products are manufactured and distributed to the same quality standards as every Winston line.",
      ],
    },
  },
];

export function getArticleBySlug(slug: string) {
  return news.find((a) => a.slug === slug);
}
