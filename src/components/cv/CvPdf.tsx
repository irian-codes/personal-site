import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {Header} from './header/Header';

export function CvPdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />

        <View style={styles.section}>
          <Text style={styles.heading}>About me</Text>
          <Text style={styles.content}>
            Highly skilled web developer with 5 years of experience in building
            responsive and user-friendly websites. Proficient in HTML, CSS,
            JavaScript, and React. Strong problem-solving and communication
            skills.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.content}>
            - HTML5, CSS3, JavaScript, React, Node.js
          </Text>
          <Text style={styles.content}>- Responsive Web Design</Text>
          <Text style={styles.content}>- Version Control (Git)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.content}>
            Bachelor of Science in Computer Science, XYZ University
          </Text>
          <Text style={styles.content}>Graduated in 2015</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Work Experience</Text>
          <Text style={styles.content}>
            Web Developer, ABC Company (2016 - Present)
          </Text>
          <Text style={styles.content}>
            - Developed and maintained company websites using React and Node.js
          </Text>
          <Text style={styles.content}>
            - Collaborated with cross-functional teams to deliver high-quality
            projects
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Other</Text>
          <Text style={styles.content}>Languages Spoken: English, Spanish</Text>
          <Text style={styles.content}>Driving License: Yes</Text>
          <Text style={styles.content}>
            Invented Award: Outstanding Innovator of the Year
          </Text>
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
  section: {
    marginBottom: '0.5cm',
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: '0.3cm',
    textDecoration: 'underline',
  },
  content: {
    fontSize: 12,
    marginBottom: '0.2cm',
  },
});
