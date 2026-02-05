import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
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
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Yousef Hindi
              </h1>
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
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <li key={project.slug}>
              <Card href={`/projects/${project.slug}`} title={project.name}>
                <p className="text-sm text-muted mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md bg-surface-hover px-2.5 py-0.5 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-medium text-accent hover:underline"
                  >
                    Case study
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground"
                    >
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </Card>
            </li>
          ))}
        </ul>
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
