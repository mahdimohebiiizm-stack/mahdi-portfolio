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

              {/* Projects Dropdown */}
              <div className="relative group">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm sm:text-[15px] font-medium text-slate-200 hover:text-gold hover:bg-white/5 group-hover:text-gold group-hover:bg-white/5 active:bg-white/10 transition-all duration-300 tracking-wide"
                >
                  <span>{dict.projects}</span>
                  <svg
                    className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>

                {/* Dropdown Menu (Two-layer padding-bridge to eliminate hover dead zones) */}
                <div className="absolute top-full start-0 pt-4 hidden group-hover:block group-focus-within:block z-50">
                  <div className="flex flex-col min-w-[220px] bg-navy-light/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    <a
                      href="#projects"
                      className="hover:bg-white/5 px-4 py-3 transition-colors text-sm text-slate-200 hover:text-white"
                    >
                      All Projects
                    </a>
                    <a
                      href="https://github.com/mahdimohebiiizm-stack/elevator-ecosystem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-white/5 px-4 py-3 transition-colors text-gold hover:text-gold-light flex justify-between items-center text-sm border-t border-white/5"
                    >
                      <span>Elevator Ecosystem (Repo)</span>
                      <svg
                        className="w-4 h-4 text-gold/80 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
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
