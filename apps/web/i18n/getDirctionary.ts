import type { Locale } from "./i18nConfig";
import dictionary from "./dictionaries/ru.json";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default)
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = typeof dictionary;
