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

export type WorkExperienceEntry = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  lines: string[];
  iconSrc: string;
} & isHidden;

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
