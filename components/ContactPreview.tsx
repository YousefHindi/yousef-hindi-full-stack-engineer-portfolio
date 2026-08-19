import { ContactDetails } from '@/components/ContactDetails';
import { Section } from '@/components/Section';

export function ContactPreview() {
  return (
    <Section title="Contact" id="contact" className="bg-surface">
      <p className="max-w-prose text-muted">
        Reach out for opportunities, collaboration, or a quick chat.
      </p>
      <div className="mt-8">
        <ContactDetails />
      </div>
    </Section>
  );
}
