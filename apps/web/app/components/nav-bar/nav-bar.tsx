"use client";
import { FC } from "react";
import { Dictionary } from "../../../../i18n/getDirctionary";

interface Props {
  dictionary: Dictionary;
}

export const NavBar: FC<Props> = ({ dictionary }) => {
  const { NavBarStrings } = dictionary;

  return <>{NavBarStrings.Cart}</>;
};
