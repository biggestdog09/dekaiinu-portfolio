# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router entry point. `layout.tsx` defines global wrappers; `page.tsx` hosts the homepage animation logic. Client-only files must start with `use client`.
- `app/components/`: Reusable UI (Header, Section* blocks, Footer). Create new components here in PascalCase and export from an `index` barrel only if it improves clarity.
- `app/globals.css`: Tailwind CSS v4 base styles and custom fonts. Keep global tweaks minimal.
- `public/assets/`: Images and other static assets used by `next/image`. Add new media here and reference via `/assets/...`.
- `figma-design/`: Design references; align changes with these comps before shipping.

## Build, Test, and Development Commands
- `npm run dev`: Start the local Next.js dev server with HMR.
- `npm run build`: Production build; fails on type or lint errors.
- `npm run start`: Serve the production build locally.
- `npm run lint`: Run ESLint (Next.js config). Use before opening a PR.

## Coding Style & Naming Conventions
- Language: TypeScript, React 19, Next.js 16 App Router. Prefer functional components and hooks; keep state local unless shared.
- Formatting: Two-space indentation; favor short, readable JSX. Tailwind utility classes stay inline; group related utilities (layout → spacing → color/effects).
- Naming: Components and files in `app/components` use PascalCase. Hooks use `useX`. CSS custom classes go in `globals.css` when shared.
- Client vs Server: Default to server components; add `"use client"` only when browser APIs or hooks are needed.

## Testing Guidelines
- No automated tests exist yet. When adding them, colocate beside components or under `__tests__/`, and cover UI states (initial, loading/scroll transitions, responsive layouts).
- Use Jest or Vitest with React Testing Library; mock `next/image` and scroll listeners to keep tests deterministic.

## Commit & Pull Request Guidelines
- Follow the current Conventional Commit-style prefixes seen in history (`feature: ...`, `chore: ...`). Keep the subject in imperative mood; English or Japanese is fine.
- PRs: include a concise summary, screenshots/GIFs for UI changes, and note any design alignment with `figma-design/`. Link related issues/tasks and list testing done (`npm run lint`, manual browser checks).

## Security & Configuration Tips
- Keep secrets out of the repo; use `.env.local` for private values. Never commit API keys or tokens.
- Static assets can be large—optimize images before adding to `public/assets/` to keep builds fast.
