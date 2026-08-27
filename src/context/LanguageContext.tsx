import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../translations';

// Language context contract
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.sv;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Context provider managing active locale and persistence
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial language preference from localStorage or fallback to Swedish
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'sv' || saved === 'en') ? saved : 'sv';
  });

  // Persist language selection on change
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  // Sync document lang attribute for accessibility and SEO
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Retrieve active translation dictionary
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to consume language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

