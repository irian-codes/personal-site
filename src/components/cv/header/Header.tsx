import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {ContactDetail, type ContactType} from './ContactDetail';
import {headerGlobalStyles} from './styles/HeaderGlobalStyles';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          // TODO: Set the correct URL on deployment. The best way would probably be through environment variables.
          // We have to do it like this because the library doesn't accept local images easily.
          src={'http://localhost:4321/assets/images/dummy-cv-image.jpg'}
          style={styles.applicantPhoto}
        />
      </View>
      <View style={styles.centerColumnContainer}>
        <View>
          <Text style={styles.name}>John Doe</Text>
        </View>
        {/* Using 2 rows because it's visually better */}
        <View style={styles.contactDetailsRow}>
          {['email', 'linkedin'].map((item) => (
            <ContactDetail
              key={item}
              type={item as ContactType}
              containerStyle={styles.contactDetailContainer}
            />
          ))}
        </View>
        <View style={styles.contactDetailsRow}>
          {['github', 'location'].map((item) => (
            <ContactDetail
              key={item}
              type={item as ContactType}
              containerStyle={styles.contactDetailContainer}
            />
          ))}
        </View>
      </View>
      <View style={styles.qrContainer}>
        <Image
          // TODO: Set the correct URL on deployment. The best way would probably be through environment variables.
          // We have to do it like this because the library doesn't accept local images easily.
          src={'http://localhost:4321/assets/images/qr-code.png'}
          style={styles.qrImage}
        />
        <Text style={styles.websiteText}>website.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: headerGlobalStyles.colors.background,
    color: headerGlobalStyles.text.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: headerGlobalStyles.spacing.small,
    height: '5cm',
  },
  centerColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: headerGlobalStyles.spacing.small,
  },
  contactDetailContainer: {
    width: '4cm',
  },
  name: {
    fontSize: headerGlobalStyles.text.fontSize.name,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: headerGlobalStyles.spacing.small,
  },
  applicantPhoto: {
    height: '4cm',
    width: '4cm',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  qrContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qrImage: {
    height: '3.5cm',
    width: '3.5cm',
  },
  websiteText: {
    fontSize: headerGlobalStyles.text.fontSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '0.1cm',
  },
});
