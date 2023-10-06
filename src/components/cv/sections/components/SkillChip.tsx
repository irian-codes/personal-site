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
    () => new Color('blue'),
    [props.skillLevel]
  );

  function getSkillColor(): {
    bgColor: string;
    textColor: string;
  } {
    switch (props.skillLevel) {
      case 'beginner':
        return {
          bgColor: skillChipBaseColor
            .range('white', {space: 'srgb'})(0.8)
            .toString(),
          textColor: 'black',
        };

      case 'intermediate':
        return {
          bgColor: skillChipBaseColor
            .range('white', {space: 'srgb'})(0.5)
            .toString(),
          textColor: 'white',
        };

      case 'proficient':
        return {bgColor: skillChipBaseColor.toString(), textColor: 'white'};

      case 'expert':
      default:
        return {
          bgColor: skillChipBaseColor
            .range('black', {space: 'srgb'})(0.5)
            .toString(),
          textColor: 'white',
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
  },
});
