import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../../data/cv/CvData';
import {LanguageContext} from '../../CvPdf';
import {headerStyles} from '../header/styles/HeaderStyles';
import {cvStyles} from '../styles/CvStyles';

type AboutMeSectionProps = {containerStyle?: any};

export const AboutMeSection = (props: AboutMeSectionProps) => {
  const langTag = useContext(LanguageContext);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={props.containerStyle}>
      {data.content.aboutSection.lines.map((line) => (
        <Text key={line.substring(0, 10)} style={styles.content}>
          {line}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontFamily: cvStyles.text.fontFamily.headers,
    fontSize: headerStyles.text.fontSize.medium,
    color: headerStyles.text.colors.primary,
    textAlign: 'left',
  },
});
