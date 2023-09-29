import {Image, StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {useTranslations} from '../../../i18n/i18nUtils';
import {splitStringAtLastOccurrence} from '../../../utils/StringUtils';
import {LanguageContext} from '../CvPdf';
import {headerGlobalStyles} from './styles/HeaderGlobalStyles';

export type ContactType = 'email' | 'linkedin' | 'repository' | 'location';
type ContactDetailProps = {
  type: ContactType;
  containerStyle: any;
};

export const ContactDetail = (props: ContactDetailProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  function getSplitDataByType(data: string): string {
    switch (props.type) {
      case 'email':
        return splitStringAtLastOccurrence(data, '@', true);

      case 'linkedin':
      case 'repository':
        return splitStringAtLastOccurrence(data, '/');

      case 'location':
      default:
        return data;
    }
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Image
        // TODO: Set the correct URL on deployment. The best way would probably be through environment variables.
        src={'http://localhost:4321/assets/images/dummy-cv-image.jpg'}
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
