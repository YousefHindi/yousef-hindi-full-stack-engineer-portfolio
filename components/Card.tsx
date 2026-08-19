import { cn } from '@/lib/utils';

export function Card({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface p-6 shadow-sm transition-default hover:shadow-md hover:border-border',
        className
      )}
    >
      {title && <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>}
      {children}
    </div>
  );
}
