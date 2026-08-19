import { ProjectGrid } from '@/components/ProjectCard';
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
        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </div>
  );
}
