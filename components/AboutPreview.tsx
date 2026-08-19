import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { aboutIntro } from '@/lib/about';

export function AboutPreview() {
  return (
    <Section title="About" id="about">
      <p className="max-w-prose leading-relaxed text-muted">{aboutIntro}</p>
      <div className="mt-8">
        <Button href="/about" variant="secondary">
          Read more
        </Button>
      </div>
    </Section>
  );
}
