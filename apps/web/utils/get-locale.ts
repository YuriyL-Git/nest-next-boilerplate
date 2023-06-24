import { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { i18n } from "../i18n/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";

export function getLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isLocaleMissing = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (isLocaleMissing) {
    const cookiesLocale = request.cookies.get("locale")?.value;
    const negotiatorHeaders: Record<string, string> = {};
    // @ts-ignore
    for (const [key, value] of request.headers.entries()) {
      negotiatorHeaders[key] = value;
    }
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    // @ts-ignore
    const locales: string[] = i18n.locales;
    return {
      locale: cookiesLocale || matchLocale(languages, locales, i18n.defaultLocale),
      isLocaleMissing,
    };
  } else {
    return {
      locale: pathname.match(/(?<=^\/)../)?.[0],
      isLocaleMissing,
    };
  }
}
