# Series Plan: Learn Astro from Scratch — Build a Real Content Site

## Overview

**Target audience:** WordPress users who want to learn Astro, new web developers
**Language:** English
**Demo project:** astro-content-lab.vercel.app
**GitHub:** github.com/doancongtuan/astro-content-lab

## Status Legend
- [ ] Todo
- [x] Done
- [~] In progress

---

## Part 1 — Astro Foundations (6 articles)

- [x] Article 1: What is Astro and who is it for?
- [x] Article 2: Setting up your first Astro project
- [x] Article 3: Pages, Layouts and Components
- [x] Article 4: Styling in Astro — Plain CSS first
- [x] Article 5: Static Site Generation explained
- [x] Article 6: Deploy Astro to Vercel

## Part 2 — Content with MD/MDX/YAML (9 articles)

- [x] Article 7: Writing content with Markdown
- [x] Article 8: Content Collections — the right way to manage content
- [x] Article 9: Dynamic routes and blog listing page
- [x] Article 10: MDX — use components inside your content
- [x] Article 11: Build a review page with Content Collections
- [x] Article 12: Build a comparison page
- [x] Article 13: Build a guide page
- [ ] Article 14: Images in Astro — local images
- [ ] Article 15: Images in Astro — Cloudinary

## Part 2B — Tailwind CSS (split into 2 parts)

- [x] Article 16A: Switch to Tailwind CSS — Setup + BaseLayout/Header/Footer/index/blog
- [x] Article 16B: Tailwind CSS Part 2 — Refactoring every remaining page, fixing a ghost CSS bug

## Part 3 — Technical SEO (split into 2 parts)

- [x] Article 17A: Meta Tags, Open Graph and Twitter Cards in Astro
- [x] Article 17B: JSON-LD Schema in Astro — Article, Review, Breadcrumbs

## Part 4 — Sitemap, robots.txt, and AI Crawlers (split into 2 parts)

- [x] Article 18A: Sitemap and robots.txt in Astro — Custom vs Official Package
- [x] Article 18B: llms.txt and llms-full.txt — Auto-Generated From Content Collections

## Part 5 — Content SEO and AI-Era Search (NEW — added mid-series)

- [ ] Article 19: Content SEO in Practice — answerBox, FAQSection, and Implementing AEO/GEO/HEO
- [ ] Article 20: SEO in the AI Era with Astro — AEO, GEO, HEO Theory and What Actually Works

## Part 6 — Go-Links and Component Library (renumbered from old Article 19, split into 5 articles)

- [ ] Article 21: Go-Links for Affiliate Sites — The WordPress Plugin Way vs. The Static Site Way (Astro adapter + `prerender:false`, cross-platform redirect, Pretty Links/ThirstyAffiliates/ClickMagick comparison)
- [ ] Article 22: Build a Component Library, Part 1 — Content-Specific Components (RatingStars, ProsConsBox, VerdictBox, ComparisonTable, WinnerBadge, DifficultyBadge, StepBlock, PrerequisitesBox)
- [ ] Article 23: Build a Component Library, Part 2 — Site-Wide UI Components (Callout, FAQ accordion, TableOfContents, ReadingProgress, RelatedPosts, AuthorBox, ShareButtons, Breadcrumb, NewsletterBox)
- [ ] Article 24: Dark Mode in Astro — Auditing and Theming Every Component Built So Far (CSS variables, Tailwind `dark:` variant, prefers-color-scheme, ThemeToggle)
- [ ] Article 25: Homepage and Hub Page Redesign — HeroBanner, FeaturedCard, StatsBar, CategoryCard, FilterSortBar, Pagination, TagFilter

## Part 7 — Search (NEW — added mid-series)

- [ ] Article 26: Search on a Static Site — Why Pagefind Beats Algolia for Astro Content Sites (with Typesense/WordPress comparison from real experience)
- [ ] Article 27: Adding Pagefind Search to Astro — Indexing Content Collections and Building the UI

---

## Part 8 — TinaCMS: Visual Editor (6 articles)

