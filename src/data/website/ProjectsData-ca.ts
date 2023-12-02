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

export const projectsData_ca: Projects = [
  // TODO: Add more real projects
  {
    id: 0,
    name: 'Caumma',
    description:
      "Aplicació mòbil per a una clínica de psicologia per ajudar als terapeutes a gestionar els seus pacients. Els pacients tenen un compte d'usuari perquè puguin registrar des de casa les tasques assignades pel seu terapeuta.",
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
      "Aplicació mòbil per donar servei a un negoci de tipus Uber. Els clients poden contractar un conductor per hores o segons la distància del viatge, seguidament se'ls factura l’import exacte a través de l'aplicació. El client sol·licitava dues apps, una pels usuaris i una altra pels seus conductors.",
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
      "Aplicació mòbil per a la gestió d'apartaments turístics, on es poden visualitzar les reserves i l'estat de les habitacions. A més, es pot registrar i gravar cada torn de neteja, incloent fotografies de qualsevol incidència. També disposa de funcionalitat per calcular els ingressos per habitació per al director de l'hotel.",
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
      "Aplicació mòbil per a serveis de lliurament i recollida sota demanda tipus Glovo. Els usuaris poden comprar gairebé qualsevol article, com ara menjar, medicaments o fins i tot una comanda personalitzada amb instruccions específiques. També poden enviar un paquet a un altre usuari després d'omplir un formulari incloent fotografies.",
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
      'Aplicació mòbil perquè els usuaris consultin el catàleg de visites guiades turístiques a la ciutat de Còrdova. El client és una agència de viatges. Els usuaris poden consultar les dates i hores actualitzades de tots els esdeveniments i fer una reserva.',
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
