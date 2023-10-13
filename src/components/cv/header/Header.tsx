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
        <ContactDetail type={'email'} containerStyle={{width: '5cm'}} />
        <ContactDetail type={'linkedin'} containerStyle={{width: '6cm'}} />
        <ContactDetail
          type={'repository'}
          containerStyle={{width: '5cm', marginLeft: '0.25cm'}}
        />
        <ContactDetail type={'location'} containerStyle={{width: '5cm'}} />
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
    alignItems: 'flex-end',
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
    alignItems: 'flex-start',
    width: '100%',
    // TODO: For whatever reason the content is not centered, this is a quick fix, but I should find a better way to do it.
    paddingLeft: '1cm',
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
