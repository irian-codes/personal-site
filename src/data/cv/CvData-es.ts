import {getPublicFolderURL} from '../../components/cv/utils/URL';
import type {
  AboutSection,
  CvData,
  EducationSection,
  Header,
  OtherSection,
  ProjectSection,
  SkillsSection,
  WorkExperienceSection,
} from './types/CvData';

const header: Header = {
  name: 'Irian',
  surnames: 'Montón',
  position: 'Desarrollador de apps móvil y web',
  birthdate: '1993-12-10T00:00:00+01:00',
  photoSrc: getPublicFolderURL() + '/assets/images/cv/irian-cv-image.jpg',
  website: 'https://irian.codes',
  websiteQrImageSrc:
    getPublicFolderURL() + '/assets/images/cv/irian-codes-qr.png',
  location: 'Tarragona, España',
  locationMapsUrl: 'https://maps.app.goo.gl/3soGKCQTwza9vfi97',
  email: 'irian@irian.codes',
  phone: '+34611082305',
  linkedin: 'linkedin.com/in/irian-mont%C3%B3n-0b58358a',
  repository: 'github.com/irian-codes',
};

const aboutSection: AboutSection = {
  lines: [
    'Llevo 4 años y medio creando apps. Siento que es la hora de encontrar una buena empresa a largo plazo, donde pueda seguir desarrollando apps con un gran impacto.',
  ],
};

