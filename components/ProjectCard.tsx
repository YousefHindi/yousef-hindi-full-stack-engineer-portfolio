import { Card } from '@/components/Card';
import { Tag } from '@/components/Tag';
import { TextLink } from '@/components/TextLink';
import type { ProjectMeta } from '@/lib/projects';
import { cn } from '@/lib/utils';

export function ProjectCard({
  project,
  showActions = false,
}: {
  project: ProjectMeta;
  showActions?: boolean;
}) {
  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <Card className="h-full">
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        <TextLink href={caseStudyHref} variant="foreground">
          {project.name}
        </TextLink>
      </h3>
      <p className="mb-4 text-sm text-muted">{project.shortDescription}</p>
      <div className={cn('flex flex-wrap gap-2', showActions && 'mb-4')}>
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      {showActions && (
        <div className="flex flex-wrap gap-3 text-sm">
          <TextLink href={caseStudyHref}>Case study</TextLink>
          {project.liveUrl && (
            <TextLink href={project.liveUrl} external variant="muted">
              Demo
            </TextLink>
          )}
          {project.githubUrl && (
            <TextLink href={project.githubUrl} external variant="muted">
              GitHub
            </TextLink>
          )}
        </div>
      )}
    </Card>
  );
}

export function ProjectGrid({
  projects,
  showActions = false,
}: {
  projects: ProjectMeta[];
  showActions?: boolean;
}) {
  if (projects.length === 0) return null;

  return (
    <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.slug} className="block h-full list-none">
          <ProjectCard project={project} showActions={showActions} />
        </li>
      ))}
    </ul>
  );
}
