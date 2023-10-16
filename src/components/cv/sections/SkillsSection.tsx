import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {useContext} from 'react';
import {cvData} from '../../../data/cv/CvData';
import {useTranslations} from '../../../i18n/i18nUtils';
import {LanguageContext} from '../CvPdf';
import {cvGlobalStyles} from '../styles/CvGlobalStyles';
import {SkillChip} from './components/SkillChip';

type SkillsSectionProps = {
  containerStyle?: any;
};

export const SkillsSection = (props: SkillsSectionProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  return (
    <View style={props.containerStyle}>
      <Text style={styles.h1}>{t('cv.main.section.title.skills')}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.content.skillsSection.skills.map((skill) => (
          <SkillChip
            key={skill.id}
            value={skill.name}
            skillLevel={skill.level}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {...cvGlobalStyles.text.headings.h1},
});
