import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "brandStory" });
  return { title: t("title"), description: t("intro") };
}

export default async function BrandStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "brandStory" });
  const chapters = t.raw("chapters") as { year: string; title: string; body: string }[];

  return (
    <>
      <Section className="pt-32 pb-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          {t("eyebrow")}
        </p>
        <h1 className="font-display text-balance mt-4 max-w-3xl text-4xl text-paper md:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60">{t("intro")}</p>
      </Section>

      <Section className="border-t border-white/10">
        <div className="relative space-y-14 border-s-2 border-white/10 ps-10 rtl:border-e-2 rtl:border-s-0 rtl:pe-10 rtl:ps-0">
          {chapters.map((c) => (
            <div key={c.year} className="relative">
              <span className="absolute -start-[3.15rem] top-1 h-3 w-3 rounded-full bg-gold rtl:-end-[3.15rem] rtl:start-auto" />
              <span className="text-sm font-medium tracking-widest text-gold">{c.year}</span>
              <h2 className="font-display mt-2 text-2xl text-paper">{c.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-paper/60">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
