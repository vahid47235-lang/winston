# Winston Iran — Website Redesign (Concept)

A bilingual (Persian / English), premium marketing site for the Winston brand
in Iran, built with Next.js App Router, TypeScript, Tailwind CSS, next-intl,
and Framer Motion.

## Status: placeholder content

`flyingeagle.ir`, the requested source of truth for real product copy,
imagery, and legal text, could not be crawled from this environment
(HTTP 403 / age-gated) and no cached content was recoverable. Every product
description, news article, and legal paragraph in this codebase is
**placeholder copy** written to demonstrate structure and tone — it is not
sourced from the live site and must be replaced with approved brand content
before any real-world use. Pack imagery is a CSS placeholder
(`src/components/ui/PackVisual.tsx`) standing in for official, unaltered
packaging photography.

Where to swap in real content:
- `messages/fa.json`, `messages/en.json` — all UI copy
- `src/data/products.ts` — product catalog
- `src/data/news.ts` — news/article content
- `src/data/legal.ts` — legal page bodies
- `src/components/ui/PackVisual.tsx` — replace with real approved pack photography (do not recolor/crop/alter)

## Routing

- `/` and `/products`, `/about`, ... — Persian (default locale, RTL)
- `/en`, `/en/products`, `/en/about`, ... — English (LTR)

## Getting started

```bash
npm install
npm run dev
```

## Scope note

This build covers the public marketing frontend only (per project scoping
decision) — no CMS, backend API, or database. Content is managed via the
data/messages files listed above.
