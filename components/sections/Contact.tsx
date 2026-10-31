"use client";

import React, { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import {
  submitContactForm,
  type ContactActionState,
} from "@/app/actions/contact";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import FadeInUp from "@/components/ui/motion/FadeInUp";

const initialActionState: ContactActionState = {
  success: false,
};

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialActionState
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    React.startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (state.success) {
      reset();
    }
  }, [state.success, reset]);

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      <Container>
        <FadeInUp>
          <SectionHeader
            title="ارتباط و همکاری"
            accentWord="همکاری"
            subtitle="برای تبادل نظر فنی، مشاوره معماری یا آغاز پروژه‌های سازمانی، پیام بگذارید."
          />
        </FadeInUp>

        <FadeInUp delay={0.15} className="max-w-2xl mx-auto mt-14">
          <GlassCard className="p-8 md:p-10 border border-gold/20 shadow-2xl shadow-navy-dark/60">
            {state.success && (
              <div
                role="status"
                className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400 text-sm flex items-center gap-3"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-medium">{state.message}</span>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-6"
            >
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-slate-200"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="مثلاً: مهدی محبی نیا"
                  aria-invalid={Boolean(errors.name || state.errors?.name)}
                  aria-describedby={
                    errors.name || state.errors?.name
                      ? "name-error"
                      : undefined
                  }
                  {...register("name")}
                  className="w-full rounded-xl bg-navy/80 border border-gold/20 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
                {(errors.name?.message || state.errors?.name?.[0]) && (
                  <p
                    id="name-error"
                    className="text-xs text-rose-400 font-medium"
                  >
                    {errors.name?.message || state.errors?.name?.[0]}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-slate-200"
                >
                  آدرس ایمیل
                </label>
                <input
                  id="contact-email"
                  type="email"
                  dir="ltr"
                  placeholder="name@company.com"
                  aria-invalid={Boolean(errors.email || state.errors?.email)}
                  aria-describedby={
                    errors.email || state.errors?.email
                      ? "email-error"
                      : undefined
                  }
                  {...register("email")}
                  className="w-full rounded-xl bg-navy/80 border border-gold/20 px-4 py-3 text-left font-mono text-white placeholder-slate-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
                {(errors.email?.message || state.errors?.email?.[0]) && (
                  <p
                    id="email-error"
                    className="text-xs text-rose-400 font-medium"
                  >
                    {errors.email?.message || state.errors?.email?.[0]}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-slate-200"
                >
                  متن پیام
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="توضیحات در خصوص نیازمندی‌ها، ابعاد پروژه یا محوریت جلسه..."
                  aria-invalid={Boolean(
                    errors.message || state.errors?.message
                  )}
                  aria-describedby={
                    errors.message || state.errors?.message
                      ? "message-error"
                      : undefined
                  }
                  {...register("message")}
                  className="w-full rounded-xl bg-navy/80 border border-gold/20 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                />
                {(errors.message?.message ||
                  state.errors?.message?.[0]) && (
                  <p
                    id="message-error"
                    className="text-xs text-rose-400 font-medium"
                  >
                    {errors.message?.message ||
                      state.errors?.message?.[0]}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isPending}
                  className="w-full py-3.5 text-base font-bold flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin" />
                      <span>در حال ارسال پیام...</span>
                    </>
                  ) : (
                    <span>ارسال پیام</span>
                  )}
                </Button>
              </div>
            </form>
          </GlassCard>
        </FadeInUp>
      </Container>
    </section>
  );
}
