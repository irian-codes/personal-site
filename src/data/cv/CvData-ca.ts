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
  position: "Desenvolupador d'apps mòbil i web",
  birthdate: '1993-12-10T00:00:00+01:00',
  photoSrc: getPublicFolderURL() + '/assets/images/cv/irian-cv-image.jpg',
  website: 'https://irian.codes',
  websiteQrImageSrc:
    getPublicFolderURL() + '/assets/images/cv/irian-codes-qr.png',
  location: 'Tarragona, Espanya',
  locationMapsUrl: 'https://maps.app.goo.gl/3soGKCQTwza9vfi97',
  email: 'irian@irian.codes',
  phone: '+34611082305',
  linkedin: 'linkedin.com/in/irian-mont%C3%B3n-0b58358a',
  repository: 'github.com/irian-codes',
};

const aboutSection: AboutSection = {
  lines: [
    "Fa 4 anys i mig que creo apps. I ara ha arribat l'hora d'apostar a llarg plaç en una bona empresa on pugui continuar desenvolupant apps amb gran impacte.",
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
      name: 'Treball en equip en remot',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 54,
      name: 'Gestió de projectes',
      level: 'learnt',
      category: 'soft-skill',
    },
    {
      id: 55,
      name: 'Objectius SMART',
      level: 'learnt',
      category: 'soft-skill',
    },
    {
      id: 56,
      name: 'Priorització',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 57,
      name: "Lideratge d'equips",
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 58,
      name: 'Treball autònom',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 59,
      name: 'Aprenentatge actiu',
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
      name: 'Comprensió del model de negoci',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 65,
      name: 'Orientació de personal de pràctiques',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 66,
      name: 'Revisió de codi',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 67,
      name: 'Flexibilitat horària',
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
      name: 'Anglès',
      level: 'learnt',
      category: 'human-language',
    },
    {
      id: 74,
      name: 'Castellà',
      level: 'learnt',
      category: 'human-language',
    },
    {
      id: 75,
      name: 'Català',
      level: 'learnt',
      category: 'human-language',
    },
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      id: 2,
      title: 'Desenvolupament Full Stack',
      institution: 'Zero To Mastery Academy',
      location: 'Toronto, Canadà (remot)',
      period: 'Set 2023 - Present',
      lines: [
        "Aprenent DS&A i desenvolupament d'apps Full Stack amb Next.js, Tailwind CSS, PostgreSQL i Zod.",
      ],
      iconSrc: '',
    },
    {
      id: 1,
      title: "Màster en Desenvolupament d'Aplicacions",
      institution: 'Universitat Oberta de Catalunya',
      location: 'Barcelona, Espanya (remot)',
      period: 'Feb 2020 - Gen 2022',
      lines: [
        "Vaig aprendre disseny d'apps web/mòbils amb Figma i desenvolupament amb Typescript, inclòs un projecte final amb una empresa. També vaig practicar conceptes bàsics d'informàtica amb C.",
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/uoc.jpg',
    },
    {
      id: 0,
      title: 'Grau en Turisme',
      institution: 'Universitat Rovira i Virgili',
      location: 'Tarragona, Espanya',
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
      title: 'Desenvolupador Lead',
      company: 'Studio by Caigo',
      location: 'Tarragona, Espanya (remot)',
      period: 'Ago 2022 - Jun 2023',
      lines: [
        "Vaig implementar un estructurat procés de desenvolupament basat en objectius, reunions periòdiques i revisions de codi per assegurar l'èxit de les apps. Fets amb React, React Native, Firebase i Express.",
        "Vaig escriure documentació per a l'equip de desenvolupament i incorporació per als nous integrants de l'equip.",
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 4,
      title: "Desenvolupador frontend d'apps amb Typescript",
      company: 'Studio by Caigo',
      location: 'Tarragona, Espanya (híbrid)',
      period: 'Jul 2021 - Ago 2022',
      lines: [
        "Desenvolupar el frontend d'apps amb React i React Native. Vaig aprendre a col·laborar amb Gitlab.",
        'Vaig utilitzar Firebase i Google Cloud per configurar backends robustos per varis projectes. També vaig ajudar amb el desenvolupament amb NestJs, Express, MongoDB i Docker.',
        "Vaig implementar un sistema automatitzat de publicació, gestió de versions i actualitzacions d'apps amb Expo EAS per a Android i iOS.",
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 3,
      title: 'Desenvolupador C# amb Unity 3D',
      company: 'Ekisolid',
      location: 'Barcelona, Espanya (remot)',
      period: 'Nov 2017 - Des 2019',
      lines: [
        "Amb C#, vaig desenvolupar l'arquitectura de software d'experiències VR, amb altes qualificacions dels clients.",
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/ekisolid.jpg',
    },
    {
      id: 2,
      title: 'Gestor de riscos (pràctiques)',
      company: 'Portaventura',
      location: 'Vila-Seca, Espanya',
      period: 'Feb 2017 - Abr 2017',
      lines: [
        'Desenvolupar macros per Office Excel que van reduir significativament el temps de processament de les factures dels danys del parc. També vaig fer altres tasques poc rellevants.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/portaventura.jpg',
      hidden: true,
    },
    {
      id: 1,
      title: 'Desenvolupador web amb Wordpress',
      company: 'Digital Media Empresas',
      location: 'Tarragona, Espanya (remot)',
      period: 'Jun 2016 - Nov 2016',
      lines: [],
      iconSrc:
        getPublicFolderURL() +
        '/assets/images/cv/logos/digital-media-empresas.jpg',
    },
    {
      id: 0,
      title: "Gestor de places d'allotjament (pràctiques)",
      company: 'Hotelbeds Group',
      location: 'Tarragona, Espanya',
      period: 'Feb 2016 - Mai 2016',
      lines: [
        'Desenvolupar macros per Office Excel que van reduir significativament el temps de processament de les dades associades a les vendes de reserves. També vaig fer altres tasques poc rellevants.',
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
      name: 'Pàgina web personal',
      period: 'Set 2023',
      lines: [
        'La meva pàgina personal per mostrar els meus projectes reals i millorar les meves habilitats en HTML/CSS/JS.',
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
  lines: ['Idiomes: Anglès, Castellà, Català.', 'Permís de conduir: Sí.'],
};

export const cvData_ca: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  projectSection,
  otherSection,
};
