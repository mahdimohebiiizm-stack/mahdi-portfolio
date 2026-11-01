import type { Locale } from "@/lib/i18n";
import { defaultLocale, locales } from "@/lib/i18n";

const dictionaries: Record<
  Locale,
  () => Promise<typeof import("@/dictionaries/fa.json")>
> = {
  fa: () => import("@/dictionaries/fa.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  ar: () => import("@/dictionaries/ar.json").then((m) => m.default),
  zh: () => import("@/dictionaries/zh.json").then((m) => m.default),
  ru: () => import("@/dictionaries/ru.json").then((m) => m.default),
};

export async function getDictionary(locale: string) {
  const targetLocale = (
    locales.includes(locale as Locale) ? locale : defaultLocale
  ) as Locale;
  return dictionaries[targetLocale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
export type NavbarDict = Dictionary["navbar"];
export type HeroDict = Dictionary["hero"];
export type MindsetDict = Dictionary["mindset"];
export type SkillsDict = Dictionary["skills"];
export type ProjectsDict = Dictionary["projects"];
export type ContactDict = Dictionary["contact"];
export type FooterDict = Dictionary["footer"];
