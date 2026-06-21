# Astro Content Lab

A real, working content site built with Astro, MDX, and Tailwind CSS — not a toy demo. This is the companion project for the [Learn Astro from Scratch](#) article series, where every article maps to a commit in this repo.

**Live demo:** https://astro-content-lab.vercel.app

It's built to be cloned and used as a starting point for a real affiliate or content site: reviews, comparisons, guides, and blog posts, with a custom SEO system (meta tags, JSON-LD, sitemap, llms.txt) and an affiliate link system — all without third-party plugins, so you understand exactly how every piece works.

## Tech stack

- **Astro 6** — content collections, hybrid rendering (static by default, on-demand where needed)
- **TypeScript**
- **Tailwind CSS v4**
- **MDX** — for content that needs components, not just prose
- **Vercel** — deployment + adapter for the go-link system (swappable, see below)

## Project structure

```
/
├── src/
│   ├── content/
│   │   ├── posts/         ← blog posts (.md / .mdx)
│   │   ├── reviews/        ← product reviews (.md / .mdx)
│   │   ├── compares/        ← comparison articles (.md / .mdx)
│   │   ├── guides/         ← how-to guides (.md / .mdx)
│   │   └── affiliates/      ← affiliate link definitions (.yaml)
│   ├── content.config.ts    ← collection schemas (Zod)
│   ├── config.ts             ← site-wide values (name, URL, author) — never hardcoded elsewhere
│   ├── components/
│   └── pages/
│       ├── go/[slug].astro   ← affiliate redirect route
│       ├── sitemap.xml.ts
│       └── robots.txt.ts
├── astro.config.mjs
└── package.json
```

## Getting started

Requires **Node.js v24.15.0** (or compatible Node 24 LTS).

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

> **Note:** `npm run preview` does not work with the Vercel adapter (this is a known limitation of `@astrojs/vercel`, not a bug in this project). To test production behavior locally, use `npm run dev` — the go-link route behaves identically in dev mode. To test the exact production environment, push to a branch and use Vercel's Preview Deployments.

## Adding content

Every content type (`posts`, `reviews`, `compares`, `guides`) is a Content Collection with a Zod-validated schema in `src/content.config.ts`. Add a new `.md` or `.mdx` file in the matching folder under `src/content/`, following the frontmatter shape Zod expects — the build will fail loudly with a clear error if a required field is missing, instead of failing silently.

## Adding an affiliate link (go-links)

This project uses its own affiliate redirect system instead of a WordPress-style plugin (Pretty Links, ThirstyAffiliates) or a platform-specific config file. It works the same way no matter where you deploy.

**1. Create a YAML file** in `src/content/affiliates/`, named after the slug you want:

```yaml
# src/content/affiliates/your-product.yaml
slug: your-product
affiliateUrl: "https://example.com/?ref=your-id"
```

**2. Link to it anywhere in your content** using a normal Markdown link:

```markdown
[Check pricing](/go/your-product/)
```

That's it. No import, no component, no extra step. The link automatically:

- Returns a real HTTP 302 redirect (not a meta-refresh page)
- Gets `rel="sponsored nofollow"` and `target="_blank"` added automatically at build time
- Is excluded from `sitemap.xml`
- Is disallowed in `robots.txt` (`Disallow: /go/`)

**Updating a link later** (new referral code, program changed) means editing one line in the `.yaml` file — every article linking to that slug updates automatically, with nothing to find-and-replace in your content.

### How the redirect works (and why it runs anywhere)

The `/go/[slug].astro` route is the only part of this site that isn't fully static — it's marked `export const prerender = false` so it runs on-demand and can return a real redirect with a real status code, instead of a static HTML page with a meta-refresh tag (which is what static-only Astro routes are limited to).

Running an on-demand route requires an adapter. This project ships with `@astrojs/vercel` since the live demo is on Vercel, but the route code itself never references Vercel directly — switching deploy targets means swapping the adapter, not rewriting the redirect logic:

```sh
npx astro add node      # for a VPS or any Node host
npx astro add netlify    # for Netlify
```

Run the adapter command once when you set up the project. You won't need to touch it again unless you change hosts.

## SEO system

No SEO plugins — everything is generated from Content Collections at build time:

- **Meta tags + Open Graph + Twitter Cards** — per-page, driven by frontmatter
- **JSON-LD** — Article, Review, BreadcrumbList, Person, Organization schemas
- **`sitemap.xml`** — generated from collections, not a crawl-and-guess plugin
- **`robots.txt`** — generated from `src/config.ts`, so the `Sitemap:` URL and any `Disallow` rules stay in sync with the actual site config instead of being hardcoded in a static file
- **`llms.txt` / `llms-full.txt`** — auto-generated from Content Collections

## Configuration

Every site-specific value — name, URL, author, social handles — lives in `src/config.ts`. Nothing is hardcoded into individual components or pages. If you fork this repo, update that one file and the whole site (schema, meta tags, sitemap, robots.txt) follows.

## License

MIT — see [LICENSE](./LICENSE). Clone it, modify it, use it for your own affiliate or content site, commercial or not.

## Learn more

This repo is the companion project for an article series — see [#](#) for the full write-ups, including the reasoning behind each architectural decision (why no SEO plugins, why Pagefind over Algolia, why go-links use an Astro adapter instead of `vercel.json`, and more).
