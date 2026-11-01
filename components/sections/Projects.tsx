import React from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import HighlightedText from "@/components/ui/HighlightedText";
import FadeInUp from "@/components/ui/motion/FadeInUp";
import type { ProjectsDict } from "@/lib/dictionary";

interface ProjectsProps {
  dict: ProjectsDict;
}

export default function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <Container>
        <FadeInUp>
          <SectionHeader
            title={dict.header.title}
            accentWord={dict.header.accentWord}
            subtitle={dict.header.subtitle}
          />
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 min-w-0 max-w-full">
          {dict.items.map((project, index) => {
            const projectLink =
              "githubUrl" in project && typeof project.githubUrl === "string" && project.githubUrl
                ? project.githubUrl
                : "link" in project && typeof project.link === "string" && project.link
                ? project.link
                : undefined;
            const demoLink =
              "liveUrl" in project && typeof project.liveUrl === "string" && project.liveUrl
                ? project.liveUrl
                : "demo" in project && typeof project.demo === "string" && project.demo
                ? project.demo
                : undefined;

            const descriptions = Array.isArray(project.description)
              ? project.description
              : typeof project.description === "string"
              ? [project.description]
              : [];

            return (
              <FadeInUp
                key={project.id}
                delay={index * 0.12}
                className="h-full min-w-0 max-w-full"
              >
                <GlassCard className="flex flex-col h-full justify-between p-5 sm:p-7 min-w-0 max-w-full border border-gold/15 transition-all duration-300 hover:border-gold/40">
                  <div>
                    {/* Card Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {projectLink ? (
                            <a
                              href={projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-gold transition-colors inline-flex items-center gap-2 group/title"
                            >
                              <span>{project.title}</span>
                              <svg
                                className="w-4 h-4 text-slate-400 group-hover/title:text-gold transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5"
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
                          ) : (
                            project.title
                          )}
                        </h3>

                        {demoLink ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 shrink-0 shadow-sm shadow-emerald-500/10">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span>{dict.productionBadge || "Production Live"}</span>
                          </span>
                        ) : projectLink ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-gold-light bg-gold/10 border border-gold/30 shrink-0 shadow-sm shadow-gold/10">
                            <span className="relative flex h-2 w-2">
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                            </span>
                            <span>{dict.publicRepoBadge || "Public Repo"}</span>
                          </span>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-semibold text-gold">
                          {project.role}
                        </span>
                        <span className="text-gold/40">•</span>
                        <span className="text-slate-400">
                          {project.organization}
                        </span>
                      </div>
                    </div>

                    {/* Card Body - Bulleted Descriptions */}
                    <div className="my-6">
                      <ul className="space-y-2.5 list-disc ps-5 marker:text-gold text-slate-300 text-sm leading-relaxed">
                        {descriptions.map((item, idx) => (
                          <li key={idx}>
                            <HighlightedText text={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer - Tech Stack & Primary CTA */}
                  <div className="pt-5 border-t border-gold/10 mt-auto flex flex-col gap-4">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-navy border border-navy-light text-xs text-slate-300 font-medium transition-colors hover:border-gold/30 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action CTA: Standardized Dual Split Button for ALL Projects */}
                    <div className="pt-2 relative group/split">
                      {/* Continuous Ambient Glow Animation */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-gold/30 via-emerald-500/20 to-gold/30 opacity-60 blur-sm group-hover/split:opacity-100 transition-opacity duration-300 animate-pulse -z-10"
                      />

                      <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-gold/30 bg-navy-light/90 shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-gold/20 divide-x rtl:divide-x-reverse divide-white/10">
                        {/* Half 1: Source Code (Always Active) */}
                        <a
                          href={projectLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-3 text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-navy-light/80 hover:bg-white/10 transition-colors group/repo min-w-0"
                        >
                          <svg
                            className="w-4 h-4 text-gold group-hover/repo:scale-110 group-hover/repo:text-gold-light transition-all duration-300 shrink-0"
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
                          <span className="truncate">{dict.sourceCode || "Source Code"}</span>
                        </a>

                        {/* Half 2: Live Demo (if active) OR View Details (subdued / README) */}
                        {demoLink ? (
                          <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-3 text-xs sm:text-sm font-bold text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 transition-colors group/demo min-w-0"
                          >
                            <span className="relative flex h-2 w-2 shrink-0">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            <span className="truncate">{dict.liveDemo || "Live Demo"}</span>
                            <svg
                              className="w-3.5 h-3.5 text-emerald-400 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 rtl:group-hover/demo:-translate-x-0.5 transition-transform duration-300 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ) : (
                          <a
                            href={`${projectLink}#readme`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-slate-400 hover:text-slate-200 bg-navy/60 hover:bg-white/10 transition-colors group/details min-w-0"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-slate-400 group-hover/details:text-gold transition-colors shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <span className="truncate">{dict.viewDetails || "View Details"}</span>
                            <svg
                              className="w-3.5 h-3.5 text-slate-500 group-hover/details:text-slate-300 group-hover/details:translate-x-0.5 group-hover/details:-translate-y-0.5 rtl:group-hover/details:-translate-x-0.5 transition-transform duration-300 shrink-0"
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
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeInUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
