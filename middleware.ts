import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

function getPreferredLocale(request: NextRequest): Locale {
  // 1. Check user explicit preference in cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Parse Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferences = acceptLanguage
      .split(",")
      .map((item) => {
        const [lang, qValue] = item.trim().split(";q=");
        return {
          lang: lang.trim().split("-")[0].toLowerCase(),
          q: qValue ? parseFloat(qValue) : 1.0,
        };
      })
      .sort((a, b) => b.q - a.q);

    for (const { lang } of preferences) {
      if (locales.includes(lang as Locale)) {
        return lang as Locale;
      }
    }
  }

  // 3. Fallback to default locale
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Check if pathname is missing a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Negotiate target locale and redirect
  const locale = getPreferredLocale(request);
  const redirectUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}${search}`,
    request.url
  );

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon)
     * - sw.js, manifest.json (PWA service worker & manifest)
     * - Any file path containing an extension (.svg, .png, .jpg, .xml, .txt, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sw.js|manifest.json|.*\\..*).*)",
  ],
};
