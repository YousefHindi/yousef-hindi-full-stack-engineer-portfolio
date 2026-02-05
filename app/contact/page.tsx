'use client';

import { useState } from 'react';

const email = 'hello@yousefhindi.com';
const links = [
  { label: 'GitHub', href: 'https://github.com', icon: 'GitHub' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'LinkedIn' },
  { label: 'Calendly', href: 'https://calendly.com', icon: 'Calendly' },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact</h1>
        <p className="mt-2 text-muted max-w-prose">
          Reach out for opportunities, collaboration, or a quick chat.
        </p>
        <div className="mt-12 space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-foreground font-medium">{email}</span>
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-hover transition-default focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <ul className="flex flex-wrap gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium transition-default"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
