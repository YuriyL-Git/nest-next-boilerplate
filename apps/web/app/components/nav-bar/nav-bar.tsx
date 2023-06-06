"use client";

import { FC } from "react";
import { Dictionary } from "../../../i18n/get-dirctionary";
import Link from "next/link";
import LocaleSwitcher from "../locale-switcher/locale-switcher";
import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

interface Props {
  dictionary: Dictionary;
}

export const NavBar: FC<Props> = ({ dictionary }) => {
  const { NavBarStrings } = dictionary;

  return (
    <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
      <div className="flex items-center gap-10">
        <Link href={"/menu"} className="text-xs uppercase text-black">
          {NavBarStrings.Menu}
        </Link>
        <Link href={"/cart"} className="text-xs uppercase text-black">
          {NavBarStrings.Cart}
        </Link>
        <LocaleSwitcher />
        <Button onClick={() => signIn()}>Login</Button>
      </div>
    </nav>
  );
};
