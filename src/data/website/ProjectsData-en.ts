import reactLogoSvg from '../../assets/images/icons/react-logo.svg';
import medwayMobileAppImg from '../../assets/images/projects/medway/medway-joined.jpg';
import type {Projects} from './types/ProjectData';

export const projectsData_en: Projects = [
  // TODO: These are dummy projects, put real projects
  {
    id: 0,
    name: 'Medway App',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus libero voluptas, eum corporis iste.',
    image: medwayMobileAppImg,
    // TODO: Put the correct logo images
    technologies: [
      {
        name: 'React Native',
        icon: reactLogoSvg,
      },
      {
        name: 'Android',
        icon: reactLogoSvg,
      },
      {
        name: 'iOS',
        icon: reactLogoSvg,
      },
    ],
  },
  {
    id: 1,
    name: 'Medway App',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus libero voluptas, eum corporis iste.',
    image: medwayMobileAppImg,
    // TODO: Put the correct logo images
    technologies: [
      {
        name: 'React Native',
        icon: reactLogoSvg,
      },
      {
        name: 'Android',
        icon: reactLogoSvg,
      },
      {
        name: 'iOS',
        icon: reactLogoSvg,
      },
    ],
  },
];
