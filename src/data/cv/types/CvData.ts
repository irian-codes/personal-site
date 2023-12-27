export type Header = {
  name: string;
  surnames: string;
  position: string;
  birthdate: string;
  photoSrc: string;
  websiteUrl: string;
  websiteQrImageSrc: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  repository: string;
};

export type AboutSection = {
  lines: string[];
};

export type Skill = {
  id: number;
  name: string;
  iconSrc?: string;
  level: 'beginner' | 'intermediate' | 'proficient';
  category:
    | 'language'
    | 'database'
    | 'library-framework'
    | 'dev-tool'
    | 'ai-tool'
    | 'tool'
    | 'other'
    | 'soft-skill';
};

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
};

export type EducationSection = {
  entries: EducationEntry[];
};

export type WorkExperienceEntry = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  lines: string[];
  iconSrc: string;
};

export type WorkExperienceSection = {
  entries: WorkExperienceEntry[];
};

export type OtherSection = {
  lines: string[];
};

export type CvData = {
  header: Header;
  aboutSection: AboutSection;
  skillsSection: SkillsSection;
  educationSection: EducationSection;
  workExperienceSection: WorkExperienceSection;
  otherSection: OtherSection;
};
