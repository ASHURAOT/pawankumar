# Pawan Kumar — DevOps & Cloud Engineer Portfolio

A responsive, accessible engineering portfolio built with React, TanStack Start, Vite, TypeScript, Tailwind CSS, and Lucide icons.

## Local development

Requires Node.js 20+ and npm, or Bun 1.2+.

```bash
git clone <repository-url>
cd <repository-name>
npm install
npm run dev
```

The local site runs at the URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Connect this repository to a modern JavaScript host such as Cloudflare Pages, Netlify, or Vercel. Use `npm run build` as the build command. The host should detect the TanStack Start output automatically.

## Content updates

Portfolio content is centralized in `src/data/portfolio.ts`. Resume and certificate files are project assets referenced from the portfolio page.

## Available commands

- `npm run dev` — start development
- `npm run build` — create a production build
- `npm run preview` — preview the production build
- `npm run lint` — run lint checks
- `npm run format` — format source files

## Stack

- React 19 and TanStack Start
- Vite
- TypeScript
- Tailwind CSS v4
- Lucide React

No secrets or environment variables are required for the current frontend-only contact form.
