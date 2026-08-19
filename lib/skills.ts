import skillsData from '@/content/skills.json';

export type SkillEntry = {
  name: string;
  level: string;
  usedIn: string[];
};

export type SkillsByCategory = Record<string, SkillEntry[]>;

export const skillsByCategory: SkillsByCategory = skillsData as SkillsByCategory;

export const categoryOrder = ['Frontend', 'Backend', 'Data', 'DevOps'];

export function hasSkills(): boolean {
  return categoryOrder.some((category) => (skillsByCategory[category]?.length ?? 0) > 0);
}
