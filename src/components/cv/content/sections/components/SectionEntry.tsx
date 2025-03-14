import {Link, StyleSheet, Text, View} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import React from 'react';
import {cvStyles} from '../../styles/CvStyles';

type SectionEntryProps = {
  title: string;
  titleUrl?: string;
  duration: string;
  place: string;
  location: string;
  lines: string[];
  containerStyle?: Style;
};

export const SectionEntry = (props: SectionEntryProps) => {
  return (
    <View style={props.containerStyle}>
      <View style={styles.titleRowContainer}>
        <View style={styles.firstLineContainer}>
          {props.titleUrl ? (
            <Link
              src={props.titleUrl}
              style={[
                cvStyles.text.headings.h2,
                {fontWeight: 'bold', textDecoration: 'none'},
              ]}
            >
              {props.title} (link)
            </Link>
          ) : (
            <Text style={[cvStyles.text.headings.h2, {fontWeight: 'bold'}]}>
              {props.title}
            </Text>
          )}
          <Text style={{marginHorizontal: '0.2cm'}}>{'\u2014'}</Text>
          <Text style={cvStyles.text.headings.h2}>{props.place}</Text>
        </View>
        <View style={styles.secondLineContainer}>
          <Text style={styles.h4}>{props.duration}</Text>
          <Text style={styles.secondLineSeparator}>{'|'}</Text>
          <Text style={styles.h4}>{`${props.location}`}</Text>
        </View>
      </View>
      {props.lines.map((line, index, linesArr) => (
        // A bit dirty way to get the key but eh, it should work except in edge cases
        <React.Fragment key={line.substring(0, 10)}>
          <Text style={styles.content}>{'- ' + line}</Text>

          {index !== linesArr.length - 1 && (
            <View style={{height: cvStyles.text.spacing.lineSpacing}} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  h4: {
    ...cvStyles.text.headings.h4,
    color: cvStyles.colors.primaryGray,
  },
  content: {
    fontSize: cvStyles.text.fontSize.medium,
    textAlign: 'justify',
  },
  titleRowContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginBottom: '0.5cm',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  firstLineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  secondLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '-0.15cm',
  },
  secondLineSeparator: {
    color: cvStyles.colors.primaryGray,
    fontSize: cvStyles.text.fontSize.medium,
    marginHorizontal: '0.2cm',
    marginTop: '-0.15cm',
  },
});
