import Color from 'colorjs.io';
import {cvStyles} from '../../styles/CvStyles';

export const headerStyles = {
  text: {
    fontSize: {
      smallest: 10,
      medium: 12,
      large: 14,
      name: 28,
    },
    colors: {
      primary: 'black',
    },
    fontFamily: {
      name: 'Poppins',
      contactDetailsHeader: 'Poppins',
    },
  },
  spacing: {
    smallest: '0.25cm',
    small: '0.5cm',
    medium: '1cm',
    big: '2cm',
  },
  colors: {
    icons: cvStyles.colors.secondary,
    border: cvStyles.colors.secondary,
    background: new Color(cvStyles.colors.secondary)
      .range('white', {space: 'srgb'})(0.9)
      .toString(),
  },
};
