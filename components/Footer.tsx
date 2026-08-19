import { TextLink } from '@/components/TextLink';
import { getNavLinks } from '@/lib/nav';

export function Footer() {
  const year = new Date().getFullYear();
  const links = getNavLinks('footer');

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <TextLink href={href} variant="muted" className="text-sm">
                    {label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-muted">
            &copy; {year} Yousef Hindi.
          </p>
        </div>
      </div>
    </footer>
  );
}
