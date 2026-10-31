import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(defaultBaseUrl),
  title: {
    default: "Mahdi Mohebi Nia | Portfolio",
    template: "%s | Mahdi Mohebi Nia",
  },
  description:
    "Full-Stack Developer, Software Architect & UI/UX Designer Portfolio specializing in Next.js, Flutter, and Clean Architecture.",
  keywords: [
    "Mahdi Mohebi Nia",
    "Software Architect",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Flutter",
    "FastAPI",
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
    title: "Mahdi Mohebi Nia | Portfolio",
    description:
      "Enterprise-Grade Full-Stack Developer & Software Architect Portfolio.",
    url: "/",
    siteName: "Mahdi Mohebi Nia Portfolio",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahdi Mohebi Nia | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahdi Mohebi Nia | Portfolio",
    description:
      "Enterprise-Grade Full-Stack Developer & Software Architect Portfolio.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
