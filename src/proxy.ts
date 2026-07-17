import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/dictionaries";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Legacy alias: old /kk links keep working, redirected to /kz
  if (pathname === "/kk" || pathname.startsWith("/kk/")) {
    request.nextUrl.pathname = pathname.replace(/^\/kk/, "/kz");
    return NextResponse.redirect(request.nextUrl);
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
