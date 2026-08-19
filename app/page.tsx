import { Button } from '@/components/Button';
import { CodeBlock } from '@/components/CodeBlock';
import { ImpactSection } from '@/components/ImpactSection';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { ProjectGrid } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { getFeaturedProjects, hasProjects } from '@/lib/projects';

const heroSnippet = `const deploy = async () => {
  await build();
  await ship();
};`;

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <ProfileAvatar
                  src="/Me.jpg"
                  alt="Yousef Hindi profile photo"
                  initials="YH"
                />
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Yousef Hindi
                </h1>
              </div>
              <p className="mt-4 text-xl text-foreground">
                Full-Stack Engineer building scalable, user-focused products
              </p>
              <p className="mt-3 text-muted max-w-prose">
                I focus on clear problem-solving and maintainable systems—from API design to
                front-end UX. I care about impact you can measure and code you can hand off.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {hasProjects() && (
                  <Button href="/projects" variant="primary">
                    View Projects
                  </Button>
                )}
                <Button href="https://github.com" variant="secondary" external>
                  GitHub
                </Button>
                <Button href="/resume" variant="ghost">
                  Resume
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
                <CodeBlock code={heroSnippet} language="typescript" label="ship.ts" />
              </div>
              <div
                className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-60"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <Section title="Featured Projects" id="projects">
          <ProjectGrid projects={featured} showActions />
          {hasProjects() && (
            <div className="mt-8 text-center">
              <Button href="/projects" variant="secondary">
                View all projects
              </Button>
            </div>
          )}
        </Section>
      )}

      <ImpactSection />
    </>
  );
}
