import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {useTranslations} from '../../../i18n/i18nUtils';
import {LanguageContext} from '../CvPdf';
import {cvGlobalStyles} from '../styles/CvGlobalStyles';

type OtherSectionProps = {containerStyle?: any};

export const OtherSection = (props: OtherSectionProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>{t('cv.body.section.title.other')}</Text>
      {data.content.otherSection.lines.map((line) => (
        <Text key={line.substring(0, 10)} style={styles.content}>
          {'- ' + line}
        </Text>
      ))}
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
