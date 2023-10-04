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
  linkedin: 'linkedin.com/in/irian-mont%C3%B3n-0b58358a',
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
  lines: [
    '- Programming languages: Typescript, Javascript, JSON, HTML, JSX, CSS, C#, AutoHotkey, Markdown',
    '- Coding libraries/frameworks: React, React Native, Astro, Expo EAS, Axios, Material UI (MUI), React Native Elements, React Router, MobX, Redux Toolkit, i18next, Firebase, MongoDB, Express, NestJS',
    '- Development tools: CI/CD, Expo EAS, Google Cloud, Git, Gitlab, Github, Docker, Wordpress, REST API, Postman, lambda functions, Linux, WSL, Github Copilot, Codeium',
    '- Other tools: Figma, Todoist, Trello, Teams, Slack, Chat GPT, Bard, Phind, OBS, Upwork, Google Drive, OneDrive, Word, Excel, Power Point',
    '- Other and soft skills: Remote team collaboration, project management, SMART goals, prioritization, team leadership, working independently, self-driven active learning, code ownership, app release and update publishing, app design, UX/UI, business needs understanding, mentoring/training interns, code review, adaptability to new technologies, agile, work ethic, attention to detail.',
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      title: 'Masters in Mobile App Development',
      institution: 'UOC',
      location: 'Remote, Spain',
      period: 'Feb 2020 - Jan 2022',
      lines: [
        '-	Developed final project with a real company (Studio by Caigo)',
        '-	Learned mobile app development with Android, Flutter and React Native',
        '-	Learned web development with Angular, Typescript and HTML/CSS',
        '-	Learned designing apps with Figma and other customer analysis techniques like Customer Journey Map and User Persona.',
        '-	Learned computer science basics with C',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/uoc.jpg',
    },
    {
      title: "Tourism and Hospitality Bachelor's Degree",
      institution: 'URV',
      location: 'Tarragona, Spain',
      period: 'Sept 2013 - Jun 2017',
      lines: [
        '-	Learned business needs identification and management',
        '-	Learned business marketing and business planning',
        '-	Specialized in financial management of companies',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/urv.jpg',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      title: 'Lead frontend developer',
      company: 'Studio by Caigo',
      location: 'Remote, Spain',
      period: 'Aug 2022 - May 2023',
      lines: [
        '- Led the development team on my latest projects done with React and React Native.',
        '- Organized the work to be done into milestones, set goals with the team and did code reviews and standups to ensure the project was delivered according to the quality standards of the company, the project’s requirements and ensured it was delivered within a reasonable timeframe.',
        '- Created project documentation for the development team.',
        '- Hired developers and did job interviews.',
        '- Mentored interns and guided them to be useful for themselves and the company.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      title: 'Frontend app developer',
      company: 'Studio by Caigo',
      location: 'Remote, Spain',
      period: 'Jul 2021 - Aug 2022',
      lines: [
        '- Developed the frontend part of several apps with React and React Native.',
        '- Communicated with the backend team to ensure the frontend worked well with their backend.',
        '- Configured the backend of several projects with Firebase, also helped with developing in NestJs, ExpressJs, MongoDB and Docker.',
        '- Handled the release and updates of apps with Expo EAS for Android and iOS.',
        '- Learned to work with Gitlab and Google Cloud hosting solutions.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/studio-by-caigo.jpg',
    },
    {
      title: 'Unity 3D VR developer',
      company: 'Ekisolid',
      location: 'Remote, Spain',
      period: 'Nov 2017 - Dec 2019',
      lines: [
        '- Developed many scripts in C# to add functionality to the project made by the game design team. Including networking between different headsets, how to handle user head movement including jumping and hand movement handling and game management and optimization.',
        '- Integrated Unity with external devices like a Bluetooth controlled fan by an Arduino and a racing simulator cockpit with SimTools.',
        '- Applied physics theorems to simulate 3D objects collisions and movements.',
        '- Ensured projects were delivered on time since customers were showcasing them at different events with a very strict date.',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/logos/ekisolid.jpg',
    },
    {
      title: 'Wordpress website developer',
      company: 'Digital Media Empresas',
      location: 'Remote, Spain',
      period: 'Jun 2016 - Nov 2016',
      lines: [
        '- Designed and developed websites in Wordpress using Divi.',
        '- Learned HTML/CSS and Wordpress.',
      ],
      iconSrc:
        'http://localhost:4321/assets/images/cv/logos/digital-media-empresas.jpg',
    },
  ],
};

const interestsSection: InterestsSection = {
  lines: [
    '- Member of a local board and roleplaying games club',
    '- Health, mindfulness and nutrition',
    '- Woodworking and paper crafts',
  ],
};

const otherSection: OtherSection = {
  lines: ['- Languages: English, Spanish, Catalan', '- Driving License: Yes'],
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
