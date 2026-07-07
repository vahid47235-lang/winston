"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,16,46,0.18),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-winston-red/20 blur-[160px]"
      />
      <div
        aria-hidden
        className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[140px]"
      />

      <Container className="relative z-10 py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs font-medium tracking-[0.35em] text-gold uppercase"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-balance mt-6 max-w-3xl text-5xl leading-[1.1] text-paper md:text-7xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-paper/60 md:text-lg"
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/products">{t("cta")}</Button>
          <Button href="/brand-story" variant="secondary">
            {t("secondaryCta")}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
