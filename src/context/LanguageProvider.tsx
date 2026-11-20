import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, Translation } from '../types';
import { pt } from '../data/translations/pt';
import { en } from '../data/translations/en';
import { es } from '../data/translations/es';
import { LanguageContext } from './language';

const translations: Record<Lang, Translation> = { pt, en, es };
const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
const STORAGE_KEY = 'language';

function isLang(value: unknown): value is Lang {
  return value === 'pt' || value === 'en' || value === 'es';
}

/** Idioma salvo > idioma do navegador > português. */
function initialLanguage(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* armazenamento indisponível (aba anônima, bloqueio) */
  }
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return isLang(browser) ? browser : 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Lang>(initialLanguage);
  const t = translations[language];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignora */
    }
    document.documentElement.lang = htmlLang[language];
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [language, t]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
