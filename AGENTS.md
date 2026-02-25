# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 16 (App Router) marketing website for AI Agency Japan. Single service: Next.js dev server on port 3000.

### Running the app

See `package.json` scripts. The dev server requires `RESEND_API_KEY` env var (used by `src/app/api/contact/route.ts`). For local development without a real key, pass a placeholder:

```
RESEND_API_KEY=re_placeholder npm run dev
```

The contact form submission will fail with a placeholder key; this is expected.

### Key commands

| Task | Command |
|------|---------|
| Dev server | `RESEND_API_KEY=re_placeholder npm run dev` |
| Lint | `npm run lint` |
| Build | `RESEND_API_KEY=re_placeholder npm run build` |

### Gotchas

- The Resend SDK is instantiated at module scope in `src/app/api/contact/route.ts`. If `RESEND_API_KEY` is unset, both the dev server and build will crash with `Missing API key`. Always set it (even to a placeholder) when running `npm run dev` or `npm run build`.
- No automated test suite exists in this repo (no test framework configured).
- Blog content lives in `/content/blog/` as markdown files with front-matter metadata.
