"use client";

import { FC } from "react";
import Link from "next/link";
import LocaleSwitcher from "../locale-switcher/locale-switcher";

import { useDictionary } from "../../hooks/use-dictionary";
import { Button } from "@mui/material";
import { useAppRouter } from "@app/web/router";

export const NavBar: FC = () => {
  const { NavBarStrings } = useDictionary();
  const { LoginWithIdPage } = useAppRouter();

  return (
    <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
      <div className="flex items-center gap-10">
        <Link href={"/menu"} className="text-xs uppercase text-black">
          {NavBarStrings.Menu}
        </Link>
        <LocaleSwitcher />
        <Button
          onClick={() =>
            LoginWithIdPage.navigate({
              id: "testid",
            })
          }
        >
          Move to login
        </Button>
      </div>
    </nav>
  );
};
