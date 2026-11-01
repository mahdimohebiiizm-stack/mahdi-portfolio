"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, languages, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLang: Locale;
  className?: string;
}

function setLocaleCookie(locale: string) {
  if (typeof document !== "undefined") {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  }
}

export default function LanguageSwitcher({
  currentLang,
  className = "",
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const currentMeta = languages[currentLang] || languages.fa;

  // Close dropdown on outside click or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (targetLang: Locale) => {
    if (targetLang === currentLang) {
      setIsOpen(false);
      return;
    }

    // Persist language selection in cookie for 1 year
    setLocaleCookie(targetLang);

    // Calculate new path by replacing current locale prefix
    let newPath = `/${targetLang}`;
    if (pathname) {
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
        segments[0] = targetLang;
        newPath = `/${segments.join("/")}`;
      } else {
        newPath = `/${targetLang}${pathname === "/" ? "" : pathname}`;
      }
    }

    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-start ${className}`.trim()}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select Language"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-navy-light/40 hover:bg-navy-light/80 text-slate-200 text-xs font-medium backdrop-blur-md transition-all hover:border-gold/40 shadow-sm focus:outline-none focus:ring-1 focus:ring-gold"
      >
        <span className="text-sm leading-none" role="img" aria-hidden="true">
          {currentMeta.flag}
        </span>
        <span className="font-semibold uppercase tracking-wider text-gold-light">
          {currentMeta.code}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-gold" : ""
          }`}
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

      {/* Glassmorphic Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute top-full mt-2 end-0 z-50 w-44 rounded-xl border border-gold/25 bg-navy-dark/95 p-1.5 shadow-2xl shadow-navy-dark/90 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
        >
          {locales.map((code) => {
            const meta = languages[code];
            const isSelected = code === currentLang;

            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelectLanguage(code)}
                className={`flex items-center justify-between w-full px-3 py-2 text-xs rounded-lg transition-colors ${
                  isSelected
                    ? "bg-gold/15 text-gold font-bold border border-gold/30"
                    : "text-slate-300 hover:text-white hover:bg-navy-light/60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-sm leading-none"
                    role="img"
                    aria-hidden="true"
                  >
                    {meta.flag}
                  </span>
                  <span>{meta.nativeName}</span>
                </div>
                {isSelected ? (
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span className="text-[10px] uppercase font-mono text-slate-500">
                    {code}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
