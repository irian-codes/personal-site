import type {ImageMetadata} from 'astro';
import caFlag from '../assets/images/flags/ca.png';
import enFlag from '../assets/images/flags/en.png';
import esFlag from '../assets/images/flags/es.png';
import caJson from './ca.json';
import enJson from './en.json';
import esJson from './es.json';

export type Languages = {
  en: {label: string; flagImage: ImageMetadata};
  es: {label: string; flagImage: ImageMetadata};
  ca: {label: string; flagImage: ImageMetadata};
};

export type LanguageTag = keyof Languages;

export const languages: Languages = {
  en: {label: 'English', flagImage: enFlag},
  es: {label: 'Español', flagImage: esFlag},
  ca: {label: 'Català', flagImage: caFlag},
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
