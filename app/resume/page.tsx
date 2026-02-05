import Link from 'next/link';

export const metadata = {
  title: 'Resume | Yousef Hindi',
  description: 'Experience, skills, and education—web version of resume.',
};

export default function ResumePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Resume</h1>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Download PDF
          </a>
        </div>
        <div className="mt-12 max-w-prose space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Experience</h2>
            <ul className="space-y-6 text-muted">
              <li>
                <p className="font-medium text-foreground">Full-Stack Engineer</p>
                <p className="text-sm">Company · 2022 – Present</p>
                <p className="mt-1 text-sm">
                  Built and maintained payment dashboards, API gateway, and design system.
                  Shipped event-driven architecture that reduced checkout errors by 37%.
                </p>
              </li>
              <li>
                <p className="font-medium text-foreground">Software Engineer</p>
                <p className="text-sm">Previous Co · 2020 – 2022</p>
                <p className="mt-1 text-sm">
                  Backend and API work; introduced monitoring and improved deployment
                  pipeline.
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Education</h2>
            <p className="text-foreground font-medium">B.S. Computer Science</p>
            <p className="text-sm text-muted">University · Year</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Skills</h2>
            <p className="text-muted text-sm">
              React, Next.js, Node.js, TypeScript, PostgreSQL, Redis, Docker, AWS. See{' '}
              <Link href="/skills" className="text-accent hover:underline">
                Skills & Stack
              </Link>{' '}
              for details.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Links</h2>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
