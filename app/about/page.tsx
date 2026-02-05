import { Section } from '@/components/Section';

export const metadata = {
  title: 'About | Yousef Hindi',
  description:
    'How I think about engineering and what I enjoy building—human, not cringe.',
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">About</h1>
        <div className="mt-10 max-w-prose space-y-8 text-muted">
          <p className="text-foreground leading-relaxed">
            I’m a full-stack engineer who cares about building systems that are easy to
            maintain and hard to break. I like to understand the problem before reaching
            for a solution, and I prefer clarity over cleverness in code and in
            communication.
          </p>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              How I think about engineering
            </h2>
            <p className="leading-relaxed">
              I focus on reliability, observability, and incremental delivery. I’d rather
              ship a small, well-tested slice than a big bang. I also care about
              accessibility and performance—they’re not afterthoughts.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              What I enjoy building
            </h2>
            <p className="leading-relaxed">
              APIs and services that other developers and products depend on; dashboards
              and tools that make complex data understandable; and design systems that
              keep UIs consistent and accessible. I’m comfortable across the stack and
              like to stay close to both the product and the infrastructure.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Outside work
            </h2>
            <p className="leading-relaxed">
              I like to read, run, and tinker with side projects. I keep work-life
              boundaries clear so I can show up focused when I’m on the clock.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
