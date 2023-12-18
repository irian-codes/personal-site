import {getSortedGlobImportedImages} from '../../utils/ImageUtils';
import type {Projects} from './types/ProjectData';

// Project images glob import to not import each gallery item manually
// Sadly the import.meta.glob cannot be used with dynamic strings so we need a lot of repetition.
type ProjectName =
  | 'assistant-drivers-mobile'
  | 'assistant-drivers-desktop'
  | 'cordoba-viva'
  | 'delivery-kings'
  | 'caumma-mobile'
  | 'caumma-desktop'
  | 'medway'
  | 'duis-desktop';

const projectsGalleries = new Map<
  ProjectName,
  ReturnType<typeof getSortedGlobImportedImages>
>([
  [
    'assistant-drivers-mobile',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/assistant-drivers/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'assistant-drivers-desktop',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/desktop-apps/assistant-drivers-panel/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
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
    'caumma-mobile',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/caumma/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'caumma-desktop',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/desktop-apps/caumma-panel/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
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
  [
    'duis-desktop',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/desktop-apps/duis-panel/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
]);

export const projectsData_en: Projects = [
  // TODO: Add more real projects
  {
    id: 0,
    name: 'Caumma (Mobile App)',
    description:
      'Mobile app for a psychology clinic to help therapists manage their patients. Also, the patients have an account so they can log their homework tasks.',
    images: projectsGalleries.get('caumma-mobile') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Typescript'},
      {name: 'Expo'},
      {name: 'Rest API'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
  },
  {
    id: 2,
    name: 'Assistant Drivers (Mobile App)',
    description:
      'Mobile app to serve an Uber-like business. Customers can hire a driver by the hour or by trip distance and get billed in the app for the exact amount. The client requested one app for users and another for his drivers.',
    images: projectsGalleries.get('assistant-drivers-mobile') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Expo'},
      {name: 'Typescript'},
      {name: 'Firebase'},
      {name: 'Android'},
    ],
  },
  {
    id: 5,
    name: 'Assistant Drivers (Admin Panel)',
    description:
      'Web app for the client, to manage users, drivers and the requests for trips. It also allowed for editing trip prices, taxes, available vehicles and other settings.',
    images: projectsGalleries.get('assistant-drivers-desktop') || [],
    technologies: [
      {name: 'React'},
      {name: 'Material UI'},
      {name: 'Typescript'},
      {name: 'Firebase'},
      {name: 'MobX'},
      {name: 'React Router'},
    ],
  },
  {
    id: 1,
    name: 'Mediterranean Way',
    description:
      'Mobile app for managing tourist apartments, where reservations and room status can be visualized, and each cleaning round can be registered and recorded with photos of any incidents. It also has functionality to calculate the revenue per room for the hotel manager.',
    images: projectsGalleries.get('medway') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
  },
  {
    id: 3,
    name: 'Delivery Kings',
    description:
      'Mobile app for on-demand delivery and errand services. Users can buy almost any item, from food, medication or even a custom order with specific instructions. They can also send a package to another user after filling a form including photos.',
    images: projectsGalleries.get('delivery-kings') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
  },
  {
    id: 6,
    name: 'Caumma (Admin panel)',
    description:
      'Web app for the client, to organize their patients, view their progress in their treatment and manage appointments. The client requested one app for users and another for his therapists.',
    images: projectsGalleries.get('caumma-desktop') || [],
    technologies: [
      {name: 'React'},
      {name: 'Material UI'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'Redux Toolkit'},
      {name: 'React Router'},
    ],
  },
  {
    id: 4,
    name: 'Córdoba Viva',
    description:
      'Mobile app for users to check the catalogue of tourist guided tours in the city of Córdoba, Spain. The client is a travel agency. Users can check updated dates and times of all events and make a reservation.',
    images: projectsGalleries.get('cordoba-viva') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
  },
  {
    id: 7,
    name: 'DUIS (Admin panel)',
    description:
      'Web app to manage where and when to dispatch doctors to different events. Also, it handled employee status, holidays and if they were a freelance or hired.',
    images: projectsGalleries.get('duis-desktop') || [],
    technologies: [
      {name: 'React'},
      {name: 'Material UI'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'Redux Toolkit'},
      {name: 'React Router'},
    ],
  },
];
