"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const next = locale === "fa" ? "en" : "fa";

  return (
    <button
      type="button"
      aria-label={t("language")}
      onClick={() =>
        router.replace(
          // @ts-expect-error dynamic pathname with params
          { pathname, params },
          { locale: next },
        )
      }
      className={className}
    >
      {next === "fa" ? "فارسی" : "English"}
    </button>
  );
}