const skillsSection: SkillsSection = {
  skills: [
    {
      id: 0,
      name: 'Typescript',
      level: 'learnt',
      category: 'cs-language',
    },
    {
      id: 2,
      name: 'JSON',
      level: 'learnt',
      category: 'cs-language',
      hidden: true,
    },
    {
      id: 3,
      name: 'HTML/CSS/JS',
      level: 'learnt',
      category: 'cs-language',
    },
    {
      id: 5,
      name: 'C#',
      level: 'learnt',
      category: 'cs-language',
    },
    {
      id: 8,
      name: 'React',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 9,
      name: 'React Native',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 76,
      name: 'Next.js',
      level: 'learning',
      category: 'library-framework',
    },
    {
      id: 10,
      name: 'Astro',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 11,
      name: 'Expo',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 71,
      name: 'Angular',
      level: 'learning',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 72,
      name: 'Flutter',
      level: 'learnt',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 13,
      name: 'Material UI',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 34,
      name: 'PostCSS',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 35,
      name: 'Tailwind CSS',
      level: 'learning',
      category: 'library-framework',
    },
    {
      id: 14,
      name: 'React Native Elements',
      level: 'learnt',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 15,
      name: 'React Router',
      level: 'learnt',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 16,
      name: 'MobX',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 17,
      name: 'Redux',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 18,
      name: 'i18next',
      level: 'learnt',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 19,
      name: 'Firebase',
      level: 'learnt',
      category: 'dev-tool',
    },
    {
      id: 70,
      name: 'Yarn',
      level: 'learnt',
      category: 'dev-tool',
      hidden: true,
    },
    {
      id: 62,
      name: 'NPM',
      level: 'learnt',
      category: 'dev-tool',
      hidden: true,
    },
    {
      id: 20,
      name: 'MongoDB',
      level: 'learnt',
      category: 'database',
    },
    {
      id: 77,
      name: 'PostgreSQL',
      level: 'learning',
      category: 'database',
    },
    {
      id: 21,
      name: 'Express',
      level: 'learning',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 41,
      name: 'Zod',
      level: 'learning',
      category: 'library-framework',
    },
    {
      id: 22,
      name: 'NestJs',
      level: 'learning',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 33,
      name: 'Node.js',
      level: 'learning',
      category: 'library-framework',
    },
    {
      id: 32,
      name: 'Jest',
      level: 'learning',
      category: 'library-framework',
    },
    {
      id: 23,
      name: 'CI/CD',
      level: 'learning',
      category: 'dev-tool',
    },
    {
      id: 24,
      name: 'Google Cloud',
      level: 'learnt',
      category: 'dev-tool',
    },
    {
      id: 25,
      name: 'Git',
      level: 'learnt',
      category: 'dev-tool',
    },
    {
      id: 26,
      name: 'Gitlab',
      level: 'learnt',
      category: 'dev-tool',
      hidden: true,
    },
    {
      id: 28,
      name: 'Github',
      level: 'learnt',
      category: 'dev-tool',
      hidden: true,
    },
    {
      id: 27,
      name: 'Expo EAS',
      level: 'learnt',
      category: 'dev-tool',
      hidden: true,
    },
    {
      id: 29,
      name: 'Docker',
      level: 'learnt',
      category: 'dev-tool',
    },
    {
      id: 30,
      name: 'Wordpress',
      level: 'learnt',
      category: 'dev-tool',
      hidden: true,
    },
    {
      id: 31,
      name: 'API REST',
      level: 'learnt',
      category: 'dev-tool',
    },
    {
      id: 36,
      name: 'Github Copilot',
      level: 'learnt',
      category: 'ai-tool',
    },
    {
      id: 37,
      name: 'Codeium',
      level: 'learnt',
      category: 'ai-tool',
      hidden: true,
    },
    {
      id: 38,
      name: 'Figma',
      level: 'learnt',
      category: 'dev-tool',
    },
    {
      id: 39,
      name: 'Todoist',
      level: 'learnt',
      category: 'tool',
      hidden: true,
    },
    {
      id: 40,
      name: 'Trello',
      level: 'learnt',
      category: 'tool',
      hidden: true,
    },
    {
      id: 42,
      name: 'Slack',
      level: 'learnt',
      category: 'tool',
      hidden: true,
    },
    {
      id: 43,
      name: 'Chat GPT',
      level: 'learnt',
      category: 'ai-tool',
      hidden: true,
    },
    {
      id: 45,
      name: 'Phind',
      level: 'learnt',
      category: 'ai-tool',
      hidden: true,
    },
    {
      id: 47,
      name: 'Upwork',
      level: 'learnt',
      category: 'tool',
      hidden: true,
    },
    {
      id: 52,
      name: 'Microsoft Office',
      level: 'learnt',
      category: 'tool',
      hidden: true,
    },
    {
      id: 53,
      name: 'Trabajo en equipo en remoto',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 54,
      name: 'Gestión de proyectos',
      level: 'learnt',
      category: 'soft-skill',
    },
    {
      id: 55,
      name: 'Objetivos SMART',
      level: 'learnt',
      category: 'soft-skill',
    },
    {
      id: 56,
      name: 'Priorización',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 57,
      name: 'Liderazgo de equipos',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 58,
      name: 'Trabajo autónomo',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 59,
      name: 'Aprendizaje activo',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 60,
      name: 'Code ownership',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 61,
      name: 'Debugging',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 63,
      name: 'UI/UX',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 64,
      name: 'Comprensión del modelo de negocio',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 65,
      name: 'Orientación de personal de prácticas',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 66,
      name: 'Revisión de código',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 67,
      name: 'Flexibilidad horaria',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 68,
      name: 'Agile',
      level: 'learning',
      category: 'soft-skill',
    },
    {
      id: 73,
      name: 'Inglés',
      level: 'learnt',
      category: 'human-language',
    },
    {
      id: 74,
      name: 'Español',
      level: 'learnt',
      category: 'human-language',
    },
    {
      id: 75,
      name: 'Catalán',
      level: 'learnt',
      category: 'human-language',
    },
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      id: 2,
      title: 'Desarrollo Full Stack',
      institution: 'Zero To Mastery Academy',
      location: 'Toronto, Canadá (remoto)',
      period: 'Set 2023 - Presente',
      lines: [
        'Aprendiendo DS&A y desarrollo Full Stack con Next.js, Tailwind CSS, Zod y PostgreSQL.',
      ],
      iconSrc: '',
    },
    {
      id: 1,
      title: 'Máster en Desarrollo de Aplicaciones',
      institution: 'Universitat Oberta de Catalunya',
      location: 'Barcelona, España (remoto)',
      period: 'Feb 2020 - Ene 2022',
      lines: [
        'Aprendí diseño de aplicaciones web/móviles con Figma y desarrollo con Typescript, incluido un proyecto final con una empresa real. También practiqué conceptos básicos de informática con C.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/uoc.jpg',
    },
    {
      id: 0,
      title: 'Grado en Turismo',
      institution: 'Universitat Rovira i Virgili',
      location: 'Tarragona, España',
      period: 'Set 2013 - Jun 2017',
      lines: [],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/urv.jpg',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      id: 5,
      title: 'Desarrollador Lead',
      company: 'Studio by Caigo',
      location: 'Tarragona, España (remoto)',
      period: 'Ago 2022 - Jun 2023',
      lines: [
        'Implementé un estructurado sistema de desarrollo por objetivos, revisiones de código y reuniones periódicas para desarrollar proyectos de éxito con React, React Native, Firebase y Express.',
        'Escribí la documentación para el equipo de desarrollo e incorporación para los nuevos integrantes el equipo.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 4,
      title: 'Desarrollador frontend de apps con Typescript',
      company: 'Studio by Caigo',
      location: 'Tarragona, España (híbrido)',
      period: 'Jul 2021 - Ago 2022',
      lines: [
        'Desarrollé el frontend de apps con React y React Native. Aprendí a colaborar con Gitlab.',
        'Utilicé Firebase y Google Cloud para configurar un backend robusto para varios proyectos. También ayudé con el desarrollo con NestJs, Express, MongoDB y Docker.',
        'Implementé un sistema automatizado de publicación, gestión de versiones y actualizaciones de las apps con Expo EAS para Android y iOS.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 3,
      title: 'Desarrollador C# con Unity 3D',
      company: 'Ekisolid',
      location: 'Barcelona, España (remoto)',
      period: 'Nov 2017 - Dic 2019',
      lines: [
        'Con C#, desarrollé la arquitectura de software para experiencias VR, con excelentes calificaciones de clientes.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/ekisolid.jpg',
    },
    {
      id: 2,
      title: 'Gestor de riesgos (prácticas)',
      company: 'Portaventura',
      location: 'Vila-Seca, España',
      period: 'Feb 2017 - Abr 2017',
      lines: [
        'Desarrollé macros de Office Excel que redujeron significativamente el tiempo de procesamiento de las facturas de los daños del parque. También realicé otras tareas poco relevantes.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/portaventura.jpg',
      hidden: true,
    },
    {
      id: 1,
      title: 'Desarrollador web con Wordpress',
      company: 'Digital Media Empresas',
      location: 'Tarragona, España (remoto)',
      period: 'Jun 2016 - Nov 2016',
      lines: [],
      iconSrc:
        getPublicFolderURL() +
        '/assets/images/cv/logos/digital-media-empresas.jpg',
    },
    {
      id: 0,
      title: 'Gestor de plazas de alojamiento (prácticas)',
      company: 'Hotelbeds Group',
      location: 'Tarragona, España',
      period: 'Feb 2016 - May 2016',
      lines: [
        'Desarrollé macros de Office Excel que redujeron significativamente el tiempo de procesamiento de los datos asociados a las ventas de reservas. También realicé otras tareas poco relevantes.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/hotelbeds.jpg',
      hidden: true,
    },
  ],
};

const projectSection: ProjectSection = {
  entries: [
    {
      id: 0,
      name: 'Página web personal',
      period: 'Set 2023',
      lines: [
        'Mi sitio web personal para mostrar mis proyectos reales y mejorar mis habilidades en HTML/CSS/JS.',
      ],
      technologies: [
        {name: 'Astro'},
        {name: 'React'},
        {name: 'Typescript'},
        {name: 'PostCSS'},
      ],
      urls: new Map([
        ['live', 'https://irian.codes'],
        ['repository', 'https://github.com/irian-codes/personal-site'],
      ]),
      iconSrc: '',
    },
  ],
};

const otherSection: OtherSection = {
  lines: ['Idiomas: Inglés, Castellano, Catalán.', 'Permiso de conducir: Sí.'],
};

export const cvData_es: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  projectSection,
  otherSection,
};
