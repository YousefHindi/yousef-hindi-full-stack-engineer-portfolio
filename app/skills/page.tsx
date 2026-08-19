import { SkillCard } from '@/components/SkillCard';
import { categoryOrder, skillsByCategory } from '@/lib/skills';

export const metadata = {
  title: 'Skills & Stack | Yousef Hindi',
  description:
    'Frontend, backend, quality, and cloud tooling grouped by how I use them.',
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
                <h2 className="mb-6 text-xl font-semibold text-foreground">{category}</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <SkillCard skill={skill} />
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
