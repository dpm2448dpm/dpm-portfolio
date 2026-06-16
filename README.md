# Personal Portfolio

Modern portfolio website for freelance AI engineering, LLM integrations, AI agents, RAG systems, full stack development and infrastructure consulting.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/lib/site.ts` contains personal data, contact links, services, projects, stack and SEO copy.
- `src/app/page.tsx` renders the portfolio sections from `src/lib/site.ts`.
- `src/app/layout.tsx` contains metadata, Open Graph and global layout setup.
- `src/app/robots.ts` and `src/app/sitemap.ts` provide SEO routes from the configured site URL.
- `src/app/globals.css` contains global theme variables and base styles.
- `docs/project-intake.md` is a worksheet for turning real work into publishable case studies.
- `docs/cv-source/` stores CVs and source notes used to refine portfolio copy.
- `.github/workflows/ci.yml` validates lint, typecheck and build on pull requests and pushes to `main`.

## Before Publishing

Replace the placeholders in `src/lib/site.ts`:

- Name
- Email
- LinkedIn
- GitHub
- Real project case studies and outcomes

The custom domain can wait. Without `NEXT_PUBLIC_SITE_URL`, the app uses Vercel's generated deployment URL in production and `http://localhost:3000` locally.

## Useful Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run ci
```

## Environment

`NEXT_PUBLIC_SITE_URL` is optional while you do not have a custom domain. Set it later in Vercel when you buy the domain:

```bash
NEXT_PUBLIC_SITE_URL=https://darioperez.dev
```

## Deploy on Vercel

This app is ready to deploy on Vercel as a standard Next.js project.

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Deploy with the generated Vercel URL.
4. Buy and configure the custom domain later.
5. Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
