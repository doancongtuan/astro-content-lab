Paste nội dung này vào file mới `SERIES-PLAN-EN.md`:

```markdown
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

## Part 1 — Astro Foundations (7 articles)

### Article 1 — What is Astro and who is it for?
**Goal:** Readers understand what Astro is before installing anything.  
**Covers:**
- What Astro is — a static site generator, not a React framework
- Astro vs WordPress: database + PHP + theme vs files + build tool + HTML
- Astro vs Next.js: Next.js ships JavaScript, Astro ships pure HTML
- Best for: blogs, review sites, docs, affiliate sites, content sites
- Not good for: web apps, dashboards, realtime, complex ecommerce
- Who should learn Astro: WordPress users wanting modern stack, content site builders

**Code:** None. Architecture comparison diagram.  
**Outcome:** Readers know if Astro is right for them before starting.

---

### Article 2 — Setting up your first Astro project
**Goal:** Install Astro, run locally, push to GitHub.  
**Covers:**
- Requirements: Node.js 24 LTS
- Create project: `npm create astro@latest`
- Choose template: Empty
- Quick folder structure explanation
- Run dev server: `npm run dev`
- Open `localhost:4321`
- Push to GitHub

**Code:**
```
astro-content-lab/
├── src/pages/index.astro
├── public/
├── astro.config.mjs
└── package.json
```

**Outcome:** `astro-content-lab` repo on GitHub, site running locally.

---

### Article 3 — Pages, Layouts and Components
**Goal:** Understand the 3 core concepts of Astro.  
**Covers:**
- Page = file in `src/pages/` = automatic URL
- Layout = shared HTML wrapper using `<slot />`
- Component = reusable UI piece
- Why you need layouts: avoid repeating code
- Why you need components: reuse UI, change once affects everywhere

**Code:**
```
src/
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── blog.astro
├── layouts/
│   └── BaseLayout.astro
└── components/
    └── Header.astro
```

**Outcome:** Site with 3 pages sharing a common layout and header.

---

### Article 4 — Styling in Astro: Plain CSS first
**Goal:** Site has a basic interface, not worse than a free theme.  
**Covers:**
- Scoped CSS inside `.astro` files
- Global CSS in `src/styles/global.css`
- CSS variables for colors and typography
- Basic responsive with media queries
- Basic dark mode with `prefers-color-scheme`

**Code:**
```
src/styles/
└── global.css   ← typography, reset, variables, layout
```

```css
:root {
  --color-bg: #ffffff;
  --color-text: #111827;
  --color-primary: #6366f1;
  --color-muted: #6b7280;
  --font-sans: system-ui, sans-serif;
  --max-width: 768px;
}
```

**Outcome:** Site looks like a clean, readable personal blog.

---

### Article 5 — Static Site Generation explained
**Goal:** Understand what SSG is and why Astro is fast.  
**Covers:**
- What SSG is: pre-build HTML, no runtime server processing
- Comparison: WordPress request → PHP → database → HTML. Astro: request → HTML (already ready)
- Advantages: fast, secure, cheap, easy to scale
- Disadvantages: no truly dynamic content (solved in Part 4 and 5)
- What `npm run build` outputs
- What's inside the `dist/` folder

**Code:**
```bash
npm run build
ls dist/
```

**Outcome:** Readers understand why Astro is faster than WordPress.

---

### Article 6 — Deploy Astro to Vercel
**Goal:** Site live on the internet, auto-deploy on GitHub push.  
**Covers:**
- Create Vercel account
- Import repo from GitHub
- Vercel auto-detects Astro, no config needed
- Auto-deploy on push to `main`
- Custom domain: point domain to Vercel
- Preview deployments for other branches

**Code:**
```
Push code → GitHub → Vercel build → live
```

**Outcome:** `astro-content-lab.vercel.app` is live, auto-deploys on every push.

---

## Part 2 — Content with MD/MDX/YAML (12 articles)

### Article 7 — Writing content with Markdown
**Goal:** Write the first blog post using Markdown in Astro.  
**Covers:**
- Basic Markdown syntax: headings, bold, italic, lists, links, images, code blocks
- What frontmatter is — post metadata
- Why use Markdown instead of raw HTML
- Compared to WordPress editor: Markdown = Gutenberg but in plain text

**Code:**
```
src/pages/blog/
├── hello-world.md
├── astro-vs-wordpress.md
└── what-is-static-site.md
```

**Outcome:** 3 blog posts written in Markdown with URLs that render correctly.

---

### Article 8 — Content Collections: the right way to manage content
**Goal:** Understand why Content Collections are needed, know how to create a schema.  
**Covers:**
- Problems with `src/pages/*.md`: no validation, no TypeScript
- What Content Collections solve
- What `content.config.ts` is
- Zod schema: `z.string()`, `z.number()`, `z.date()`, `z.array()`
- Compared to WordPress Custom Post Types
- What `getCollection()` is
- Astro 6 note: `loader: glob()`, `render(post)` instead of `post.render()`

**Code:**
```
src/
├── content.config.ts
└── content/
    └── posts/
        ├── hello-world.md
        ├── astro-vs-wordpress.md
        └── what-is-static-site.md
```

**Outcome:** `posts` collection with schema, automatic validation.

---

### Article 9 — Dynamic routes and blog listing page
**Goal:** Create a listing page and detail page from Content Collections.  
**Covers:**
- What dynamic route `[slug].astro` is
- `getStaticPaths()` — Astro needs to know URLs in advance
- `render(post)` — convert markdown body to HTML
- `<Content />` component
- Listing page `/blog` using `getCollection()`
- Detail page `/blog/[slug]`
- Add new post → URL appears automatically

**Code:**
```
src/pages/
├── blog.astro           ← listing page
└── blog/
    └── [slug].astro     ← detail page
```

**Outcome:** Complete blog — listing + detail, add a file and the post appears.

---

### Article 10 — MDX: use components inside your content
**Goal:** Insert components into the middle of a post.  
**Covers:**
- How MDX differs from Markdown
- Install MDX integration: `npx astro add mdx`
- Import component in `.mdx` file
- Update glob pattern: `**/*.{md,mdx}`
- When to use MD vs MDX

**Code:**
```
src/
├── components/
│   └── Callout.astro
└── content/posts/
    └── mdx-test.mdx
