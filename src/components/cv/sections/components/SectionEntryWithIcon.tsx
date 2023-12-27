import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {cvGlobalStyles} from '../../styles/CvGlobalStyles';

type SectionEntryWithIconProps = {
  title: string;
  subtitle?: string;
  lines: string[];
  iconSrc: string;
  containerStyle?: any;
};

export const SectionEntryWithIcon = (props: SectionEntryWithIconProps) => {
  return (
    <View style={props.containerStyle}>
      <View style={styles.titleRowContainer}>
        <Image src={props.iconSrc} style={styles.icon} />
        <View style={styles.titleContainer}>
          <Text style={styles.h2WithIcon}>{props.title}</Text>
          <Text style={styles.h3WithIcon}>{props.subtitle}</Text>
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
  h2WithIcon: {
    ...cvGlobalStyles.text.headings.h2,
    marginBottom: '0.1cm',
    marginLeft: '0.2cm',
    fontStyle: 'italic',
  },
  h3WithIcon: {
    ...cvGlobalStyles.text.headings.h3,
    marginBottom: '0.1cm',
    marginLeft: '0.2cm',
  },
  icon: {
    height: '1cm',
    width: '1cm',
    borderRadius: '50%',
  },
  content: {
    fontSize: cvGlobalStyles.text.fontSize.small,
    marginBottom: cvGlobalStyles.text.spacing.lineSpacing,
  },
  titleRowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    borderLeft: '1px solid black',
    marginBottom: '0.5cm',
    marginLeft: '0.3cm',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
