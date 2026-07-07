import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getArticleBySlug, news } from "@/data/news";
import { routing } from "@/i18n/routing";

type Locale = "fa" | "en";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    news.map((a) => ({ locale, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const l = locale as Locale;
  return { title: article.title[l], description: article.excerpt[l] };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "news" });

  return (
    <Section className="pt-32">
      <Button href="/news" variant="ghost" className="!px-0 !py-0">
        {t("backToNews")}
      </Button>

      <article className="mx-auto mt-10 max-w-2xl">
        <time className="text-xs uppercase tracking-widest text-paper/40">
          {t("publishedOn")}{" "}
          {new Date(article.date).toLocaleDateString(l === "fa" ? "fa-IR" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="font-display mt-4 text-3xl text-paper md:text-5xl">
          {article.title[l]}
        </h1>
        <div className="mt-8 space-y-5 leading-relaxed text-paper/70">
          {article.body[l].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </Section>
  );
}
