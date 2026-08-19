import { ContactDetails } from '@/components/ContactDetails';

export const metadata = {
  title: 'Contact | Yousef Hindi',
  description: 'Reach out for opportunities, collaboration, or a quick chat.',
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact</h1>
        <p className="mt-2 text-muted max-w-prose">
          Reach out for opportunities, collaboration, or a quick chat.
        </p>
        <div className="mt-12">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
