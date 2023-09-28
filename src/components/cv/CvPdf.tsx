import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {createContext} from 'react';
import type {LanguageTag} from '../../i18n/i18n';
import {useTranslations} from '../../i18n/i18nUtils';
import {Header} from './header/Header';
import {EducationSection} from './sections/EducationSection';
import {WorkExperienceSection} from './sections/WorkExperienceSection';
import {cvGlobalStyles} from './styles/CvGlobalStyles';

export const LanguageContext = createContext<LanguageTag>('en');

export function CvPdf(langTag: LanguageTag) {
  const t = useTranslations(langTag);

  return (
    <LanguageContext.Provider value={langTag}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Header />

          <View style={styles.main}>
            {/* About me section */}
            <View style={styles.section}>
              <Text style={styles.h1}>
                {t('cv.main.section.title.about-me')}
              </Text>
              <Text style={styles.content}>EMPTY</Text>
            </View>

            {/* Skills section */}
            <View style={styles.section}>
              <Text style={styles.h1}>{t('cv.main.section.title.skills')}</Text>
              <Text style={styles.content}>
                - HTML5, CSS3, JavaScript, React, Node.js
              </Text>
              <Text style={styles.content}>- Responsive Web Design</Text>
              <Text style={styles.content}>- Version Control (Git)</Text>
            </View>

            <EducationSection />
            <WorkExperienceSection />

            {/* Other section */}
            <View style={styles.section}>
              <Text style={styles.h1}>{t('cv.main.section.title.other')}</Text>
              <Text style={styles.content}>
                Languages Spoken: English, Spanish
              </Text>
              <Text style={styles.content}>Driving License: Yes</Text>
              <Text style={styles.content}>
                Invented Award: Outstanding Innovator of the Year
              </Text>
            </View>
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
  },
  main: {
    marginTop: '1cm',
  },
  section: {
    marginBottom: '0.5cm',
  },
  h1: {...cvGlobalStyles.text.headings.h1},
  h2WithIcon: {
    ...cvGlobalStyles.text.headings.h2,
    marginBottom: '0.1cm',
    marginLeft: '0.2cm',
    transform: 'skew(-10deg, 0)', // For whatever reason 'fontStyle' is not working.
  },
  content: {
    fontSize: cvGlobalStyles.text.fontSize.smallest,
    marginBottom: cvGlobalStyles.text.spacing.lineSpacing,
  },
});
