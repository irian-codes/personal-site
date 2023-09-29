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

  const contactDetailsRowOne: ContactType[] = ['email', 'linkedin'];
  const contactDetailsRowTwo: ContactType[] = ['repository', 'location'];

  return (
    <View style={styles.container}>
      <View>
        <Image
          src={data.content.header.photoSrc}
          style={styles.applicantPhoto}
        />
      </View>
      <View style={styles.centerColumnContainer}>
        <View>
          <Text style={styles.name}>
            {data.content.header.name + ' ' + data.content.header.surnames}
          </Text>
        </View>
        {/* Using 2 rows because it's visually better */}
        <View style={styles.contactDetailsRow}>
          {contactDetailsRowOne.map((item) => (
            <ContactDetail
              key={item}
              type={item as ContactType}
              containerStyle={styles.contactDetailContainer}
            />
          ))}
        </View>
        <View style={styles.contactDetailsRow}>
          {contactDetailsRowTwo.map((item) => (
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
          src={data.content.header.websiteQrImageSrc}
          style={styles.qrImage}
        />
        <Text style={styles.websiteText}>{data.content.header.websiteUrl}</Text>
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
