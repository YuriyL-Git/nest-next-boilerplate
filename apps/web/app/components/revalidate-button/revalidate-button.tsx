"use client";

import { FC } from "react";
import { Button } from "@mui/material";
import { nextApiRoute } from "@app/web/router";
import { i18n } from "../../../i18n/i18n-config";
import { usePathname } from "next/navigation";
import { useLocale } from "../../hooks/use-locale";

export const RevalidateButton: FC = () => {
  const pathName = usePathname();
  const { locale } = useLocale();

  const revalidatePath = async (path: string) => {
    await fetch(
      `${nextApiRoute}revalidate?` +
        new URLSearchParams({
          path,
        }),
    );
  };

  const handleRevalidate = async () => {
    const basePathName = pathName.replace(`/${locale}`, "");

    for (const _locale of i18n.locales) {
      const path = basePathName ? `/${_locale}${basePathName}` : `/${_locale}`;
      await revalidatePath(path);
    }
  };

  return <Button onClick={handleRevalidate}>Revalidate page</Button>;
};
