import { cn } from '@/lib/utils';

export function Section({
  title,
  children,
  className,
  id,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-20', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl font-semibold text-foreground mb-8">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
