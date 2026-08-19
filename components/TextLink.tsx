import Link from 'next/link';
import { cn } from '@/lib/utils';

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'accent' | 'muted' | 'foreground';
  className?: string;
  'aria-label'?: string;
};

const variants = {
  accent: 'font-medium text-accent hover:underline',
  muted: 'text-muted hover:text-foreground',
  foreground: 'font-semibold text-foreground hover:text-accent',
};

export function TextLink({
  href,
  children,
  external,
  variant = 'accent',
  className,
  'aria-label': ariaLabel,
}: TextLinkProps) {
  const classes = cn('transition-default', variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
