import {projectsGalleries} from './ProjectImages';
import type {Projects} from './types/ProjectData';

export const projectsData_en: Projects = [
  {
    id: 0,
    name: 'Caumma',
    appType: 'mobile-app',
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
    publishUrls: new Map([
      [
        'google',
        'https://play.google.com/store/apps/details?id=com.studiobycaigo.caumma',
      ],
      ['apple', 'https://apps.apple.com/us/app/caumma/id1660931013'],
    ]),
  },
  {
    id: 2,
    name: 'Assistant Drivers',
    appType: 'mobile-app',
    description:
      'Mobile app to serve an Uber-like business. Customers can hire a driver by the hour or by trip distance and get billed in the app for the exact amount. The client requested one app for users and another for his drivers.',
    images: projectsGalleries.get('assistant-drivers-mobile') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Expo'},
      {name: 'Typescript'},
      {name: 'Firebase'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
    publishUrls: new Map([
      ['google', ''],
      ['apple', 'https://apps.apple.com/us/app/assistant-drivers/id1599937718'],
    ]),
  },
  {
    id: 5,
    name: 'Assistant Drivers',
    appType: 'admin-panel',
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
    publishUrls: new Map([['url', 'internal']]),
  },
  {
    id: 1,
    name: 'Mediterranean Way',
    appType: 'mobile-app',
    description:
      'Mobile app for managing tourist apartments, where reservations and room status can be visualized, and each cleaning round can be registered and recorded with photos of any incidents. It also has functionality to calculate the revenue per room for the hotel manager.',
    images: projectsGalleries.get('medway-mobile') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
    publishUrls: new Map([
      ['google', ''],
      ['apple', 'https://apps.apple.com/us/app/medical-to-life/id6443401988'],
    ]),
  },
  {
    id: 3,
    name: 'Delivery Kings',
    appType: 'mobile-app',
    description:
      'Mobile app for on-demand delivery and errand services. Users can buy almost any item, from food, medication or even a custom order with specific instructions. They can also send a package to another user after filling a form including photos.',
    images: projectsGalleries.get('delivery-kings-mobile') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'MobX'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
    publishUrls: new Map([]),
  },
  {
    id: 6,
    name: 'Caumma',
    appType: 'admin-panel',
    description:
      'Web app for the client, to organize their patients, view their progress in their treatment and manage appointments. It also allowed task creation and assignation to the patients so they could have homework at home to improve themselves.',
    images: projectsGalleries.get('caumma-desktop') || [],
    technologies: [
      {name: 'React'},
      {name: 'Material UI'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'Redux Toolkit'},
      {name: 'React Router'},
    ],
    publishUrls: new Map([['url', 'internal']]),
  },
  {
    id: 9,
    name: 'Medical To Life',
    appType: 'mobile-app',
    description:
      'Mobile app for a fitness agency. It let users follow a customized sports plan depending on their goals. The client also uploaded videos, recipes and other content for the users. It supported user-based notifications due to each user having a different plan with different milestones linked to specific calendar days.',
    images: projectsGalleries.get('mtl-mobile') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Expo'},
      {name: 'Typescript'},
      {name: 'Firebase'},
      {name: 'Vimeo API'},
      {name: 'MobX'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
    publishUrls: new Map([
      [
        'google',
        'https://play.google.com/store/apps/details?id=com.studiobycaigo.medicaltolife',
      ],
      ['apple', 'https://apps.apple.com/us/app/mediterranean-way/id1609962077'],
    ]),
  },
  {
    id: 8,
    name: 'Medical To Life',
    appType: 'admin-panel',
    description:
      'Web app for the client, to manage the content of the app. It supported uploading videos, calendar entries, recipes and coaches visible on the app. Also it allowed the client to chat with any user.',
    images: projectsGalleries.get('mtl-desktop') || [],
    technologies: [
      {name: 'React'},
      {name: 'Bootstrap'},
      {name: 'Typescript'},
      {name: 'Firebase'},
      {name: 'MobX'},
      {name: 'React Router'},
      {name: 'Algolia Search'},
    ],
    publishUrls: new Map([['url', 'internal']]),
  },
  {
    id: 4,
    name: 'Córdoba Viva',
    appType: 'mobile-app',
    description:
      'Mobile app for users to check the catalogue of tourist guided tours in the city of Córdoba, Spain. The client is a travel agency. Users can check updated dates and times of all events and make a reservation.',
    images: projectsGalleries.get('cordoba-viva-mobile') || [],
    technologies: [
      {name: 'React Native'},
      {name: 'Typescript'},
      {name: 'Rest API'},
      {name: 'Android'},
      {name: 'iOS'},
    ],
    publishUrls: new Map([
      [
        'google',
        'https://play.google.com/store/apps/details?id=com.adappty.cordobaviva',
      ],
      ['apple', 'https://apps.apple.com/us/app/cordoba-viva/id1578914116'],
    ]),
  },
  {
    id: 7,
    name: 'DUIS',
    appType: 'admin-panel',
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
    publishUrls: new Map([]),
  },
];
