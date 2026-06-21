// src/pages/robots.txt.ts
import type { APIRoute } from 'astro'
import { SITE_URL } from '../config'

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /go/

Sitemap: ${SITE_URL}/sitemap.xml`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  })
}