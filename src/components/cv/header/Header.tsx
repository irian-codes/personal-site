import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {ContactDetail, type ContactType} from './ContactDetail';

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
        <View style={{marginTop: '1cm'}}>
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {['email', 'linkedin', 'github', 'location'].map((item) => (
            <ContactDetail
              key={item}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactDetailContainer: {
    marginLeft: '1cm',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
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
