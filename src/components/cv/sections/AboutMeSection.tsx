import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {LanguageContext} from '../CvPdf';
import {cvGlobalStyles} from '../styles/CvGlobalStyles';

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
    fontFamily: cvGlobalStyles.text.fontFamily.headers,
    fontWeight: 500,
    fontSize: cvGlobalStyles.text.fontSize.large,
    marginBottom: cvGlobalStyles.text.spacing.headingMarginBottom,
    color: cvGlobalStyles.colors.primary,
    textAlign: 'center',
    marginHorizontal: 40,
  },
});
