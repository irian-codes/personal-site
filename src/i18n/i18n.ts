import caJson from './ca.json';
import enJson from './en.json';
import esJson from './es.json';

export type Languages = {
  en: string;
  es: string;
  ca: string;
};

export type LanguageTag = keyof Languages;

export const languages: Languages = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
};

export const defaultLanguageTag = 'en';

export const translations = {
  en: {
    ...enJson,
  },
  es: {
    ...esJson,
  },
  ca: {
    ...caJson,
  },
} as const;
