"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n/i18n-config";
import { useCallback } from "react";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleChange = useCallback(() => {
    router.refresh();
  }, [router]);

  return (
    <>
      {i18n.locales.map((locale) => {
        return (
          <Link key={locale} href={redirectedPathName(locale)} onClick={handleChange}>
            {locale}
          </Link>
        );
      })}
    </>
  );
}
