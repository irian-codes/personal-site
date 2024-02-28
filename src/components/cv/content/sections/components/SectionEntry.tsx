import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {cvStyles} from '../../styles/CvStyles';

type SectionEntryProps = {
  title: string;
  duration: string;
  place: string;
  location: string;
  lines: string[];
  containerStyle?: any;
};

export const SectionEntry = (props: SectionEntryProps) => {
  return (
    <View style={props.containerStyle}>
      <View style={styles.titleRowContainer}>
        <View style={styles.firstLineContainer}>
          <Text style={[cvStyles.text.headings.h2, {fontWeight: 'bold'}]}>
            {props.title}
          </Text>
          <Text style={{marginHorizontal: '0.2cm'}}>{'\u2014'}</Text>
          <Text style={cvStyles.text.headings.h2}>{props.place}</Text>
        </View>
        <View style={styles.secondLineContainer}>
          <Text style={styles.h4}>{props.duration}</Text>
          <Text style={styles.secondLineSeparator}>{'|'}</Text>
          <Text style={styles.h4}>{`${props.location}`}</Text>
        </View>
      </View>
      {props.lines.map((line) => (
        // A bit dirty way to get the key but eh, it should work except in edge cases
        <Text key={line.substring(0, 10)} style={styles.content}>
          {'- ' + line}
        </Text>
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
    marginBottom: cvStyles.text.spacing.lineSpacing,
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
