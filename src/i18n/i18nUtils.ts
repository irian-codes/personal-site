import {defaultLanguageTag, translations, type LanguageTag} from './i18n';

/**
 * Translation hook to load i18n translations from JSON.
 *
 * @param {LanguageTag} lang - The language tag to use for translations of this instance.
 * @return {Function} A 't' function to use in the place of the text.
 */
export function useTranslations(lang: LanguageTag) {
  return function t(
    key: keyof (typeof translations)[typeof defaultLanguageTag]
  ) {
    return translations[lang][key] || translations[defaultLanguageTag][key];
  };
}
