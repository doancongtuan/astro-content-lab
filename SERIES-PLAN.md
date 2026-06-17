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

## Part 1 — Astro Foundations (7 bài)

- [x] Bài 1: What is Astro and who is it for?
- [x] Bài 2: Setting up your first Astro project
- [x] Bài 3: Pages, Layouts and Components
- [~] Bài 4: Styling in Astro — Plain CSS first
- [ ] Bài 5: Switch to Tailwind CSS
- [ ] Bài 6: Static Site Generation explained
- [x] Bài 7: Deploy Astro to Vercel

---

## Part 2 — Content with MD/MDX/YAML (12 bài)

- [x] Bài 8: Writing content with Markdown
- [x] Bài 9: Content Collections — the right way to manage content
- [x] Bài 10: Dynamic routes and blog listing page
- [x] Bài 11: MDX — use components inside your content
- [x] Bài 12: Build a review page with Content Collections
- [x] Bài 13: Build a comparison page
- [x] Bài 14: Build a guide page
- [ ] Bài 15: Images in Astro — local images
- [ ] Bài 16: Images in Astro — Cloudinary
- [ ] Bài 17: SEO in Astro
- [ ] Bài 18: Sitemap and robots.txt
- [ ] Bài 19: Build a component library

---

## Part 3 — TinaCMS: Visual Editor (6 bài)

- [ ] Bài 20: Why Astro doesn't have wp-admin
- [ ] Bài 21: Install TinaCMS in Astro
- [ ] Bài 22: Edit frontmatter with TinaCMS
- [ ] Bài 23: Edit MDX body with TinaCMS
- [ ] Bài 24: Create custom MDX blocks in Tina
- [ ] Bài 25: TinaCMS workflow — save, commit, deploy

---

## Part 4 — Astro Backend (4 bài)

- [ ] Bài 26: Does Astro have a backend?
- [ ] Bài 27: Build a contact form
- [ ] Bài 28: Middleware and protected routes
- [ ] Bài 29: Affiliate redirect tracking

---

## Part 5 — Database and Auth (4 bài)

- [ ] Bài 30: From files to database — why and when
- [ ] Bài 31: Connect Astro to Supabase
- [ ] Bài 32: CRUD articles with Supabase
- [ ] Bài 33: Auth with Supabase

---

## Part 6 — Mini Astro CMS (6 bài)

- [ ] Bài 34: Design your mini CMS
- [ ] Bài 35: Build the admin dashboard
- [ ] Bài 36: Markdown editor in the browser
- [ ] Bài 37: Render database content on frontend
- [ ] Bài 38: Deploy Astro SSR
- [ ] Bài 39: Series wrap-up

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

- `render(post)` thay vì `post.render()`
- `post.id` thay vì `post.slug`
- Content config: `src/content.config.ts` không phải `src/content/config.ts`
- Glob pattern: `loader: glob({ pattern: '**/*.{md,mdx}', base: '...' })`
- Thêm collection mới → restart dev server hoặc touch content.config.ts
- `Astro.glob()` đã bị remove → dùng `import.meta.glob()`

---

## Tech Stack

- Astro 6.x
- TypeScript
- CSS thuần (bài 4) → Tailwind CSS (bài 5+)
- MDX
- TinaCMS
- Supabase + PostgreSQL
- Vercel

---

## Principles

- Mỗi bài có code thật, copy paste vào là chạy ngay
- Mỗi bài có GitHub commit tương ứng
- Người đọc clone repo về dùng được luôn
- So sánh với WordPress ở mỗi concept quan trọng
- Không dạy quá nhiều tool cùng lúc