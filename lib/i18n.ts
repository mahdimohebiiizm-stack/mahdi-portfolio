export const locales = ["fa", "en", "ar", "zh", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fa";

export const rtlLocales: readonly Locale[] = ["fa", "ar"];

export function isRtlLang(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}

export interface LanguageMeta {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  dir: "rtl" | "ltr";
}

export const languages: Record<Locale, LanguageMeta> = {
  fa: {
    code: "fa",
    name: "Persian",
    nativeName: "فارسی",
    flag: "🇮🇷",
    dir: "rtl",
  },
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    dir: "ltr",
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦",
    dir: "rtl",
  },
  zh: {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    dir: "ltr",
  },
  ru: {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    dir: "ltr",
  },
};
