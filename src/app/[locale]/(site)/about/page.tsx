import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("intro") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const sections = t.raw("sections") as { title: string; body: string }[];
  const stats = t.raw("stats") as { value: string; label: string }[];

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
        <div className="grid gap-10 md:grid-cols-3">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 p-8">
              <h2 className="font-display text-xl text-paper">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-charcoal/30">
        <h2 className="font-display text-2xl text-paper">{t("statsTitle")}</h2>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl text-gold md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-paper/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
