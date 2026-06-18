---
title: How to Deploy Astro to Vercel
description: Step by step guide to deploying your Astro site to Vercel — from GitHub repo to live URL in under 5 minutes.
difficulty: beginner
estimatedTime: 15 minutes
publishedAt: 2026-06-17T00:00:00Z
---

## How to Deploy Astro to Vercel

Vercel is the easiest way to get an Astro site live. It connects to your GitHub repo, builds automatically on every push, and gives you a live URL on the free tier.

This guide assumes you already have an Astro project pushed to GitHub. If not, do that first.

## Prerequisites

- An Astro project on GitHub
- A free Vercel account (sign up at vercel.com)
- No server knowledge required

## Step 1: Create a Vercel account

Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.

Using GitHub to sign in is important — it lets Vercel access your repos directly without extra configuration.

## Step 2: Import your GitHub repo

From the Vercel dashboard, click **Add New Project**.

Vercel will show your GitHub repos. Find `astro-content-lab` (or whatever your repo is named) and click **Import**.

## Step 3: Configure the project

Vercel detects Astro automatically. You should see:

- **Framework preset:** Astro
- **Build command:** `astro build`
- **Output directory:** `dist`

Do not change these. Vercel has built-in support for Astro and sets everything correctly.

If you have environment variables (`.env` file), add them here under **Environment Variables** before deploying.

## Step 4: Deploy

Click **Deploy**.

Vercel runs `npm install` and `astro build`, then uploads the output to their CDN. The first deploy takes about 30-60 seconds.

When it finishes, you get a live URL like `astro-content-lab.vercel.app`.

## Step 5: Test the live site

Open the URL and check:

- Home page loads correctly
- Navigation links work
- Blog posts render
- No 404 errors on known pages

If something looks wrong, check the build logs in the Vercel dashboard — they show the exact error.

## Auto-deploy on every push

From this point forward, every `git push` to your `main` branch triggers a new deploy automatically.

The workflow becomes:

```bash
# Make changes locally
git add .
git commit -m "update content"
git push
# Vercel builds and deploys automatically
```

No manual steps. No FTP. No SSH. Push code, site updates.

## Custom domain (optional)

To use your own domain instead of `your-project.vercel.app`:

1. Go to your project in Vercel dashboard
2. Click **Settings → Domains**
3. Add your domain
4. Update your domain's DNS records to point to Vercel

Vercel provides the exact DNS values to add. SSL certificate is provisioned automatically.

## Troubleshooting common issues

**Build fails with "command not found"**
Check that your `package.json` has the correct build script. It should be `astro build`.

**Pages return 404 after deploy**
Check that your routes match what Astro generates. Dynamic routes need `getStaticPaths()` to work correctly on static hosting.

**Environment variables not working**
Variables in `.env` are not automatically available on Vercel. Add them manually in the Vercel dashboard under **Settings → Environment Variables**.

**Build succeeds but site looks broken**
Check the browser console for errors. Often a missing asset path or incorrect URL causes visual issues that don't show up in the build log.

## What about other hosting options?

Vercel is the easiest for Astro, but not the only option:

| Platform | Free tier | Best for |
|---|---|---|
| Vercel | Yes | Astro static + SSR |
| Netlify | Yes | Astro static |
| Cloudflare Pages | Yes | Astro static, global edge |
| GitHub Pages | Yes | Static only, manual setup |
| VPS (Vultr, DigitalOcean) | No | Full control, SSR, multiple sites |

For most content sites, Vercel's free tier is more than enough. For Astro SSR or multiple projects on one server, a VPS gives you more control at a predictable cost.