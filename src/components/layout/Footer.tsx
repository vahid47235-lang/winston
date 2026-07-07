import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { WinstonLogo } from "./WinstonLogo";
import { Container } from "../ui/Container";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const counterfeit = useTranslations("counterfeit");

  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-16">
        <div className="rounded-2xl border border-winston-red/30 bg-winston-red/10 px-6 py-4 text-center text-sm leading-relaxed text-paper/85">
          {t("warning")}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <WinstonLogo />
            <p className="mt-4 max-w-xs text-sm text-paper/50">
              {t("disclaimer")}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-paper/40">
              {t("sections.explore")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about" className="text-paper/70 hover:text-gold">{nav("about")}</Link></li>
              <li><Link href="/brand-story" className="text-paper/70 hover:text-gold">{nav("brandStory")}</Link></li>
              <li><Link href="/products" className="text-paper/70 hover:text-gold">{nav("products")}</Link></li>
              <li><Link href="/news" className="text-paper/70 hover:text-gold">{nav("news")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-paper/40">
              {t("sections.legal")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/legal/privacy" className="text-paper/70 hover:text-gold">{t("legal.privacy")}</Link></li>
              <li><Link href="/legal/terms" className="text-paper/70 hover:text-gold">{t("legal.terms")}</Link></li>
              <li><Link href="/legal/cookies" className="text-paper/70 hover:text-gold">{t("legal.cookies")}</Link></li>
              <li><Link href="/legal/age-verification" className="text-paper/70 hover:text-gold">{t("legal.age")}</Link></li>
              <li><Link href="/counterfeit" className="text-paper/70 hover:text-gold">{counterfeit("title")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-paper/40">
              {t("sections.connect")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/contact" className="text-paper/70 hover:text-gold">{nav("contact")}</Link></li>
              <li><Link href="/faq" className="text-paper/70 hover:text-gold">{nav("faq")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-14" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-paper/40 md:flex-row">
          <span>© {new Date().getFullYear()} Winston. {t("rights")}</span>
          <span>{t("sections.legal")} · Winston Iran</span>
        </div>
      </Container>
    </footer>
  );
}
