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

interface FeaturedProjectItem {
  name: string;
  demoUrl?: string;
  repoUrl?: string;
}

const FEATURED_PROJECTS: FeaturedProjectItem[] = [
  {
    name: "Elevator Ecosystem",
    demoUrl: "https://web-portal-ivory-nine.vercel.app/",
    repoUrl: "https://github.com/mahdimohebiiizm-stack/elevator-ecosystem",
  },
];

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

                {/* Dropdown Menu (Categorical & Scalable for 10+ projects) */}
                <div className="absolute top-full start-0 pt-4 hidden group-hover:block group-focus-within:block z-50">
                  <div className="flex flex-col min-w-[280px] bg-navy-light/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden divide-y divide-white/5">
                    {/* Primary Link: All Projects */}
                    <div className="p-1">
                      <a
                        href="#projects"
                        className="hover:bg-white/5 px-3.5 py-2.5 rounded-lg transition-colors text-sm text-slate-200 hover:text-white flex items-center justify-between"
                      >
                        <span className="font-medium">All Projects</span>
                        <span className="text-xs text-slate-500 font-mono">#projects</span>
                      </a>
                    </div>

                    {/* Category: Featured Live Demos */}
                    <div className="p-1">
                      <div className="px-3.5 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400/90 flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        <span>Featured Live Demos</span>
                      </div>
                      {FEATURED_PROJECTS.filter((p) => p.demoUrl).map((project) => (
                        <a
                          key={project.demoUrl}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-white/5 px-3.5 py-2 rounded-lg transition-colors text-emerald-400 hover:text-emerald-300 flex justify-between items-center text-xs sm:text-sm group/demo"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>{project.name}</span>
                          </div>
                          <svg
                            className="w-3.5 h-3.5 text-emerald-400/80 group-hover/demo:text-emerald-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 rtl:group-hover/demo:-translate-x-0.5 transition-transform shrink-0"
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
                      ))}
                    </div>

                    {/* Category: Source Repositories */}
                    <div className="p-1">
                      <div className="px-3.5 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-gold/90 flex items-center gap-1.5">
                        <svg
                          className="w-3 h-3 text-gold shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        <span>Source Repositories</span>
                      </div>
                      {FEATURED_PROJECTS.filter((p) => p.repoUrl).map((project) => (
                        <a
                          key={project.repoUrl}
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-white/5 px-3.5 py-2 rounded-lg transition-colors text-gold hover:text-gold-light flex justify-between items-center text-xs sm:text-sm group/repo"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            <span>{project.name}</span>
                          </div>
                          <svg
                            className="w-3.5 h-3.5 text-gold/80 group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5 rtl:group-hover/repo:-translate-x-0.5 transition-transform shrink-0"
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
                      ))}
                    </div>
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
