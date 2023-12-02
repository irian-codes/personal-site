import androidLogoSvg from '../../assets/images/icons/android-logo.svg';
import expoLogoSvg from '../../assets/images/icons/expo-logo.svg';
import firebaseLogoSvg from '../../assets/images/icons/firebase-logo.svg';
import iosLogoSvg from '../../assets/images/icons/ios-logo.svg';
import reactLogoSvg from '../../assets/images/icons/react-logo.svg';
import restApiLogoSvg from '../../assets/images/icons/rest-api-logo.svg';
import tsLogoSvg from '../../assets/images/icons/ts-logo.svg';
import {getSortedGlobImportedImages} from '../../utils/ImageUtils';
import type {Projects} from './types/ProjectData';

// Project images glob import to not import each gallery item manually
// Sadly the import.meta.glob cannot be used with dynamic strings so we need a lot of repetition.
type ProjectName =
  | 'assistant-drivers'
  | 'cordoba-viva'
  | 'delivery-kings'
  | 'caumma'
  | 'medway';

const projectsGalleries = new Map<
  ProjectName,
  ReturnType<typeof getSortedGlobImportedImages>
>([
  [
    'assistant-drivers',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/assistant-drivers/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'cordoba-viva',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/cordoba-viva/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'delivery-kings',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/delivery-kings/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'caumma',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/caumma/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'medway',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/medway/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
]);

export const projectsData_en: Projects = [
  // TODO: Add more real projects
  {
    id: 0,
    name: 'Caumma',
    description:
      'Mobile app for a psychology clinic to help therapists manage their patients. Also, the patients have an account so they can log their homework tasks.',
    images: projectsGalleries.get('caumma') || [],
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
    id: 2,
    name: 'Assistant Drivers',
    description:
      'Mobile app to serve an Uber-like business. Customers can hire a driver by the hour or by trip distance and get billed in the app for the exact amount. The client requested one app for users and another for his drivers.',
    images: projectsGalleries.get('assistant-drivers') || [],
    technologies: [
      {
        name: 'React Native',
        icon: reactLogoSvg,
      },
      {
        name: 'Expo',
        icon: expoLogoSvg,
      },
      {
        name: 'Typescript',
        icon: tsLogoSvg,
      },
      {
        name: 'Firebase',
        icon: firebaseLogoSvg,
      },
      {
        name: 'Android',
        icon: androidLogoSvg,
      },
    ],
  },
  {
    id: 1,
    name: 'Mediterranean Way',
    description:
      'Mobile app for managing tourist apartments, where reservations and room status can be visualized, and each cleaning round can be registered and recorded with photos of any incidents. It also has functionality to calculate the revenue per room for the hotel manager.',
    images: projectsGalleries.get('medway') || [],
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
    id: 3,
    name: 'Delivery Kings',
    description:
      'Mobile app for on-demand delivery and errand services. Users can buy almost any item, from food, medication or even a custom order with specific instructions. They can also send a package to another user after filling a form including photos.',
    images: projectsGalleries.get('delivery-kings') || [],
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
    id: 4,
    name: 'Córdoba Viva',
    description:
      'Mobile app for users to check the catalogue of tourist guided tours in the city of Córdoba, Spain. The client is a travel agency. Users can check updated dates and times of all events and make a reservation.',
    images: projectsGalleries.get('cordoba-viva') || [],
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
];
