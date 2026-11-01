import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import HighlightedText from "@/components/ui/HighlightedText";
import StaggerContainer from "@/components/ui/motion/StaggerContainer";
import FadeInUp from "@/components/ui/motion/FadeInUp";
import FadeInScale from "@/components/ui/motion/FadeInScale";
import type { HeroDict } from "@/lib/dictionary";

interface HeroProps {
  dict: HeroDict;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Ambient Glow / Blur Blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="absolute top-1/4 -start-24 h-72 w-72 rounded-full bg-blue-900/20 blur-3xl lg:h-96 lg:w-96" />
        <div className="absolute bottom-1/4 -end-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl lg:h-96 lg:w-96" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <Container>
        <StaggerContainer className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Content Column */}
          <FadeInUp
            immediate
            delay={0.1}
            className="flex flex-col items-start gap-6 text-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold-light shadow-sm shadow-gold/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{dict.statusBadge}</span>
            </div>

            {/* Main Typography */}
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {dict.titlePrefix}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
                {dict.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              <HighlightedText text={dict.description} />
            </p>

            {/* Actions: Primary Dominant CTA vs Secondary Ghost CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" className="relative group inline-flex">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300 animate-pulse -z-10"
                />
                <Button
                  variant="primary"
                  className="relative font-bold text-navy-dark bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                >
                  {dict.projectsBtn}
                </Button>
              </a>
              {/* Grouped Resume Download Dropdown */}
              <div className="relative group/resume inline-block">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-label={dict.resumeBtn}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-navy/40 backdrop-blur-md text-sm font-medium text-slate-300 group-hover/resume:text-white group-hover/resume:border-gold/60 group-hover/resume:bg-white/5 active:bg-white/10 transition-all duration-300 cursor-pointer shadow-none hover:shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-gold shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>{dict.resumeBtn}</span>
                  <svg
                    className="w-3.5 h-3.5 text-slate-400 group-hover/resume:text-gold group-hover/resume:rotate-180 transition-transform duration-300"
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
                </button>

                {/* Dropdown Menu (Two-layer padding-bridge) */}
                <div className="absolute top-full start-0 pt-2 hidden group-hover/resume:block group-focus-within/resume:block z-50">
                  <div className="flex flex-col min-w-[210px] bg-navy-light/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5 divide-y divide-white/5">
                    {/* Option 1: PDF Version */}
                    <a
                      href="/Mahdi_Mohebi_Nia_Resume_ATS.pdf"
                      download="Mahdi_Mohebi_Nia_Resume_ATS.pdf"
                      className="hover:bg-white/5 px-3.5 py-2.5 rounded-lg transition-colors flex items-center justify-between text-xs sm:text-sm text-slate-200 hover:text-white group/pdf"
                    >
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-rose-400 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-2v1h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm5 0h-2v3h1v-1h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5zm-8-3h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-2.5v2.5H6.5v-6.5zm5 0h3.5c.83 0 1.5.67 1.5 1.5v3.5c0 .83-.67 1.5-1.5 1.5h-3.5v-6.5zm6 0h4v1.5H19v1h2v1.5h-2v2.5h-1.5v-6.5z" />
                        </svg>
                        <span className="font-medium">
                          {"resumePdf" in dict && typeof dict.resumePdf === "string"
                            ? dict.resumePdf
                            : "PDF Version"}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        PDF
                      </span>
                    </a>

                    {/* Option 2: Word (DOCX) */}
                    <a
                      href="/Mahdi_Mohebi_Nia_Resume_ATS.docx"
                      download="Mahdi_Mohebi_Nia_Resume_ATS.docx"
                      className="hover:bg-white/5 px-3.5 py-2.5 rounded-lg transition-colors flex items-center justify-between text-xs sm:text-sm text-slate-200 hover:text-white group/docx"
                    >
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-blue-400 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                        </svg>
                        <span className="font-medium">
                          {"resumeDocx" in dict && typeof dict.resumeDocx === "string"
                            ? dict.resumeDocx
                            : "Word (DOCX)"}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        DOCX
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Visual Column (Mock Terminal - LTR Strict) */}
          <FadeInScale immediate delay={0.25} className="w-full">
            <GlassCard className="relative p-0 overflow-hidden border border-gold/20 shadow-2xl shadow-navy-dark/80">
              {/* Terminal Window Header */}
              <div
                dir="ltr"
                className="flex items-center justify-between border-b border-gold/10 bg-navy/60 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  {dict.terminal.fileName}
                </span>
                <div className="w-10" />
              </div>

              {/* Terminal Content (LTR Strict) */}
              <div
                dir="ltr"
                className="p-5 text-left font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-300"
              >
                <p className="text-zinc-500">{dict.terminal.comment}</p>
                <p className="mt-2">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">profile</span> = &#123;
                </p>
                <p className="ps-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-amber-300">
                    &quot;{dict.terminal.name}&quot;
                  </span>
                  ,
                </p>
                <p className="ps-4">
                  <span className="text-zinc-400">role:</span>{" "}
                  <span className="text-amber-300">
                    &quot;{dict.terminal.role}&quot;
                  </span>
                  ,
                </p>
                <p className="ps-4">
                  <span className="text-zinc-400">mindset:</span>{" "}
                  <span className="text-amber-300">
                    &quot;{dict.terminal.mindset}&quot;
                  </span>
                  ,
                </p>
                <p className="ps-4">
                  <span className="text-zinc-400">stack:</span> [
                </p>
                <p className="ps-8">
                  <span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;React&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;Tailwind v4&quot;</span>,
                </p>
                <p className="ps-8">
                  <span className="text-emerald-400">&quot;Flutter&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;FastAPI&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;Python&quot;</span>,
                </p>
                <p className="ps-8">
                  <span className="text-emerald-400">&quot;Arduino&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;IoT&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;Edge Computing&quot;</span>
                </p>
                <p className="ps-4">],</p>
                <p className="ps-4">
                  <span className="text-zinc-400">isAvailable:</span>{" "}
                  <span className="text-purple-400">true</span>
                </p>
                <p>&#125;;</p>

                <div className="mt-4 flex items-center gap-2 text-zinc-500">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-zinc-400">
                    {dict.terminal.statusText}
                  </span>
                  <span className="h-4 w-2 animate-pulse bg-gold" />
                </div>
              </div>
            </GlassCard>
          </FadeInScale>
        </StaggerContainer>
      </Container>
    </section>
  );
}
