import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Page not found</h1>
        <p className="mt-2 max-w-prose text-muted">
          That page doesn’t exist. Head back home to keep browsing.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
