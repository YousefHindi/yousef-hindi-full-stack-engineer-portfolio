import { Card } from '@/components/Card';
import { TextLink } from '@/components/TextLink';
import { hasProjects } from '@/lib/projects';
import type { SkillEntry } from '@/lib/skills';

export function SkillCard({ skill }: { skill: SkillEntry }) {
  return (
    <Card className="p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-xs font-medium text-muted">{skill.level}</span>
      </div>
      {skill.usedIn?.length > 0 && (
        <p className="mt-2 text-sm text-muted">
          Used in:{' '}
          {skill.usedIn.map((name, i) => (
            <span key={name}>
              {hasProjects() ? (
                <TextLink href="/projects">{name}</TextLink>
              ) : (
                name
              )}
              {i < skill.usedIn.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      )}
    </Card>
  );
}
