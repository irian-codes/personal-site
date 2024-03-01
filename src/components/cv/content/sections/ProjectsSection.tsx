import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../../data/cv/CvData';
import {useTranslations} from '../../../../i18n/i18nUtils';
import {LanguageContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';
import {ProjectSectionEntry} from './components/ProjectSectionEntry';

type ProjectSectionProps = {
  containerStyle?: any;
};

export const ProjectsSection = (props: ProjectSectionProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>{t('cv.body.section.title.projects')}</Text>
      {data.content.projectSection.entries.map((entry) => (
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
