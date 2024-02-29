import {Link, StyleSheet, Text, View} from '@react-pdf/renderer';
import type {ProjectEntry} from '../../../../../data/cv/types/CvData';
import {cvStyles} from '../../styles/CvStyles';

type ProjectSectionEntryProps = {
  project: ProjectEntry;
  containerStyle?: any;
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
          {props.project.name}
        </Link>
        <Text style={{marginHorizontal: '0.2cm'}}>{'\u2014'}</Text>
        {props.project.technologies.length > 0 && (
          <Text style={cvStyles.text.headings.h2}>
            {props.project.technologies.map((tech) => tech.name).join(', ')}
          </Text>
        )}
      </View>

      {props.project.lines.map((line) => (
        // A bit dirty way to get the key but eh, it should work except in edge cases
        <Text key={line.substring(0, 10)} style={styles.content}>
          {'- ' + line}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: cvStyles.text.fontSize.medium,
    marginBottom: cvStyles.text.spacing.lineSpacing,
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
});
