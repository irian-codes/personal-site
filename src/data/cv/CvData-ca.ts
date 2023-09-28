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
  name: 'Joan Pérez',
  age: 30,
  photoSrc: 'http://localhost:4321/assets/images/dummy-cv-image.jpg',
  websiteUrl: 'https://johndoe.com',
  websiteQrImageSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
  location: 'Ciutat XYZ, País XYZ',
  email: '3lK3S@example.com',
  phone: '+1 (123) 456-7890',
  linkedin: 'https://www.linkedin.com/in/joan-perez/',
  repository: 'https://github.com/joanperez',
};

const aboutSection: AboutSection = {
  lines: [
    `Em dic ${header.name}, tinc ${header.age} anys. Sóc un desenvolupador web altament qualificat amb 5 anys d'experiència en la creació de llocs web responsius i fàcils d'utilitzar. Competent en HTML, CSS, JavaScript i React. Fortes habilitats per resoldre problemes i comunicar-se.`,
  ],
};

const skillsSection: SkillsSection = {
  lines: [
    '- HTML5, CSS3, JavaScript, React, Node.js',
    '- Disseny web responsiu',
    '- Control de versions (Git)',
  ],
};

const educationSection: EducationSection = {
  entries: [
    {
      title:
        'Màster en Ciències de la Computació, Universitat de XYZ (2016 - Present)',
      lines: [
        '- Vaig estudiar Ciències de la Computació amb un enfocament en Intel·ligència Artificial',
        "- Premi Inventat: Innovador Destacat de l'Any",
      ],
      iconSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
    },
    {
      title:
        'Llicenciatura en Ciències de la Computació, Universitat de XYZ (2015 - 2016)',
      lines: [
        '- Vaig estudiar Ciències de la Computació amb un enfocament en Intel·ligència Artificial',
        "- Premi Inventat: Innovador Destacat de l'Any",
      ],
      iconSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
    },
  ],
};

const workExperienceSection: WorkExperienceSection = {
  entries: [
    {
      title: 'Desenvolupador Web',
      company: 'Companyia ABC',
      location: 'Ciutat XYZ, País XYZ',
      period: '2016 - Present',
      lines: [
        "- Vaig desenvolupar i mantenir llocs web de l'empresa utilitzant React i Node.js",
        '- Vaig col·laborar amb equips interfuncionals per lliurar projectes de alta qualitat',
        "- Premi Inventat: Innovador Destacat de l'Any",
      ],
      iconSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
    },
    {
      title: 'Desenvolupador Web',
      company: 'Companyia XYZ',
      location: 'Ciutat XYZ, País XYZ',
      period: '2015 - 2016',
      lines: [
        "- Vaig desenvolupar i mantenir llocs web de l'empresa utilitzant React i Node.js",
        '- Vaig col·laborar amb equips interfuncionals per lliurar projectes de alta qualitat',
        "- Premi Inventat: Innovador Destacat de l'Any",
      ],
      iconSrc: 'http://localhost:4321/assets/images/dummy-qr-code.png',
    },
  ],
};

const otherSection: OtherSection = {
  lines: [
    '- Idiomes Parlat: Català, Castellà, Anglès',
    '- Llicència de Conduir: Sí',
    "- Premi Inventat: Innovador Sobresalient de l'Any",
  ],
};

export const cvData_ca: CvData = {
  header,
  aboutSection,
  skillsSection,
  educationSection,
  workExperienceSection,
  otherSection,
};
