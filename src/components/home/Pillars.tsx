"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "../ui/Section";

export function Pillars() {
  const t = useTranslations("home.pillars");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <Section className="border-t border-white/10">
      <h2 className="font-display text-balance max-w-xl text-3xl text-paper md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 p-8"
          >
            <span className="font-display text-3xl text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display mt-4 text-xl text-paper">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
