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

/**
 * Returns the language tag extracted from the given URL pathname.
 *
 * @param {URL} url - The URL object from which to extract the language tag.
 * @return {LanguageTag} The language tag extracted from the URL pathname, if not found it returns the default language.
 */
export function getLangFromUrl(url: URL): LanguageTag {
  const pathSegments = url.pathname.split('/');
  const langTag = pathSegments[1] as LanguageTag;

  return langTag in translations ? langTag : defaultLanguageTag;
}
