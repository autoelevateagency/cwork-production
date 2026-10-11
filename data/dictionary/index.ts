import { en } from "./en";
import { ur } from "./ur";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  UR: ur,
};

export const DEFAULT_LOCALE: Locale = "EN";

export const getDictionary = (locale: Locale = DEFAULT_LOCALE): Dictionary => {
  return dictionaries[locale] ?? en;
};
