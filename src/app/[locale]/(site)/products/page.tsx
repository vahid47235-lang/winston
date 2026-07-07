import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { productLines, getProductsByLine, type ProductLine } from "@/data/products";

type Locale = "fa" | "en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("title"), description: t("intro") };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: "products" });
  const lines = Object.keys(productLines) as ProductLine[];

  return (
    <Section className="pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {t("eyebrow")}
      </p>
      <h1 className="font-display text-balance mt-4 max-w-3xl text-4xl text-paper md:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60">{t("intro")}</p>

      <div className="mt-16 space-y-20">
        {lines.map((line) => {
          const lineProducts = getProductsByLine(line);
          if (lineProducts.length === 0) return null;
          return (
            <div key={line}>
              <div className="flex items-center gap-4">
                <h2 className="font-display text-2xl text-paper">
                  {productLines[line].name[l]}
                </h2>
                <div className="gold-divider h-px flex-1" />
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {lineProducts.map((p, i) => (
                  <ProductCard key={p.slug} product={p} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
