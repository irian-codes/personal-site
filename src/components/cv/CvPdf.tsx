import {Document, Page, StyleSheet} from '@react-pdf/renderer';
import {createContext} from 'react';
import type {LanguageTag} from '../../i18n/i18n';
import {CvContent} from './content';
import {cvStyles} from './content/styles/CvStyles';
import {registerFonts} from './utils/Fonts';

registerFonts();
export const LanguageContext = createContext<LanguageTag>('en');

export function CvPdf(langTag: LanguageTag) {
  return (
    <LanguageContext.Provider value={langTag}>
      <Document>
        <Page size="A4" style={styles.page}>
          <CvContent />
        </Page>
      </Document>
    </LanguageContext.Provider>
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
