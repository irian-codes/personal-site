import {projectsGalleries} from './ProjectImages';
import type {Projects} from './types/ProjectData';

export const projectsData_es: Projects = [
  {
    id: 0,
    name: 'Caumma',
    appType: 'mobile-app',
    description:
      'Aplicación móvil para una clínica de psicología para ayudar a los terapeutas a gestionar a sus pacientes. Además, los pacientes tienen una cuenta para que puedan registrar en su casa el progreso de sus tareas asignadas.',
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
      'Aplicación móvil para un negocio similar a Uber. Los clientes pueden contratar un conductor por horas o por distancia de viaje, luego se les factura el importe exacto en la aplicación. El cliente solicitó una aplicación para los usuarios y otra para sus conductores.',
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
      'Aplicación web interna para la gestión de usuarios, conductores y viajes. También ofrecía la posiblidad de editar precios, impuestos, vehículos disponibles, entre otras opciones.',
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
      'Aplicación móvil para la gestión de apartamentos turísticos, donde se pueden visualizar las reservas y el estado de las habitaciones. Además, se puede registrar cada ronda de limpieza y registrarla con fotos de cualquier incidencia. También tiene funcionalidad para calcular los ingresos por habitación para el gerente del hotel.',
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
      'Aplicación móvil para servicios de entrega y recogidas bajo demanda. Los usuarios pueden comprar casi cualquier artículo, desde alimentos, medicamentos o incluso un pedido personalizado con instrucciones específicas. También pueden enviar un paquete a otro usuario después de completar un formulario que incluye fotos.',
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
      'Aplicación web interna para gestionar los pacientes de la clínica. Permitía visualizar su progreso y gestionar las citas. También permitía crear tareas para que los pacientes las completaran cuando quisieran en sus casas, fuera del horario habitual de visita.',
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
      'App móvil para una agencia de salud y deporte. Permitía a los usuarios seguir un plan de salud personalizado adecuadao a sus objetivos. También podían visualizar vídeos creados por la agencia, recetas y otros contenidos de utilidad. Soportaba también notificaciones individualizadas para cada usuario dependiendo de su plan de salud y sus objetivos.',
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
      'Aplicación web interna para el cliente. Podía gestionar a los usuario, subir vídeos, recetas, entradas de calendario y otro contenido de utilidad. También permitía chatear con los usuarios.',
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
      'Aplicación móvil para que los usuarios consulten el catálogo de visitas turísticas guiadas en la ciudad de Córdoba. El cliente es una agencia de viajes. Los usuarios pueden consultar las fechas y horarios actualizados de todos los eventos y hacer una reserva.',
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
      'Aplicación web interna para el cliente. Servía para gestionar a los doctores en plantilla y enviarlos a distintos eventos. Cuadrando sus horarios y vacaciones. También gestionava la nómina y otros trámites de los trabajadores (autónomos o empleados).',
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
