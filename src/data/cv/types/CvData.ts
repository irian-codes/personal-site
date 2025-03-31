export type Header = {
  name: string;
  surnames: string;
  position: string;
  birthdate: string;
  photoSrc: string;
  website: string;
  websiteQrImageSrc: string;
  location: string;
  locationMapsUrl?: string;
  email: string;
  phone: string;
  linkedin: string;
  repository: string;
};

type isHidden = {hidden?: boolean};

export type AboutSection = {
  lines: string[];
};

export type Skill = {
  id: number;
  name: string;
  iconSrc?: string;
  level: 'learning' | 'learnt';
  category:
    | 'cs-language'
    | 'human-language'
    | 'database'
    | 'library-framework'
    | 'dev-tool'
    | 'ai-tool'
    | 'tool'
    | 'other'
    | 'soft-skill';
} & isHidden;

export type SkillsSection = {
  skills: Skill[];
};

export type EducationEntry = {
  id: number;
  title: string;
  institution: string;
  location: string;
  period: string;
  lines: string[];
  iconSrc: string;
} & isHidden;

export type EducationSection = {
  entries: EducationEntry[];
};

export type ExperienceEntry = {
  id: number;
  title: string;
  titleUrl?: string;
  company: string;
  location: string;
  period: string;
  lines: string[];
  iconSrc: string;
} & isHidden;

export type ExperienceSection = {
  entries: ExperienceEntry[];
};

export type Technology = {
  name: string;
};

export type OtherSection = {
  lines: string[];
};

export type CvData = {
  header: Header;
  aboutSection: AboutSection;
  skillsSection: SkillsSection;
  educationSection: EducationSection;
  experienceSection: ExperienceSection;
  otherSection: OtherSection;
};
