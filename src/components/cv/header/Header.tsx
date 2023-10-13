import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {LanguageContext} from '../CvPdf';
import {ContactDetail, type ContactType} from './ContactDetail';
import {headerGlobalStyles} from './styles/HeaderGlobalStyles';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  const langTag = useContext(LanguageContext);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  const contactDetailsRow: ContactType[] = [
    'email',
    'linkedin',
    'repository',
    'location',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.firstRowContainer}>
        <View>
          <Image
            src={data.content.header.photoSrc}
            style={styles.applicantPhoto}
          />
        </View>
        <View>
          <Text style={styles.name}>
            {data.content.header.name + ' ' + data.content.header.surnames}
          </Text>
        </View>
        <View style={styles.qrContainer}>
          <Image
            src={data.content.header.websiteQrImageSrc}
            style={styles.qrImage}
          />
          <Text style={styles.websiteText}>
            {data.content.header.websiteUrl}
          </Text>
        </View>
      </View>

      {/* spacer */}
      <View style={{height: headerGlobalStyles.spacing.smallest}} />

      <View style={styles.secondRowContainer}>
        {contactDetailsRow.map((item) => (
          <ContactDetail
            key={item}
            type={item as ContactType}
            containerStyle={styles.contactDetailContainer}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: headerGlobalStyles.colors.background,
    color: headerGlobalStyles.text.colors.primary,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: headerGlobalStyles.spacing.small,
  },
  firstRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  centerColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  contactDetailContainer: {
    width: '4cm',
  },
  name: {
    fontSize: headerGlobalStyles.text.fontSize.name,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: headerGlobalStyles.spacing.small,
    fontFamily: headerGlobalStyles.text.fontFamily.name,
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
