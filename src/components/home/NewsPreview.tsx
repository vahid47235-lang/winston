"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Link } from "@/i18n/navigation";
import { news } from "@/data/news";

export function NewsPreview() {
  const t = useTranslations("home.news");
  const locale = useLocale() as "fa" | "en";

  return (
    <Section className="border-t border-white/10 bg-charcoal/30">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-3xl text-paper md:text-4xl">{t("title")}</h2>
        <Button href="/news" variant="ghost">
          {t("cta")} {locale === "fa" ? "←" : "→"}
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {news.slice(0, 3).map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              href={{ pathname: "/news/[slug]", params: { slug: article.slug } }}
              className="group block rounded-2xl border border-white/10 p-7 transition hover:border-gold/40"
            >
              <time className="text-xs uppercase tracking-widest text-paper/40">
                {new Date(article.date).toLocaleDateString(locale === "fa" ? "fa-IR" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="font-display mt-3 text-lg text-paper transition group-hover:text-gold">
                {article.title[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/55">
                {article.excerpt[locale]}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
