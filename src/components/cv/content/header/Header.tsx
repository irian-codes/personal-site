import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {LocalizedDataContext} from '../../CvPdf';
import {AboutMeSection} from '../sections/AboutMeSection';
import {cvStyles} from '../styles/CvStyles';
import {ContactDetail} from './ContactDetail';
import {headerStyles} from './styles/HeaderStyles';

export const Header = () => {
  const {t, data} = useContext(LocalizedDataContext);

  const ApplicantImageComponent = () => {
    if (data.header.photoSrc.length > 0) {
      return <Image src={data.header.photoSrc} style={styles.applicantPhoto} />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstColumnContainer}>
        <View style={styles.photoAndTextContainer}>
          <ApplicantImageComponent />

          <View>
            <Text style={styles.name}>
              {data.header.name + ' ' + data.header.surnames}
            </Text>
            <Text style={styles.position}>{data.header.position}</Text>
          </View>
        </View>
        <AboutMeSection />
      </View>

      {/* spacer */}
      {<View style={{width: headerStyles.spacing.medium}} />}

      <View style={styles.secondColumnContainer}>
        <ContactDetail type={'email'} containerStyle={styles.contactDetail} />
        <ContactDetail type={'phone'} containerStyle={styles.contactDetail} />
        <ContactDetail
          type={'repository'}
          containerStyle={styles.contactDetail}
        />
        <ContactDetail type={'website'} containerStyle={styles.contactDetail} />
        <ContactDetail
          type={'linkedin'}
          containerStyle={styles.contactDetail}
        />
        <ContactDetail
          type={'location'}
          containerStyle={styles.contactDetail}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: headerStyles.spacing.smallest,
  },
  firstColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '15cm',
  },
  secondColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '8cm',
    flexWrap: 'wrap',
    height: '4cm',
  },
  photoAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  name: {
    fontSize: headerStyles.text.fontSize.name,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: headerStyles.text.fontFamily.name,
  },
  position: {
    fontSize: headerStyles.text.fontSize.position,
    fontStyle: 'italic',
    textAlign: 'left',
    marginTop: '-0.2cm',
    maxWidth: '9cm',
    fontFamily: headerStyles.text.fontFamily.name,
    color: cvStyles.colors.secondary,
  },
  applicantPhoto: {
    height: '3cm',
    width: '3cm',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: headerStyles.spacing.small,
  },
  contactDetail: {width: '3.5cm', marginBottom: headerStyles.spacing.smallest},
});
