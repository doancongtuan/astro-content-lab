import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
  }),
})

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    productName: z.string(),
    rating: z.number(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    verdict: z.string(),
    publishedAt: z.date(),
  }),
})

const compares = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/compares' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    itemA: z.string(),
    itemB: z.string(),
    winner: z.string(),
    verdict: z.string(),
    publishedAt: z.date(),
  }),
})

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    estimatedTime: z.string(),
    publishedAt: z.date(),
  }),
})

export const collections = {
  posts,
  reviews,
  compares,
  guides,
}