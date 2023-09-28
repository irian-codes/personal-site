import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {Header} from './header/Header';
import {EducationSection} from './sections/EducationSection';
import {WorkExperienceSection} from './sections/WorkExperienceSection';
import {cvGlobalStyles} from './styles/CvGlobalStyles';

export function CvPdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />

        <View style={styles.main}>
          {/* About me section */}
          <View style={styles.section}>
            <Text style={styles.h1}>About me</Text>
            <Text style={styles.content}>
              Highly skilled web developer with 5 years of experience in
              building responsive and user-friendly websites. Proficient in
              HTML, CSS, JavaScript, and React. Strong problem-solving and
              communication skills.
            </Text>
          </View>

          {/* Skills section */}
          <View style={styles.section}>
            <Text style={styles.h1}>Skills</Text>
            <Text style={styles.content}>
              - HTML5, CSS3, JavaScript, React, Node.js
            </Text>
            <Text style={styles.content}>- Responsive Web Design</Text>
            <Text style={styles.content}>- Version Control (Git)</Text>
          </View>

          <EducationSection />
          <WorkExperienceSection />

          {/* Other section */}
          <View style={styles.section}>
            <Text style={styles.h1}>Other</Text>
            <Text style={styles.content}>
              Languages Spoken: English, Spanish
            </Text>
            <Text style={styles.content}>Driving License: Yes</Text>
            <Text style={styles.content}>
              Invented Award: Outstanding Innovator of the Year
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: '1cm',
  },
  main: {
    marginTop: '1cm',
  },
  section: {
    marginBottom: '0.5cm',
  },
  h1: {...cvGlobalStyles.text.headings.h1},
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
