import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { FooterDict } from "@/lib/dictionary";

interface FooterProps {
  dict: FooterDict;
}

export default function Footer({ dict }: FooterProps) {
  const renderTitle = () => {
    if (dict.accentWord && dict.title.includes(dict.accentWord)) {
      const parts = dict.title.split(dict.accentWord);
      return (
        <>
          {parts[0]}
          <span className="text-gold">{dict.accentWord}</span>
          {parts.slice(1).join(dict.accentWord)}
        </>
      );
    }
    return dict.title;
  };

  return (
    <footer
      id="footer"
      className="border-t border-navy-light bg-navy-dark pt-16 pb-8 mt-20 relative overflow-hidden"
    >
      {/* Ambient Glow Blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-gold/5 blur-3xl -z-10"
      />

      <Container>
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">
            {dict.kicker}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {renderTitle()}
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {dict.description}
          </p>
          <div className="pt-2">
            <a href="mailto:contact@mahdimohebi.dev">
              <Button variant="primary" className="px-8 py-3.5">
                {dict.ctaBtn}
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold/10 pt-8 mt-16 text-xs sm:text-sm text-slate-500">
          <p>{dict.copyright}</p>
          <p className="font-mono text-xs text-slate-400">
            {dict.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
