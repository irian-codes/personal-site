import {
  defaultLanguageTag,
  languages,
  translations,
  type LanguageTag,
} from './i18n';

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
  const langTag = pathSegments.find((segment) =>
    Object.keys(languages).some((langTag) => langTag === segment)
  ) as LanguageTag;

  return langTag in translations ? langTag : defaultLanguageTag;
}

/**
 * Generates a new URL with the language switched to the new 'lang' parameter.
 *
 * @param {URL} url - The original URL.
 * @param {LanguageTag} lang - The new language tag.
 * @return {URL} The new URL with the language switched.
 */
export function switchUrlLang(url: URL, lang: LanguageTag): URL {
  const pathSegments = url.pathname
    .split('/')
    .filter((segment) => segment.trim().length > 0);

  // Remove the current language tag
  const filteredSegments = pathSegments.filter(
    (segment) => !Object.keys(languages).includes(segment)
  );

  const newLangTag = lang === defaultLanguageTag ? '' : lang;

  // Add the new language tag just after url.origin
  const newUrl = new URL(
    [url.origin, newLangTag, ...filteredSegments].join('/')
  );

  return newUrl;
}
