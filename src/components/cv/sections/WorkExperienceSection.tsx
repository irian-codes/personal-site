import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {useTranslations} from '../../../i18n/i18nUtils';
import {LanguageContext} from '../CvPdf';
import {cvGlobalStyles} from '../styles/CvGlobalStyles';
import {SectionEntryWithIcon} from './entries/SectionEntryWithIcon';

type WorkExperienceSectionProps = {
  containerStyle?: any;
};

export const WorkExperienceSection = (props: WorkExperienceSectionProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>
        {t('cv.main.section.title.work-experience')}
      </Text>
      {data.content.workExperienceSection.entries.map((entry) => (
        <SectionEntryWithIcon
          key={entry.title}
          title={entry.title}
          lines={entry.lines}
          iconSrc={entry.iconSrc}
          containerStyle={{
            marginBottom: cvGlobalStyles.text.sections.spacing.small,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {...cvGlobalStyles.text.headings.h1},
});
