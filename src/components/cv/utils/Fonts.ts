import {Font} from '@react-pdf/renderer';

export function registerFonts() {
  // Disabling hyphenation
  Font.registerHyphenationCallback((word) => [word]);

  Font.register({
    family: 'Poppins',
    fonts: [
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/poppins-latin-400-normal.woff',
      },
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/poppins-latin-400-italic.woff',
        fontStyle: 'italic',
      },
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/poppins-latin-500-normal.woff',
        fontWeight: 500,
      },
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/poppins-latin-600-normal.woff',
        fontWeight: 600,
      },
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/poppins-latin-700-normal.woff',
        fontWeight: 'bold',
      },
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/poppins-latin-700-italic.woff',
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
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/roboto-mono-latin-400-normal.woff',
      },
    ],
  });

  Font.register({
    family: 'Roboto',
    fonts: [
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/roboto-latin-400-normal.woff',
      },
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/roboto-latin-400-italic.woff',
        fontStyle: 'italic',
      },
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/roboto-latin-700-normal.woff',
        fontWeight: 'bold',
      },
      {
        src:
          `${import.meta.env.SERVER_URL}${import.meta.env.BASE_URL}` +
          '/assets/fonts/roboto-latin-700-italic.woff',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
    ],
  });
}
