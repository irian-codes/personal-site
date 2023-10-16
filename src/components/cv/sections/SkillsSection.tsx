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

  const skillColors = {
    beginner: 'black',
    intermediate: 'yellow',
    proficient: 'red',
  };

  const SkillsLegend = (props: any) => (
    <View style={styles.skillsLegendContainer}>
      {Object.entries(skillColors).map((color) => (
        <View key={color[0]} style={styles.skillLegendItemContainer}>
          {/* Color square */}
          <View style={[styles.legendColor, {backgroundColor: color[1]}]} />
          {/* Label */}
          <Text style={{fontSize: cvGlobalStyles.text.fontSize.tiny}}>
            {color[0]}
          </Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={props.containerStyle}>
      <View style={styles.skillsLegendAndTitleContainer}>
        <Text style={styles.h1}>{t('cv.main.section.title.skills')}</Text>
        <SkillsLegend />
      </View>
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
  legendColor: {
    width: 8,
    height: 8,
    marginRight: 4,
    marginLeft: 8,
  },
  skillsLegendAndTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  skillsLegendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
  },
  skillLegendItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
