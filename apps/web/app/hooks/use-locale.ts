"use client";
import { usePathname } from "next/navigation";
import { i18n } from "../../i18n/i18n-config";

export const useLocale = () => {
  const pathname = usePathname();
  const locale =
    i18n.locales.find((_locale) => pathname.startsWith(`/${_locale}`)) ||
    i18n.defaultLocale;

  return {
    locale,
  };
};
