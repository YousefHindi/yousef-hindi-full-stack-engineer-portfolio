import { hasProjects } from '@/lib/projects';

export type NavLink = { href: string; label: string };

export function getNavLinks(variant: 'header' | 'footer' = 'header'): NavLink[] {
  const skillsLabel = variant === 'footer' ? 'Skills' : 'Skills & Stack';
  const links: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: skillsLabel },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  if (variant === 'footer') {
    links.push({ href: '/resume', label: 'Resume' });
  }

  if (!hasProjects()) {
    return links.filter((link) => link.href !== '/projects');
  }

  return links;
}
