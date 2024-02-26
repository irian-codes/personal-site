import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../../data/cv/CvData';
import {LanguageContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';

type AboutMeSectionProps = {containerStyle?: any};

export const AboutMeSection = (props: AboutMeSectionProps) => {
  const langTag = useContext(LanguageContext);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={props.containerStyle}>
      <Text style={styles.content}>
        {data.content.aboutSection.lines.map((line) => line)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontFamily: cvStyles.text.fontFamily.headers,
    fontSize: cvStyles.text.fontSize.small,
    color: cvStyles.colors.primary,
    textAlign: 'left',
  },
});
