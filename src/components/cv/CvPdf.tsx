import {Document, Page, StyleSheet} from '@react-pdf/renderer';
import {createContext} from 'react';
import {cvData} from '../../data/cv/CvData';
import type {CvData} from '../../data/cv/types/CvData';
import type {LanguageTag} from '../../i18n/i18n';
import {useTranslations} from '../../i18n/i18nUtils';
import {CvContent} from './content';
import {cvStyles} from './content/styles/CvStyles';
import {registerFonts} from './utils/Fonts';

registerFonts();

type LocalizedDataUtils = {
  t: ReturnType<typeof useTranslations>;
  data: CvData;
};

// @ts-expect-error value not initialized but it doesn't need to be
export const LocalizedDataContext = createContext<LocalizedDataUtils>();

export function CvPdf(langTag: LanguageTag) {
  const languageContextValue = {
    t: useTranslations(langTag),
    data: cvData.data.get(langTag)!,
  };

  return (
    <LocalizedDataContext.Provider value={languageContextValue}>
      <Document>
        <Page size="A4" style={styles.page}>
          <CvContent />
        </Page>
      </Document>
    </LocalizedDataContext.Provider>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    padding: '1cm',
    fontFamily: cvStyles.text.fontFamily.body,
  },
});
