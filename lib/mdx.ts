import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDir = path.join(process.cwd(), 'content');

export async function getMdxContent(
  folder: string,
  slug: string
): Promise<{ content: string; frontmatter: Record<string, unknown> } | null> {
  const fullPath = path.join(contentDir, folder, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { content, data } = matter(raw);
  return { content, frontmatter: data };
}

export async function serializeMdx(content: string) {
  return serialize(content, {
    parseFrontmatter: false,
  });
}
