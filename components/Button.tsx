import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  external?: boolean;
};

const base =
  'inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-default focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background';

const variants = {
  primary: 'bg-accent text-accent-foreground hover:opacity-90',
  secondary: 'bg-surface border border-border text-foreground hover:bg-surface-hover',
  ghost: 'text-foreground hover:bg-surface-hover',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}
