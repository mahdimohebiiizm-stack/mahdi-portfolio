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
          {dict.items.map((project, index) => (
            <FadeInUp
              key={project.id}
              delay={index * 0.12}
              className="h-full"
            >
              <GlassCard className="flex flex-col h-full justify-between p-7 border border-gold/15">
                <div>
                  {/* Card Header */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
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
          ))}
        </div>
      </Container>
    </section>
  );
}
