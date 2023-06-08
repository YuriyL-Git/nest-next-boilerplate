"use client";

import { useContext } from "react";
import { DictionaryContext } from "../providers/providers";

export const useDictionary = () => {
  return useContext(DictionaryContext);
};
