import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PackVisual } from "@/components/ui/PackVisual";
import { ProductCard } from "@/components/ui/ProductCard";
import { getProductBySlug, products } from "@/data/products";
import { routing } from "@/i18n/routing";

type Locale = "fa" | "en";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const l = locale as Locale;
  return { title: product.name[l], description: product.tagline[l] };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: "products" });
  const sameLine = products.filter((p) => p.slug !== slug && p.line === product.line);
  const others = products.filter((p) => p.slug !== slug && p.line !== product.line);
  const related = [...sameLine, ...others].slice(0, 3);

  return (
    <>
      <Section className="pt-32">
        <Button href="/products" variant="ghost" className="!px-0 !py-0">
          {t("backToProducts")}
        </Button>

        <div className="mt-10 grid items-start gap-16 md:grid-cols-2">
          <div className="flex justify-center">
            <PackVisual packColor={product.packColor} accent={product.accent} className="max-w-xs" />
          </div>
          <div>
            <h1 className="font-display text-4xl text-paper md:text-5xl">
              {product.name[l]}
            </h1>
            <p className="mt-3 text-lg text-gold">{product.tagline[l]}</p>
            <p className="mt-6 leading-relaxed text-paper/65">{product.description[l]}</p>

            <h2 className="font-display mt-10 text-lg text-paper">{t("specs")}</h2>
            <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {product.specs.map((s) => (
                <div key={s.label[l]} className="flex justify-between py-3 text-sm">
                  <dt className="text-paper/50">{s.label[l]}</dt>
                  <dd className="text-paper/85">{s.value[l]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-charcoal/30">
        <h2 className="font-display text-2xl text-paper">{t("relatedTitle")}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
