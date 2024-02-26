import {StyleSheet, Text} from '@react-pdf/renderer';
import {cvStyles} from '../../styles/CvStyles';

type SkillChip = {
  value: string;
  bgColor: string;
  textColor: string;
};

export const SkillChip = (props: SkillChip) => {
  return (
    <Text style={[{backgroundColor: props.bgColor}, styles.container]}>
      <Text style={[{color: props.textColor}, styles.text]}>{props.value}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: '20%',
    margin: '0.08cm',
    padding: '0.1cm',
  },
  text: {
    fontSize: cvStyles.text.fontSize.smallest,
    fontFamily: cvStyles.text.fontFamily.monospace,
  },
});
