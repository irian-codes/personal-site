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
    "Lifelong builder, from assembling my computer at 8 to leading a team of developers creating great apps. Now, after 4.5 years of experience, I'm seeking to step up my career in an established company to accelerate my growth and potential. I'm seeking a long-term job. Let's build together!",
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
      id: 76,
      name: 'Next.js',
      level: 'learning',
      category: 'library-framework',
    },
    {
      id: 9,
      name: 'React Native',
      level: 'learnt',
      category: 'library-framework',
    },
    {
      id: 10,
      name: 'Astro',
      level: 'learning',
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
      name: 'SASS',
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
      name: 'REST API',
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
      name: 'Remote team collaboration',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 54,
      name: 'Project management',
      level: 'learnt',
      category: 'soft-skill',
    },
    {
      id: 55,
      name: 'SMART goals',
      level: 'learnt',
      category: 'soft-skill',
    },
    {
      id: 56,
      name: 'Prioritization',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 57,
      name: 'Team leadership',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 58,
      name: 'Working independently',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 59,
      name: 'Active learning',
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
      name: 'Business needs understanding',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 65,
      name: 'Mentoring interns',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 66,
      name: 'Code review',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 67,
      name: 'Flexible work schedule',
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
      id: 69,
      name: 'Work ethic',
      level: 'learnt',
      category: 'soft-skill',
      hidden: true,
    },
    {
      id: 73,
      name: 'English',
      level: 'learnt',
      category: 'human-language',
    },
    {
      id: 74,
      name: 'Spanish',
      level: 'learnt',
      category: 'human-language',
    },
    {
      id: 75,
      name: 'Catalan',
      level: 'learnt',
      category: 'human-language',
    },
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      id: 2,
      title: 'Full Stack Development',
      institution: 'Zero To Mastery Academy',
      location: 'Toronto, Canada (remote)',
      period: 'Sep 2023 - Present',
      lines: [
        'Learning Full Stack development with Next.js, React Native, Express and PostgreSQL.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/uoc.jpg',
    },
    {
      id: 1,
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
      id: 0,
      title: "Tourism and Hospitality Bachelor's Degree",
      institution: 'Universitat Rovira i Virgili',
      location: 'Tarragona, Spain',
      period: 'Sept 2013 - Jun 2017',
      lines: [],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/urv.jpg',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      id: 5,
      title: 'Lead developer',
      company: 'Studio by Caigo',
      location: 'Reus, Spain (remote)',
      period: 'Aug 2022 - May 2023',
      lines: [
        "Implemented a structured development process using milestones, clear team goals, and regular code reviews. This ensured projects met stakeholders' expectations. Made with React, React Native, Firebase and Express.",
        'Created extensive project and onboarding documentation for the development team and new hires.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 4,
      title: 'Frontend app developer',
      company: 'Studio by Caigo',
      location: 'Reus, Spain (hybrid)',
      period: 'Jul 2021 - Aug 2022',
      lines: [
        'Developed the frontend part of several apps with React and React Native. Learned to collab with Gitlab.',
        'Leveraged Firebase and Google Cloud to configure robust backends for various projects. Contributed to development efforts with NestJS, Express, MongoDB, and Docker.',
        'Implemented an automated system to publish, manage and update apps for Android and iOS with Expo EAS.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 3,
      title: 'Unity 3D VR developer',
      company: 'Ekisolid',
      location: 'Barcelona, Spain (remote)',
      period: 'Nov 2017 - Dec 2019',
      lines: [
        'Developed immersive VR experiences in Unity and C# that got superb ratings from clients and users.',
      ],
      iconSrc: getPublicFolderURL() + '/assets/images/cv/logos/ekisolid.jpg',
    },
    {
      id: 2,
      title: 'Portaventura risk management (internship)',
      company: 'Portaventura',
      location: 'Vila-Seca, Spain',
      period: 'Feb 2017 - Apr 2017',
      lines: [
        'Developed a series of Microsoft Office Excel macros to significantly reduce the time it took to process park reparations invoices. I also did other non-relevant tasks in this position.',
      ],
      iconSrc:
        getPublicFolderURL() + '/assets/images/cv/logos/portaventura.jpg',
      hidden: true,
    },
    {
      id: 1,
      title: 'Wordpress website developer',
      company: 'Digital Media Empresas',
      location: 'Reus, Spain (remote)',
      period: 'Jun 2016 - Nov 2016',
      lines: [],
      iconSrc:
        getPublicFolderURL() +
        '/assets/images/cv/logos/digital-media-empresas.jpg',
    },
    {
      id: 0,
      title: 'Accomodation manager (internship)',
      company: 'Hotelbeds Group',
      location: 'Tarragona, Spain',
      period: 'Feb 2016 - May 2016',
      lines: [
        'Developed a series of Microsoft Office Excel macros to significantly reduce the time it took to process sales data. I also did other non-relevant tasks in this position.',
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
      name: 'Personal website',
      period: 'Sep 2023',
      lines: [
        'My portfolio website to showcase my real projects and learn Astro, which enhanced my HTML/CSS/JS skills.',
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
  lines: ['Languages: English, Spanish, Catalan.', 'Driving License: Yes.'],
};

export const cvData_en: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  projectSection,
  otherSection,
};
