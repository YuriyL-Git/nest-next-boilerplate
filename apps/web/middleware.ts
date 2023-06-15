import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "./i18n/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import publicFiles from "./i18n/public-files.gen.json";
import { DecryptToken } from "./lib/cookies/decrypt-token";
import { unprotectedRoutes, authRedirectRoute } from "@app/web/router";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (publicFiles.list.includes(pathname)) {
    return;
  }

  const token = request.cookies.get("token")?.value;
  const tokenPayload = token && (await DecryptToken(token));

  const isLocaleMissing = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  const locale = isLocaleMissing ? getLocale(request) : pathname.match(/(?<=^\/)../)?.[0];

  const isProtectedRoute = !unprotectedRoutes.includes(
    pathname.replace(new RegExp(`^(/${locale})`), ""),
  );

  if (!tokenPayload && isProtectedRoute) {
    return NextResponse.redirect(new URL(`/${locale}${authRedirectRoute}`, request.url));
  }

  if (isLocaleMissing) {
    const path = pathname.trim().startsWith("/") ? pathname : `/${pathname}`;
    return NextResponse.redirect(new URL(`/${locale}${path}`, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

function getLocale(request: NextRequest): string | undefined {
  const cookiesLocale = request.cookies.get("locale")?.value;
  const negotiatorHeaders: Record<string, string> = {};
  // @ts-ignore
  for (const [key, value] of request.headers.entries()) {
    negotiatorHeaders[key] = value;
  }
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // @ts-ignore
  const locales: string[] = i18n.locales;
  return cookiesLocale || matchLocale(languages, locales, i18n.defaultLocale);
}
