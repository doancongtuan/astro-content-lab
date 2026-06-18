import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  }),
})

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    productName: z.string(),
    rating: z.number(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    verdict: z.string(),
    publishedAt: z.date(),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  }),
})

const compares = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/compares' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    itemA: z.string(),
    itemB: z.string(),
    winner: z.string(),
    verdict: z.string(),
    publishedAt: z.date(),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  }),
})

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    estimatedTime: z.string(),
    publishedAt: z.date(),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  }),
})

export const collections = {
  posts,
  reviews,
  compares,
  guides,
}