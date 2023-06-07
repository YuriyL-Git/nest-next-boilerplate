"use client";

import { FC, useEffect, useState } from "react";
import { Dictionary } from "../../../i18n/get-dirctionary";
import Link from "next/link";
import LocaleSwitcher from "../locale-switcher/locale-switcher";

import { gqlClient } from "../../../data-access/graphql-client";
import { Typography } from "@mui/material";

import { GetUsers } from "@next-nest-boilerplate/web/data-access-graphql";

interface Props {
  dictionary: Dictionary;
}

export const NavBar: FC<Props> = ({ dictionary }) => {
  const { NavBarStrings } = dictionary;
  const [users, setUsers] = useState<GetUsers["users"]>([]);
  useEffect(() => {
    gqlClient.GetUsers().then((res) => setUsers(res.users));
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
