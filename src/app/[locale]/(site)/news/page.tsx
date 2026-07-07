import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Link } from "@/i18n/navigation";
import { news } from "@/data/news";

type Locale = "fa" | "en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });
  return { title: t("title"), description: t("intro") };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: "news" });

  return (
    <Section className="pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {t("eyebrow")}
      </p>
      <h1 className="font-display text-balance mt-4 max-w-3xl text-4xl text-paper md:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60">{t("intro")}</p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {news.map((article) => (
          <Link
            key={article.slug}
            href={{ pathname: "/news/[slug]", params: { slug: article.slug } }}
            className="group block rounded-2xl border border-white/10 p-8 transition hover:border-gold/40"
          >
            <time className="text-xs uppercase tracking-widest text-paper/40">
              {new Date(article.date).toLocaleDateString(l === "fa" ? "fa-IR" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="font-display mt-3 text-xl text-paper transition group-hover:text-gold">
              {article.title[l]}
            </h2>
            <p className="mt-3 leading-relaxed text-paper/55">{article.excerpt[l]}</p>
            <span className="mt-4 inline-block text-sm text-gold">
              {t("readMore")} {l === "fa" ? "←" : "→"}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
