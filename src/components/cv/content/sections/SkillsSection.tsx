import {StyleSheet, Text, View} from '@react-pdf/renderer';
import Color from 'colorjs.io';
import {useContext, useMemo} from 'react';
import {cvData} from '../../../../data/cv/CvData';
import {useTranslations} from '../../../../i18n/i18nUtils';
import {LanguageContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';
import {SkillChip} from './components/SkillChip';

type SkillsSectionProps = {
  containerStyle?: any;
};

export const SkillsSection = (props: SkillsSectionProps) => {
  const langTag = useContext(LanguageContext);
  const t = useTranslations(langTag);
  const data = cvData.data.find((entry) => entry.langTag === langTag)!;

  const skillChipBaseColor = useMemo(
    () => new Color(cvStyles.colors.secondary),
    []
  );

  const skillColors = {
    beginner: {
      textColor: 'black',
      bgColor: skillChipBaseColor
        .range('white', {space: 'srgb'})(0.8)
        .toString(),
    },
    intermediate: {
      textColor: 'white',
      bgColor: skillChipBaseColor
        .range('white', {space: 'srgb'})(0.4)
        .toString(),
    },
    proficient: {
      textColor: 'white',
      bgColor: skillChipBaseColor
        .range('black', {space: 'srgb'})(0.2)
        .toString(),
    },
  } as const;

  const SkillsLegend = (props: any) => (
    <View style={styles.skillsLegendContainer}>
      {Object.entries(skillColors).map((color) => (
        <View key={color[0]} style={styles.skillLegendItemContainer}>
          {/* Color square */}
          <View
            style={[styles.legendColor, {backgroundColor: color[1].bgColor}]}
          />
          {/* Label */}
          <Text style={{fontSize: cvStyles.text.fontSize.small}}>
            {t('cv.body.section.skills.labels.' + color[0])}
          </Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={props.containerStyle}>
      <View style={styles.skillsLegendAndTitleContainer}>
        <Text style={styles.h1}>{t('cv.body.section.title.skills')}</Text>
        <SkillsLegend />
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.content.skillsSection.skills
          .filter((skill) => !skill.hidden)
          .map((skill) => (
            <SkillChip
              key={skill.id}
              value={skill.name}
              bgColor={skillColors[skill.level].bgColor}
              textColor={skillColors[skill.level].textColor}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {...cvStyles.text.headings.h1},
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
