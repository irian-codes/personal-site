import {StyleSheet, Text} from '@react-pdf/renderer';
import type {Skill} from '../../../../data/cv/types/CvData';
import {cvGlobalStyles} from '../../styles/CvGlobalStyles';

type SkillChip = {
  value: string;
  skillLevel: Skill['level'];
};

export const SkillChip = (props: SkillChip) => {
  function getSkillColor(): {
    bgColor: string;
    textColor: string;
  } {
    switch (props.skillLevel) {
      case 'beginner':
        return {bgColor: '#b3b3ff', textColor: 'black'};

      case 'intermediate':
        return {bgColor: '#6666ff', textColor: 'white'};

      case 'proficient':
        return {bgColor: '#0000ff', textColor: 'white'};

      case 'expert':
      default:
        return {bgColor: '#00008b', textColor: 'white'};
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
