import {projectsGalleries} from './ProjectImages';
import type {Projects} from './types/ProjectData';

export const projectsData_ca: Projects = [
  {
    id: 0,
    name: 'Caumma',
    appType: 'mobile-app',
    description:
      "Aplicació mòbil per a una clínica de psicologia per ajudar als terapeutes a gestionar els seus pacients. Els pacients tenen un compte d'usuari perquè puguin registrar des de casa les tasques assignades pel seu terapeuta.",
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
      ['apple', 'https://apps.apple.com/es/app/caumma/id1660931013'],
    ]),
  },
  {
    id: 2,
    name: 'Assistant Drivers',
    appType: 'mobile-app',
    description:
      "Aplicació mòbil per donar servei a un negoci de tipus Uber. Els clients poden contractar un conductor per hores o segons la distància del viatge, seguidament se'ls factura l’import exacte a través de l'aplicació. El client sol·licitava dues apps, una pels usuaris i una altra pels seus conductors.",
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
      ['apple', 'https://apps.apple.com/es/app/assistant-drivers/id1599937718'],
    ]),
  },
  {
    id: 5,
    name: 'Assistant Drivers',
    appType: 'admin-panel',
    description:
      "Aplicació web interna per a la gestió d'usuaris, conductors i viatges demanats. També tenia la possibilitat d'editar preus, impostos i vehicles disponibles, entre d'altres opcions.",
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
      "Aplicació mòbil per a la gestió d'apartaments turístics, on es poden visualitzar les reserves i l'estat de les habitacions. A més, es pot registrar i gravar cada torn de neteja, incloent fotografies de qualsevol incidència. També disposa de funcionalitat per calcular els ingressos per habitació per al director de l'hotel.",
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
      ['apple', 'https://apps.apple.com/es/app/medical-to-life/id6443401988'],
    ]),
  },
  {
    id: 3,
    name: 'Delivery Kings',
    appType: 'mobile-app',
    description:
      "Aplicació mòbil per a serveis de lliurament i recollida sota demanda tipus Glovo. Els usuaris poden comprar gairebé qualsevol article, com ara menjar, medicaments o fins i tot una comanda personalitzada amb instruccions específiques. També poden enviar un paquet a un altre usuari després d'omplir un formulari incloent fotografies.",
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
      'Aplicació web interna per organitzar els pacients de la clínica, visualitzar el seu progrés i gestionar les cites. També permetia crear tasques per a que els clients poguessin completar-les a casa seva en horari fora de la cita habitual.',
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
      "App mòbil per una agència de salut i esport. Permetia als usuaris gaudir d'un pla de salut personalitzat adequat als seus objectius. També podíen visualitzar vídeos creats per l'agència, receptes i altres continguts d'utilitat. Suportava notificaciones individualitzades per a cada usuari degut a que teníen diferents plans i objectius.",
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
      ['apple', 'https://apps.apple.com/es/app/mediterranean-way/id1609962077'],
    ]),
  },
  {
    id: 8,
    name: 'Medical To Life',
    appType: 'admin-panel',
    description:
      'Aplicació web interna per al client. Podia gestionar els usuaris, pujar vídeos, receptes, entrades de calendari i més contingut. També permetia xatejar amb qualsevol usuari.',
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
      'Aplicació mòbil perquè els usuaris consultin el catàleg de visites guiades turístiques a la ciutat de Còrdova. El client és una agència de viatges. Els usuaris poden consultar les dates i hores actualitzades de tots els esdeveniments i fer una reserva.',
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
      ['apple', 'https://apps.apple.com/es/app/cordoba-viva/id1578914116'],
    ]),
  },
  {
    id: 7,
    name: 'DUIS',
    appType: 'admin-panel',
    description:
      'Aplicació web interna per al client. Servia per gestionar els doctors de la plantilla i enviar-los a diferents esdeveniments. Quadrant dates amb el calendari i les vacances de cadascun. També gestionava la nòmina i altres tràmits dels treballadors (autònoms o empleats).',
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
