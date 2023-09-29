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
    '- HTML5, CSS3, JavaScript, React, Node.js',
    '- Responsive Web Design',
    '- Version Control (Git)',
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      title: "CS Master's Degree, University of XYZ (2016 - Present)",
      lines: [
        '- Studied Computer Science with a focus on Artificial Intelligence',
        '- Invented Award: Outstanding Innovator of the Year',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/dummy-qr-code.png',
    },
    {
      title: 'CS Bachelors Degree, University of XYZ (2015 - 2016)',
      lines: [
        '- Studied Computer Science with a focus on Artificial Intelligence',
        '- Invented Award: Outstanding Innovator of the Year',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/dummy-qr-code.png',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      title: 'Web Developer',
      company: 'ABC Company',
      location: 'XYZ City, XYZ Country',
      period: '2016 - Present',
      lines: [
        '- Developed and maintained company websites using React and Node.js',
        '- Collaborated with cross-functional teams to deliver high-quality projects',
        '- Invented Award: Outstanding Innovator of the Year',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/dummy-qr-code.png',
    },
    {
      title: 'Web Developer',
      company: 'XYZ Company',
      location: 'XYZ City, XYZ Country',
      period: '2015 - 2016',
      lines: [
        '- Developed and maintained company websites using React and Node.js',
        '- Collaborated with cross-functional teams to deliver high-quality projects',
        '- Invented Award: Outstanding Innovator of the Year',
      ],
      iconSrc: 'http://localhost:4321/assets/images/cv/dummy-qr-code.png',
    },
  ],
};

const otherSection: OtherSection = {
  lines: [
    '- Languages Spoken: English, Spanish',
    '- Driving License: Yes',
    '- Invented Award: Outstanding Innovator of the Year',
  ],
};

export const cvData_en: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  otherSection,
};