```

**Outcome:** Posts can insert UI components into content.

---

### Article 11 — Build a review page with Content Collections
**Goal:** Create a structured, good-looking, usable review page.  
**Covers:**
- Schema for review: `productName`, `rating`, `pros`, `cons`, `verdict`
- Separate layout for reviews
- RatingStars component
- ProsConsBox component
- VerdictBox component
- Listing page `/reviews`
- Detail page `/reviews/[slug]`

**Code:**
```
src/
├── content/reviews/
│   └── hostinger-review.md
├── components/
│   ├── RatingStars.astro
│   ├── ProsConsBox.astro
│   └── VerdictBox.astro
└── pages/
    ├── reviews.astro
    └── reviews/[slug].astro
```

**Outcome:** Review page looks like a real review site with rating, pros/cons, verdict.

---

### Article 12 — Build a comparison page
**Goal:** Create a product comparison page with a comparison table.  
**Covers:**
- Schema for compare: `itemA`, `itemB`, `winner`, `comparisonRows`
- ComparisonTable component
- Winner badge
- Listing page `/compares`
- Detail page `/compares/[slug]`

**Code:**
```
src/
├── content/compares/
│   └── astro-vs-nextjs.md
├── components/
│   └── ComparisonTable.astro
└── pages/
    ├── compares.astro
    └── compares/[slug].astro
```

**Outcome:** Compare page has a clear comparison table with winner highlighted.

---

### Article 13 — Build a guide page
**Goal:** Create a step-by-step guide page.  
**Covers:**
- Schema for guide: `difficulty`, `estimatedTime`
- Difficulty badge component
- Step layout
- Listing page `/guides`
- Detail page `/guides/[slug]`

**Code:**
```
src/
├── content/guides/
│   └── how-to-deploy-astro.md
├── components/
│   └── DifficultyBadge.astro
└── pages/
    ├── guides.astro
    └── guides/[slug].astro
