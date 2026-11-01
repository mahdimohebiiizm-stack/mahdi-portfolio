"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import type { NavbarDict } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

interface NavbarProps {
  dict: NavbarDict;
  currentLang: Locale;
}

export default function Navbar({ dict, currentLang }: NavbarProps) {
  return (
    <header className="fixed top-0 start-0 w-full z-50 bg-navy-dark/70 backdrop-blur-xl border-b border-gold/10 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              {dict.brand}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </a>

          {/* Navigation Links, Language Switcher & Action */}
          <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <a
                href="#skills"
                className="px-4 py-2 rounded-full text-sm sm:text-[15px] font-medium text-slate-200 hover:text-gold hover:bg-white/5 active:bg-white/10 transition-all duration-300 tracking-wide"
              >
                {dict.skills}
              </a>
              <a
                href="#projects"
                className="px-4 py-2 rounded-full text-sm sm:text-[15px] font-medium text-slate-200 hover:text-gold hover:bg-white/5 active:bg-white/10 transition-all duration-300 tracking-wide"
              >
                {dict.projects}
              </a>
            </div>

            {/* Sleek Glassmorphic Language Switcher */}
            <LanguageSwitcher currentLang={currentLang} />

            {/* CTA Action Button */}
            <a href="#contact">
              <Button
                variant="outline"
                className="hidden sm:inline-flex py-2 px-5 text-sm font-medium"
              >
                {dict.contact}
              </Button>
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
