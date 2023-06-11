"use client";

import { FC } from "react";
import Link from "next/link";
import LocaleSwitcher from "../locale-switcher/locale-switcher";

import { useDictionary } from "../../hooks/use-dictionary";

export const NavBar: FC = () => {
  const { NavBarStrings } = useDictionary();

  return (
    <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
      <div className="flex items-center gap-10">
        <Link href={"/menu"} className="text-xs uppercase text-black">
          {NavBarStrings.Menu}
        </Link>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};
