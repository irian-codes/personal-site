import {Font} from '@react-pdf/renderer';
import {getPublicAssetsURL} from './URL';

export function registerFonts() {
  // Disabling hyphenation
  Font.registerHyphenationCallback((word) => [word]);

  Font.register({
    family: 'Poppins',
    fonts: [
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/poppins-latin-400-normal.woff',
      },
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/poppins-latin-400-italic.woff',
        fontStyle: 'italic',
      },
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/poppins-latin-500-normal.woff',
        fontWeight: 500,
      },
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/poppins-latin-600-normal.woff',
        fontWeight: 600,
      },
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/poppins-latin-700-normal.woff',
        fontWeight: 'bold',
      },
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/poppins-latin-700-italic.woff',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
    ],
  });

  Font.register({
    family: 'Roboto Mono',
    fonts: [
      {
        src:
          getPublicAssetsURL() +
          '/assets/fonts/roboto-mono-latin-400-normal.woff',
      },
    ],
  });

  Font.register({
    family: 'Roboto',
    fonts: [
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/roboto-latin-400-normal.woff',
      },
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/roboto-latin-400-italic.woff',
        fontStyle: 'italic',
      },
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/roboto-latin-700-normal.woff',
        fontWeight: 'bold',
      },
      {
        src:
          getPublicAssetsURL() + '/assets/fonts/roboto-latin-700-italic.woff',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
    ],
  });
}
