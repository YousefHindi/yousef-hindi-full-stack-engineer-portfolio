import projectsData from '@/content/projects.json';

export type ProjectMeta = {
  slug: string;
  name: string;
  shortDescription: string;
  tech: string[];
  featured: boolean;
  liveUrl: string | null;
  githubUrl: string | null;
  year: string;
};

export const projects: ProjectMeta[] = projectsData as ProjectMeta[];

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectMeta[] {
  return projects.filter((p) => p.featured).slice(0, 3);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
