import { defineRouting } from "next-intl/routing";

export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "fa",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/age-gate": { fa: "/age-gate", en: "/age-gate" },
    "/about": { fa: "/about", en: "/about" },
    "/brand-story": { fa: "/brand-story", en: "/brand-story" },
    "/products": { fa: "/products", en: "/products" },
    "/products/[slug]": { fa: "/products/[slug]", en: "/products/[slug]" },
    "/news": { fa: "/news", en: "/news" },
    "/news/[slug]": { fa: "/news/[slug]", en: "/news/[slug]" },
    "/contact": { fa: "/contact", en: "/contact" },
    "/faq": { fa: "/faq", en: "/faq" },
    "/legal/privacy": { fa: "/legal/privacy", en: "/legal/privacy" },
    "/legal/terms": { fa: "/legal/terms", en: "/legal/terms" },
    "/legal/cookies": { fa: "/legal/cookies", en: "/legal/cookies" },
    "/legal/age-verification": {
      fa: "/legal/age-verification",
      en: "/legal/age-verification",
    },
  },
});
