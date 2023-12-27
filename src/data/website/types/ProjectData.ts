import type {ImageMetadata} from 'astro';

export type Technology = {
  name: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  appType: 'mobile-app' | 'web-app' | 'admin-panel';
  images: ImageMetadata[];
  technologies: Technology[];
};

export type Projects = Project[];
