import {StyleSheet, Text, View} from '@react-pdf/renderer';

export type ContactType = 'email' | 'location' | 'linkedin' | 'github';
type ContactDetailProps = {
  type: ContactType;
  containerStyle: any;
};

export const ContactDetail = (props: ContactDetailProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={{fontWeight: 'bold', fontSize: 12}}>Lorem</Text>
      <Text style={{fontSize: 10}}>Lorem ipsum</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
