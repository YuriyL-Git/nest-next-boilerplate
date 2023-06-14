"use client";

import { FC, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCookies } from "react-cookie";
import { i18n } from "./i18n-config";

interface Props {
  children: ReactNode;
}

export const LocaleProvider: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [, setCookie] = useCookies(["locale"]);
  useEffect(() => {
    const [, locale] = pathname.split("/");
    // @ts-ignore
    const isValidLocale = i18n.locales.includes(locale);
    setCookie("locale", isValidLocale ? locale : "", { path: "/" });
  }, [pathname, setCookie]);

  return <>{children}</>;
};
