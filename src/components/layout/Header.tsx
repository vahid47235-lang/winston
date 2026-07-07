"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { WinstonLogo } from "./WinstonLogo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/brand-story", key: "brandStory" },
  { href: "/products", key: "products" },
  { href: "/news", key: "news" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-40 border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" onClick={() => setOpen(false)} aria-label={t("home")}>
          <WinstonLogo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={cn(
                "text-sm tracking-wide text-paper/75 transition hover:text-gold",
                pathname === l.href && "text-gold",
              )}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LocaleSwitcher className="text-sm tracking-wide text-paper/75 transition hover:text-gold" />
        </div>

        <button
          type="button"
          className="text-paper lg:hidden"
          aria-label={open ? t("close") : t("menu")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-white/10 lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-base text-paper/85 transition hover:bg-white/5 hover:text-gold",
                  pathname === l.href && "text-gold",
                )}
              >
                {t(l.key)}
              </Link>
            ))}
            <div className="mt-3 border-t border-white/10 pt-3">
              <LocaleSwitcher className="px-3 py-2 text-sm text-paper/75" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
