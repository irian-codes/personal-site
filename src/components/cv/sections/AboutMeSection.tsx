import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {useTranslations} from '../../../i18n/i18nUtils';
import {LanguageContext} from '../CvPdf';
import {cvGlobalStyles} from '../styles/CvGlobalStyles';

type AboutMeSectionProps = {containerStyle?: any};

export const AboutMeSection = (props: AboutMeSectionProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>{t('cv.body.section.title.about-me')}</Text>
      <Text style={styles.content}>
        {data.content.aboutSection.lines.map((line) => line)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {...cvGlobalStyles.text.headings.h1},
  content: {
    fontSize: cvGlobalStyles.text.fontSize.small,
    marginBottom: cvGlobalStyles.text.spacing.lineSpacing,
  },
});
