import {calculateAge} from '../../utils/DateUtils';
import type {
  AboutSection,
  CvData,
  EducationSection,
  Header,
  OtherSection,
  SkillsSection,
  WorkExperienceSection,
} from './types/CvData';

const header: Header = {
  name: 'Irian',
  surnames: 'Montón',
  position: 'Desarrollador de apps/web',
  birthdate: '1993-12-10T00:00:00+01:00',
  // TODO: Set the correct URL on deployment.
  photoSrc: 'http://localhost:4321/assets/images/cv/irian-cv-image.jpg',
  websiteUrl: 'https://irian.codes',
  // TODO: Set the correct URL on deployment.
  websiteQrImageSrc:
    'http://localhost:4321/assets/images/cv/irian-codes-qr.png',
  location: 'España',
  email: 'irian@irian.codes',
  phone: '+34611082305',
  linkedin: 'linkedin.com/in/irian-mont%C3%B3n-0b58358a',
  repository: 'github.com/irian-codes',
};

const aboutSection: AboutSection = {
  lines: [
    `Buenas! Me llamo ${
      header.name
    }, soy un desarrollador de apps frontend de ${calculateAge(
      header.birthdate
    )} años y más de 4 años de experiencia en programación, trabajando desde casa. Hago apps para la web, Android y iOS con React y React Native con Typescript, incluidas algunas donde he sido desarrollador lead. Estoy buscando un trabajo en el que poder crecer y trabajar en proyectos más complejos, porque hasta ahora he estado trabajando en apps para pequeñas empresas. Quiero aprender y crecer como desarrollador, porque lo que me importa es crear software realmente útil, y sentir que he sido parte del proceso junto a compañeros inspiradores y con talento.`,
  ],
};

