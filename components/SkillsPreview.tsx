import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { Tag } from '@/components/Tag';
import { categoryOrder, hasSkills, skillsByCategory } from '@/lib/skills';

export function SkillsPreview() {
  if (!hasSkills()) return null;

  return (
    <Section title="Skills & Stack" id="skills" className="bg-surface">
      <div className="grid gap-6 sm:grid-cols-2">
        {categoryOrder.map((category) => {
          const skills = skillsByCategory[category];
          if (!skills?.length) return null;
          return (
            <Card key={category} title={category}>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Tag key={skill.name}>{skill.name}</Tag>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Button href="/skills" variant="secondary">
          View all skills
        </Button>
      </div>
    </Section>
  );
}