```

**Outcome:** Guide page has a clear, easy-to-read layout.

---

### Article 14 — Images in Astro: local images
**Goal:** Add real images to posts, automatically optimized.  
**Covers:**
- Astro `<Image />` component
- Local images in `src/assets/` vs `public/`
- Why use `src/assets/` — Astro auto-optimizes
- Add hero image to frontmatter
- Display hero image on detail and listing pages
- Alt text, width, height

**Code:**
```
src/
├── assets/images/
│   ├── hero-hello-world.jpg
│   └── hero-hostinger.jpg
└── content/posts/
    └── hello-world.md  ← add heroImage to frontmatter
```

**Outcome:** Posts have beautiful hero images, automatically optimized.

---

### Article 15 — Images in Astro: Cloudinary
**Goal:** Use Cloudinary to host and serve optimized images.  
**Covers:**
- What Cloudinary is and why use it
- Create free Cloudinary account
- Upload images to Cloudinary
- Use Cloudinary URL in frontmatter
- Cloudinary transform URL: resize, format, quality
- Local vs Cloudinary comparison

**Code:**
```markdown
---
heroImage: https://res.cloudinary.com/your-cloud/image/upload/v1/posts/hero.jpg
---
```

**Outcome:** Images served from Cloudinary CDN, auto-optimized per device.

---

### Article 16 — Switch to Tailwind CSS
**Goal:** Understand why Tailwind, know how to integrate it into Astro.  
**Covers:**
- Problems with plain CSS at scale
- What Tailwind is — utility-first CSS
- Tailwind vs plain CSS: writing speed, consistency, purge unused CSS
- Install Tailwind: `npx astro add tailwind`
- Refactor all CSS to Tailwind
- Typography plugin for content

**Code:**
```
- Remove global.css
- Add tailwind.config.mjs
- Refactor Header, BaseLayout, home page to Tailwind classes
```

**Outcome:** Entire site uses Tailwind, ready to build better-looking components.

## Tách bài 16 thành 2 phần:

### Bài 16A — Why Tailwind and How to Install

Tại sao switch từ CSS thuần sang Tailwind
Tailwind v4 khác v3 thế nào
Cài đặt vào Astro
Setup global.css với @theme
Refactor BaseLayout, Header, Footer

#### Bài 16A xong. ~2500 words.

* Điểm đặc biệt:

- Mở đầu bằng vấn đề thật — 200-line global.css, style scattered 12 files
- MyExperienceBox về "Read more link lơ lửng" — đúng câu chuyện hôm nay
- Giải thích Tailwind v4 vs v3 rõ ràng — người đọc không bị nhầm với tutorial cũ
- Section "What's still plain CSS" — honest về .prose limitation
- Full code cho tất cả files đã refactor

### Bài 16B — Refactor All Pages to Tailwind

Refactor tất cả listing pages
Refactor tất cả detail pages
Refactor components
Kết quả trước/sau

---

### Article 17 — SEO in Astro
**Goal:** Every page has complete SEO metadata.  
**Covers:**
- Meta title, description
- Open Graph tags for Facebook/LinkedIn
- Twitter card
- Canonical URL
- Reusable SEO component
- Apply to all pages and posts

**Code:**
```
src/components/
└── SEO.astro   ← accepts title, description, image, canonical
```

**Outcome:** Every page has complete SEO, looks great when shared on social media.

---

### Article 18 — Sitemap and robots.txt
**Goal:** Site is correctly indexed by Google.  
**Covers:**
- Install `@astrojs/sitemap`
- Configure site URL in `astro.config.mjs`
- Auto-generate sitemap
- robots.txt
- Submit to Google Search Console

**Code:**
```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap'
export default defineConfig({
  site: 'https://astro-content-lab.vercel.app',
  integrations: [sitemap()],
})
```

**Outcome:** `sitemap-index.xml` auto-generated, Google can crawl correctly.

---

### Article 19 — Build a component library
**Goal:** Have a ready-to-use set of components for content sites, copy-paste and run.  
**Covers:**
- Callout (info/warning/tip)
- ProsConsBox
- RatingStars
- VerdictBox
- ComparisonTable
- AffiliateCTA
- FAQ accordion
- Simple TableOfContents

**Code:**
```
src/components/
├── Callout.astro
├── ProsConsBox.astro
├── RatingStars.astro
├── VerdictBox.astro
├── ComparisonTable.astro
├── AffiliateCTA.astro
├── FAQ.astro
└── TableOfContents.astro
```

**Outcome:** Complete component library, readers clone and use immediately.

---

## Part 3 — TinaCMS: Visual Editor (6 articles)

### Article 20 — Why Astro doesn't have wp-admin
**Goal:** Understand why Astro has no admin panel like WordPress and what Git-based CMS is.  
**Covers:**
- WordPress: write post → save to database → render
- Astro: write file → commit Git → build → deploy
- What Git-based CMS is — CMS editor that saves to files, not database
- TinaCMS vs Decap vs Sanity vs Strapi — which to choose and why
- When to use Git-based CMS
- Limitations of Git-based CMS

**Code:** None. Workflow comparison diagram.  
**Outcome:** Readers understand trade-offs before installing TinaCMS.

---

### Article 21 — Install TinaCMS in Astro
**Goal:** Install TinaCMS, run admin locally at `/admin`.  
**Covers:**
- Install TinaCMS: `npx @tinacms/cli@latest init`
- What Tina schema is
- Create Tina collection for `posts`
- Run Tina locally: `npx tinacms dev`
- Visit `localhost:4321/admin`
- Tina Cloud vs local — use local first

**Code:**
```
tina/
└── config.ts
```

**Outcome:** Admin panel running locally, can see post list.

---

### Article 22 — Edit frontmatter with TinaCMS
**Goal:** Edit post frontmatter through form UI instead of editing files directly.  
**Covers:**
- Map each frontmatter field to a Tina form field
- Field types: `text`, `textarea`, `number`, `datetime`, `image`
- Create new post from Tina admin
- Edit title, description, publishedAt
- Tina auto-saves to `.md` file

**Code:**
```typescript
fields: [
  { name: 'title', type: 'string', label: 'Title' },
  { name: 'description', type: 'string', label: 'Description' },
  { name: 'publishedAt', type: 'datetime', label: 'Published At' },
]
```

**Outcome:** Writers don't need to know frontmatter syntax, just fill in the form.

---

### Article 23 — Edit MDX body with TinaCMS
**Goal:** Edit post content using a rich text editor instead of raw MDX.  
**Covers:**
- What Tina rich text editor is
- Add `body` field of type `rich-text` to Tina schema
- Edit post content in the editor
- How Tina renders MDX from the editor
- Limitations of Tina rich text editor

**Code:**
```typescript
{
  name: 'body',
  type: 'rich-text',
  label: 'Body',
  isBody: true,
}
```

**Outcome:** Writers can edit post content like Google Docs.

---

### Article 24 — Create custom MDX blocks in TinaCMS
**Goal:** Writers can insert Callout, ProsConsBox, CTA without knowing MDX syntax.  
**Covers:**
- What custom blocks in Tina are
- Create block for `Callout`
- Create block for `AffiliateCTA`
- Create block for `FAQ`
- Writer picks block from menu, fills form, Tina generates MDX

**Code:**
```typescript
{
  name: 'body',
  type: 'rich-text',
  templates: [
    {
      name: 'Callout',
      label: 'Callout Box',
      fields: [
        { name: 'type', type: 'string' },
        { name: 'title', type: 'string' },
      ]
    }
  ]
}
```

**Outcome:** Writers don't need to know MDX, just pick blocks and fill content.

---

### Article 25 — TinaCMS workflow: save, commit, deploy
**Goal:** Understand the complete workflow from writing to live on production.  
**Covers:**
- Tina local: save → file changes → manual commit → push → Vercel deploys
- Tina Cloud: save → Tina auto-commits → push → Vercel auto-deploys
- Setup Tina Cloud free tier
- Workflow for non-Git users
- Git-based CMS limitations: no real draft preview, no proper media library

**Code:**
```bash
tinacms dev
# edit post
git add .
git commit -m "update post"
git push
```

**Outcome:** Readers understand complete workflow and TinaCMS limitations.

---

## Part 4 — Astro Backend (4 articles)

### Article 26 — Does Astro have a backend?
**Goal:** Understand Astro can do light backend work, know when to use it.  
**Covers:**
- Static site vs SSR — what's the difference
- What Astro API Routes are
- What Astro Actions are
- What Middleware is
- When you need backend: form submit, redirect tracking, protected routes, auth
- When you DON'T need it: just displaying static content

**Code:** None. Static vs SSR comparison diagram.  
**Outcome:** Readers know when to enable SSR and when not to.

---

### Article 27 — Build a contact form with Astro
**Goal:** Handle form submissions using an Astro API Route.  
**Covers:**
- Create `/contact` page with HTML form
- Create API route `/api/contact.ts`
- Receive POST request
- Validate input
- Return success/error response
- Show feedback to user
- Enable SSR for API route

**Code:**
```
src/
├── pages/
│   ├── contact.astro
│   └── api/
│       └── contact.ts
```

**Outcome:** Working contact form with input validation and response feedback.

---

### Article 28 — Middleware and protected routes in Astro
**Goal:** Understand middleware, create a basic protected route.  
**Covers:**
- What middleware is — runs before request reaches the page
- Create `src/middleware.ts`
- What cookies and sessions are
- Create `/login` page — set simulated cookie
- Create `/admin` page — check cookie, redirect if not logged in
- Logout — clear cookie

**Code:**
```
src/
├── middleware.ts
└── pages/
    ├── login.astro
    ├── admin.astro
    └── logout.astro
