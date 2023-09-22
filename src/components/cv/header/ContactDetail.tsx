import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';

export type ContactType = 'email' | 'location' | 'linkedin' | 'github';
type ContactDetailProps = {
  type: ContactType;
  containerStyle: any;
};

export const ContactDetail = (props: ContactDetailProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Image
        src={'http://localhost:4321/assets/images/dummy-cv-image.jpg'}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.label}>Lorem</Text>
        <Text style={styles.text}>Lorem ipsum</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: '1cm',
    height: '1cm',
    marginRight: '0.3cm',
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  text: {
    fontSize: 10,
  },
});
