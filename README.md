# Project 1 — Food & Hospitality

Concept brand and website for a modern West African restaurant in Lagos. Project 1 of 5 in a "5 brands, 5 websites" series, designed in Figma and built with Claude Code.

> Concept project. Self-initiated, not a real business.

## Stack
Next.js (App Router) · Tailwind CSS v4 · MDX blog · Vercel

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Where things live
| What | Where |
| --- | --- |
| Brand name, tagline, nav | `src/lib/site.ts` |
| Colours | `src/app/globals.css` (`:root` tokens) |
| Fonts | `src/app/layout.tsx` |
| Page sections (one per Figma frame) | `src/components/sections/` |
| Blog articles | `src/content/blog/*.mdx` |
| Article typography | `src/mdx-components.tsx` |

## Deploy
Import the repo on Vercel; no settings needed.
