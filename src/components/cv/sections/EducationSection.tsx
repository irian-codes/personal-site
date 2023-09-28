import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {LanguageContext} from '../CvPdf';
import {cvGlobalStyles} from '../styles/CvGlobalStyles';
import {SectionEntryWithIcon} from './entries/SectionEntryWithIcon';

// TODO: Replace with real data
const dummyData = [
  {
    title: "CS Master's Degree, University of XYZ (2016 - Present)",
    lines: [
      '- Studied Computer Science with a focus on Artificial Intelligence',
      '- Invented Award: Outstanding Innovator of the Year',
    ],
    iconSrc: 'http://localhost:4321/assets/images/qr-code.png',
  },
  {
    title: 'CS Bachelors Degree, University of XYZ (2015 - 2016)',
    lines: [
      '- Studied Computer Science with a focus on Artificial Intelligence',
      '- Invented Award: Outstanding Innovator of the Year',
    ],
    iconSrc: 'http://localhost:4321/assets/images/qr-code.png',
  },
];

type EducationSectionProps = {
  containerStyle?: any;
};

export const EducationSection = (props: EducationSectionProps) => {
  const langTag = useContext(LanguageContext);

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>Education</Text>
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
