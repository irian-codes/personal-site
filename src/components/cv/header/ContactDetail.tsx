import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {useTranslations} from '../../../i18n/i18nUtils';
import {splitStringAtLastOccurrence} from '../../../utils/StringUtils';
import {LanguageContext} from '../CvPdf';
import {headerGlobalStyles} from './styles/HeaderGlobalStyles';

type ContactType = 'email' | 'linkedin' | 'repository' | 'location';
type ContactDetailProps = {
  type: ContactType;
  containerStyle?: any;
};

export const ContactDetail = (props: ContactDetailProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  function getSplitDataByType(data: string): string {
    switch (props.type) {
      case 'linkedin':
      case 'repository':
        return splitStringAtLastOccurrence(data, '/');

      case 'email':
      case 'location':
      default:
        return data;
    }
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Image
        // TODO: Set the correct URL on deployment. The best way would probably be through environment variables.
        src={
          'http://localhost:4321/assets/images/cv/icons/' + props.type + '.png'
        }
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.label}>
          {t(`cv.header.contact-details.${props.type}.title`)}
        </Text>
        <Text style={styles.text}>
          {getSplitDataByType(data.content.header[props.type])}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    width: '0.75cm',
    height: '0.75cm',
    marginRight: headerGlobalStyles.spacing.smallest,
    marginTop: '0.15cm',
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: headerGlobalStyles.text.fontSize.medium,
    fontFamily: headerGlobalStyles.text.fontFamily.contactDetailsHeader,
    fontWeight: 500,
  },
  text: {
    fontSize: headerGlobalStyles.text.fontSize.smallest,
  },
});
