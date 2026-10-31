import React from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import FadeInUp from "@/components/ui/motion/FadeInUp";

export interface SkillDomain {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: readonly string[];
}

const SKILL_DOMAINS: readonly SkillDomain[] = [
  {
    id: "frontend-uiux",
    title: "Frontend & UI/UX",
    description:
      "طراحی رابط‌های کاربری مدرن، بهینه‌سازی پرفورمنس رندرینگ و پیاده‌سازی دیزاین سیستم‌های مقیاس‌پذیر بر پایه استانداردهای روز.",
    icon: (
      <svg
        className="w-6 h-6 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      "Next.js",
      "React",
      "Tailwind v4",
      "TypeScript",
      "Clean Architecture",
      "UI/UX Design",
    ],
  },
  {
    id: "mobile-iot",
    title: "Mobile & IoT",
    description:
      "توسعه اپلیکیشن‌های چندسکویی با معماری BLoC، عملکرد آفلاین و مهندسی سیستم‌های سخت‌افزاری و امبدد.",
    icon: (
      <svg
        className="w-6 h-6 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      "Flutter",
      "Dart",
      "BLoC Pattern",
      "Offline-First",
      "C++",
      "Arduino / ESP32",
    ],
  },
  {
    id: "backend-architecture",
    title: "Backend & Architecture",
    description:
      "طراحی سرویس‌های با پایداری بالا، مهندسی دیتابیس‌های رابطه‌ای، امنیت سازمانی و پایپ‌لاین‌های خودکار استقرار.",
    icon: (
      <svg
        className="w-6 h-6 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    skills: [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Monorepo",
      "CI/CD",
      "Enterprise Security",
    ],
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 overflow-hidden">
      <Container>
        <FadeInUp>
          <SectionHeader
            title="تخصص و مهارت‌ها"
            accentWord="مهارت‌ها"
            subtitle="تسلط بر مدرن‌ترین ابزارهای توسعه نرم‌افزار با رویکرد Clean Architecture"
          />
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {SKILL_DOMAINS.map((domain, index) => (
            <FadeInUp
              key={domain.id}
              delay={index * 0.12}
              className="h-full"
            >
              <GlassCard className="flex flex-col justify-between h-full gap-6 p-7 border border-gold/15">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shadow-sm shadow-gold/10">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gold/10">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-navy border border-navy-light text-xs text-slate-300 font-medium transition-colors hover:border-gold/30 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
