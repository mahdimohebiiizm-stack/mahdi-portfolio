"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 start-0 w-full z-50 bg-navy-dark/70 backdrop-blur-xl border-b border-gold/10 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo (RTL: right side) */}
          <a
            href="#hero"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              M.M.NIA
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </a>

          {/* Navigation Links & Action */}
          <nav className="flex items-center gap-6 md:gap-8">
            <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-slate-300">
              <a
                href="#skills"
                className="transition-colors hover:text-gold"
              >
                مهارت‌ها
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-gold"
              >
                پروژه‌ها
              </a>
            </div>

            {/* CTA Action Button */}
            <a href="#contact">
              <Button
                variant="outline"
                className="hidden sm:inline-flex py-2 px-4 text-sm"
              >
                تماس با من
              </Button>
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
