import Link from 'next/link';
import { Card } from '@/components/Card';
import { projects } from '@/lib/projects';

export const metadata = {
  title: 'Projects | Yousef Hindi',
  description: 'Case studies and project highlights—problem, solution, and outcome.',
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Projects</h1>
        <p className="mt-2 text-muted max-w-prose">
          Case studies with clear problem → solution → outcome. Each includes tech choices,
          trade-offs, and what I’d do differently next.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <Card href={`/projects/${project.slug}`} title={project.name}>
                <p className="text-sm text-muted mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md bg-surface-hover px-2.5 py-0.5 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
