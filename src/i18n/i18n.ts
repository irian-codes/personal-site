import cvEn from './cv/en.json';

export type Languages = {
  en: string;
  es: string;
  ca: string;
};

export type LanguageTags = keyof Languages;

export const languages: Languages = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
};

export const defaultLanguage = 'en';

export const translations = {
  en: {
    cv: cvEn,
  },
  es: {
    cv: undefined,
  },
  ca: {
    cv: undefined,
  },
} as const;
