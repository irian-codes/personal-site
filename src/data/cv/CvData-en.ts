import {calculateAge} from '../../utils/DateUtils';
import type {
  AboutSection,
  CvData,
  EducationSection,
  Header,
  InterestsSection,
  OtherSection,
  SkillsSection,
  WorkExperienceSection,
} from './types/CvData';

const header: Header = {
  name: 'Irian',
  surnames: 'Montón',
  birthdate: '1993-12-10T00:00:00+01:00',
  // TODO: Set the correct URL on deployment.
  photoSrc: 'http://localhost:4321/assets/images/cv/irian-cv-image_2022.jpeg',
  websiteUrl: 'irian.codes',
  // TODO: Set the correct URL on deployment.
  websiteQrImageSrc:
    'http://localhost:4321/assets/images/cv/irian-codes-qr.png',
  location: 'Spain',
  email: 'irian@irian.codes',
  phone: '',
  linkedin: 'linkedin.com/in/irian-montón-0b58358a',
  repository: 'github.com/irian-codes',
};

const aboutSection: AboutSection = {
  lines: [
    `My name is ${header.name}, I am ${calculateAge(
      header.birthdate
    )} years old. I'm a highly skilled web developer with 5 years of experience in building responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and React. Strong problem-solving and communication skills.`,
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
      id: 6,
      name: 'AutoHotKey',
      level: 'beginner',
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
      id: 12,
      name: 'Axios',
      level: 'proficient',
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
      id: 27,
      name: 'Expo EAS',
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
      id: 32,
      name: 'Postman',
      level: 'intermediate',
      category: 'dev-tool',
    },
    {
      id: 33,
      name: 'Linux',
      level: 'intermediate',
      category: 'tool',
    },
    {
      id: 34,
      name: 'Windows',
      level: 'intermediate',
      category: 'tool',
    },
    {
      id: 50,
      name: 'Mac OS',
      level: 'beginner',
      category: 'tool',
    },
    {
      id: 35,
      name: 'WSL',
      level: 'intermediate',
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
      id: 41,
      name: 'Teams',
      level: 'intermediate',
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
      id: 44,
      name: 'Bard',
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
      id: 46,
      name: 'OBS',
      level: 'intermediate',
      category: 'tool',
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
      name: 'Self-driven active learning',
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
      name: 'App release and update publishing',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 62,
      name: 'App design',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 63,
      name: 'UX/UI',
      level: 'intermediate',
      category: 'soft-skill',
    },
    {
      id: 64,
      name: 'Business needs understanding',
      level: 'beginner',
      category: 'soft-skill',
    },
    {
      id: 65,
      name: 'Mentoring/training interns',
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
      name: 'Adaptability to new technologies',
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
    {
      id: 70,
      name: 'Attention to detail',
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
      location: 'Remote, Spain',
      period: 'Feb 2020 - Jan 2022',
      lines: [
        'Developed final project with a real company (Studio by Caigo)',
        'Learned mobile app development with Android, Flutter and React Native',
        'Learned web development with Angular, Typescript and HTML/CSS',
        'Learned designing apps with Figma and other customer analysis techniques like Customer Journey Map and User Persona.',
        'Learned computer science basics with C',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/uoc.jpg',
    },
    {
      id: 1,
      title: "Tourism and Hospitality Bachelor's Degree",
      institution: 'Universitat Rovira i Virgili',
      location: 'Tarragona, Spain',
      period: 'Sept 2013 - Jun 2017',
      lines: [
        'Learned business needs identification and management',
        'Learned business marketing and business planning',
        'Specialized in financial management of companies',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/urv.jpg',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      id: 0,
      title: 'Lead frontend developer',
      company: 'Studio by Caigo',
      location: 'Remote, Spain',
      period: 'Aug 2022 - May 2023',
      lines: [
        'Led the development team on my latest projects done with React and React Native.',
        'Organized the work to be done into milestones, set goals with the team and did code reviews and standups to ensure the project was delivered according to the quality standards of the company, the project’s requirements and ensured it was delivered within a reasonable timeframe.',
        'Created project documentation for the development team.',
        'Hired developers and did job interviews.',
        'Mentored interns and guided them to be useful for themselves and the company.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 1,
      title: 'Frontend app developer',
      company: 'Studio by Caigo',
      location: 'Remote, Spain',
      period: 'Jul 2021 - Aug 2022',
      lines: [
        'Developed the frontend part of several apps with React and React Native.',
        'Communicated with the backend team to ensure the frontend worked well with their backend.',
        'Configured the backend of several projects with Firebase, also helped with developing in NestJs, ExpressJs, MongoDB and Docker.',
        'Handled the release and updates of apps with Expo EAS for Android and iOS.',
        'Learned to work with Gitlab and Google Cloud hosting solutions.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      id: 2,
      title: 'Unity 3D VR developer',
      company: 'Ekisolid',
      location: 'Remote, Spain',
      period: 'Nov 2017 - Dec 2019',
      lines: [
        'Developed many scripts in C# to add functionality to the project made by the game design team. Including networking between different headsets, how to handle user head movement including jumping and hand movement handling and game management and optimization.',
        'Integrated Unity with external devices like a Bluetooth controlled fan by an Arduino and a racing simulator cockpit with SimTools.',
        'Applied physics theorems to simulate 3D objects collisions and movements.',
        'Ensured projects were delivered on time since customers were showcasing them at different events with a very strict date.',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/ekisolid.jpg',
    },
    {
      id: 3,
      title: 'Wordpress website developer',
      company: 'Digital Media Empresas',
      location: 'Remote, Spain',
      period: 'Jun 2016 - Nov 2016',
      lines: [
        'Designed and developed websites in Wordpress using Divi.',
        'Learned HTML/CSS and Wordpress.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/digital-media-empresas.jpg',
    },
  ],
};

const interestsSection: InterestsSection = {
  lines: [
    'Member of a local board and roleplaying games club',
    'Health, mindfulness and nutrition',
    'Woodworking and paper crafts',
  ],
};

const otherSection: OtherSection = {
  lines: ['Languages: English, Spanish, Catalan', 'Driving License: Yes'],
};

export const cvData_en: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  interestsSection,
  otherSection,
};
