@AGENTS.md

# Project 1: food & hospitality concept site

Concept brand + website (a modern West African restaurant in Lagos). Part of a 5-project portfolio series: designed in Figma, built with Claude Code, deployed on Vercel.

## Conventions
- Brand name, tagline, nav and footer text live in `src/lib/site.ts`.
- Brand colours live as CSS tokens at the top of `src/app/globals.css`; fonts are set in `src/app/layout.tsx` (keep the `--font-heading` / `--font-body` variable names).
- One component per Figma frame in `src/components/sections/`, named after the frame (Hero → `hero.tsx`). Pages compose sections in frame order.
- Design mobile at 390 and desktop at 1440. Tailwind default breakpoints (`md` 768, `lg` 1024).
- Blog posts are `src/content/blog/<slug>.mdx`, each exporting `metadata` `{ title, description, date }`. Article typography is in `src/mdx-components.tsx`.
- Commits: never add a Claude `Co-Authored-By` line.
