"use client";

import { createContext, FC, ReactNode } from "react";
import { store } from "../redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { Dictionary } from "../../i18n/get-dirctionary";
import { LocaleProvider } from "../../i18n/locale-provider";

interface Props {
  children: ReactNode;
  dictionary: Dictionary;
}

export const DictionaryContext = createContext({});

export const Providers: FC<Props> = ({ children, dictionary }) => {
  return (
    <DictionaryContext.Provider value={dictionary}>
      <LocaleProvider>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </LocaleProvider>
    </DictionaryContext.Provider>
  );
};
