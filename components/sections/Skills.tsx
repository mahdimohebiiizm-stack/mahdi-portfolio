import React from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import HighlightedText from "@/components/ui/HighlightedText";
import FadeInUp from "@/components/ui/motion/FadeInUp";
import type { SkillsDict } from "@/lib/dictionary";

interface SkillsProps {
  dict: SkillsDict;
}

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  "frontend-uiux": (
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
  "mobile-ecosystem": (
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
  "mobile-iot": (
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
  "backend-architecture": (
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
  "hardware-iot": (
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
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  ),
};

export default function Skills({ dict }: SkillsProps) {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <Container>
        <FadeInUp>
          <SectionHeader
            title={dict.header.title}
            accentWord={dict.header.accentWord}
            subtitle={dict.header.subtitle}
          />
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 min-w-0 max-w-full">
          {dict.domains.map((domain, index) => (
            <FadeInUp
              key={domain.id}
              delay={index * 0.12}
              className="h-full min-w-0 max-w-full"
            >
              <GlassCard className="flex flex-col justify-between h-full gap-6 p-5 sm:p-6 min-w-0 max-w-full border border-gold/15">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shadow-sm shadow-gold/10">
                    {DOMAIN_ICONS[domain.id]}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <HighlightedText text={domain.description} />
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gold/10">
                  {domain.skills.map((skill) => {
                    const isArchitectureHighlight = skill === "Clean Architecture";
                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          isArchitectureHighlight
                            ? "bg-gold/15 border border-gold/40 text-gold font-bold shadow-sm shadow-gold/20 scale-[1.03]"
                            : "bg-navy border border-navy-light text-slate-300 hover:border-gold/30 hover:text-white"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </GlassCard>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
