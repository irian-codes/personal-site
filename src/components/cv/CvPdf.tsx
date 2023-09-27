import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import {Header} from './header/Header';
import {cvGlobalStyles} from './styles/CvGlobalStyles';

export function CvPdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />

        <View style={styles.section}>
          <Text style={styles.h1}>About me</Text>
          <Text style={styles.content}>
            Highly skilled web developer with 5 years of experience in building
            responsive and user-friendly websites. Proficient in HTML, CSS,
            JavaScript, and React. Strong problem-solving and communication
            skills.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.h1}>Skills</Text>
          <Text style={styles.content}>
            - HTML5, CSS3, JavaScript, React, Node.js
          </Text>
          <Text style={styles.content}>- Responsive Web Design</Text>
          <Text style={styles.content}>- Version Control (Git)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.h1}>Education</Text>
          <Text style={styles.content}>
            Bachelor of Science in Computer Science, XYZ University
          </Text>
          <Text style={styles.content}>Graduated in 2015</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.h1}>Work Experience</Text>
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
              src={'http://localhost:4321/assets/images/qr-code.png'}
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
              <Text style={styles.h2WithGraphic}>
                Web Developer, ABC Company (2016 - Present)
              </Text>
            </View>
          </View>
          <Text style={styles.content}>
            - Developed and maintained company websites using React and Node.js
          </Text>
          <Text style={styles.content}>
            - Collaborated with cross-functional teams to deliver high-quality
            projects
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.h1}>Other</Text>
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
  h1: {...cvGlobalStyles.text.headings.h1},
  h2WithGraphic: {
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