```

**Outcome:** `/admin` only accessible when logged in, redirects to `/login` otherwise.

---

### Article 29 — Affiliate redirect tracking with Astro
**Goal:** Create `/go/[slug]` route to manage affiliate links.  
**Covers:**
- What affiliate link management is
- Why not link directly to external sites
- Create dynamic route `/go/[slug]`
- Configure affiliate links in YAML file
- Simple redirect logging
- Redirect to external URL
- Real-world use for content sites

**Code:**
```
src/
├── pages/go/
│   └── [slug].astro
└── data/
    └── affiliates.yaml
```

```yaml
hostinger: https://hostinger.com/?ref=xxx
vercel: https://vercel.com/?ref=xxx
```

**Outcome:** `/go/hostinger` automatically redirects to the real affiliate link.

---

## Part 5 — Database and Auth (4 articles)

### Article 30 — From files to database: why and when
**Goal:** Understand when to move from file content to a database.  
**Covers:**
- How many posts can file content handle?
- What problems database solves: dynamic content, user-generated content, realtime
- What PostgreSQL is
- What Supabase is — PostgreSQL as a service
- When you SHOULD use a database
- When you SHOULDN'T — file content is still better

**Code:** None. File vs database comparison diagram.  
**Outcome:** Readers know whether they need a database.

---

### Article 31 — Connect Astro to Supabase
**Goal:** Connect Astro to Supabase, run the first query.  
**Covers:**
- Create free Supabase project
- Create `articles` table in Supabase
- Install Supabase client: `npm install @supabase/supabase-js`
- Environment variables: `SUPABASE_URL`, `SUPABASE_ANON_KEY`
- Create `src/lib/supabase.ts`
- First query: get articles list
- Render to Astro page

**Code:**
```
src/lib/
└── supabase.ts

