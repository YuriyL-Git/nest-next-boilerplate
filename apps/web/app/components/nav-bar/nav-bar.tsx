"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "../locale-switcher/locale-switcher";

import { gqlClient } from "../../common/data-access/graphql-client";
import { Typography } from "@mui/material";

import { GetUsers } from "@libs/web/data-access-graphql";
import { useDictionary } from "../../hooks/use-dictionary";

export const NavBar: FC = () => {
  const { NavBarStrings } = useDictionary();
  const [users, setUsers] = useState<GetUsers["users"]>([]);
  useEffect(() => {
    gqlClient
      .GetUsers()
      .then((res) => setUsers(res.users))
      .catch(console.log);
  }, []);

  return (
    <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
      <div className="flex items-center gap-10">
        <Link href={"/menu"} className="text-xs uppercase text-black">
          {NavBarStrings.Menu}
        </Link>
        <Link href={"/cart"} className="text-xs uppercase text-black">
          {NavBarStrings.Cart}
          <Typography>{JSON.stringify(users)}</Typography>
        </Link>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};
