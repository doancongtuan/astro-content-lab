import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '../config'

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts')
  const reviews = await getCollection('reviews')
  const compares = await getCollection('compares')
  const guides = await getCollection('guides')

  const lines: string[] = []

  lines.push(`# ${SITE_NAME}`)
  lines.push('')
  lines.push(`> ${SITE_DESCRIPTION}`)
  lines.push('')
  lines.push(
    'This is a demo project documenting a real Astro build, including bugs, fixes, and decisions made along the way. Content below is organized by type.'
  )
  lines.push('')

  if (posts.length > 0) {
    lines.push('## Blog')
    lines.push('')
    for (const post of posts.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())) {
      lines.push(`- [${post.data.title}](${SITE_URL}/blog/${post.id}/): ${post.data.description}`)
    }
    lines.push('')
  }

  if (reviews.length > 0) {
    lines.push('## Reviews')
    lines.push('')
    for (const review of reviews.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())) {
      lines.push(`- [${review.data.title}](${SITE_URL}/reviews/${review.id}/): ${review.data.description}`)
    }
    lines.push('')
  }

  if (compares.length > 0) {
    lines.push('## Comparisons')
    lines.push('')
    for (const compare of compares.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())) {
      lines.push(`- [${compare.data.title}](${SITE_URL}/compares/${compare.id}/): ${compare.data.description}`)
    }
    lines.push('')
  }

  if (guides.length > 0) {
    lines.push('## Guides')
    lines.push('')
    for (const guide of guides.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())) {
      lines.push(`- [${guide.data.title}](${SITE_URL}/guides/${guide.id}/): ${guide.data.description}`)
    }
    lines.push('')
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}