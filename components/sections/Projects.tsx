import React from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import FadeInUp from "@/components/ui/motion/FadeInUp";

export interface Project {
  id: string;
  title: string;
  role: string;
  organization: string;
  description: readonly string[];
  techStack: readonly string[];
}

const PROJECTS: readonly Project[] = [
  {
    id: "elevator-eco",
    title: "Elevator Ecosystem",
    role: "Lead Full-Stack Developer & System Architect",
    organization: "A.manage / Shopbot",
    description: [
      "Architected an enterprise Monorepo integrating Next.js/FastAPI web portal and Flutter mobile app.",
      "Implemented Clean Architecture, BLoC, and offline-first queuing (FIFO).",
      "Engineered Single Source of Truth backend with PostgreSQL & RBAC.",
    ],
    techStack: ["Next.js", "FastAPI", "Flutter", "PostgreSQL", "Monorepo"],
  },
  {
    id: "asanro",
    title: "Corporate Web Platform",
    role: "Full-Stack Web Developer",
    organization: "Asanro Etminan Amir",
    description: [
      "Built a robust web frontend for an elevator installation enterprise.",
      "Translated brand requirements into a premium corporate aesthetic (Navy/Gold).",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "iot-telemetry",
    title: "IoT Telemetry System",
    role: "Hardware & Software Engineer",
    organization: "B.Sc. Thesis Project",
    description: [
      "Engineered IoT telemetry utilizing C++ (Arduino Edge Node) for high-speed signal extraction.",
      "Developed a cross-platform Flutter app with WebSocket integration for sub-50ms latency monitoring.",
    ],
    techStack: ["C++", "Arduino", "Flutter", "WebSockets"],
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    role: "Mobile Application Developer",
    organization: "Independent Project",
    description: [
      "Designed a high-performance productivity application built entirely with Flutter.",
      "Implemented reactive state management and robust local data handling.",
    ],
    techStack: ["Flutter", "Dart", "State Management"],
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 overflow-hidden">
      <Container>
        <FadeInUp>
          <SectionHeader
            title="پروژه‌های برجسته"
            accentWord="برجسته"
            subtitle="تجربیات سازمانی و معماری سیستم‌های مقیاس‌پذیر"
          />
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {PROJECTS.map((project, index) => (
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
