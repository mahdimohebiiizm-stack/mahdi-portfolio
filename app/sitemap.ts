import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://mahdimohebinia.com";

  return locales.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: lang === "fa" || lang === "en" ? 1.0 : 0.8,
  }));
}
