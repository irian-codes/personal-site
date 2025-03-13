import {Link, StyleSheet, Text, View} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import React from 'react';
import type {ProjectEntry} from '../../../../../data/cv/types/CvData';
import {cvStyles} from '../../styles/CvStyles';

type ProjectSectionEntryProps = {
  project: ProjectEntry;
  containerStyle?: Style;
};

export const ProjectSectionEntry = (props: ProjectSectionEntryProps) => {
  return (
    <View style={props.containerStyle}>
      <View style={styles.firstLineContainer}>
        <Link
          src={props.project.urls.get('repository') ?? ''}
          style={[
            cvStyles.text.headings.h2,
            {fontWeight: 'bold', textDecoration: 'none'},
          ]}
        >
          {props.project.name} (link)
        </Link>
        <Text style={{marginHorizontal: '0.2cm'}}>{'\u2014'}</Text>
        {props.project.technologies.length > 0 && (
          <Text style={cvStyles.text.headings.h2}>
            {props.project.technologies.map((tech) => tech.name).join(', ')}
          </Text>
        )}
      </View>

      <View style={styles.projectLinesContainer}>
        {props.project.lines.map((line, index) => (
          // A bit dirty way to get the key but eh, it should work except in edge cases
          <React.Fragment key={line.substring(0, 10)}>
            <Text style={styles.content}>{'- ' + line}</Text>

            {index !== props.project.lines.length - 1 && (
              <View style={{height: cvStyles.text.spacing.lineSpacing}} />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: cvStyles.text.fontSize.medium,
    textAlign: 'justify',
  },
  firstLineContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleLink: {
    ...cvStyles.text.headings.h2,
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  projectLinesContainer: {
    marginTop: '-0.1cm',
  },
});
