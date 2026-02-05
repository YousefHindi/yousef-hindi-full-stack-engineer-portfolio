import { cn } from '@/lib/utils';

export function CodeBlock({
  code,
  language = 'text',
  className,
  label,
}: {
  code: string;
  language?: string;
  className?: string;
  label?: string;
}) {
  return (
    <figure className={cn('my-6', className)}>
      {label && (
        <figcaption className="text-xs text-muted mb-2 font-medium">{label}</figcaption>
      )}
      <pre
        className="overflow-x-auto rounded-lg border border-border bg-surface px-4 py-3 text-sm font-mono"
        role="region"
        aria-label={label ?? `Code block: ${language}`}
      >
        <code className="text-foreground">{code}</code>
      </pre>
    </figure>
  );
}
