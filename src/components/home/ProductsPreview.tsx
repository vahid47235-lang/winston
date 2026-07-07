"use client";

import { useTranslations } from "next-intl";
import { Section } from "../ui/Section";
import { ProductCard } from "../ui/ProductCard";
import { Button } from "../ui/Button";
import { products } from "@/data/products";

export function ProductsPreview() {
  const t = useTranslations("home.products");
  const featured = products.filter((p) => p.featured);

  return (
    <Section className="border-t border-white/10 bg-charcoal/30">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-3xl text-paper md:text-4xl">{t("title")}</h2>
          <p className="mt-3 text-paper/60">{t("subtitle")}</p>
        </div>
        <Button href="/products" variant="secondary">
          {t("cta")}
        </Button>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
