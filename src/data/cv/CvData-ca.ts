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
  location: 'Reus, Espanya',
  locationMapsUrl: 'https://maps.app.goo.gl/ggMeWYByNuUqigrJ7',
  email: 'irian@irian.codes',
  phone: '+34611082305',
  linkedin: 'linkedin.com/in/irian-mont%C3%B3n-0b58358a',
  repository: 'github.com/irian-codes',
};

const aboutSection: AboutSection = {
  lines: [
    "Desenvolupador Typescript amb 4+ anys d'experiència buscant una nova oportunitat laboral per superar-me!",
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
      id: 2,
      name: 'JSON',
      level: 'proficient',
      category: 'language',
      hidden: true,
    },
    {
      id: 3,
      name: 'HTML/CSS/JS',
      level: 'proficient',
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
      id: 76,
      name: 'Next.js',
      level: 'beginner',
      category: 'library-framework',
      hidden: true,
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
      hidden: true,
    },
    {
      id: 13,
      name: 'Material UI',
      level: 'intermediate',
      category: 'library-framework',
    },
    {
      id: 14,
      name: 'React Native Elements',
      level: 'proficient',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 15,
      name: 'React Router',
      level: 'proficient',
      category: 'library-framework',
      hidden: true,
    },
    {
      id: 16,
      name: 'MobX',
      level: 'intermediate',
      category: 'library-framework',
    },
    {
      id: 17,
      name: 'Redux',
      level: 'intermediate',
      category: 'library-framework',
    },
    {
      id: 18,
      name: 'i18next',
      level: 'proficient',
      category: 'library-framework',
      hidden: true,
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
      hidden: true,
    },
    {
      id: 62,
      name: 'NPM',
      level: 'proficient',
      category: 'dev-tool',
      hidden: true,
    },
    {
      id: 20,
      name: 'MongoDB',
      level: 'beginner',
      category: 'database',
    },
    {
      id: 77,
      name: 'PostgreSQL',
      level: 'beginner',
      category: 'database',
      hidden: true,
    },
    {
      id: 21,
      name: 'Express',
      level: 'beginner',
      category: 'library-framework',
    },
    {
      id: 22,
      name: 'NestJs',
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
      hidden: true,
    },
    {
      id: 28,
      name: 'Github',
      level: 'intermediate',
      category: 'dev-tool',
      hidden: true,
    },
    {
      id: 27,
      name: 'Expo EAS',
      level: 'intermediate',
      category: 'dev-tool',
      hidden: true,
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
      hidden: true,
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
      hidden: true,
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
      hidden: true,
    },
    {
      id: 40,
      name: 'Trello',
      level: 'beginner',
      category: 'tool',
      hidden: true,
    },
    {
      id: 42,
      name: 'Slack',
      level: 'proficient',
      category: 'tool',
      hidden: true,
    },
    {
      id: 43,
      name: 'Chat GPT',
      level: 'intermediate',
      category: 'ai-tool',
      hidden: true,
    },
    {
      id: 45,
      name: 'Phind',
      level: 'intermediate',
      category: 'ai-tool',
      hidden: true,
    },
    {
      id: 47,
      name: 'Upwork',
      level: 'proficient',
      category: 'tool',
      hidden: true,
    },
    {
      id: 52,
      name: 'Microsoft Office',
      level: 'proficient',
      category: 'tool',
      hidden: true,
    },
    {
      id: 53,
      name: 'Treball en equip en remot',
      level: 'proficient',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 54,
      name: 'Gestió de projectes',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 55,
      name: 'Objectius SMART',
      level: 'intermediate',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 56,
      name: 'Priorització',
      level: 'proficient',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 57,
      name: "Lideratge d'equips",
      level: 'intermediate',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 58,
      name: 'Treball autònom',
      level: 'proficient',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 59,
      name: 'Aprenentatge actiu',
      level: 'proficient',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 60,
      name: 'Code ownership',
      level: 'proficient',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 61,
      name: 'Debugging',
      level: 'intermediate',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 63,
      name: 'UI/UX',
      level: 'intermediate',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 64,
      name: 'Comprensió del model de negoci',
      level: 'intermediate',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 65,
      name: 'Orientació de personal de pràctiques',
      level: 'intermediate',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 66,
      name: 'Revisió de codi',
      level: 'intermediate',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 67,
      name: 'Flexibilitat horària',
      level: 'proficient',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 68,
      name: 'Agile',
      level: 'beginner',
      category: 'soft-skill',
    },
    {
      id: 73,
      name: 'Anglès',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 74,
      name: 'Castellà',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 75,
      name: 'Català',
      level: 'proficient',
      category: 'soft-skill',
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
        'Aprenent desenvolupament Full Stack amb Next.js, React Native, Express i PostgreSQL.',
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
      location: 'Reus, Espanya (remot)',
      period: 'Ago 2022 - Mai 2023',
      lines: [
        "Vaig organitzar els projectes per objectius i vaig fer revisions de codi amb l'equip per desenvolupar apps amb React, React Native, Firebase i Express que van complir amb les expectatives de qualitat de l'empresa.",
        "Vaig escriure documentació dels projectes per a l'equip de desenvolupament i incorporació per als nous integrants de l'equip.",
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 4,
      title: "Desenvolupador frontend d'apps",
      company: 'Studio by Caigo',
      location: 'Reus, Espanya (híbrid)',
      period: 'Jul 2021 - Ago 2022',
      lines: [
        "Desenvolupar el frontend d'apps amb React i React Native. Vaig aprendre a col·laborar amb Gitlab.",
        'Vaig configurar el backend de diversos projectes amb Firebase i Google Cloud, també vaig ajudar amb el desenvolupament amb NestJs, Express, MongoDB i Docker.',
        "Gestionar el llançament, gestió de versions i actualitzacions d'apps amb Expo EAS per a Android i iOS.",
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 3,
      title: 'Desenvolupador Unity 3D VR',
      company: 'Ekisolid',
      location: 'Barcelona, Espanya (remot)',
      period: 'Nov 2017 - Des 2019',
      lines: [
        'Mitjançant scripts amb C# vaig donar funcionalitat a les experiències VR que els dissenyadors van crear a Unity.',
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
      location: 'Reus, Espanya (remot)',
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
