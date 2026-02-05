import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getProjectBySlug, getAllSlugs } from '@/lib/projects';
import { getMdxContent } from '@/lib/mdx';
import { CodeBlock } from '@/components/CodeBlock';

type Props = { params: Promise<{ slug: string }> };

const mdxComponents = {
  pre: (props: React.ComponentProps<'pre'>) => {
    const child = props.children as React.ReactElement;
    const code = child?.props?.children;
    const className = child?.props?.className ?? '';
    const match = /language-(\w+)/.exec(className);
    const language = match ? match[1] : 'text';
    if (typeof code === 'string') {
      return <CodeBlock code={code.trim()} language={language} />;
    }
    return <pre {...props} />;
  },
  code: (props: React.ComponentProps<'code'>) => {
    const { className, children } = props;
    if (className?.startsWith('language-')) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    );
  },
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project | Yousef Hindi' };
  return {
    title: `${project.name} | Yousef Hindi`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const mdx = await getMdxContent('projects', slug);
  if (!mdx) notFound();

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="text-sm text-muted hover:text-foreground transition-default mb-8 inline-block"
        >
          ← Back to projects
        </Link>
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {project.name}
          </h1>
          <p className="mt-2 text-muted">{project.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-md bg-surface-hover px-2.5 py-0.5 text-xs font-medium text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Live demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </header>
        <article className="prose prose-neutral dark:prose-invert max-w-prose">
          <MDXRemote source={mdx.content} components={mdxComponents} />
        </article>
      </div>
    </div>
  );
}
