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

export const projectsData_es: Projects = [
  // TODO: Add more real projects
  {
    id: 0,
    name: 'Caumma',
    description:
      'Aplicación móvil para una clínica de psicología para ayudar a los terapeutas a gestionar a sus pacientes. Además, los pacientes tienen una cuenta para que puedan registrar en su casa el progreso de sus tareas asignadas.',
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
    id: 2,
    name: 'Assistant Drivers',
    description:
      'Aplicación móvil para un negocio similar a Uber. Los clientes pueden contratar un conductor por horas o por distancia de viaje, luego se les factura el importe exacto en la aplicación. El cliente solicitó una aplicación para los usuarios y otra para sus conductores.',
    image: assistantDriversAppImg,
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
      'Aplicación móvil para la gestión de apartamentos turísticos, donde se pueden visualizar las reservas y el estado de las habitaciones. Además, se puede registrar cada ronda de limpieza y registrarla con fotos de cualquier incidencia. También tiene funcionalidad para calcular los ingresos por habitación para el gerente del hotel.',
    image: medwayMobileAppImg,
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
      'Aplicación móvil para servicios de entrega y recogidas bajo demanda. Los usuarios pueden comprar casi cualquier artículo, desde alimentos, medicamentos o incluso un pedido personalizado con instrucciones específicas. También pueden enviar un paquete a otro usuario después de completar un formulario que incluye fotos.',
    image: deliveryKingsMobileAppImg,
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
      'Aplicación móvil para que los usuarios consulten el catálogo de visitas turísticas guiadas en la ciudad de Córdoba. El cliente es una agencia de viajes. Los usuarios pueden consultar las fechas y horarios actualizados de todos los eventos y hacer una reserva.',
    image: cordobaVivaMobileAppImg,
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
