"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import type { NavbarDict, ProjectsDict } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

interface NavbarProps {
  dict: NavbarDict;
  currentLang: Locale;
  projects?: ProjectsDict["items"];
}

export default function Navbar({
  dict,
  currentLang,
  projects = [],
}: NavbarProps) {
  return (
    <header className="fixed top-0 start-0 w-full z-50 bg-navy-dark/70 backdrop-blur-xl border-b border-gold/10 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-1.5 sm:gap-2 group transition-transform hover:scale-105 shrink-0"
          >
            <span className="font-extrabold text-base sm:text-xl tracking-wider bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              {dict.brand}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </a>

          {/* Navigation Links, Language Switcher & Action */}
          <nav className="flex items-center gap-1.5 sm:gap-3 md:gap-6 overflow-x-auto sm:overflow-visible max-w-full [&::-webkit-scrollbar]:hidden py-1">
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <a
                href="#skills"
                className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[15px] font-medium text-slate-200 hover:text-gold hover:bg-white/5 active:bg-white/10 transition-all duration-300 tracking-wide whitespace-nowrap"
              >
                {dict.skills}
              </a>

              {/* Projects Dropdown */}
              <div className="relative group">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[15px] font-medium text-slate-200 hover:text-gold hover:bg-white/5 group-hover:text-gold group-hover:bg-white/5 active:bg-white/10 transition-all duration-300 tracking-wide whitespace-nowrap"
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

                {/* Dropdown Menu (Dynamic, luxury card-based, untruncated & 100% i18n compliant) */}
                <div className="absolute top-full end-0 sm:end-auto sm:start-0 pt-4 hidden group-hover:block group-focus-within:block z-50">
                  <div className="flex flex-col w-[calc(100vw-2rem)] max-w-[400px] sm:w-[400px] bg-navy-light/95 backdrop-blur-2xl border border-gold/20 rounded-2xl shadow-2xl overflow-hidden p-2 gap-2">
                    {/* Step A: All Projects Header Link */}
                    <a
                      href="#projects"
                      className="hover:bg-white/5 px-3.5 py-2 rounded-xl transition-colors text-xs sm:text-sm font-semibold text-slate-200 hover:text-gold flex items-center justify-between group/all"
                    >
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span>{dict.allProjects}</span>
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover/all:text-gold rtl:rotate-180 group-hover/all:translate-x-0.5 rtl:group-hover/all:-translate-x-0.5 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>

                    {/* Step B: Subtle Horizontal Divider */}
                    {projects.length > 0 && (
                      <hr className="border-white/10 mx-1 -my-0.5" />
                    )}

                    {/* Step C: Dynamic Sleek & Airy Project Rows */}
                    <div className="flex flex-col gap-1.5">
                      {projects.map((project) => {
                        const projectLink =
                          ("githubUrl" in project &&
                            typeof project.githubUrl === "string" &&
                            project.githubUrl) ||
                          ("link" in project &&
                            typeof project.link === "string" &&
                            project.link) ||
                          "#projects";
                        const demoLink =
                          ("liveUrl" in project &&
                            typeof project.liveUrl === "string" &&
                            project.liveUrl) ||
                          ("demo" in project &&
                            typeof project.demo === "string" &&
                            project.demo) ||
                          undefined;
                        const releaseLink =
                          "releaseUrl" in project &&
                          typeof project.releaseUrl === "string" &&
                          project.releaseUrl
                            ? project.releaseUrl
                            : undefined;
                        const primaryActionUrl = demoLink || releaseLink || projectLink;
                        const isWeb = Boolean(demoLink);

                        return (
                          <div
                            key={project.id}
                            className="group/row relative flex flex-col gap-1.5 p-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                          >
                            {/* Project Header: Clean Untruncated Title */}
                            <span className="font-bold text-xs sm:text-sm text-white group-hover/row:text-gold transition-colors">
                              {project.title}
                            </span>

                            {/* Dual CTAs: Action Button (Live Demo with Smart Icon) + Source Button (GitHub) */}
                            <div className="flex items-center gap-2 pt-0.5">
                              {/* Action Button: Always Live Demo Style with Smart Icon Affordance */}
                              <a
                                href={primaryActionUrl}
                                target={
                                  primaryActionUrl.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  primaryActionUrl.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200 shadow-sm"
                              >
                                <span className="relative flex h-1.5 w-1.5 shrink-0">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                                </span>
                                <span>{dict.liveDemo}</span>
                                {isWeb ? (
                                  <svg
                                    className="w-3 h-3 text-emerald-400 shrink-0 group-hover/row:rotate-12 transition-transform duration-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                  >
                                    <circle cx="12" cy="12" r="10" />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-3 h-3 text-emerald-400 shrink-0 group-hover/row:scale-110 transition-transform duration-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                  >
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 18h.01"
                                      strokeWidth={2.5}
                                    />
                                  </svg>
                                )}
                              </a>

                              {/* Source Button: Always GitHub */}
                              <a
                                href={projectLink}
                                target={
                                  projectLink.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  projectLink.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 transition-all duration-200"
                              >
                                <svg
                                  className="w-3.5 h-3.5 text-gold shrink-0 transition-transform group-hover/row:scale-105"
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
                                <span>{dict.sourceCode}</span>
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sleek Glassmorphic Language Switcher */}
            <div className="shrink-0">
              <LanguageSwitcher currentLang={currentLang} />
            </div>

            {/* CTA Action Button (Accessible & Visible on all screens) */}
            <a href="#contact" className="shrink-0">
              <Button
                variant="outline"
                className="inline-flex py-1.5 sm:py-2 px-2.5 sm:px-5 text-xs sm:text-sm font-medium whitespace-nowrap"
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
