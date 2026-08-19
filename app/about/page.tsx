import { aboutIntro } from '@/lib/about';
import { profile } from '@/lib/profile';

export const metadata = {
  title: `About | ${profile.name}`,
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">About</h1>
        <p className="mt-2 text-sm text-muted">{profile.location}</p>
        <div className="mt-10 max-w-prose space-y-8 text-muted">
          <p className="leading-relaxed text-foreground">{aboutIntro}</p>
          {profile.about.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 text-lg font-semibold text-foreground">{section.title}</h2>
              <p className="leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
