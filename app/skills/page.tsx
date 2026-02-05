import { Section } from '@/components/Section';
import { skillsByCategory, categoryOrder } from '@/lib/skills';
import Link from 'next/link';

export const metadata = {
  title: 'Skills & Stack | Yousef Hindi',
  description:
    'Frontend, backend, data, and DevOps—grouped by purpose with real project usage.',
};

export default function SkillsPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Skills & Stack
        </h1>
        <p className="mt-2 text-muted max-w-prose">
          Grouped by purpose, with confidence levels and where I’ve used each in practice.
        </p>
        <div className="mt-12 space-y-14">
          {categoryOrder.map((category) => {
            const skills = skillsByCategory[category];
            if (!skills?.length) return null;
            return (
              <section key={category}>
                <h2 className="text-xl font-semibold text-foreground mb-6">{category}</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-xl border border-border bg-surface p-4 shadow-sm"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs font-medium text-muted">
                          {skill.level}
                        </span>
                      </div>
                      {skill.usedIn?.length > 0 && (
                        <p className="mt-2 text-sm text-muted">
                          Used in:{' '}
                          {skill.usedIn.map((name, i) => (
                            <span key={name}>
                              <Link
                                href="/projects"
                                className="text-accent hover:underline"
                              >
                                {name}
                              </Link>
                              {i < skill.usedIn.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
