import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-navy-light bg-navy-dark pt-16 pb-8 mt-20 relative overflow-hidden"
    >
      {/* Ambient Glow Blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-gold/5 blur-3xl -z-10"
      />

      <Container>
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">
            LET&apos;S BUILD TOGETHER
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            توسعه راهکارهای نرم‌افزاری در کلاس{" "}
            <span className="text-gold">جهانی</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            تبدیل چالش‌های پیچیده‌ی کسب‌وکار به زیرساخت‌های امن، مقیاس‌پذیر و
            بی‌نقص. ما صرفاً کد نمی‌نویسیم؛ معماری‌های پایداری خلق می‌کنیم که
            آینده‌ی محصول شما را تضمین می‌کنند.
          </p>
          <div className="pt-2">
            <a href="mailto:contact@mahdimohebi.dev">
              <Button variant="primary" className="px-8 py-3.5">
                آغاز مذاکره فنی
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold/10 pt-8 mt-16 text-xs sm:text-sm text-slate-500">
          <p>© 2026 Mahdi Mohebi Nia</p>
          <p className="font-mono text-xs text-slate-400">
            Engineered with Next.js &amp; Clean Architecture
          </p>
        </div>
      </Container>
    </footer>
  );
}
