import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../../data/cv/CvData';
import {useTranslations} from '../../../../i18n/i18nUtils';
import {LanguageContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';

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
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {...cvStyles.text.headings.h1},
});
