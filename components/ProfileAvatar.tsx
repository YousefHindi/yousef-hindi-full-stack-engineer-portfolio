'use client';

import { useState } from 'react';
import { withBasePath } from '@/lib/utils';

type ProfileAvatarProps = {
  src?: string;
  alt?: string;
  initials: string;
  sizeClassName?: string;
};

export function ProfileAvatar({
  src,
  alt = 'Profile photo',
  initials,
  sizeClassName = 'h-20 w-20',
}: ProfileAvatarProps) {
  const [failed, setFailed] = useState(false);
  const resolvedSrc = src ? withBasePath(src) : undefined;
  const showImage = Boolean(resolvedSrc) && !failed;

  return (
    <div
      className={`relative overflow-hidden rounded-full border border-border bg-surface shadow-sm ${sizeClassName}`}
    >
      {showImage && (
        <img
          src={resolvedSrc}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
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
