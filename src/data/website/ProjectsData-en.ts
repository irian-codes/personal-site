import assistantDriversAppImg from '../../assets/images/projects/mobile-apps/assistant-drivers-joined.jpg';
import caummaMobileAppImg from '../../assets/images/projects/mobile-apps/caumma-joined.jpg';
import cordobaVivaMobileAppImg from '../../assets/images/projects/mobile-apps/cordoba-viva-joined.jpg';
import deliveryKingsMobileAppImg from '../../assets/images/projects/mobile-apps/delivery-kings-joined.jpg';
import medwayMobileAppImg from '../../assets/images/projects/mobile-apps/medway-joined.jpg';
import type {Projects} from './types/ProjectData';

export const projectsData_en: Projects = [
  // TODO: Add more real projects
  {
    id: 0,
    name: 'Caumma',
    description:
      'Mobile app for a psychology clinic to help therapists manage their patients. Also, the patients have an account so they can log their homework tasks.',
    image: caummaMobileAppImg,
    technologies: [
      {
        name: 'React Native',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Expo',
      },
      {
        name: 'Rest API',
      },
      {
        name: 'Android',
      },
      {
        name: 'iOS',
      },
    ],
  },
  {
    id: 2,
    name: 'Assistant Drivers',
    description:
      'Mobile app to serve an Uber-like business. Customers can hire a driver by the hour or by trip distance and get billed in the app for the exact amount. The client requested one app for users and another for his drivers.',
    image: assistantDriversAppImg,
    technologies: [
      {
        name: 'React Native',
      },
      {
        name: 'Expo',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Firebase',
      },
      {
        name: 'Android',
      },
    ],
  },
  {
    id: 1,
    name: 'Mediterranean Way',
    description:
      'Mobile app for managing tourist apartments, where reservations and room status can be visualized, and each cleaning round can be registered and recorded with photos of any incidents. It also has functionality to calculate the revenue per room for the hotel manager.',
    image: medwayMobileAppImg,
    technologies: [
      {
        name: 'React Native',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Rest API',
      },
      {
        name: 'Android',
      },
      {
        name: 'iOS',
      },
    ],
  },
  {
    id: 3,
    name: 'Delivery Kings',
    description:
      'Mobile app for on-demand delivery and errand services. Users can buy almost any item, from food, medication or even a custom order with specific instructions. They can also send a package to another user after filling a form including photos.',
    image: deliveryKingsMobileAppImg,
    technologies: [
      {
        name: 'React Native',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Rest API',
      },
      {
        name: 'Android',
      },
      {
        name: 'iOS',
      },
    ],
  },
  {
    id: 4,
    name: 'Córdoba Viva',
    description:
      'Mobile app for users to check the catalogue of tourist guided tours in the city of Córdoba, Spain. The client is a travel agency. Users can check updated dates and times of all events and make a reservation.',
    image: cordobaVivaMobileAppImg,
    technologies: [
      {
        name: 'React Native',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Rest API',
      },
      {
        name: 'Android',
      },
      {
        name: 'iOS',
      },
    ],
  },
];
