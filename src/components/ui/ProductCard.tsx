"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PackVisual } from "./PackVisual";
import type { Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const locale = useLocale() as "fa" | "en";
  const t = useTranslations("products");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col items-center rounded-3xl border border-white/10 bg-charcoal/60 p-8 text-center transition-colors duration-300 hover:border-gold/40"
    >
      <PackVisual
        packColor={product.packColor}
        accent={product.accent}
        className="transition-transform duration-500 group-hover:-translate-y-2"
      />
      <h3 className="font-display mt-8 text-xl text-paper">{product.name[locale]}</h3>
      <p className="mt-2 text-sm text-paper/60">{product.tagline[locale]}</p>
      <Link
        href={{ pathname: "/products/[slug]", params: { slug: product.slug } }}
        className="mt-6 text-sm tracking-wide text-gold underline-offset-4 transition hover:underline"
      >
        {t("viewDetails")} {locale === "fa" ? "←" : "→"}
      </Link>
    </motion.div>
  );
}
