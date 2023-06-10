"use client";

import { useContext } from "react";
import { DictionaryContext } from "../providers/providers";
import { Dictionary } from "../../i18n/get-dirctionary";

export const useDictionary = () => {
  return useContext(DictionaryContext) as Dictionary;
};
