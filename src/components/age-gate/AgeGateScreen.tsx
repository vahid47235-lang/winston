"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ageGateConfig } from "@/lib/ageGate";

function isSafeRedirectTarget(target: string): boolean {
  if (!target.startsWith("/")) return false;
  if (target.startsWith("//")) return false;
  if (target.includes("://")) return false;
  return true;
}

export function AgeGateScreen({
  redirectTo,
  locale,
}: {
  redirectTo: string;
  locale: string;
}) {
  const t = useTranslations("ageGate");
  const [checked, setChecked] = useState(!ageGateConfig.requireCheckbox);
  const [pending, setPending] = useState(false);

  async function handleConfirm() {
    if (ageGateConfig.requireCheckbox && !checked) return;
    setPending(true);
    try {
      await fetch("/api/age-verify", { method: "POST" });
    } finally {
      const target = `${redirectTo}${window.location.hash}`;
      const safeTarget = isSafeRedirectTarget(target) ? target : locale === "en" ? "/en" : "/";
      window.location.href = safeTarget;
    }
  }

  function handleLeave() {
    window.location.href = ageGateConfig.leaveWebsiteUrl;
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,16,46,0.22),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-winston-red/20 blur-[160px]"
      />
      <div
        aria-hidden
        className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-gold/10 blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md text-center"
      >
        <span className="font-display select-none text-2xl font-semibold tracking-[0.3em] text-white">
          WINSTON
        </span>

        <h1 className="font-display mt-8 text-2xl text-paper md:text-3xl">{t("title")}</h1>
        <p className="mt-4 text-sm leading-relaxed text-paper/65">{t("description")}</p>
        <p className="mt-4 text-xs leading-relaxed text-paper/40">{t("legalNotice")}</p>

        {ageGateConfig.requireCheckbox && (
          <label className="mt-6 flex items-start gap-3 text-start text-sm text-paper/70">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-1 accent-winston-red"
            />
            {t("checkboxLabel")}
          </label>
        )}

        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleConfirm}
            disabled={pending || (ageGateConfig.requireCheckbox && !checked)}
            className="inline-flex items-center justify-center rounded-full bg-winston-red px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_8px_30px_-8px_rgba(200,16,46,0.6)] transition-all duration-300 ease-out hover:bg-winston-red-dim disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t("primaryButton")}
          </button>
          <button
            type="button"
            onClick={handleLeave}
            className="text-xs text-paper/40 underline-offset-4 transition hover:text-paper/70 hover:underline"
          >
            {t("secondaryButton")}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
