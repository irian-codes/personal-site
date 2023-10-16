import {Font} from '@react-pdf/renderer';

export function registerFonts() {
  // Disabling hyphenation
  Font.registerHyphenationCallback((word) => [word]);

  Font.register({
    family: 'Poppins',
    fonts: [
      {
        src: 'http://localhost:4321/assets/fonts/poppins-latin-400-normal.woff',
      },
      {
        src: 'http://localhost:4321/assets/fonts/poppins-latin-400-italic.woff',
        fontStyle: 'italic',
      },
      {
        src: 'http://localhost:4321/assets/fonts/poppins-latin-500-normal.woff',
        fontWeight: 500,
      },
      {
        src: 'http://localhost:4321/assets/fonts/poppins-latin-600-normal.woff',
        fontWeight: 600,
      },
      {
        src: 'http://localhost:4321/assets/fonts/poppins-latin-700-normal.woff',
        fontWeight: 'bold',
      },
      {
        src: 'http://localhost:4321/assets/fonts/poppins-latin-700-italic.woff',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
    ],
  });

  Font.register({
    family: 'Roboto Mono',
    fonts: [
      {
        src: 'http://localhost:4321/assets/fonts/roboto-mono-latin-400-normal.woff',
      },
    ],
  });

  Font.register({
    family: 'Roboto',
    fonts: [
      {
        src: 'http://localhost:4321/assets/fonts/roboto-latin-400-normal.woff',
      },
      {
        src: 'http://localhost:4321/assets/fonts/roboto-latin-400-italic.woff',
        fontStyle: 'italic',
      },
      {
        src: 'http://localhost:4321/assets/fonts/roboto-latin-700-normal.woff',
        fontWeight: 'bold',
      },
      {
        src: 'http://localhost:4321/assets/fonts/roboto-latin-700-italic.woff',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
    ],
  });
}
