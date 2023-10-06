import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {createContext} from 'react';
import {cvData} from '../../data/cv/CvData';
import type {LanguageTag} from '../../i18n/i18n';
import {useTranslations} from '../../i18n/i18nUtils';
import {Header} from './header/Header';
import {EducationSection} from './sections/EducationSection';
import {WorkExperienceSection} from './sections/WorkExperienceSection';
import {SkillChip} from './sections/components/SkillChip';
import {cvGlobalStyles} from './styles/CvGlobalStyles';

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
                {t('cv.main.section.title.about-me')}
              </Text>
              <Text style={styles.content}>
                {data.content.aboutSection.lines.map((line) => line)}
              </Text>
            </View>

            {/* Skills section */}
            <View style={styles.section}>
              <Text style={styles.h1}>{t('cv.main.section.title.skills')}</Text>
              {data.content.skillsSection.skills.map((skill) => (
                <SkillChip
                  key={skill.id}
                  value={skill.name}
                  skillLevel={skill.level}
                />
              ))}
            </View>

            <WorkExperienceSection />
            <EducationSection />

            {/* Interests section */}
            <View style={styles.section}>
              <Text style={styles.h1}>
                {t('cv.main.section.title.interests')}
              </Text>
              {data.content.interestsSection.lines.map((line) => (
                <Text key={line.substring(0, 10)} style={styles.content}>
                  {'- ' + line}
                </Text>
              ))}
            </View>

            {/* Other section */}
            <View style={styles.section}>
              <Text style={styles.h1}>{t('cv.main.section.title.other')}</Text>
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
    // TODO: Instead of skew, use italics font, since 'fontStyle' doesn't work
    transform: 'skew(-10deg, 0)',
  },
  content: {
    fontSize: cvGlobalStyles.text.fontSize.smallest,
    marginBottom: cvGlobalStyles.text.spacing.lineSpacing,
  },
});
