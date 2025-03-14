import {Link, StyleSheet, Text, View} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import React, {useContext} from 'react';
import type {ProjectEntry} from '../../../../../data/cv/types/CvData';
import {LocalizedDataContext} from '../../../CvPdf';
import {cvStyles} from '../../styles/CvStyles';

type ProjectSectionEntryProps = {
  project: ProjectEntry;
  containerStyle?: Style;
};

export const ProjectSectionEntry = (props: ProjectSectionEntryProps) => {
  const {t, data} = useContext(LocalizedDataContext);

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

      <View style={styles.secondLineContainer}>
        <Text style={styles.h4}>{t('cv.project.period')}</Text>
        <Text style={styles.h4}>{props.project.period}</Text>
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
  h4: {
    ...cvStyles.text.headings.h4,
    color: cvStyles.colors.primaryGray,
  },
  firstLineContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  secondLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '-0.15cm',
  },
  titleLink: {
    ...cvStyles.text.headings.h2,
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  projectLinesContainer: {
    marginTop: '0cm',
  },
});
