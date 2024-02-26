import {getPublicFolderURL} from '../../components/cv/utils/URL';
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
  position: 'Mobile and Web Developer',
  birthdate: '1993-12-10T00:00:00+01:00',
  photoSrc: '',
  website: 'https://irian.codes',
  websiteQrImageSrc:
    getPublicFolderURL() + '/assets/images/cv/irian-codes-qr.png',
  location: 'Reus, Spain',
  locationMapsUrl: 'https://maps.app.goo.gl/ggMeWYByNuUqigrJ7',
  email: 'irian@irian.codes',
  phone: '+34611082305',
  linkedin: 'linkedin.com/in/irian-mont%C3%B3n-0b58358a',
  repository: 'github.com/irian-codes',
};

const aboutSection: AboutSection = {
  lines: [
    'Typescript developer with 4+ years of experience ready to tackle bigger and exciting challenges!',
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
      name: 'REST API',
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
      name: 'Remote team collaboration',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 54,
      name: 'Project management',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 55,
      name: 'SMART goals',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 56,
      name: 'Prioritization',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 57,
      name: 'Team leadership',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 58,
      name: 'Working independently',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 59,
      name: 'Active learning',
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
      name: 'Business needs understanding',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 65,
      name: 'Mentoring interns',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 66,
      name: 'Code review',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 67,
      name: 'Flexible work schedule',
      level: 'proficient',
      category: 'soft-skill',
    },
    {
      id: 68,
      name: 'Agile',
      level: 'beginner',
      category: 'soft-skill',
    },
    {
      id: 69,
      name: 'Work ethic',
      level: 'proficient',
      category: 'soft-skill',
    },
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      id: 0,
      title: 'Masters in Mobile App Development',
      institution: 'Universitat Oberta de Catalunya',
      location: 'Barcelona, Spain (remote)',
      period: 'Feb 2020 - Jan 2022',
      lines: [
        'Learned mobile/web app design with Figma and development with Typescript, including a real company final project. Also did CS fundamentals with C.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/uoc.jpg',
    },
    {
      id: 1,
      title: "Tourism and Hospitality Bachelor's Degree",
      institution: 'Universitat Rovira i Virgili',
      location: 'Tarragona, Spain',
      period: 'Sept 2013 - Jun 2017',
      lines: ['Learned business management, marketing and business planning.'],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/urv.jpg',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      id: 0,
      title: 'Lead developer',
      company: 'Studio by Caigo',
      location: 'Reus, Spain (remote)',
      period: 'Aug 2022 - May 2023',
      lines: [
        'Led the development team on projects made with React, React Native, Firebase and ExpressJS.',
        "Organized the work to be done into milestones, set goals with the team and did code reviews and standups to ensure the project was delivered according to the quality standards of the company, the project's requirements and ensured it was delivered within a reasonable timeframe.",
        'Created extensive project and onboarding documentation for the development team.',
        'Interviewed, hired and onboarded developers and interns for the team.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 1,
      title: 'Frontend app developer',
      company: 'Studio by Caigo',
      location: 'Reus, Spain (hybrid)',
      period: 'Jul 2021 - Aug 2022',
      lines: [
        'Developed the frontend part of several apps with React and React Native. Learned to collab with Gitlab.',
        'Worked with the backend team to ensure the frontend worked well with their REST API backend.',
        'Configured the backend of several projects with Firebase and Google Cloud, also helped with developing in NestJs, ExpressJs, MongoDB and Docker.',
        'Handled the release, versioning and updates of apps with Expo EAS for Android and iOS.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 2,
      title: 'Unity 3D VR developer',
      company: 'Ekisolid',
      location: 'Barcelona, Spain (remote)',
      period: 'Nov 2017 - Dec 2019',
      lines: [
        'Developed many scripts in C# to add functionality to the project made by the game design team. Including networking, VR headset physics, game management and optimization.',
        'Integrated Unity with devices like a BT controlled fan by an Arduino and a racing simulator cockpit.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/ekisolid.jpg',
    },
    {
      id: 3,
      title: 'Portaventura risk management (internship)',
      company: 'Portaventura',
      location: 'Vila-Seca, Spain',
      period: 'Feb 2017 - Apr 2017',
      lines: [
        'Developed a series of Microsoft Office Excel macros to significantly reduce the time it took to process park reparations invoices. I also did other non-relevant tasks in this position.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/portaventura.jpg',
    },
    {
      id: 4,
      title: 'Wordpress website developer',
      company: 'Digital Media Empresas',
      location: 'Reus, Spain (remote)',
      period: 'Jun 2016 - Nov 2016',
      lines: [
        'Designed and developed websites in Wordpress using Divi, making adjustments with CSS.',
      ],
      iconSrc:
        getPublicFolderURL() +
        '/assets/images/cv/logos/digital-media-empresas.jpg',
    },
    {
      id: 5,
      title: 'Accomodation manager (internship)',
      company: 'Hotelbeds Group',
      location: 'Tarragona, Spain',
      period: 'Feb 2016 - May 2016',
      lines: [
        'Developed a series of Microsoft Office Excel macros to significantly reduce the time it took to process sales data. I also did other non-relevant tasks in this position.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/hotelbeds.jpg',
    },
  ],
};

const otherSection: OtherSection = {
  lines: ['Languages: English, Spanish, Catalan.', 'Driving License: Yes.'],
};

export const cvData_en: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  otherSection,
};
