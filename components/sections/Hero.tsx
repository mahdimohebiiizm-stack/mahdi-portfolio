import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import StaggerContainer from "@/components/ui/motion/StaggerContainer";
import FadeInUp from "@/components/ui/motion/FadeInUp";
import FadeInScale from "@/components/ui/motion/FadeInScale";

export default function Hero() {
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
          {/* Content Column (RTL) */}
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
              <span>Available for Enterprise Projects</span>
            </div>

            {/* Main Typography */}
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              معمار نرم‌افزار و{" "}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
                توسعه‌دهنده فول‌استک
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              طراحی و پیاده‌سازی سیستم‌های مقیاس‌پذیر، امن و پرفورمنس‌محور مبتنی بر
              Clean Architecture، با تمرکز بر اکوسیستم‌های Next.js و Flutter در کلاس سازمانی.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="primary">مشاهده پروژه‌ها</Button>
              <Button variant="outline">دانلود رزومه</Button>
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
                  architect-profile.ts
                </span>
                <div className="w-10" />
              </div>

              {/* Terminal Content (LTR Strict) */}
              <div
                dir="ltr"
                className="p-5 text-left font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-300"
              >
                <p className="text-zinc-500">
                  {"// Enterprise Software Architect Profile"}
                </p>
                <p className="mt-2">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">profile</span> = &#123;
                </p>
                <p className="ps-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-amber-300">&quot;Mahdi Mohebi Nia&quot;</span>,
                </p>
                <p className="ps-4">
                  <span className="text-zinc-400">role:</span>{" "}
                  <span className="text-amber-300">&quot;Principal Architect&quot;</span>,
                </p>
                <p className="ps-4">
                  <span className="text-zinc-400">mindset:</span>{" "}
                  <span className="text-amber-300">&quot;Clean Architecture &amp; Zero Tech Debt&quot;</span>,
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
                  <span className="text-emerald-400">&quot;FastAPI&quot;</span>
                </p>
                <p className="ps-4">],</p>
                <p className="ps-4">
                  <span className="text-zinc-400">isAvailable:</span>{" "}
                  <span className="text-purple-400">true</span>
                </p>
                <p>&#125;;</p>

                <div className="mt-4 flex items-center gap-2 text-zinc-500">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-zinc-400">system initialized</span>
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
