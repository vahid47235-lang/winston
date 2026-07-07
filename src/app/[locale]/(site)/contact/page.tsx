import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("intro") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <Section className="pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {t("eyebrow")}
      </p>
      <h1 className="font-display text-balance mt-4 max-w-2xl text-4xl text-paper md:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/60">{t("intro")}</p>

      <div className="mt-16 grid gap-14 md:grid-cols-2">
        <ContactForm />
        <div>
          <h2 className="font-display text-lg text-paper">{t("info.title")}</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-paper/40">{t("eyebrow")}</dt>
              <dd className="mt-1 text-paper/85">{t("info.address")}</dd>
            </div>
            <div>
              <dt className="text-paper/40">Email</dt>
              <dd className="mt-1 text-paper/85" dir="ltr">{t("info.email")}</dd>
            </div>
            <div>
              <dt className="text-paper/40">Phone</dt>
              <dd className="mt-1 text-paper/85" dir="ltr">{t("info.phone")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
