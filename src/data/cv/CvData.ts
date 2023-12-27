import {cvData_ca} from './CvData-ca';
import {cvData_en} from './CvData-en';
import {cvData_es} from './CvData-es';

export const cvData = {
  data: [
    {
      langTag: 'en',
      content: cvData_en,
    },
    {
      langTag: 'es',
      content: cvData_es,
    },
    {
      langTag: 'ca',
      content: cvData_ca,
    },
  ],
};