.env
SUPABASE_URL=xxx
SUPABASE_ANON_KEY=xxx
```

**Outcome:** Astro reads data from Supabase and renders it as HTML.

---

### Article 32 — CRUD articles with Supabase
**Goal:** Build an admin dashboard to create, edit, and delete articles.  
**Covers:**
- Create `/admin/articles` — article list
- Create `/admin/articles/new` — new article form
- Create `/admin/articles/[id]/edit` — edit article
- API route to delete article
- Status: draft/published
- Auto-generate slug from title

**Code:**
```
src/pages/admin/
├── articles/
│   ├── index.astro
│   ├── new.astro
│   └── [id]/
│       └── edit.astro
└── api/
    └── articles/
        ├── create.ts
        ├── update.ts
        └── delete.ts
```

**Outcome:** Complete admin CRUD for articles.

---

### Article 33 — Auth with Supabase: login and protect admin
**Goal:** Only logged-in admins can access `/admin`.  
**Covers:**
- What Supabase Auth is
- Create `/login` page using Supabase Auth
- Logout
- Middleware session check
- Protect all `/admin/*` routes
- Redirect to `/login` if not authenticated

**Code:**
```
src/
├── middleware.ts
├── lib/
│   └── auth.ts
└── pages/
    ├── login.astro
    └── logout.astro
```

**Outcome:** `/admin` truly protected by Supabase Auth.

---

## Part 6 — Mini Astro CMS (6 articles)

### Article 34 — Design your mini CMS
**Goal:** Know what to build before writing code.  
**Covers:**
- What features a mini CMS needs
- Complete database schema
- Admin routes map
- Frontend routes map
- What NOT to build in v1
- Compared to WordPress: why WordPress is so complex

**Code:** None. Schema diagram + routes map.

```sql
articles: id, title, slug, description, body,
          status, hero_image, seo_title,
          seo_description, published_at,
          created_at, updated_at
```

**Outcome:** Readers have a clear blueprint before coding.

---

### Article 35 — Build the admin dashboard
**Goal:** Complete admin dashboard — list, create, edit, delete, publish.  
**Covers:**
- Separate layout for admin
- Article list page — filter draft/published
- New article form — complete fields
- Edit article — load data from database
- Delete article — confirm dialog
- Publish/unpublish toggle
- Auto-generate slug from title

**Code:**
```
src/pages/admin/
├── index.astro
├── articles/
│   ├── index.astro
│   ├── new.astro
│   └── [id]/edit.astro
```

**Outcome:** Fully functional admin dashboard.

---

### Article 36 — Markdown editor in the browser
**Goal:** Have an in-browser editor for writing posts with preview.  
**Covers:**
- Why you need a markdown editor in the browser
- Use a simple editor library
- Split view: editor + preview
- Basic toolbar: bold, italic, heading, link, image
- Save to database

**Code:**
```
src/components/admin/
└── MarkdownEditor.astro
```

**Outcome:** Users can write posts in browser with a clean editor.

---

### Article 37 — Render database content on frontend
**Goal:** Database articles display on frontend just like Content Collections.  
**Covers:**
- Create `/articles/[slug]` page fetching from database
- Render markdown body as HTML
- SEO from database fields
- Handle 404 when slug not found
- Only render articles with published status

**Code:**
```
src/pages/
├── articles/
│   ├── index.astro
│   └── [slug].astro
```

**Outcome:** Database articles render as beautifully as file-based posts.

---

### Article 38 — Deploy Astro SSR
**Goal:** Deploy Astro SSR to production.  
**Covers:**
- What an SSR adapter is
- Install Vercel adapter: `npx astro add vercel`
- Environment variables on Vercel
- Deploy to Vercel
- Or deploy to Railway/Fly.io for VPS option
- Test production

**Code:**
```javascript
// astro.config.mjs
import vercel from '@astrojs/vercel'
export default defineConfig({
  output: 'server',
  adapter: vercel(),
})
```

**Outcome:** Mini CMS live on production, admin can create posts from browser.

---

### Article 39 — Series wrap-up
**Goal:** Recap the full journey, point to next steps.  
**Covers:**
- Full journey recap: static → file content → CMS editor → backend → database → mini CMS
- Architecture comparison: beginning vs end of series
- When to use file content vs database
- When to use TinaCMS vs build your own CMS
- Next steps: React, Next.js, Sanity, Strapi
- Resources for further learning

**Code:** No new code. Review the full repo.  
**Outcome:** Readers have a clear mental model of modern web development.

---

## Progress

Part 1: 4/7  
Part 2: 7/12  
Part 3: 0/6  
Part 4: 0/4  
Part 5: 0/4  
Part 6: 0/6  
Total: 11/39  

---

## Astro 6 Breaking Changes — Important Notes

- Use `render(post)` instead of `post.render()`
- Use `post.id` instead of `post.slug`
- Content config file: `src/content.config.ts` not `src/content/config.ts`
- Glob pattern: `loader: glob({ pattern: '**/*.{md,mdx}', base: '...' })`
- Adding new collection → restart dev server or touch content.config.ts
- `Astro.glob()` removed → use `import.meta.glob()`

---

## Tech Stack

- Astro 6.x
- TypeScript
- Plain CSS (article 4) → Tailwind CSS (article 5+)
- MDX
- TinaCMS
- Supabase + PostgreSQL
- Vercel

---

## Principles

- Every article has real code, copy-paste ready, runs immediately
- Every article has a corresponding GitHub commit
- Readers can clone the repo and use it right away
- Compare with WordPress at every important concept
- Never teach too many tools at once
```

Lưu file, commit push:

```bash
git add .
git commit -m "add SERIES-PLAN-EN.md with full English outline"
git push
```