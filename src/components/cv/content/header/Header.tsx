import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../../data/cv/CvData';
import {LanguageContext} from '../../CvPdf';
import {AboutMeSection} from '../sections/AboutMeSection';
import {cvStyles} from '../styles/CvStyles';
import {ContactDetail} from './ContactDetail';
import {headerStyles} from './styles/HeaderStyles';

export const Header = () => {
  const langTag = useContext(LanguageContext);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={styles.container}>
      <View style={styles.firstColumnContainer}>
        <Text style={styles.name}>
          {data.content.header.name + ' ' + data.content.header.surnames}
        </Text>
        <Text style={styles.position}>{data.content.header.position}</Text>
        <AboutMeSection />
      </View>

      {/* spacer */}
      {<View style={{width: headerStyles.spacing.big}} />}

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
    padding: headerStyles.spacing.small,
    paddingTop: headerStyles.spacing.smallest,
  },
  firstColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  secondColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12cm',
    flexWrap: 'wrap',
    height: '5cm',
  },
  name: {
    fontSize: headerStyles.text.fontSize.name,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: headerStyles.text.fontFamily.name,
  },
  position: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '-0.2cm',
    marginBottom: headerStyles.spacing.small,
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
    fontSize: headerStyles.text.fontSize.smallest,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '0.1cm',
  },
  contactDetail: {width: '3.5cm', marginBottom: headerStyles.spacing.smallest},
});
