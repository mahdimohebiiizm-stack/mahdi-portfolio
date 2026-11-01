import React from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import HighlightedText from "@/components/ui/HighlightedText";
import FadeInUp from "@/components/ui/motion/FadeInUp";
import type { MindsetDict } from "@/lib/dictionary";

interface MindsetProps {
  dict: MindsetDict;
}

export default function Mindset({ dict }: MindsetProps) {
  const pillars = [
    {
      id: "zero-debt",
      title: dict.zeroDebtTitle,
      description: dict.zeroDebtDesc,
      badge: "Quality & Resilience",
      iconBorder: "border-gold/30 bg-gold/10 text-gold shadow-gold/20",
      accentGlow: "from-gold/20 via-transparent to-transparent",
      icon: (
        <svg
          className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
    {
      id: "offline-first",
      title: dict.offlineFirstTitle,
      description: dict.offlineFirstDesc,
      badge: "Edge Reliability",
      iconBorder: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-emerald-500/20",
      accentGlow: "from-emerald-500/20 via-transparent to-transparent",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="2" y1="2" x2="22" y2="22" />
          <path d="M8.5 16.5a5 5 0 0 1 7 0" />
          <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
          <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.82" />
          <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
          <path d="M5 13a10 10 0 0 1 5.24-2.76" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      ),
    },
    {
      id: "hardware-cloud",
      title: dict.hardwareCloudTitle,
      description: dict.hardwareCloudDesc,
      badge: "End-to-End Synergy",
      iconBorder: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-cyan-500/20",
      accentGlow: "from-cyan-500/20 via-transparent to-transparent",
      icon: (
        <svg
          className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M15 2v2" />
          <path d="M15 20v2" />
          <path d="M2 15h2" />
          <path d="M2 9h2" />
          <path d="M20 15h2" />
          <path d="M20 9h2" />
          <path d="M9 2v2" />
          <path d="M9 20v2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="mindset" className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"
      />

      <Container>
        <FadeInUp>
          <SectionHeader
            title={dict.sectionTitle}
            subtitle={dict.subtitle}
          />
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 sm:mt-16 min-w-0 max-w-full">
          {pillars.map((pillar, index) => (
            <FadeInUp
              key={pillar.id}
              delay={index * 0.12}
              className="h-full min-w-0 max-w-full"
            >
              <GlassCard className="group relative flex flex-col justify-between h-full p-6 sm:p-7 min-w-0 max-w-full bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-gold/30 hover:shadow-2xl hover:shadow-navy-dark/80 transition-all duration-300 overflow-hidden">
                {/* Subtle card top glow on hover */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-12 -start-12 w-32 h-32 rounded-full bg-gradient-to-br ${pillar.accentGlow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`}
                />

                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm ${pillar.iconBorder}`}
                    >
                      {pillar.icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    <HighlightedText text={pillar.description} />
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-gold/80">0{index + 1} {"//"} PILLAR</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                </div>
              </GlassCard>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
