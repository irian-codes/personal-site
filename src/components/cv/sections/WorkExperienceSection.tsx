import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {cvGlobalStyles} from '../styles/CvGlobalStyles';
import {SectionEntryWithIcon} from './entries/SectionEntryWithIcon';

// TODO: Replace with real data
const dummyData = [
  {
    title: 'Web Developer, ABC Company (2016 - Present)',
    lines: [
      '- Developed and maintained company websites using React and Node.js',
      '- Collaborated with cross-functional teams to deliver high-quality projects',
      '- Invented Award: Outstanding Innovator of the Year',
    ],
    iconSrc: 'http://localhost:4321/assets/images/qr-code.png',
  },
  {
    title: 'Web Developer, XYZ Company (2015 - 2016)',
    lines: [
      '- Developed and maintained company websites using React and Node.js',
      '- Collaborated with cross-functional teams to deliver high-quality projects',
      '- Invented Award: Outstanding Innovator of the Year',
    ],
    iconSrc: 'http://localhost:4321/assets/images/qr-code.png',
  },
];

type WorkExperienceSectionProps = {
  containerStyle?: any;
};

export const WorkExperienceSection = (props: WorkExperienceSectionProps) => {
  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>Work Experience</Text>
      {dummyData.map((entry) => (
        <SectionEntryWithIcon
          key={entry.title}
          title={entry.title}
          lines={entry.lines}
          iconSrc={entry.iconSrc}
          containerStyle={{
            marginBottom: cvGlobalStyles.text.sections.spacing.small,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {...cvGlobalStyles.text.headings.h1},
});
