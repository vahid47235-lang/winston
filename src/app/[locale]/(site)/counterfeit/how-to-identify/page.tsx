import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "counterfeit.howToIdentify" });
  return { title: t("title"), description: t("intro") };
}

export default async function HowToIdentifyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "counterfeit.howToIdentify" });
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <Section className="pt-32">
      <Button href="/counterfeit" variant="ghost" className="!px-0 !py-0">
        {t("back")}
      </Button>

      <p className="mt-8 text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {t("eyebrow")}
      </p>
      <h1 className="font-display text-balance mt-4 max-w-3xl text-4xl text-paper md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60">{t("intro")}</p>

      <ol className="mt-12 max-w-2xl space-y-6">
        {items.map((item, i) => (
          <li key={item.title} className="flex gap-5">
            <span className="font-display shrink-0 text-2xl text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-display text-lg text-paper">{item.title}</h2>
              <p className="mt-1.5 leading-relaxed text-paper/60">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <Button href="/counterfeit/examples" className="mt-14">
        {t("cta")}
      </Button>
    </Section>
  );
}
