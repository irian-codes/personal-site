import Color from 'colorjs.io';
import {cvGlobalStyles} from '../../styles/CvGlobalStyles';

export const headerGlobalStyles = {
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
  },
  colors: {
    icons: cvGlobalStyles.colors.secondary,
    border: cvGlobalStyles.colors.secondary,
    background: new Color(cvGlobalStyles.colors.secondary)
      .range('white', {space: 'srgb'})(0.9)
      .toString(),
  },
};
