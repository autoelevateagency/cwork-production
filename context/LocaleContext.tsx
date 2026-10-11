"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { getDictionary, DEFAULT_LOCALE, type Dictionary, type Locale } from "@/data/dictionary";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
};

export const LocaleProvider = ({
  children,
  initialLocale = DEFAULT_LOCALE,
}: LocaleProviderProps): React.ReactElement => {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const dictionary = getDictionary(locale);

  return (
    <LocaleContext.Provider value={{ locale, dictionary, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
};
