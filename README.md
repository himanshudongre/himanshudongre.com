# himanshudongre.com

Personal website for Himanshu Dongre, built with Next.js and structured so profile updates, project additions, and design changes stay easy to maintain.

## Tech

- Next.js 16
- TypeScript
- App Router
- Static generation

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content map

Most future changes should happen in the content files first:

- `content/profile.ts`: headline, intro, socials, current focus, hero metrics
- `content/experience.ts`: experience, education, skill groups
- `content/projects.ts`: project cards and full project pages
- `content/updates.ts`: site-owned updates timeline

## Route map

- `app/page.tsx`: homepage
- `app/work/page.tsx`: project index
- `app/work/[slug]/page.tsx`: project detail pages
- `app/updates/page.tsx`: updates page
- `app/resume/page.tsx`: web resume

## Design system

- `app/globals.css`: global tokens, theme styles, layout, animation, and responsive behavior
- `components/`: reusable UI pieces such as header, footer, reveal animation, and cards

## Common updates

### Add a new project

1. Add an entry to `content/projects.ts`
2. Mark it `featured: true` if it should appear on the homepage
3. Add a related update in `content/updates.ts` if needed

### Update headline or intro

Edit `content/profile.ts`

### Update resume content

Edit `content/experience.ts`

### Replace portrait or resume PDF

- Portrait: `public/images/portrait.jpg`
- Resume PDF: `public/resume/himanshu-dongre-resume.pdf`

## Verification

```bash
npm run lint
npm run build
```

## Deployment

Recommended: connect the repo to Vercel Hobby and point `himanshudongre.com` at the Vercel project.
