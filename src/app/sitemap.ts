import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { products } from "@/data/products";
import { news } from "@/data/news";

const BASE = "https://winston-iran.example";

const staticPaths = [
  "",
  "/about",
  "/brand-story",
  "/products",
  "/news",
  "/contact",
  "/faq",
  "/counterfeit",
  "/counterfeit/how-to-identify",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
  "/legal/age-verification",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicPaths = [
    ...products.map((p) => `/products/${p.slug}`),
    ...news.map((a) => `/news/${a.slug}`),
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  return allPaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url:
        locale === routing.defaultLocale
          ? `${BASE}${path}`
          : `${BASE}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [
            l,
            l === routing.defaultLocale ? `${BASE}${path}` : `${BASE}/${l}${path}`,
          ]),
        ),
      },
    })),
  );
}
