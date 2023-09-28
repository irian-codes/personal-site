import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {LanguageContext} from '../CvPdf';
import {headerGlobalStyles} from './styles/HeaderGlobalStyles';

export type ContactType = 'email' | 'location' | 'linkedin' | 'github';
type ContactDetailProps = {
  type: ContactType;
  containerStyle: any;
};

export const ContactDetail = (props: ContactDetailProps) => {
  const langTag = useContext(LanguageContext);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Image
        // TODO: Set the correct URL on deployment. The best way would probably be through environment variables.
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
    marginRight: headerGlobalStyles.spacing.smallest,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: headerGlobalStyles.text.fontSize.medium,
  },
  text: {
    fontSize: headerGlobalStyles.text.fontSize.smallest,
  },
});
