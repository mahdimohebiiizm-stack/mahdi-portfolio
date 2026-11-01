import React from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import FadeInUp from "@/components/ui/motion/FadeInUp";
import type { ProjectsDict } from "@/lib/dictionary";

interface ProjectsProps {
  dict: ProjectsDict;
}

export default function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-16 md:py-24 overflow-hidden">
      <Container>
        <FadeInUp>
          <SectionHeader
            title={dict.header.title}
            accentWord={dict.header.accentWord}
            subtitle={dict.header.subtitle}
          />
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {dict.items.map((project, index) => {
            const projectLink =
              "link" in project && typeof project.link === "string"
                ? project.link
                : undefined;

            return (
              <FadeInUp
                key={project.id}
                delay={index * 0.12}
                className="h-full"
              >
                <GlassCard className="flex flex-col h-full justify-between p-7 border border-gold/15">
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

                        {projectLink && (
                          <a
                            href={projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gold/25 bg-gold/10 text-gold-light hover:bg-gold/20 hover:border-gold/50 transition-all text-xs font-semibold shrink-0 group/repo shadow-sm"
                            aria-label={`View ${project.title} repository`}
                          >
                            <svg
                              className="w-4 h-4 text-slate-300 group-hover/repo:text-gold transition-colors"
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
                            <span>GitHub</span>
                          </a>
                        )}
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
                        {project.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer - Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gold/10 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-navy border border-navy-light text-xs text-slate-300 font-medium transition-colors hover:border-gold/30 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
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
