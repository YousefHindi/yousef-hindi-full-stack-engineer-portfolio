'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { TextLink } from '@/components/TextLink';
import { contact } from '@/lib/contact';

export function ContactDetails() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-medium text-foreground">{contact.email}</span>
        <Button variant="secondary" onClick={copyEmail}>
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <ul className="flex flex-wrap gap-4">
        {contact.links.map(({ label, href }) => (
          <li key={label}>
            <TextLink href={href} external>
              {label}
            </TextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
