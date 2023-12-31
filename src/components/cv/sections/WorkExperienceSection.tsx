import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {useTranslations} from '../../../i18n/i18nUtils';
import {LanguageContext} from '../CvPdf';
import {cvGlobalStyles} from '../styles/CvGlobalStyles';
import {SectionEntryWithIcon} from './components/SectionEntryWithIcon';

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
        {t('cv.body.section.title.work-experience')}
      </Text>
      {data.content.workExperienceSection.entries.map((entry) => (
        <SectionEntryWithIcon
          key={entry.id}
          title={`${entry.title} (${entry.period})`}
          subtitle={entry.company}
          iconSrc={entry.iconSrc}
          lines={entry.lines}
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
