import {StyleSheet, Text, View} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import {useContext} from 'react';
import {LocalizedDataContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';

type OtherSectionProps = {containerStyle?: Style};

export const OtherSection = (props: OtherSectionProps) => {
  const {t, data} = useContext(LocalizedDataContext);

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>{t('cv.body.section.title.other')}</Text>
      {data.otherSection.lines.map((line) => (
        <Text key={line.substring(0, 10)} style={styles.content}>
          {'- ' + line}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {...cvStyles.text.headings.h1},
  content: {
    fontSize: cvStyles.text.fontSize.medium,
    marginBottom: cvStyles.text.spacing.lineSpacing,
  },
});
