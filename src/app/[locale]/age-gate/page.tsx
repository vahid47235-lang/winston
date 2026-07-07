import { getTranslations, setRequestLocale } from "next-intl/server";
import { AgeGateScreen } from "@/components/age-gate/AgeGateScreen";
import { isSafeRedirectTarget } from "@/lib/ageGate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ageGate" });
  return { title: t("title"), robots: { index: false, follow: false } };
}

export default async function AgeGatePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { locale } = await params;
  const { redirect } = await searchParams;
  setRequestLocale(locale);

  const fallback = locale === "en" ? "/en" : "/";
  const redirectTo = redirect && isSafeRedirectTarget(redirect) ? redirect : fallback;

  return <AgeGateScreen redirectTo={redirectTo} locale={locale} />;
}
