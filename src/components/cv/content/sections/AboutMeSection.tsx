import {StyleSheet, Text, View} from '@react-pdf/renderer';
import React, {useContext} from 'react';
import {LocalizedDataContext} from '../../CvPdf';
import {headerStyles} from '../header/styles/HeaderStyles';
import {cvStyles} from '../styles/CvStyles';

type AboutMeSectionProps = {containerStyle?: any};

export const AboutMeSection = (props: AboutMeSectionProps) => {
  const {t, data} = useContext(LocalizedDataContext);

  return (
    <View style={props.containerStyle}>
      {data.aboutSection.lines.map((line, index, linesArr) => (
        <React.Fragment key={line.substring(0, 10)}>
          <Text style={styles.content}>{line}</Text>

          {index !== linesArr.length - 1 && (
            <View style={{height: cvStyles.text.spacing.lineSpacing}} />
          )}
        </React.Fragment>
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
