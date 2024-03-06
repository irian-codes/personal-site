import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {LocalizedDataContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';
import {SectionEntry} from './components/SectionEntry';

type EducationSectionProps = {
  containerStyle?: any;
};

export const EducationSection = (props: EducationSectionProps) => {
  const {t, data} = useContext(LocalizedDataContext);

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>{t('cv.body.section.title.education')}</Text>
      {data.content.educationSection.entries
        .filter((entry) => !entry.hidden)
        .sort((a, b) => (a.id < b.id ? 1 : -1))
        .map((entry) => (
          <SectionEntry
            key={entry.id}
            title={entry.title}
            duration={entry.period}
            place={entry.institution}
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
