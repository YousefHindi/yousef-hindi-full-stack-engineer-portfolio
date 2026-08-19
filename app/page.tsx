import { Button } from '@/components/Button';
import { CodeBlock } from '@/components/CodeBlock';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { ProjectGrid } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { getFeaturedProjects } from '@/lib/projects';

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
                  basePath={process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : ''}
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
                <Button href="/projects" variant="primary">
                  View Projects
                </Button>
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

      {/* Featured Projects */}
      <Section title="Featured Projects" id="projects">
        <ProjectGrid projects={featured} showActions />
        <div className="mt-8 text-center">
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
      </Section>

      {/* Credibility */}
      <Section title="Impact" id="credibility" className="bg-surface">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <p className="text-2xl font-semibold text-foreground">50k+</p>
            <p className="text-sm text-muted">users supported at scale</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <p className="text-2xl font-semibold text-foreground">99.9%</p>
            <p className="text-sm text-muted">uptime on critical services</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 text-center sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-muted italic">
              &ldquo;Clear communication and reliable delivery. Would work with again.&rdquo;
            </p>
            <p className="mt-2 text-xs text-muted">— Team lead, previous engagement</p>
          </div>
        </div>
        {/* Placeholder for company logos: add images to public/ and use next/image */}
      </Section>
    </>
  );
}
