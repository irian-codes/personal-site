import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {LanguageContext} from '../CvPdf';
import {ContactDetail} from './ContactDetail';
import {headerGlobalStyles} from './styles/HeaderGlobalStyles';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  const langTag = useContext(LanguageContext);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  const ApplicantImageComponent = () => {
    if (data.content.header.photoSrc.length > 0) {
      return (
        <Image
          src={data.content.header.photoSrc}
          style={styles.applicantPhoto}
        />
      );
    } else {
      return <View style={styles.applicantPhoto} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstRowContainer}>
        <ApplicantImageComponent />
        <View style={styles.nameTitleContainer}>
          <Text style={styles.name}>
            {data.content.header.name + ' ' + data.content.header.surnames}
          </Text>
          <Text style={styles.position}>{data.content.header.position}</Text>
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
      <View style={{height: headerGlobalStyles.spacing.small}} />

      <View style={styles.secondRowContainer}>
        <ContactDetail type={'email'} containerStyle={{width: '5.75cm'}} />
        <ContactDetail type={'phone'} containerStyle={{width: '5.5cm'}} />
        <ContactDetail type={'linkedin'} containerStyle={{width: '6cm'}} />
        <ContactDetail
          type={'repository'}
          containerStyle={{width: '5.5cm', marginLeft: '0.25cm'}}
        />
        <ContactDetail type={'location'} containerStyle={{width: '4.5cm'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: headerGlobalStyles.text.colors.primary,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: headerGlobalStyles.spacing.small,
    paddingTop: headerGlobalStyles.spacing.smallest,
    backgroundColor: headerGlobalStyles.colors.background,
    borderColor: headerGlobalStyles.colors.border,
    borderWidth: 2,
    borderRadius: 10,
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
    alignItems: 'flex-start',
    width: '100%',
  },
  nameTitleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  name: {
    fontSize: headerGlobalStyles.text.fontSize.name,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: headerGlobalStyles.text.fontFamily.name,
  },
  position: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-0.2cm',
    marginBottom: headerGlobalStyles.spacing.small,
    fontFamily: headerGlobalStyles.text.fontFamily.name,
  },
  applicantPhoto: {
    height: '3cm',
    width: '3cm',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'center',
  },
  qrContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  qrImage: {
    height: '2.5cm',
    width: '2.5cm',
  },
  websiteText: {
    fontSize: headerGlobalStyles.text.fontSize.smallest,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '0.1cm',
  },
});
