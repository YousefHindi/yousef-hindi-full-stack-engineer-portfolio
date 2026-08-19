import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix a site-root path with GitHub Pages `basePath` when set. */
export function withBasePath(path: string): string {
  if (/^https?:\/\//i.test(path) || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const base = raw.replace(/^\/+|\/+$/g, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return base ? `/${base}${normalized}` : normalized;
}
