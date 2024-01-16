import {getPublicFolderURL} from '../../components/cv/utils/URL';
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
  position: "Desenvolupador d'apps/web",
  birthdate: '1993-12-10T00:00:00+01:00',
  photoSrc: getPublicFolderURL() + '/assets/images/cv/irian-cv-image.jpg',
  websiteUrl: 'https://irian.codes',
  websiteQrImageSrc:
    getPublicFolderURL() + '/assets/images/cv/irian-codes-qr.png',
  location: 'Reus, Espanya',
  email: 'irian@irian.codes',
  phone: '+34611082305',
  linkedin: 'linkedin.com/in/irian-mont%C3%B3n-0b58358a',
  repository: 'github.com/irian-codes',
};

const aboutSection: AboutSection = {
  lines: [
    `Bones! Em dic ${
      header.name
    }, soc un desenvolupador d'apps frontend de ${calculateAge(
      header.birthdate
    )} anys amb més de 4 anys d'experiència en programació, treballant des de casa. He creat bastantes aplicacions per a la web, Android i iOS amb React i React Native amb Typescript, incloses algunes on he estat desenvolupador lead. Estic buscant una feina on pugui créixer, tot participant en projectes més complexos, perquè fins ara he estat treballant en apps per a petites empreses però ara busco reptes més interessants. Sóc desenvolupador perquè m'agrada crear software útil utilitzant tecnologies innovadores al costat d’un bon equip del que pugui aprendre i millorar. En l'àmbit personal, recentment he estat experimentant amb agents d'IA de programació i generació d'imatges, el qual ha resultat en un parell d'idees interessants que plantejo desenvolupar.`,
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
      name: 'Treball en equip en remot',
      level: 'proficient',
      category: 'soft-skill',
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
    },
    {
      id: 56,
      name: 'Priorització',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 57,
      name: "Lideratge d'equips",
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 58,
      name: 'Treball autònom',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 59,
      name: 'Aprenentatge actiu',
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
      name: 'Comprensió del model de negoci',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 65,
      name: 'Orientació de personal de pràctiques',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 66,
      name: 'Revisió de codi',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 67,
      name: 'Flexibilitat horària',
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
      title: "Màster en Desenvolupament d'Aplicacions",
      institution: 'Universitat Oberta de Catalunya',
      location: 'Remot, Espanya',
      period: 'Feb 2020 - Gen 2022',
      lines: [
        'Projecte final desenvolupat a una empresa real (Studio by Caigo).',
        "Desenvolupament d'apps web/mòbils amb Angular, Android Studio, Flutter i React Native.",
        "Disseny d'apps amb Figma i tècniques d'anàlisi d'usuaris com Customer Journey Map i User Persona.",
        "Conceptes bàsics d'informàtica amb C.",
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/uoc.jpg',
    },
    {
      id: 1,
      title: 'Grau en Turisme',
      institution: 'Universitat Rovira i Virgili',
      location: 'Tarragona, Espanya',
      period: 'Set 2013 - Jun 2017',
      lines: [
        "Estudis en gestió d'empreses turístiques, màrqueting i business plan.",
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/urv.jpg',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      id: 0,
      title: 'Desenvolupador lead frontend',
      company: 'Studio by Caigo',
      location: 'Remot, Espanya',
      period: 'Ago 2022 - Mai 2023',
      lines: [
        "He dirigit l'equip de desenvolupament dels meus últims projectes realitzats amb React i React Native.",
        "Vaig organitzar el treball en milestones, establint objectius amb l'equip i fent revisions de codi i standups per garantir que el projecte es lliurés d'acord amb els estàndards de qualitat de l'empresa, els requisits del projecte i en un termini raonable.",
        "Crear documentació dels projectes i per la incorporació a l'equip de nous membres.",
        "Vaig realitzar entrevistes, seleccionar i incorporar desenvolupadors i becaris a l'equip.",
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 1,
      title: "Desenvolupador frontend d'apps",
      company: 'Studio by Caigo',
      location: 'Remot, Espanya',
      period: 'Jul 2021 - Ago 2022',
      lines: [
        "Desenvolupar el frontend d'apps amb React i React Native. Vaig aprendre a col·laborar amb Gitlab.",
        "Treballar amb l'equip de backend per garantir que el frontend funcionés bé amb el backend API REST.",
        'Configurar el backend de diversos projectes amb Firebase i Google Cloud, també va ajudar amb el desenvolupament amb NestJs, ExpressJs, MongoDB i Docker.',
        "Gestionar el llançament, gestió de versions i actualitzacions d'apps amb Expo EAS per a Android i iOS.",
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 2,
      title: 'Desenvolupador Unity 3D VR',
      company: 'Ekisolid',
      location: 'Remot, Espanya',
      period: 'Nov 2017 - Des 2019',
      lines: [
        "Vaig desenvolupar molts scripts en C# per afegir funcionalitats al projecte realitzat per l'equip de disseny del joc. Incloent networking, la física del casc de realitat virtual i gestió i optimització del jocs.",
        'Integrar Unity amb dispositius IoT com un ventilador controlat per Bluetooth per un Arduino i un simulador de moviment de cotxe.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/ekisolid.jpg',
    },
    {
      id: 3,
      title: 'Desenvolupador web amb Wordpress',
      company: 'Digital Media Empresas',
      location: 'Remot, Espanya',
      period: 'Jun 2016 - Nov 2016',
      lines: [
        'Dissenyar i desenvolupar pàgines web en Wordpress utilitzant Divi, fent ajustos amb CSS.',
      ],
      iconSrc:
        getPublicFolderURL() +
        '/assets/images/cv/logos/digital-media-empresas.jpg',
    },
  ],
};

const otherSection: OtherSection = {
  lines: ['Idiomes: català, castellà, anglès.', 'Permís de conduir: Sí.'],
};

export const cvData_ca: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  otherSection,
};
