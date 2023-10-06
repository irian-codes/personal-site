import {StyleSheet, Text} from '@react-pdf/renderer';
import Color from 'colorjs.io';
import {useMemo} from 'react';
import type {Skill} from '../../../../data/cv/types/CvData';
import {cvGlobalStyles} from '../../styles/CvGlobalStyles';

type SkillChip = {
  value: string;
  skillLevel: Skill['level'];
};

export const SkillChip = (props: SkillChip) => {
  const skillChipBaseColor = useMemo(
    () => new Color(cvGlobalStyles.colors.secondary),
    [props.skillLevel]
  );

  function getSkillColor(): {
    bgColor: string;
    textColor: string;
  } {
    switch (props.skillLevel) {
      case 'beginner':
        return {
          textColor: 'black',
          bgColor: skillChipBaseColor
            .range('white', {space: 'srgb'})(0.8)
            .toString(),
        };

      case 'intermediate':
        return {
          textColor: 'white',
          bgColor: skillChipBaseColor
            .range('white', {space: 'srgb'})(0.5)
            .toString(),
        };

      case 'proficient':
        return {textColor: 'white', bgColor: skillChipBaseColor.toString()};

      case 'expert':
      default:
        return {
          textColor: 'white',
          bgColor: skillChipBaseColor
            .range('black', {space: 'srgb'})(0.5)
            .toString(),
        };
    }
  }

  return (
    <Text
      style={[{backgroundColor: getSkillColor().bgColor}, styles.container]}
    >
      <Text style={[{color: getSkillColor().textColor}, styles.text]}>
        {props.value}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: '20%',
    margin: '0.1cm',
    padding: '0.1cm',
  },
  text: {
    fontSize: cvGlobalStyles.text.fontSize.smallest,
    fontFamily: cvGlobalStyles.text.fontFamily.monospace,
  },
});
