import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Card({
  href,
  title,
  children,
  className,
}: {
  href?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const content = (
    <>
      {title && <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>}
      {children}
    </>
  );

  const cardClass = cn(
    'rounded-xl border border-border bg-surface p-6 shadow-sm transition-default hover:shadow-md hover:border-border',
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {content}
      </Link>
    );
  }

  return <div className={cardClass}>{content}</div>;
}
