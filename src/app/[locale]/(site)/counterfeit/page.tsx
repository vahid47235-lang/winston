import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "counterfeit" });
  return { title: t("title"), description: t("intro") };
}

export default async function CounterfeitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "counterfeit" });
  const points = t.raw("points") as string[];

  return (
    <Section className="pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {t("eyebrow")}
      </p>
      <h1 className="font-display text-balance mt-4 max-w-3xl text-4xl text-paper md:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60">{t("intro")}</p>

      <ul className="mt-12 max-w-2xl space-y-4">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-paper/75">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-winston-red" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href="/counterfeit/how-to-identify">{t("ctaIdentify")}</Button>
        <Button href="/products" variant="secondary">
          {t("ctaProducts")}
        </Button>
      </div>
    </Section>
  );
}
