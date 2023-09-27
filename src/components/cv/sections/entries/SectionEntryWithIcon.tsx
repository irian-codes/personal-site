import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {cvGlobalStyles} from '../../styles/CvGlobalStyles';

type SectionEntryWithIconProps = {
  title: string;
  lines: string[];
  iconSrc: string;
  containerStyle?: any;
};

export const SectionEntryWithIcon = (props: SectionEntryWithIconProps) => {
  return (
    <View style={props.containerStyle}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Image
          // TODO: Set the correct URL on deployment. The best way would probably be through environment variables.
          // We have to do it like this because the library doesn't accept local images easily.
          src={props.iconSrc}
          style={{
            height: '0.5cm',
            width: '0.5cm',
          }}
        />
        <View
          style={{
            borderLeft: '1px solid black',
            marginBottom: cvGlobalStyles.text.spacing.headingMarginBottom,
            marginLeft: '0.3cm',
          }}
        >
          <Text style={styles.h2WithIcon}>{props.title}</Text>
        </View>
      </View>
      {props.lines.map((line) => (
        // A bit dirty way to get the key but eh, it should work except in edge cases
        <Text key={line.substring(0, 10)} style={styles.content}>
          {line}
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
    transform: 'skew(-10deg, 0)', // For whatever reason 'fontStyle' is not working.
  },
  content: {
    fontSize: cvGlobalStyles.text.fontSize.medium,
    marginBottom: cvGlobalStyles.text.spacing.lineSpacing,
  },
});
