import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {createContext} from 'react';
import {cvData} from '../../data/cv/CvData';
import type {LanguageTag} from '../../i18n/i18n';
import {useTranslations} from '../../i18n/i18nUtils';
import {Header} from './header/Header';
import {EducationSection} from './sections/EducationSection';
import {SkillsSection} from './sections/SkillsSection';
import {WorkExperienceSection} from './sections/WorkExperienceSection';
import {cvGlobalStyles} from './styles/CvGlobalStyles';
import {registerFonts} from './utils/Fonts';

registerFonts();
export const LanguageContext = createContext<LanguageTag>('en');

export function CvPdf(langTag: LanguageTag) {
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <LanguageContext.Provider value={langTag}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Header />

          <View style={styles.main}>
            {/* About me section */}
            <View style={styles.section}>
              <Text style={styles.h1}>
                {t('cv.body.section.title.about-me')}
              </Text>
              <Text style={styles.content}>
                {data.content.aboutSection.lines.map((line) => line)}
              </Text>
            </View>

            <SkillsSection containerStyle={styles.section} />
            <WorkExperienceSection />
            <EducationSection />

            {/* Other section */}
            <View style={[styles.section, {marginBottom: 0}]}>
              <Text style={styles.h1}>{t('cv.body.section.title.other')}</Text>
              {data.content.otherSection.lines.map((line) => (
                <Text key={line.substring(0, 10)} style={styles.content}>
                  {'- ' + line}
                </Text>
              ))}
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
    fontFamily: cvGlobalStyles.text.fontFamily.body,
  },
  main: {
    marginTop: '1cm',
  },
  section: {
    marginBottom: '0.5cm',
  },
  h1: {...cvGlobalStyles.text.headings.h1},
  content: {
    fontSize: cvGlobalStyles.text.fontSize.small,
    marginBottom: cvGlobalStyles.text.spacing.lineSpacing,
  },
});
