import {StyleSheet, Text, View} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import {useContext} from 'react';
import {LocalizedDataContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';
import {SectionEntry} from './components/SectionEntry';

type WorkExperienceSectionProps = {
  containerStyle?: Style;
};

export const WorkExperienceSection = (props: WorkExperienceSectionProps) => {
  const {t, data} = useContext(LocalizedDataContext);

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>
        {t('cv.body.section.title.work-experience')}
      </Text>
      {data.workExperienceSection.entries
        .filter((entry) => !entry.hidden)
        .sort((a, b) => (a.id < b.id ? 1 : -1))
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