- [ ] Article 28: Why Astro doesn't have wp-admin
- [ ] Article 29: Install TinaCMS in Astro
- [ ] Article 30: Edit frontmatter with TinaCMS
- [ ] Article 31: Edit MDX body with TinaCMS
- [ ] Article 32: Create custom MDX blocks in Tina
- [ ] Article 33: TinaCMS workflow — save, commit, deploy

---

## Part 9 — Astro Backend (4 articles)

- [ ] Article 34: Does Astro have a backend?
- [ ] Article 35: Build a contact form
- [ ] Article 36: Middleware and protected routes
- [ ] Article 37: Affiliate Link Management — From YAML to Database (upgrading the Article 21 go-link system with an admin UI and click tracking; NOT building redirects from scratch — see Decision Log)

---

## Part 10 — Database and Auth (4 articles)

- [ ] Article 38: From files to database — why and when
- [ ] Article 39: Connect Astro to Supabase
- [ ] Article 40: CRUD articles with Supabase
- [ ] Article 41: Auth with Supabase

---

## Part 11 — Mini Astro CMS (6 articles)

- [ ] Article 42: Design your mini CMS
- [ ] Article 43: Build the admin dashboard
- [ ] Article 44: Markdown editor in the browser
- [ ] Article 45: Render database content on frontend
- [ ] Article 46: Deploy Astro SSR
- [ ] Article 47: Series wrap-up

---

## Progress

Part 1: 6/6
Part 2: 7/9
Part 2B: 2/2
Part 3: 2/2
Part 4: 2/2
Part 5: 0/2
Part 6: 0/5
Part 7: 0/2
Part 8: 0/6
Part 9: 0/4
Part 10: 0/4
Part 11: 0/6
Total: 19/47

---

## Astro 6 Breaking Changes — Important Notes

- `render(post)` instead of `post.render()`
- `post.id` instead of `post.slug`
- Content config: `src/content.config.ts`, not `src/content/config.ts`
- Glob pattern: `loader: glob({ pattern: '**/*.{md,mdx}', base: '...' })`
- New collection added → restart dev server or touch content.config.ts
- `Astro.glob()` removed → use `import.meta.glob()`

---

## Tech Stack

- Astro 6.x
- TypeScript
- Plain CSS (article 4) → Tailwind CSS v4 (article 16A/16B)
- MDX
- Custom SEO system: meta tags, JSON-LD, sitemap.xml, llms.txt — all auto-generated from Content Collections, no plugins
- Hybrid rendering from Article 21: site stays static by default; `/go/[slug]` opts into on-demand rendering via an Astro adapter (`@astrojs/vercel` for the live demo; swappable for `@astrojs/node` or `@astrojs/netlify` with no route code changes) for real HTTP 302 redirects
- Dark mode from Article 24: CSS variables + Tailwind v4 `dark:` variant, applied site-wide across every component built since Article 1
- Pagefind (search, from article 27)
- TinaCMS
- Supabase + PostgreSQL
- Vercel

---

## Decision Log — Mid-Series Additions

**Articles 16, 17, 18 split into A/B parts.** Scope was too large for single articles — splitting improves readability and gives each part a clear, testable result.

**Articles 19-20 added (Content SEO + AI-Era SEO).** Originally planned as one technical SEO article. Split further into: technical layer (meta tags, schema — done in 17A/17B), content layer (answerBox, FAQSection structure — article 19), and theory layer (AEO/GEO/HEO explained, llms.txt context — article 20). Component library pushed from old Article 19 to new Article 21 (later split further — see below).

