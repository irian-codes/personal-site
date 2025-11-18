import {StyleSheet, Text, View} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import Color from 'colorjs.io';
import {useContext, useMemo} from 'react';
import {LocalizedDataContext} from '../../CvPdf';
import {cvStyles} from '../styles/CvStyles';
import {SkillChip} from './components/SkillChip';

type SkillsSectionProps = {
  containerStyle?: Style;
};

export const SkillsSection = (props: SkillsSectionProps) => {
  const {t, data} = useContext(LocalizedDataContext);

  const skillChipBaseColor = useMemo(
    () => new Color(cvStyles.colors.secondary),
    []
  );

  const skillColors = {
    learnt: {
      textColor: 'white',
      bgColor: skillChipBaseColor
        .range('black', {space: 'srgb'})(0.2)
        .toString(),
    },
    language: {
      textColor: 'black',
      bgColor: skillChipBaseColor
        .range('yellow', {space: 'srgb'})(0.7)
        .toString(),
    },
  } as const;

  const SkillsLegend = () => (
    <View style={styles.skillsLegendContainer}>
      {Object.entries(skillColors).map((color) => (
        <View key={color[0]} style={styles.skillLegendItemContainer}>
          {/* Color square */}
          <View
            style={[styles.legendColor, {backgroundColor: color[1].bgColor}]}
          />
          {/* Label */}
          <Text style={{fontSize: cvStyles.text.fontSize.small}}>
            {/* @ts-expect-error - We know the key exists */}
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
        {data.skillsSection.skills
          .filter(
            (skill) => !skill.hidden && skill.category !== 'human-language'
          )
          .map((skill) => (
            <SkillChip
              key={skill.id}
              value={skill.name}
              bgColor={skillColors[skill.level].bgColor}
              textColor={skillColors[skill.level].textColor}
            />
          ))}

        {/* We want human languages at the end of the list so we map again */}
        {data.skillsSection.skills
          .filter(
            (skill) => !skill.hidden && skill.category === 'human-language'
          )
          .map((skill) => (
            <SkillChip
              key={skill.id}
              value={skill.name}
              bgColor={skillColors['language'].bgColor}
              textColor={skillColors['language'].textColor}
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
