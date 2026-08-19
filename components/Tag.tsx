import { cn } from '@/lib/utils';

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-surface-hover px-2.5 py-0.5 text-xs font-medium text-muted',
        className
      )}
    >
      {children}
    </span>
  );
}
