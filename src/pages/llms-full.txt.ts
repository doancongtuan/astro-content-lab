import type { APIRoute } from 'astro'
import { getCollection, render } from 'astro:content'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '../config'

async function renderToText(entry: any): Promise<string> {
  const { Content } = await render(entry)
  // Astro Content components render to HTML; for llms-full.txt we use
  // the raw frontmatter fields instead of executing the component,
  // since plain text is what AI crawlers actually want here.
  return entry.body ?? ''
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts')
  const reviews = await getCollection('reviews')
  const compares = await getCollection('compares')
  const guides = await getCollection('guides')

  const sections: string[] = []

  sections.push(`# ${SITE_NAME} — Full Content Export`)
  sections.push('')
  sections.push(`> ${SITE_DESCRIPTION}`)
  sections.push('')
  sections.push('This file contains the full text of every page on this site, for AI systems that need complete content rather than summaries.')
  sections.push('')
  sections.push('---')
  sections.push('')

  const allEntries = [
    ...posts.map((p) => ({ ...p, type: 'Blog', path: 'blog' })),
    ...reviews.map((r) => ({ ...r, type: 'Review', path: 'reviews' })),
    ...compares.map((c) => ({ ...c, type: 'Comparison', path: 'compares' })),
    ...guides.map((g) => ({ ...g, type: 'Guide', path: 'guides' })),
  ]

  for (const entry of allEntries) {
    sections.push(`## ${entry.data.title}`)
    sections.push('')
    sections.push(`**Type:** ${entry.type}`)
    sections.push(`**URL:** ${SITE_URL}/${entry.path}/${entry.id}/`)
    sections.push(`**Published:** ${entry.data.publishedAt.toISOString().split('T')[0]}`)
    sections.push('')
    sections.push(entry.data.description)
    sections.push('')
    sections.push(entry.body ?? '')
    sections.push('')
    sections.push('---')
    sections.push('')
  }

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}