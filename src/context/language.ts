import { createContext, useContext } from 'react';
import type { Lang, Translation } from '../types';

export interface LanguageContextValue {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  t: Translation;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
