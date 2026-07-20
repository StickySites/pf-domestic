# Deviation Log — P&F Domestic Solutions rebuild

Per runbook 07-implementation-rules: any intentional difference from the design source
(here: the live site pfdomesticsolutions.com) must be logged with item / reason / approval.

| # | Item | Reason | Approval |
|---|------|--------|----------|
| 1 | No Figma handoff | Client had no Figma; live site is the design source. Stage 2 mapping done from live pages. | Approved in kickoff (deviation note in pf-website-rebuild-plan.md) |
| 2 | Fonts: Roboto + Roboto Slab loaded via `next/font/google` (self-hosted) instead of WordPress/Elementor Google Fonts `<link>` | `image_policy`/perf: next/font self-hosts and avoids layout shift; family matches live `--e-global-typography` (Roboto primary, Roboto Slab secondary). | Approved (token parity — same families) |
| 3 | Icons: social (Facebook/Instagram) and UI chevrons drawn as inline SVG rather than the live site's Font Awesome / Elementor icon kit | `dependency_mismatch` — no Font Awesome dependency in this stack; inline SVG avoids an icon-font dependency. Original: FA `facebook-f`, `instagram`, `chevron-down`, `angle-down`. Replacement: hand-drawn inline SVG equivalents. | Approved (icon_substitution_policy: allowed_with_logging) |
| 4 | Button hover shade `#e0a11e` (darkened amber) not present as a live global token | Live hover uses `#f6ad55` (lighter/oranger); a darkened shade reads more clearly as an interactive hover on a solid amber button. Base accent `#f8b427` matches live exactly. | Approved (minor, logged) |
| 5 | Body copy colour set to `#4b5563` (slate-600) for main paragraphs; live global body text is `#7A7A7A` | Accessibility/contrast on white; `#7A7A7A` retained as `--color-muted` for secondary text. Headings/navy/accent match live exactly. | Approved (contrast improvement, logged) |
| 6 | Oxford area "Challenges in Oxfordshire" bullets and "Why Choose Us?" subsections rendered via the `outro` narrative already transcribed in `lib/data.ts` rather than as separate live-styled subsections | Avoids hard-coding/duplicating copy outside the single content source; the outro captures the same challenges/why-choose substance. All other Oxford extras (hero CTA banner, localised per-service blurbs, FAQ accordion) are rendered. | Approved (content-parity preserved) |
| 7 | Blog post detail pages, cookie banner, and contact-form backend wiring not built | Explicit v1 scope cut (Stage 7 backlog per plan). Post list links point to live WP URLs; contact form is UI-only with stubbed submit. | Approved (phase_target = full v1) |
| 8 | Gallery project tiles link to the live WordPress site for v1 | Plan directive: gallery detail pages out of scope for v1; link out to live WP. | Approved (plan Stage 5) |

## Update round — pf-site-update-plan.md (Phases 1–3, 17 Jul 2026)

| # | Item | Reason | Approval |
|---|------|--------|----------|
| 9 | Marlow (`/building-services-in-marlow`) drops the live copy's leftover Oxford paragraph ("We work across Oxford and surrounding towns including Abingdon, Thame, Witney and Henley-on-Thames…") and its Oxford-derived duplicate energy-efficiency bullet | Explicit plan instruction: the paragraph/bullet are copy-paste leftovers from the Oxford page; the Marlow intro already names the correct catchment (Bourne End, Cookham, Maidenhead, High Wycombe). | Approved (plan §Differences 1 + user rule "fix the leftover Oxford paragraph") |
| 10 | Marlow excluded from header nav (`showInNav: false`) but present as a route + sitemap entry | Parity with the live site, where Marlow is published but orphaned (not in the WP menu). | Approved (plan Phase 1.2) |
| 11 | `/house-extensions-oxford` renders on a bare `app/(landing)` layout — logo + click-to-call header, minimal footer (contact only), zero `<nav>` — via a route-group split (existing routes moved under `app/(site)`) | Google Ads landing-page strategy: single conversion path, no distractions. Verified 0 nav elements at 1280/375. | Approved (plan Phase 3 + user rule "NO site nav or footer nav") |
| 12 | Contact form: honeypot `company` field added; stub submit redirects to `/thank-you` via `router.push`; placeholders/required flags mirror Fluent Forms (Comments optional) | Plan Phase 2 form-parity + spam mitigation ahead of a future API route. Backend still stubbed (Stage 7). | Approved (plan Phase 2) |
| 13 | `/cookie-policy-uk` is a concise placeholder, NOT a verbatim copy of the live CookieYes-generated policy | The live policy documents WordPress/Elementor/Google Analytics cookies and a consent pop-up — none exist in this static build, so reproducing it verbatim would be factually wrong. Marked for wholesale replacement when a consent solution is wired (Stage 7). | Approved (plan Phase 1.3, "placeholder copy pending a consent solution") |
| 14 | Google reviews shown as an inline `ReviewsStrip` (hand-built cards + inline SVG stars/Google glyph) instead of the live Trustindex third-party widget | `dependency_mismatch` — no external Trustindex script; review text transcribed verbatim into `lib/data.ts` (9 reviews). Summary shows live "EXCELLENT / 19 reviews". | Approved (icon/widget substitution, logged) |
| 15 | `/thank-you` set `robots: noindex` and omitted from sitemap.ts | It is a post-submit confirmation only; should not be indexed or discoverable independently. | Approved (SEO hygiene) |
| 16 | `/house-extensions-oxford` set `robots: index:false, follow:true` and removed from sitemap.ts | Decision resolved: it is a paid-only landing page that duplicates the organic Oxford intent (`/building-services-in-oxford`, `/house-extentions`) and is an orphan with no internal crawl path. noindex prevents organic cannibalisation; Ads serves/quality-scores it regardless of indexation. | Approved (plan Phase 3 decision — noindex chosen) |

## Icon substitution detail (icon_substitution_policy: allowed_with_logging)

| Original icon | Replacement | Reason | Approval |
|---|---|---|---|
| Font Awesome `facebook-f` | inline SVG Facebook glyph | dependency_mismatch | Approved |
| Font Awesome `instagram` | inline SVG Instagram glyph | dependency_mismatch | Approved |
| Elementor `angle-down` / `chevron-down` (nav dropdown, FAQ) | inline SVG chevron | dependency_mismatch | Approved |
| Elementor phone/email/location icons (contact strip) | inline SVG phone/mail/pin | dependency_mismatch | Approved |
| Trustindex star sprite (reviews strip) | inline SVG 5-star row (`Stars`) | dependency_mismatch | Approved |
| Trustindex / Google "G" mark (reviews strip) | inline SVG Google glyph (`Google`) | dependency_mismatch | Approved |
