import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import publicFiles from "./i18n/public-files.gen.json";
import { environment } from "@libs/shared/environement";
import { DecryptToken } from "./lib/cookies/decrypt-token";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  // @ts-ignore
  for (const [key, value] of request.headers.entries()) {
    negotiatorHeaders[key] = value;
  }

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
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

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    //pass i18n.defaultLocale to always redirect to default locale
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
