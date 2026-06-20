import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { SITE_URL } from '../config'

interface SitemapEntry {
  url: string
  lastmod: string
  changefreq: string
  priority: number
}

export const GET: APIRoute = async () => {
  const entries: SitemapEntry[] = []
  const today = new Date().toISOString()

  // Homepage — highest priority
  entries.push({
    url: SITE_URL + '/',
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0,
  })

  // About page
  entries.push({
    url: `${SITE_URL}/about/`,
    lastmod: today,
    changefreq: 'yearly',
    priority: 0.5,
  })

  // Listing pages
  const listingPages = ['blog', 'reviews', 'compares', 'guides']
  for (const page of listingPages) {
    entries.push({
      url: `${SITE_URL}/${page}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    })
  }

  // Blog posts
  const posts = await getCollection('posts')
  for (const post of posts) {
    entries.push({
      url: `${SITE_URL}/blog/${post.id}/`,
      lastmod: post.data.publishedAt.toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    })
  }

  // Reviews
  const reviews = await getCollection('reviews')
  for (const review of reviews) {
    entries.push({
      url: `${SITE_URL}/reviews/${review.id}/`,
      lastmod: review.data.publishedAt.toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    })
  }

  // Compares
  const compares = await getCollection('compares')
  for (const compare of compares) {
    entries.push({
      url: `${SITE_URL}/compares/${compare.id}/`,
      lastmod: compare.data.publishedAt.toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    })
  }

  // Guides
  const guides = await getCollection('guides')
  for (const guide of guides) {
    entries.push({
      url: `${SITE_URL}/guides/${guide.id}/`,
      lastmod: guide.data.publishedAt.toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    })
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
