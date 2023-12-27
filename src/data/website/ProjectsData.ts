import {projectsData_ca} from './ProjectsData-ca';
import {projectsData_en} from './ProjectsData-en';
import {projectsData_es} from './ProjectsData-es';

export const projectsData = {
  data: [
    {
      langTag: 'en',
      content: projectsData_en,
    },
    {
      langTag: 'es',
      content: projectsData_es,
    },
    {
      langTag: 'ca',
      content: projectsData_ca,
    },
  ],
};
