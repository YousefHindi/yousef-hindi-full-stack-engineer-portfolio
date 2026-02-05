# Full-Stack Engineer Portfolio

A minimal, high-credibility portfolio for a full-stack engineer. Built with Next.js (static export), Tailwind CSS, and MDX for project case studies.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

Static output is in the `out/` directory.

## Deploy to GitHub Pages

1. **Enable Pages and set the source (required once):**
   - Open the repo on GitHub → **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
   - Save. You don’t need to pick a branch; the workflow will deploy.
2. Push to `main`; the workflow builds and deploys the `out/` directory.
3. For a **project site** (e.g. `username.github.io/repo-name`), the workflow sets `NEXT_PUBLIC_BASE_PATH` to the repo name so routes and assets work. For a **user/org site** (`username.github.io`), remove or leave empty `NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy.yml`.

## Content

- **Projects:** Edit `content/projects.json` for metadata and add or edit `content/projects/*.mdx` for case study content.
- **Skills:** Edit `content/skills.json`.
- **Resume:** Add `public/resume.pdf` for the “Download PDF” link on the resume page.
- **Contact:** Update email and links in `app/contact/page.tsx`.

## Optional

- **Analytics:** Add a Plausible (or similar) script in `app/layout.tsx`.
- **Blog:** Add `app/blog/` routes and `content/blog/*.mdx` for a writing section.
