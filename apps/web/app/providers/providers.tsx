"use client";

import { FC, ReactNode } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
