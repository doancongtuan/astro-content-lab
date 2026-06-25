import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const answerBoxSchema = z.object({
  question: z.string(),
  shortAnswer: z.string(),
}).optional()

const faqSchema = z.array(
  z.object({
    question: z.string(),
    answer: z.string(),
  })
).optional()

const categorySchema = z.enum([
  'tutorial',
  'opinion',
  'deep-dive',
  'news',
  'case-study',
]).optional()

const tagsSchema = z.array(z.string()).optional()

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
    heroImageCloudinary: z.string().optional(),
    category: categorySchema,
    tags: tagsSchema,
    answerBox: answerBoxSchema,
    faq: faqSchema,
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
    category: categorySchema,
    tags: tagsSchema,
    answerBox: answerBoxSchema,
    faq: faqSchema,
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
    category: categorySchema,
    tags: tagsSchema,
    answerBox: answerBoxSchema,
    faq: faqSchema,
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
    category: categorySchema,
    tags: tagsSchema,
    answerBox: answerBoxSchema,
    faq: faqSchema,
  }),
})

const affiliates = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/affiliates' }),
  schema: z.object({
    slug: z.string(),
    affiliateUrl: z.string().url(),
  }),
})

export const collections = {
  posts,
  reviews,
  compares,
  guides,
  affiliates,
}