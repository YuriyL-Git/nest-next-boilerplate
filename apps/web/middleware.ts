import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "./i18n/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import publicFiles from "./i18n/public-files.gen.json";
import { environment } from "@libs/shared/environement";
import { DecryptToken } from "./lib/cookies/decrypt-token";

function getLocale(request: NextRequest): string | undefined {
  const cookiesLocale = request.cookies.get("locale")?.value;
  const negotiatorHeaders: Record<string, string> = {};
  // @ts-ignore
  for (const [key, value] of request.headers.entries()) {
    negotiatorHeaders[key] = value;
  }
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return cookiesLocale || matchLocale(languages, locales, i18n.defaultLocale);
}

const { apiRoute } = environment;

const loginPageRoute = "login";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // @ts-ignore
  const token = request.cookies.get("token")?.value;
  const tokenPaload = token && (await DecryptToken(token));

  if (!tokenPaload && !pathname.endsWith(loginPageRoute)) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/${loginPageRoute}`, request.url));
  }

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  if (publicFiles.list.includes(pathname) || pathname.startsWith(`${apiRoute}`)) {
    return;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const path = pathname.trim().startsWith("/") ? pathname : `/${pathname}`;
    return NextResponse.redirect(new URL(`/${locale}${path}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
