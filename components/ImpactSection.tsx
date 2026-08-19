import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { hasImpact, impact } from '@/lib/impact';

export function ImpactSection() {
  if (!hasImpact()) return null;

  return (
    <Section title="Impact" id="credibility" className="bg-surface">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {impact.stats.map((stat) => (
          <Card key={stat.label} className="bg-background text-center">
            <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted">{stat.label}</p>
          </Card>
        ))}
        {impact.quotes.map((item) => (
          <Card key={item.attribution} className="bg-background text-center">
            <p className="text-sm text-muted italic">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-2 text-xs text-muted">— {item.attribution}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
