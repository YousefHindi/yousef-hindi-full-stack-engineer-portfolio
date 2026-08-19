'use client';

import { useState } from 'react';

type ProfileAvatarProps = {
  src?: string;
  alt?: string;
  initials: string;
  sizeClassName?: string;
  basePath?: string;
};

export function ProfileAvatar({
  src,
  alt = 'Profile photo',
  initials,
  sizeClassName = 'h-20 w-20',
  basePath,
}: ProfileAvatarProps) {
  const [status, setStatus] = useState<'idle' | 'loaded' | 'error'>('idle');
  const resolvedSrc =
    src && src.startsWith('/') && basePath ? `${basePath}${src}` : src;
  const hasImage = Boolean(resolvedSrc) && status !== 'error';
  const showImage = hasImage && status === 'loaded';

  return (
    <div
      className={`relative overflow-hidden rounded-full border border-border bg-surface shadow-sm ${sizeClassName}`}
    >
      {hasImage && (
        <img
          src={resolvedSrc}
          alt={alt}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            showImage ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
      {!showImage && (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent"
            aria-hidden
          />
          <div className="relative grid h-full w-full place-items-center text-sm font-semibold text-foreground">
            {initials}
          </div>
        </>
      )}
    </div>
  );
}
