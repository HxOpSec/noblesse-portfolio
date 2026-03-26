"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

import { Lang, translations } from "@/lib/i18n";

type TranslationKey = keyof (typeof translations)["en"];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLang = localStorage.getItem("lang");
    if (savedLang === "en" || savedLang === "tj" || savedLang === "ru") {
      return savedLang;
    }

    return "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: (key) => translations[lang][key],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
