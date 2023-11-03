import type {ImageMetadata} from 'astro';

export type Technology = {
  name: string;
  icon: ImageMetadata;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  image: ImageMetadata;
  technologies: Technology[];
};

export type Projects = Project[];
