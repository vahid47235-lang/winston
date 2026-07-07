"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { ButtonEl } from "../ui/Button";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    name: z.string().min(2, t("errors.name")),
    email: z.string().email(t("errors.email")),
    subject: z.string().min(2, t("errors.subject")),
    message: z.string().min(10, t("errors.message")),
    ageConfirm: z.literal(true, { message: t("errors.age") }),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit() {
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center text-paper/85">
        {t("success")}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <input
          {...register("name")}
          placeholder={t("name")}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-sm text-paper outline-none focus:border-gold"
        />
        {errors.name && <p className="mt-1.5 text-xs text-winston-red">{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder={t("email")}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-sm text-paper outline-none focus:border-gold"
        />
        {errors.email && <p className="mt-1.5 text-xs text-winston-red">{errors.email.message}</p>}
      </div>

      <div>
        <input
          {...register("subject")}
          placeholder={t("subject")}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-sm text-paper outline-none focus:border-gold"
        />
        {errors.subject && <p className="mt-1.5 text-xs text-winston-red">{errors.subject.message}</p>}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder={t("message")}
          rows={5}
          className="w-full resize-none rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-sm text-paper outline-none focus:border-gold"
        />
        {errors.message && <p className="mt-1.5 text-xs text-winston-red">{errors.message.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-paper/70">
          <input type="checkbox" {...register("ageConfirm")} className="mt-1 accent-winston-red" />
          {t("ageConfirm")}
        </label>
        {errors.ageConfirm && (
          <p className="mt-1.5 text-xs text-winston-red">{errors.ageConfirm.message}</p>
        )}
      </div>

      <ButtonEl type="submit" disabled={isSubmitting} className="w-full">
        {t("submit")}
      </ButtonEl>
    </form>
  );
}
