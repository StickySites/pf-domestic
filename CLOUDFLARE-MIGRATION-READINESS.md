# Cloudflare Migration Readiness — pf-domestic-next

Audit against the Vercel → Cloudflare (Workers + OpenNext) checklist. Prep work below has
already been done in this repo; remaining items need to be run locally / in the Cloudflare
dashboard since they need real credentials.

## Findings

- **No `@vercel/*` packages anywhere** — no Vercel Blob, KV, Postgres, Edge Config, or
  Analytics/Speed Insights dependencies. Nothing to swap out.
- **No `middleware.ts`** in this project, so the `request.ip` / Node.js-middleware
  compatibility gaps in OpenNext don't apply.
- **No `vercel.json`** — headers/redirects are already defined in `next.config.ts`
  (`headers()`), which OpenNext reads the same way Vercel does. No changes needed there.
- **One API route** (`app/api/contact/route.ts`), already `export const runtime = "nodejs"`
  — this runs fine on Workers under the `nodejs_compat` compatibility flag.
- **Found and fixed a real bug**: `clientIp()` in the contact route only checked
  `x-forwarded-for` / `x-real-ip`. On Cloudflare the authoritative client IP header is
  `cf-connecting-ip` — without it, rate-limiting would have silently degraded to "unknown"
  for every request. Fixed to check `cf-connecting-ip` first, falling back to the other
  headers (so it still works if you ever move again).
- **Found a real version conflict**: `@opennextjs/cloudflare` (latest, 1.20.2) requires
  `next >=15.5.21 <16 || >=16.2.11`. This project was pinned to `16.2.10` — just one patch
  short of the compatible range. Bumped `next` and `eslint-config-next` to `16.2.11` in
  `package.json`. Confirmed via `tsc --noEmit` that nothing else in the codebase breaks
  under that bump.
- **`next/image`**: all images are local (`public/Job-Photos`, `/Brand-Assets`, etc.) with
  one `remotePatterns` fallback for `pfdomesticsolutions.com`. Cloudflare's OpenNext adapter
  supports Next's Image Optimization natively via Cloudflare Images — no config change
  needed, no CSP change needed (optimization happens same-origin via `/_next/image`).
- **In-memory rate limiter** (`lib/contact/rate-limit.ts`): already documented in its own
  comment as "best-effort" because it doesn't share state across serverless instances. On
  Workers this is *more* fragmented than on Vercel (Cloudflare's edge network has far more
  points of presence), so it'll cap abuse less consistently than it does today. Not a
  blocker — Turnstile + honeypot + timing checks still do the real work — but worth
  moving to a Cloudflare KV– or Durable Object–backed limiter if spam becomes a problem
  post-migration.
- **Env vars** — none reference Vercel-only integrations. Mapping for Cloudflare:

  | Var | Where it goes on Cloudflare |
  |---|---|
  | `RESEND_API_KEY` | `wrangler secret put RESEND_API_KEY` |
  | `TURNSTILE_SECRET_KEY` | `wrangler secret put TURNSTILE_SECRET_KEY` |
  | `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `CONTACT_FORM_DRY_RUN` | plain `vars` in `wrangler.jsonc` (non-secret) or secrets if you'd rather not have them in the repo |
  | `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_CLARITY_PROJECT_ID` | must be set as **build-time** env vars wherever `next build` runs (CI/Workers Builds), since `NEXT_PUBLIC_*` vars get inlined at build time, not read at runtime |

## What was changed in this repo just now

- `package.json` — bumped `next`/`eslint-config-next` to `16.2.11`; added `@opennextjs/cloudflare`, `wrangler` as devDependencies; added `preview`, `deploy`, `cf-typegen` scripts.
- `wrangler.jsonc` — new, minimal config (`main`, `compatibility_date`, `nodejs_compat`, assets binding).
- `open-next.config.ts` — new, default OpenNext Cloudflare config (no KV/R2/D1 caching overrides yet).
- `app/api/contact/route.ts` — `clientIp()` now reads `cf-connecting-ip` first.
- `.gitignore` — added `.open-next/`, `.wrangler/`, `cloudflare-env.d.ts`.

`tsc --noEmit` and `eslint` pass on everything except `open-next.config.ts`, which reports
a missing-module error until you run `npm install` (the new devDependency isn't physically
installed in this sandbox yet — that's expected, not a bug).

## What's left — needs your machine / Cloudflare account

- [ ] `npm install` locally to pull `@opennextjs/cloudflare` + `wrangler` and re-lock `next@16.2.11`.
- [ ] `npx wrangler login` (one-time, opens a browser).
- [ ] Set secrets: `wrangler secret put RESEND_API_KEY`, `wrangler secret put TURNSTILE_SECRET_KEY` (if using Turnstile).
- [ ] Add the plain vars (`CONTACT_TO_EMAIL`, etc.) to `wrangler.jsonc`'s `vars` block, or as secrets — your call.
- [ ] Set the `NEXT_PUBLIC_*` build-time vars in whatever CI/build environment will run `npm run deploy` (Workers Builds needs them under its "Build variables and secrets" section).
- [ ] `npm run preview` — builds with OpenNext and serves it locally under the real `workerd` runtime (closer to production than `next dev`). Sanity-check the contact form and cookie consent banner here specifically, since both touch headers/runtime behaviour.
- [ ] `npm run deploy` when ready — first deploy goes to a `*.workers.dev` subdomain; add the custom domain (`pfdomesticsolutions.com`) afterwards via the Cloudflare dashboard.
- [ ] DNS cutover: point the domain at Cloudflare once the Workers deployment is verified, then remove the project from Vercel.