const skillsSection: SkillsSection = {
  skills: [
    {
      id: 0,
      name: 'Typescript',
      level: 'proficient',
      category: 'language',
    },
    {
      id: 1,
      name: 'JavaScript',
      level: 'proficient',
      category: 'language',
    },
    {
      id: 2,
      name: 'JSON',
      level: 'proficient',
      category: 'language',
    },
    {
      id: 3,
      name: 'HTML',
      level: 'intermediate',
      category: 'language',
    },
    {
      id: 4,
      name: 'CSS',
      level: 'intermediate',
      category: 'language',
    },
    {
      id: 5,
      name: 'C#',
      level: 'intermediate',
      category: 'language',
    },
    {
      id: 8,
      name: 'React',
      level: 'proficient',
      category: 'library-framework',
    },
    {
      id: 9,
      name: 'React Native',
      level: 'proficient',
      category: 'library-framework',
    },
    {
      id: 10,
      name: 'Astro',
      level: 'beginner',
      category: 'library-framework',
    },
    {
      id: 11,
      name: 'Expo',
      level: 'proficient',
      category: 'library-framework',
    },
    {
      id: 71,
      name: 'Angular',
      level: 'beginner',
      category: 'library-framework',
    },
    {
      id: 72,
      name: 'Flutter',
      level: 'beginner',
      category: 'library-framework',
    },
    {
      id: 13,
      name: 'Material UI (MUI)',
      level: 'intermediate',
      category: 'library-framework',
    },
    {
      id: 14,
      name: 'React Native Elements',
      level: 'proficient',
      category: 'library-framework',
    },
    {
      id: 15,
      name: 'React Router',
      level: 'proficient',
      category: 'library-framework',
    },
    {
      id: 16,
      name: 'MobX',
      level: 'intermediate',
      category: 'library-framework',
    },
    {
      id: 17,
      name: 'Redux Toolkit',
      level: 'intermediate',
      category: 'library-framework',
    },
    {
      id: 18,
      name: 'i18next',
      level: 'proficient',
      category: 'library-framework',
    },
    {
      id: 19,
      name: 'Firebase',
      level: 'proficient',
      category: 'dev-tool',
    },
    {
      id: 70,
      name: 'Yarn',
      level: 'beginner',
      category: 'dev-tool',
    },
    {
      id: 62,
      name: 'NPM',
      level: 'proficient',
      category: 'dev-tool',
    },
    {
      id: 20,
      name: 'MongoDB',
      level: 'beginner',
      category: 'database',
    },
    {
      id: 21,
      name: 'Express',
      level: 'beginner',
      category: 'library-framework',
    },
    {
      id: 22,
      name: 'NestJS',
      level: 'beginner',
      category: 'library-framework',
    },
    {
      id: 32,
      name: 'Jest',
      level: 'beginner',
      category: 'library-framework',
    },
    {
      id: 33,
      name: 'Mocha',
      level: 'beginner',
      category: 'library-framework',
    },
    {
      id: 23,
      name: 'CI/CD',
      level: 'beginner',
      category: 'dev-tool',
    },
    {
      id: 24,
      name: 'Google Cloud',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 25,
      name: 'Git',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 26,
      name: 'Gitlab',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 28,
      name: 'Github',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 27,
      name: 'Expo EAS',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 29,
      name: 'Docker',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 30,
      name: 'Wordpress',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 31,
      name: 'API REST',
      level: 'proficient',
      category: 'dev-tool',
    },
    {
      id: 36,
      name: 'Github Copilot',
      level: 'intermediate',
      category: 'ai-tool',
    },
    {
      id: 37,
      name: 'Codeium',
      level: 'intermediate',
      category: 'ai-tool',
    },
    {
      id: 38,
      name: 'Figma',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 39,
      name: 'Todoist',
      level: 'proficient',
      category: 'tool',
    },
    {
      id: 40,
      name: 'Trello',
      level: 'beginner',
      category: 'tool',
    },
    {
      id: 42,
      name: 'Slack',
      level: 'proficient',
      category: 'tool',
    },
    {
      id: 43,
      name: 'Chat GPT',
      level: 'intermediate',
      category: 'ai-tool',
    },
    {
      id: 45,
      name: 'Phind',
      level: 'intermediate',
      category: 'ai-tool',
    },
    {
      id: 47,
      name: 'Upwork',
      level: 'proficient',
      category: 'tool',
    },
    {
      id: 52,
      name: 'Microsoft Office',
      level: 'proficient',
      category: 'tool',
    },
    {
      id: 53,
      name: 'Trabajo en equipo en remoto',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 54,
      name: 'Gestión de proyectos',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 55,
      name: 'Objetivos SMART',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 56,
      name: 'Priorización',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 57,
      name: 'Liderazgo de equipos',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 58,
      name: 'Trabajo autónomo',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 59,
      name: 'Aprendizaje activo',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 60,
      name: 'Code ownership',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 61,
      name: 'Debugging',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 63,
      name: 'UI/UX',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 64,
      name: 'Comprensión del modelo de negocio',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 65,
      name: 'Orientación de personal de prácticas',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 66,
      name: 'Revisión de código',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 67,
      name: 'Flexibilidad horaria',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 68,
      name: 'Agile',
      level: 'beginner',
      category: 'soft-skill',
    },
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      id: 0,
      title: 'Máster en Desarrollo de Aplicaciones',
      institution: 'Universitat Oberta de Catalunya',
      location: 'Remoto, España',
      period: 'Feb 2020 - Ene 2022',
      lines: [
        'Proyecto final desarrollado en una empresa real (Studio by Caigo).',
        'Desarrollo de apps web/móviles con Angular, Android Studio, Flutter y React Native.',
        'Diseño con Figma y técnicas de análisis de usuarios como Customer Journey Map y User Persona.',
        'Conceptos básicos de informática con C.',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/uoc.jpg',
    },
    {
      id: 1,
      title: 'Grado en Turismo',
      institution: 'Universitat Rovira i Virgili',
      location: 'Tarragona, España',
      period: 'Set 2013 - Jun 2017',
      lines: [
        'Estudios en gestión de empresas turísticas, marketing y business plan.',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/urv.jpg',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      id: 0,
      title: 'Desarrollador lead frontend',
      company: 'Studio by Caigo',
      location: 'Remoto, España',
      period: 'Ago 2022 - May 2023',
      lines: [
        'He dirigido el equipo de desarrollo de mis últimos proyectos realizados con React y React Native.',
        'Organicé el trabajo en milestones, estableciendo objetivos con el equipo y haciendo revisiones de código y standups para garantizar que el proyecto se entregara de acuerdo con los estándares de calidad de la empresa, los requisitos del proyecto y en un plazo razonable.',
        'Crear documentación de los proyectos y para la incorporación al equipo de nuevos miembros.',
        'Realicé entrevistas, seleccioné e incorporé desarrolladores y becarios en el equipo.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 1,
      title: 'Desarrollador frontend de apps',
      company: 'Studio by Caigo',
      location: 'Remot, España',
      period: 'Jul 2021 - Ago 2022',
      lines: [
        'Desarrollar el frontendo de apps con React y React Native. Aprendí a colaborar con Gitlab.',
        'Trabajar con el equipo de backend para garantizar que el frontend funcionara bien con su API REST.',
        'Configurar el backend de varios proyectos con Firebase y Google Cloud, también ayudé a desarrollar con NestJs, ExpressJs, MongoDB y Docker.',
        'Publicación, gestión de versiones y actualizaciones de apps con Expo EAS para Android y iOS.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 2,
      title: 'Desarrollador Unity 3D VR',
      company: 'Ekisolid',
      location: 'Remoto, España',
      period: 'Nov 2017 - Dic 2019',
      lines: [
        'Desarrollé muchos scripts en C# para añadir funcionalidades al proyecto realizado por el equipo de diseño del juego. Incluyendo networking, la física del casco de realidad virtual y gestión y optimización de los juegos.',
        'Integrar Unity con dispositivos IoT como un ventilador controlado por Bluetooth por un Arduino y un simulador de movimiento de coche.',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/ekisolid.jpg',
    },
    {
      id: 3,
      title: 'Desarrollador web con Wordpress',
      company: 'Digital Media Empresas',
      location: 'Remoto, España',
      period: 'Jun 2016 - Nov 2016',
      lines: [
        'Diseñar y desarrollar páginas web en Wordpress utilizando Divi, haciendo ajustes con CSS.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/digital-media-empresas.jpg',
    },
  ],
};

const otherSection: OtherSection = {
  lines: [
    'Idiomas: catalán, castellano, inglés.',
    'Miembro de una asociación de juegos de mesa y rol.',
    'Carpintería, manualidades de papel y mindfulness.',
    'Permiso de conducir: Sí.',
  ],
};

export const cvData_es: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  otherSection,
};
