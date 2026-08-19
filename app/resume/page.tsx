import { Button } from '@/components/Button';
import { TextLink } from '@/components/TextLink';
import { contact } from '@/lib/contact';
import { profile } from '@/lib/profile';
import { withBasePath } from '@/lib/utils';

export const metadata = {
  title: `Resume | ${profile.name}`,
  description: profile.headline,
};

export default function ResumePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Resume</h1>
            <p className="mt-1 text-sm text-muted">{profile.location}</p>
          </div>
          <Button href={withBasePath('/resume.pdf')} variant="primary" external>
            Download PDF
          </Button>
        </div>
        <p className="mt-4 max-w-prose text-muted">{profile.headline}</p>
        <div className="mt-12 max-w-prose space-y-10">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Experience</h2>
            <ul className="space-y-6 text-muted">
              {profile.experience.map((role) => (
                <li key={`${role.title}-${role.org}-${role.dates}`}>
                  <p className="font-medium text-foreground">{role.title}</p>
                  <p className="text-sm">
                    {role.org} · {role.dates}
                  </p>
                  <p className="text-sm">{role.location}</p>
                  <p className="mt-1 text-sm">{role.summary}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Education</h2>
            <ul className="space-y-6 text-muted">
              {profile.education.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm">
                    {item.org} · {item.dates}
                  </p>
                  <p className="mt-1 text-sm">{item.summary}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Skills</h2>
            <p className="text-sm text-muted">
              React, Vue, TypeScript, Node.js, Python, Tailwind, Playwright, AWS, Docker. See{' '}
              <TextLink href="/skills">Skills & Stack</TextLink> for details.
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Links</h2>
            <ul className="flex flex-wrap gap-4 text-sm">
              {contact.links.map(({ label, href }) => (
                <li key={label}>
                  <TextLink href={href} external>
                    {label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
