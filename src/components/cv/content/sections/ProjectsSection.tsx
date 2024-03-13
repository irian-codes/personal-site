import {StyleSheet, Text, View} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import {useContext} from 'react';
import {LocalizedDataContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';
import {ProjectSectionEntry} from './components/ProjectSectionEntry';

type ProjectSectionProps = {
  containerStyle?: Style;
};

export const ProjectsSection = (props: ProjectSectionProps) => {
  const {t, data} = useContext(LocalizedDataContext);

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>{t('cv.body.section.title.projects')}</Text>
      {data.projectSection.entries.map((entry) => (
        <ProjectSectionEntry
          key={entry.id}
          project={entry}
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
