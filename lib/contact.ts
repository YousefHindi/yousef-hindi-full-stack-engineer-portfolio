import contactData from '@/content/contact.json';

export type ContactLink = {
  label: string;
  href: string;
};

export type ContactContent = {
  email: string;
  links: ContactLink[];
};

export const contact = contactData as ContactContent;

export function getContactLink(label: string): ContactLink | undefined {
  return contact.links.find((link) => link.label === label);
}
