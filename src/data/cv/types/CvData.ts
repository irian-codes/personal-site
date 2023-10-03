export type Header = {
  name: string;
  surnames: string;
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

export type SkillsSection = {
  lines: string[];
};

export type EducationEntry = {
  title: string;
  lines: string[];
  iconSrc: string;
};

export type EducationSection = {
  entries: EducationEntry[];
};

export type WorkExperienceEntry = {
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

export type InterestsSection = {
  lines: string[];
};

export type CvData = {
  header: Header;
  aboutSection: AboutSection;
  skillsSection: SkillsSection;
  educationSection: EducationSection;
  workExperienceSection: WorkExperienceSection;
  interestsSection: InterestsSection;
  otherSection: OtherSection;
};
