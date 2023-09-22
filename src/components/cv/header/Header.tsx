import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {ContactDetail, type ContactType} from './ContactDetail';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
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
      <View style={{flex: 2}}>
        <Image
          // TODO: Set the correct URL on deployment. The best way would probably be through environment variables.
          // We have to do it like this because the library doesn't accept local images easily.
          src={'http://localhost:4321/assets/images/qr-code.png'}
          style={styles.applicantPhoto}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    color: 'black',
    flexDirection: 'row',
    padding: '0.5cm',
    height: '5cm',
  },
  centerColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
  },
  contactDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '0.5cm',
  },
  contactDetailContainer: {
    marginHorizontal: '0.5cm',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '0.5cm',
  },
  applicantPhoto: {
    height: '4cm',
    width: '4cm',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
