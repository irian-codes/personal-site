import androidLogoSvg from '../../assets/images/icons/android-logo.svg';
import expoLogoSvg from '../../assets/images/icons/expo-logo.svg';
import firebaseLogoSvg from '../../assets/images/icons/firebase-logo.svg';
import iosLogoSvg from '../../assets/images/icons/ios-logo.svg';
import reactLogoSvg from '../../assets/images/icons/react-logo.svg';
import restApiLogoSvg from '../../assets/images/icons/rest-api-logo.svg';
import tsLogoSvg from '../../assets/images/icons/ts-logo.svg';
import assistantDriversAppImg from '../../assets/images/projects/mobile-apps/assistant-drivers-joined.jpg';
import caummaMobileAppImg from '../../assets/images/projects/mobile-apps/caumma-joined.jpg';
import cordobaVivaMobileAppImg from '../../assets/images/projects/mobile-apps/cordoba-viva-joined.jpg';
import deliveryKingsMobileAppImg from '../../assets/images/projects/mobile-apps/delivery-kings-joined.jpg';
import medwayMobileAppImg from '../../assets/images/projects/mobile-apps/medway-joined.jpg';
import type {Projects} from './types/ProjectData';

export const projectsData_en: Projects = [
  // TODO: Add more real projects
  // TODO: Complete the missing information replacing dummy text
  {
    id: 0,
    name: 'Caumma',
    description:
      'Mobile app for a psychology clinic to help therapists manage their patients. Also, the patients had an account so they could log their homework tasks.',
    image: caummaMobileAppImg,
    technologies: [
      {
        name: 'React Native',
        icon: reactLogoSvg,
      },
      {
        name: 'Typescript',
        icon: tsLogoSvg,
      },
      {
        name: 'Expo',
        icon: expoLogoSvg,
      },
      {
        name: 'Rest API',
        icon: restApiLogoSvg,
      },
      {
        name: 'Android',
        icon: androidLogoSvg,
      },
      {
        name: 'iOS',
        icon: iosLogoSvg,
      },
    ],
  },
  {
    id: 1,
    name: 'Mediterranean Way',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus libero voluptas, eum corporis iste.',
    image: medwayMobileAppImg,
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
    id: 2,
    name: 'Assistant Drivers',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus libero voluptas, eum corporis iste.',
    image: assistantDriversAppImg,
    technologies: [
      {
        name: 'React Native',
        icon: reactLogoSvg,
      },
      {
        name: 'Firebase',
        icon: firebaseLogoSvg,
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
    id: 3,
    name: 'Delivery Kings',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus libero voluptas, eum corporis iste.',
    image: deliveryKingsMobileAppImg,
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
    id: 4,
    name: 'Córdoba Viva',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus libero voluptas, eum corporis iste.',
    image: cordobaVivaMobileAppImg,
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
