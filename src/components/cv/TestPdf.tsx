import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {ContactDetail, type ContactType} from './ContactDetail';

export default function TestPdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            backgroundColor: 'gray',
            color: 'black',
            flexDirection: 'row',
          }}
        >
          <View>
            <Text>MY PHOTO</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={styles.name}>John Doe</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              {['email', 'linkedin', 'github', 'location'].map((item) => (
                <ContactDetail
                  type={item as ContactType}
                  containerStyle={styles.contactDetailContainer}
                />
              ))}
            </View>
          </View>
          <View>
            <Text>MY WEBSITE QR</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.content}>Web Developer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Summary</Text>
          <Text style={styles.content}>
            Highly skilled web developer with 5 years of experience in building
            responsive and user-friendly websites. Proficient in HTML, CSS,
            JavaScript, and React. Strong problem-solving and communication
            skills.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.content}>
            Bachelor of Science in Computer Science, XYZ University
          </Text>
          <Text style={styles.content}>Graduated in 2015</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
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
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.content}>
            - HTML5, CSS3, JavaScript, React, Node.js
          </Text>
          <Text style={styles.content}>- Responsive Web Design</Text>
          <Text style={styles.content}>- Version Control (Git)</Text>
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
    backgroundColor: '#ffffff',
    padding: '1cm',
  },
  section: {
    marginBottom: '0.5cm',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '0.3cm',
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
  contactDetailContainer: {
    marginLeft: '1cm',
  },
});
