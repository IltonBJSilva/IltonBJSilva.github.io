import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { pt } from '../data/translations/pt';
import { en } from '../data/translations/en';
import { es } from '../data/translations/es';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof pt;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'pt';
  });

  const getTranslation = (lang: Language) => {
    switch (lang) {
      case 'en': return en;
      case 'es': return es;
      case 'pt':
      default: return pt;
    }
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: getTranslation(language) }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
