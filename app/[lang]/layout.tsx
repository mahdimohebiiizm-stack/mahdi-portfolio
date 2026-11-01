import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/app/globals.css";
import { getDictionary } from "@/lib/dictionary";
import { locales, isRtlLang, type Locale, defaultLocale } from "@/lib/i18n";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

const defaultBaseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://mahdimohebinia.com";

export const viewport: Viewport = {
  themeColor: "#0B132B",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const validLang = (
    locales.includes(lang as Locale) ? lang : defaultLocale
  ) as Locale;
  const dict = await getDictionary(validLang);

  const title = "Mahdi Mohebi Nia | Portfolio";
  const description = dict.hero.description;

  return {
    metadataBase: new URL(defaultBaseUrl),
    title: {
      default: title,
      template: "%s | Mahdi Mohebi Nia",
    },
    description,
    keywords: [
      "Mahdi Mohebi Nia",
      "Software Architect",
      "Full-Stack Developer",
      "Next.js",
      "React",
      "Flutter",
      "FastAPI",
      "Python",
      "Arduino",
      "IoT",
      "Edge Computing",
      "Clean Architecture",
      "Tailwind CSS",
      "TypeScript",
      "مهدی محبی نیا",
      "معمار نرم‌افزار",
      "توسعه‌دهنده فول‌استک",
    ],
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "M.M.NIA",
    },
    openGraph: {
      title,
      description,
      url: `/${validLang}`,
      siteName: "Mahdi Mohebi Nia Portfolio",
      locale:
        validLang === "fa"
          ? "fa_IR"
          : validLang === "ar"
          ? "ar_SA"
          : validLang === "zh"
          ? "zh_CN"
          : validLang === "ru"
          ? "ru_RU"
          : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const validLang = (
    locales.includes(lang as Locale) ? lang : defaultLocale
  ) as Locale;
  const isRtl = isRtlLang(validLang);
  const dict = await getDictionary(validLang);

  return (
    <html
      lang={validLang}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${vazirmatn.variable} scroll-smooth`}
    >
      <body
        className={`${vazirmatn.className} min-h-screen flex flex-col font-sans`}
      >
        <Navbar dict={dict.navbar} currentLang={validLang} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
