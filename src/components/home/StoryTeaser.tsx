"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function StoryTeaser() {
  const t = useTranslations("home.story");

  return (
    <Section className="border-t border-white/10">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-winston-red/30 via-charcoal to-black ring-1 ring-white/10"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl tracking-[0.2em] text-white/10">
              1954
            </span>
          </div>
        </motion.div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-balance mt-4 text-3xl text-paper md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-paper/60">{t("body")}</p>
          <Button href="/brand-story" variant="secondary" className="mt-8">
            {t("cta")}
          </Button>
        </div>
      </div>
    </Section>
  );
}
