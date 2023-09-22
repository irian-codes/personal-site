import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {ContactDetail, type ContactType} from './ContactDetail';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
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
  contactDetailContainer: {
    marginLeft: '1cm',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '0.3cm',
  },
});
