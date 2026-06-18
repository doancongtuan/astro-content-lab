---
title: What is a Static Site? And What is Jamstack?
description: Static sites, SSG, and Jamstack explained for WordPress users — what they mean, why they matter, and how Astro fits in.
publishedAt: 2026-06-17T00:00:00Z
heroImageCloudinary: https://res.cloudinary.com/di9xkgxd8/image/upload/v1781786068/hello-world_cjorap.jpg
heroImageAlt: Static site generation explained
---

If you've only ever built sites on WordPress, the term "static site" probably sounds like a step backward. No database. No admin panel. No dynamic content. Just... files?

That's exactly right. And it's more powerful than it sounds.

## What is a static site?

A static site is a website made of pre-built HTML files. When someone visits a page, the server sends a file directly to their browser. No database query. No PHP execution. No assembly required.

Compare that to WordPress:

**WordPress (dynamic):**

```bash
Visitor requests /blog/my-post

→ Server runs PHP

→ PHP queries MySQL database

→ Database returns post data

→ PHP assembles HTML from template + data

→ HTML sent to browser
```

That's it. The HTML was already built. The server just delivers it.

## Why does this matter?

**Speed.** There's nothing to compute at request time. A pre-built HTML file served from a CDN loads in milliseconds. WordPress without caching often takes 2-5 seconds.

**Security.** No database means no SQL injection. No PHP means no remote code execution. No login page means no brute-force attacks. The attack surface is nearly zero.

**Cost.** Static files can be hosted on Vercel, Netlify, or Cloudflare Pages for free. No PHP hosting required. No database server to pay for.

**Reliability.** CDNs are built to handle massive traffic. A static site can handle a traffic spike that would take down a WordPress server.

## The obvious question: what about dynamic content?

This is the real limitation people worry about.

Static sites are built at deploy time. If your content changes, you rebuild and redeploy. For a blog that publishes a few times a week, that's completely fine — a build takes 10-30 seconds.

But what about user logins? Comments? Search? Real-time data?

This is where **Jamstack** comes in.

## What is Jamstack?

Jamstack is an architecture pattern, not a specific tool or framework.

The name originally stood for **J**avaScript, **A**PIs, **M**arkup — but the core idea is simpler than that:

> Pre-render as much as possible. Handle dynamic needs with APIs and JavaScript in the browser.

Instead of one monolithic server doing everything (like WordPress), Jamstack sites break the problem apart:

- **Static HTML** for content that doesn't change often
- **JavaScript** for interactivity in the browser
- **APIs** for dynamic data (search, forms, auth, e-commerce)

The result is a site that's fast and secure by default, with dynamic capabilities added only where needed.

## A real example

A typical content site built with Jamstack might look like this:

| Feature | How it's handled |
|---|---|
| Blog posts | Static HTML, built at deploy time |
| Contact form | JavaScript + Formspree API |
| Search | JavaScript + Algolia or Pagefind |
| Comments | JavaScript + Disqus or Giscus |
| Auth | JavaScript + Auth0 or Supabase |
| Newsletter | JavaScript + ConvertKit API |

The HTML is static. The dynamic parts use external services via API. The server never assembles a page at runtime.

## How Astro fits in

Astro is a Jamstack framework. It pre-renders pages to static HTML by default — but it also supports server-side rendering when you need it.

This makes Astro flexible: start fully static, add dynamic pages only when the project requires them.

```bash
Simple blog → 100% static

Review site + contact form → static + one server function

Mini CMS + auth → static + SSR for admin routes
```

You don't have to commit to fully static forever. Astro grows with the project.

## What about WordPress?

WordPress is not Jamstack — it's a traditional server-rendered CMS. That's not a criticism; it's a design choice with real advantages.

WordPress's dynamic rendering is what makes the admin dashboard, user accounts, WooCommerce, and real-time content editing possible. Those features require a running server and database.

The tradeoff: every page request has server overhead. WordPress can be optimized with caching to behave *like* a static site for most visitors — but it's always working harder than a truly static site.

If your site doesn't need a live admin dashboard or real-time features, static + Jamstack gives you better performance with less infrastructure to maintain.

## The practical takeaway

Static sites are not a step backward. They're a different architecture optimized for different priorities.

For content sites — blogs, review sites, affiliate sites, documentation — static generation is almost always the better choice: faster, more secure, cheaper to run.

For sites with complex user interactions, WooCommerce stores, or non-technical editors who need a live dashboard — WordPress is still the right tool.

The best developers know both and choose based on the project, not ideology.