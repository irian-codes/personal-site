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
  name: 'Juan Perez',
  age: 30,
  photoSrc: 'http://localhost:4321/assets/images/dummy-cv-image.jpg',
  websiteUrl: 'https://johndoe.com',
  websiteQrImageSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
  location: 'Ciudad XYZ, País XYZ',
  email: 'johndoe@example.com',
  phone: '+1 (123) 456-7890',
  linkedin: 'linkedin.com/in/juan-perez-56463b0',
  repository: 'github.com/juanperez',
};

const aboutSection: AboutSection = {
  lines: [
    `Mi nombre es ${header.name}, tengo ${header.age} años. Soy un desarrollador web altamente capacitado con 5 años de experiencia en la construcción de sitios web receptivos y fáciles de usar. Competente en HTML, CSS, JavaScript y React. Fuertes habilidades para resolver problemas y comunicarse.`,
  ],
};

const skillsSection: SkillsSection = {
  lines: [
    '- HTML5, CSS3, JavaScript, React, Node.js',
    '- Diseño web receptivo',
    '- Control de versiones (Git)',
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      title:
        'Master en Ciencias de la Computación, Universidad de XYZ (2016 - Presente)',
      lines: [
        '- Estudié Ciencias de la Computación con un enfoque en Inteligencia Artificial',
        '- Premio Inventado: Innovador Sobresaliente del Año',
      ],
      iconSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
    },
    {
      title:
        'Grado en Ciencias de la Computación, Universidad de XYZ (2015 - 2016)',
      lines: [
        '- Estudié Ciencias de la Computación con un enfoque en Inteligencia Artificial',
        '- Premio Inventado: Innovador Sobresaliente del Año',
      ],
      iconSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      title: 'Desarrollador Web',
      company: 'Compañía ABC',
      location: 'Ciudad XYZ, País XYZ',
      period: '2016 - Presente',
      lines: [
        '- Desarrollé y mantuve sitios web de la empresa utilizando React y Node.js',
        '- Colaboré con equipos interfuncionales para entregar proyectos de alta calidad',
        '- Premio Inventado: Innovador Sobresaliente del Año',
      ],
      iconSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
    },
    {
      title: 'Desarrollador Web',
      company: 'Compañía XYZ',
      location: 'Ciudad XYZ, País XYZ',
      period: '2015 - 2016',
      lines: [
        '- Desarrollé y mantuve sitios web de la empresa utilizando React y Node.js',
        '- Colaboré con equipos interfuncionales para entregar proyectos de alta calidad',
        '- Premio Inventado: Innovador Sobresaliente del Año',
      ],
      iconSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
    },
  ],
};

const otherSection: OtherSection = {
  lines: [
    '- Idiomas Hablados: Inglés, Español',
    '- Licencia de Conducir: Sí',
    '- Premio Inventado: Innovador Sobresaliente del Año',
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
