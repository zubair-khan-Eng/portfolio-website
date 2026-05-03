# Zubair Khan Portfolio

Premium personal portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Quick update map

- Personal and resume content: `src/data/portfolio.ts`
- Home sections layout: `src/components/portfolio/HomeSections.tsx`
- Resume page layout: `src/components/portfolio/ResumeLayout.tsx`
- Navigation: `src/components/portfolio/Navbar.tsx`
- Global design tokens and print styles: `src/app/globals.css`
- SEO metadata: `src/app/layout.tsx`
- Sitemap/robots: `src/app/sitemap.ts`, `src/app/robots.ts`
- Resume download file location: `public/resume/` and `src/data/portfolio.ts` (`resumePdfPath`)

## Important notes

- Resume details are intentionally marked for final sync from your real resume source.
- Replace `https://example.com` in metadata/sitemap with your final deployed domain.
- Put your resume PDF at `public/resume/zubair-khan-resume.pdf` (or update `resumePdfPath`).
