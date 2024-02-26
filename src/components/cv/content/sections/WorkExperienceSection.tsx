import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../../data/cv/CvData';
import {useTranslations} from '../../../../i18n/i18nUtils';
import {LanguageContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';
import {SectionEntry} from './components/SectionEntry';

type WorkExperienceSectionProps = {
  containerStyle?: any;
};

export const WorkExperienceSection = (props: WorkExperienceSectionProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>
        {t('cv.body.section.title.work-experience')}
      </Text>
      {data.content.workExperienceSection.entries
        .filter((entry) => !entry.hidden)
        .map((entry) => (
          <SectionEntry
            key={entry.id}
            title={entry.title}
            place={entry.company}
            duration={entry.period}
            location={entry.location}
            lines={entry.lines}
            containerStyle={{
              marginBottom: cvStyles.text.sections.spacing.smallest,
            }}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {...cvStyles.text.headings.h1},
});
