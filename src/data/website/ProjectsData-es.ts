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

export const projectsData_es: Projects = [
  // TODO: Add more real projects
  {
    id: 0,
    name: 'Caumma',
    description:
      'Aplicación móvil para una clínica de psicología para ayudar a los terapeutas a gestionar a sus pacientes. Además, los pacientes tienen una cuenta para que puedan registrar en su casa el progreso de sus tareas asignadas.',
    images: projectsGalleries.get('caumma') || [],
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
      'Aplicación móvil para un negocio similar a Uber. Los clientes pueden contratar un conductor por horas o por distancia de viaje, luego se les factura el importe exacto en la aplicación. El cliente solicitó una aplicación para los usuarios y otra para sus conductores.',
    images: projectsGalleries.get('assistant-drivers') || [],
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
      'Aplicación móvil para la gestión de apartamentos turísticos, donde se pueden visualizar las reservas y el estado de las habitaciones. Además, se puede registrar cada ronda de limpieza y registrarla con fotos de cualquier incidencia. También tiene funcionalidad para calcular los ingresos por habitación para el gerente del hotel.',
    images: projectsGalleries.get('medway') || [],
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
      'Aplicación móvil para servicios de entrega y recogidas bajo demanda. Los usuarios pueden comprar casi cualquier artículo, desde alimentos, medicamentos o incluso un pedido personalizado con instrucciones específicas. También pueden enviar un paquete a otro usuario después de completar un formulario que incluye fotos.',
    images: projectsGalleries.get('delivery-kings') || [],
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
      'Aplicación móvil para que los usuarios consulten el catálogo de visitas turísticas guiadas en la ciudad de Córdoba. El cliente es una agencia de viajes. Los usuarios pueden consultar las fechas y horarios actualizados de todos los eventos y hacer una reserva.',
    images: projectsGalleries.get('cordoba-viva') || [],
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
