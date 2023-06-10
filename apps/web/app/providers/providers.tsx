"use client";

import { createContext, FC, ReactNode } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Dictionary } from "../../i18n/get-dirctionary";

interface Props {
  children: ReactNode;
  dictionary: Dictionary;
}

export const DictionaryContext = createContext({});

export const Providers: FC<Props> = ({ children, dictionary }) => {
  return (
    <DictionaryContext.Provider value={dictionary}>
      <Provider store={store}>{children}</Provider>
    </DictionaryContext.Provider>
  );
};
