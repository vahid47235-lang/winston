import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { NewsPreview } from "@/components/home/NewsPreview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <>
      <Hero />
      <Pillars />
      <ProductsPreview />
      <StoryTeaser />
      <NewsPreview />
      <p className="border-t border-white/10 px-6 py-8 text-center text-xs text-paper/35">
        {t("legalNote")}
      </p>
    </>
  );
}
