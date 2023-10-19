import {Image, Link, StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {useTranslations} from '../../../i18n/i18nUtils';
import {colorizeImage} from '../../../utils/ImageUtils';
import {splitStringAtLastOccurrence} from '../../../utils/StringUtils';
import {LanguageContext} from '../CvPdf';
import {headerGlobalStyles} from './styles/HeaderGlobalStyles';

type ContactType = 'email' | 'linkedin' | 'repository' | 'location' | 'phone';
type ContactDetailProps = {
  type: ContactType;
  containerStyle?: any;
};

export const ContactDetail = (props: ContactDetailProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  // TODO: Set the correct URL on deployment. The best way would probably be through environment variables.
  const imageUrl =
    'http://localhost:4321/assets/images/cv/icons/' + props.type + '.png';

  function formatData(data: string): string {
    switch (props.type) {
      case 'linkedin':
      case 'repository':
        // Splitting the URL because it's too long
        return splitStringAtLastOccurrence(decodeURIComponent(data), '/');

      case 'phone':
        // Add spaces between the country code and then the numbers in groups of 3
        return data.replace(/^(\+\d{2})(\d{9})$/, '$1 $2');

      default:
        return data;
    }
  }

  function getURLByType(data: string): string {
    switch (props.type) {
      case 'linkedin':
      case 'repository':
        return 'https://' + data;

      case 'email':
        return 'mailto:' + data;

      case 'phone':
        return 'tel:' + data;

      default:
        return '#';
    }
  }

  function getLinkOrTextElement(data: string) {
    const url = getURLByType(data);

    if (url === '#') {
      return <Text style={styles.text}>{formatData(data)}</Text>;
    } else {
      return (
        <Link src={url} style={styles.link}>
          {formatData(data)}
        </Link>
      );
    }
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Image
        src={colorizeImage(imageUrl, '#000', headerGlobalStyles.colors.icons)}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.label}>
          {t(`cv.header.contact-details.${props.type}.title`)}
        </Text>
        {getLinkOrTextElement(data.content.header[props.type])}
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
    width: '0.6cm',
    height: '0.6cm',
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
  link: {
    fontSize: headerGlobalStyles.text.fontSize.smallest,
    color: headerGlobalStyles.text.colors.primary,
    textDecoration: 'none',
  },
});
