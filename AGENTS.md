# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 16 marketing website (App Router, React 19, Tailwind CSS 4, TypeScript). No database, no Docker, no external infrastructure required.

### Running the app

- **Dev server:** `npm run dev` (serves at `http://localhost:3000`)
- **Build:** `npm run build` (requires `RESEND_API_KEY` env var — a placeholder value like `re_placeholder_for_dev` in `.env.local` is sufficient for builds/dev)
- **Lint:** `npm run lint`

### Key caveats

- The `/api/contact` route instantiates `Resend` at module scope. Without a `RESEND_API_KEY` env var, the build will fail. A `.env.local` with a placeholder key is needed for local dev/build (the contact form POST will return a Resend auth error, but all other pages work fine).
- Blog content is file-based (Markdown in `content/blog/`), no CMS or database needed.
- Standard `package.json` scripts cover all dev workflows; see README for details.
