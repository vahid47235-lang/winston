import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WarningGraphic } from "@/components/counterfeit/WarningGraphic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "counterfeit.examples" });
  return { title: t("title"), robots: { index: false, follow: true } };
}

export default async function CounterfeitExamplesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "counterfeit.examples" });
  const points = t.raw("points") as string[];

  return (
    <Section className="pt-32">
      <Button href="/counterfeit/how-to-identify" variant="ghost" className="!px-0 !py-0">
        {t("back")}
      </Button>

      <p className="mt-8 text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {t("eyebrow")}
      </p>
      <h1 className="font-display text-balance mt-4 max-w-3xl text-4xl text-paper md:text-5xl">
        {t("title")}
      </h1>

      <div className="mx-auto mt-10 max-w-lg">
        <WarningGraphic label={t("warningBanner")} />
      </div>

      <ul className="mx-auto mt-10 max-w-xl space-y-4">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-paper/75">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
