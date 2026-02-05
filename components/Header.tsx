'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills & Stack' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground hover:text-accent transition-default"
        >
          Yousef Hindi
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-default',
                pathname === href
                  ? 'bg-surface-hover text-foreground'
                  : 'text-muted hover:text-foreground hover:bg-surface-hover'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/resume"
            className="hidden sm:inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground hover:opacity-90 transition-default"
          >
            Resume
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-muted hover:bg-surface-hover hover:text-foreground transition-default"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="md:hidden border-t border-border bg-background px-4 py-4"
          aria-label="Main mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-sm font-medium transition-default',
                    pathname === href ? 'bg-surface-hover text-foreground' : 'text-muted hover:text-foreground hover:bg-surface-hover'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume"
                className="block px-3 py-2 rounded-md text-sm font-medium text-accent hover:bg-surface-hover"
                onClick={() => setMobileOpen(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
