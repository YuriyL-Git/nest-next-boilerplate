"use client";

import { FC, ReactNode } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface Props {
  children: ReactNode;
  session: Session | null;
}

export const Providers: FC<Props> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};
