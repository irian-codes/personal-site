import {Document, Page, StyleSheet, View} from '@react-pdf/renderer';
import {createContext} from 'react';
import type {LanguageTag} from '../../i18n/i18n';
import {Header} from './header/Header';
import {AboutMeSection} from './sections/AboutMeSection';
import {EducationSection} from './sections/EducationSection';
import {OtherSection} from './sections/OtherSection';
import {SkillsSection} from './sections/SkillsSection';
import {WorkExperienceSection} from './sections/WorkExperienceSection';
import {cvGlobalStyles} from './styles/CvGlobalStyles';
import {registerFonts} from './utils/Fonts';

registerFonts();
export const LanguageContext = createContext<LanguageTag>('en');

export function CvPdf(langTag: LanguageTag) {
  return (
    <LanguageContext.Provider value={langTag}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Header />

          <View style={styles.main}>
            <WorkExperienceSection />
            <EducationSection />
            <SkillsSection containerStyle={styles.section} />
            <AboutMeSection containerStyle={styles.section} />
            <OtherSection
              containerStyle={[styles.section, {marginBottom: 0}]}
            />
          </View>
        </Page>
      </Document>
    </LanguageContext.Provider>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: '1cm',
    fontFamily: cvGlobalStyles.text.fontFamily.body,
  },
  main: {
    marginTop: '1cm',
  },
  section: {
    marginBottom: '0.5cm',
  },
});