**Article 21 split into 5 articles (Go-Links + Component Library, Parts 1-3 + Dark Mode).** Original scope ("Article 21 — Component Library") bundled content-specific components, site-wide UI components, affiliate go-links, dark mode, and a full homepage/hub redesign into one article. Too large for one piece with a testable result. Split into: Article 21 (go-links, moved to the front to unblock `AffiliateCTA`, which already referenced a `/go/[slug]` route that didn't exist yet), Article 22 (content-specific components), Article 23 (site-wide UI components), Article 24 (dark mode, split out further — see below), Article 25 (homepage/hub redesign). Go-links deliberately ordered first to keep working flow and because it was a self-contained system not blocked by the other three.

**Dark mode split out of Article 23 into its own Article 24.** Originally bundled into "site-wide UI components" alongside Callout, FAQ accordion, TableOfContents, and seven other additions. The other nine are all net-new components — write once, build, done. Dark mode is the opposite: it requires auditing and re-theming every component built since Article 1 (Header, Footer, TLDRBox, MyExperienceBox, RatingStars, ComparisonTable, WinnerBadge, and more) with Tailwind `dark:` variants — the same "fix code that already exists across the whole site" shape as Article 16B's Tailwind refactor, not a "add one more component" task. Splitting keeps Article 23 focused on shipping nine clean new components, and gives dark mode room to actually explain the audit strategy instead of being a rushed afterthought.

**Go-link architecture — three approaches considered, adapter approach chosen (Article 21).** Goal: `/go/slug` must return a real HTTP 302, instantly, and the source must run on any host (Vercel, VPS, Netlify, static) without rewriting logic — go-links are basic affiliate-site infrastructure and shouldn't be complicated to maintain.
- *Rejected: `vercel.json` only.* Real 302, but locks the project to Vercel. Violates the series' "runs anywhere, no plugins" principle.
- *Rejected: generate 5 parallel outputs (Astro redirects config, Netlify/Cloudflare `_redirects`, `vercel.json`, an Nginx map file, and a static HTML fallback per link).* Technically sound and cross-platform, but every new affiliate link would need syncing across multiple generated files, and VPS deployment required manually editing an Nginx vhost — too much for a "basic" feature.
- *Chosen: Astro adapter + `export const prerender = false` on a single `/go/[slug].astro` route.* Site stays static by default; only the go-link route opts into on-demand rendering, giving a real 302 via `Astro.redirect(url, 302)`. Switching deploy targets means swapping one adapter (`@astrojs/vercel` → `@astrojs/node` → `@astrojs/netlify`) and running one `npx astro add <adapter>` command once at setup — the route code never changes. Data source of truth: one `affiliates` Content Collection (`slug` + `affiliateUrl` per YAML file), validated by Zod so duplicate slugs fail the build loudly instead of silently overwriting.
- Kept from the rejected 5-output proposal: `noindex, nofollow` on `/go/*` (excluded from sitemap), `rel="sponsored nofollow"` on internal links pointing to `/go/`, and 302 (not 301) since affiliate URLs can change.

**Articles 26-27 added (Search, renumbered from 25-26).** Steven has hands-on production experience with Typesense + Simply Static on WordPress. This gives article 26 a real comparison angle — not just theoretical research, but lived experience on both the WordPress/Typesense side and the upcoming Astro/Pagefind side. Decision: Pagefind for astro-content-lab — static-first, zero ongoing cost, fits a content/affiliate site (not e-commerce, no need for Algolia/Typesense-level faceted search).

**Article 37 (old Article 33, "Affiliate redirect tracking") reframed.** Since basic go-link redirects now ship in Article 21, Part 9's affiliate article is no longer "build redirects from scratch." Reframed as an upgrade: admin UI for managing links (replacing manual YAML edits) and click tracking/analytics, likely backed by a database instead of static YAML once a UI needs to write data. Gives readers a concrete before/after comparison between the static approach (Article 21) and the dynamic approach (Part 9).

**HowTo schema dropped entirely (article 17B).** Deprecated by Google since 2023, no rich result benefit. Guide pages use Article schema instead.

**FAQ rich results deprecated by Google, May 2026 (context for 17B/19/20).** FAQPage schema markup remains valid and is still read by non-Google AI crawlers — kept for AI citation purposes, not Google SERP display.

**llms.txt — honest "low-cost bet" framing (article 18B).** Google states it's not required for AI feature eligibility; research shows weak correlation with AI citation rates. Decision: implement anyway because cost is near zero (40 lines of code reusing the sitemap.xml pattern) and potential upside exists if the standard gains traction.

---

## Principles

- Every article has real code, copy-paste and it runs
- Every article maps to a corresponding GitHub commit
- Readers can clone the repo and use it directly
- Compare with WordPress at every important concept
- Don't teach too many tools at once
- Every site-specific value (name, URL, author) flows through `config.ts` — never hardcoded
