import type {LanguageTag} from '../../i18n/i18n';
import {cvData_en} from './CvData-en';
import {cvData_es} from './CvData-es';
import type {CvData} from './types/CvData';

export const cvData: {data: Map<LanguageTag, CvData>} = {
  data: new Map([
    ['en', cvData_en],
    ['es', cvData_es],
  ]),
};
