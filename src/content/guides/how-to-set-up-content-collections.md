---
title: How to Set Up Content Collections in Astro 6
description: A step-by-step guide to setting up Content Collections in Astro 6 — with the correct API that most tutorials get wrong.
difficulty: intermediate
estimatedTime: 20 minutes
publishedAt: 2026-06-17T00:00:00Z
heroImage: ../../assets/images/guides/content-collections-2.jpg
heroImageAlt: Vercel import repository screen
category: tutorial
tags: ["astro", "content-collections", "typescript"]
---

## How to Set Up Content Collections in Astro 6

Content Collections are Astro's built-in way to manage structured content — blog posts, reviews, guides — with schema validation and TypeScript support.

This guide uses the Astro 6 API. If you've seen other tutorials using `Astro.glob()` or `post.render()` — those are outdated. Astro 6 changed several things.

## Prerequisites

- A working Astro 6 project
- Basic understanding of TypeScript (just enough to read types)
- A `src/content/` folder

## Step 1: Create the config file

Create `src/content.config.ts` — note the location. It goes in `src/`, not inside `src/content/`.

```typescript
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

export const collections = { posts }
```

## Step 2: Create your content folder

```bash
mkdir src/content/posts
```

## Step 3: Add a Markdown file

Create `src/content/posts/hello-world.md`:

```markdown
---
title: Hello World
description: My first post
publishedAt: 2026-06-17T00:00:00Z
---

This is my first post.
```

## Step 4: Create the listing page

Create `src/pages/blog.astro`:

```astro
---
import { getCollection } from 'astro:content'

const posts = await getCollection('posts')
---

<ul>
  {posts.map((post) => (
    <li>
      <a href={`/blog/${post.id}`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

## Step 5: Create the dynamic route

Create `src/pages/blog/[slug].astro`:

```astro
---
import { getCollection, render } from 'astro:content'

export async function getStaticPaths() {
  const posts = await getCollection('posts')
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }))
}

const { post } = Astro.props
const { Content } = await render(post)
---

<h1>{post.data.title}</h1>
<Content />
```

## Common mistakes

**Wrong config file location:** `src/content/config.ts` no longer works in Astro 6. Use `src/content.config.ts`.

**Using `post.slug`:** Astro 6 uses `post.id` instead.

**Using `post.render()`:** Use `render(post)` imported from `astro:content` instead.

**Collection not loading:** Restart the dev server after adding a new collection. Astro sometimes needs a restart to pick up new collection config.

## Content Collections in VS Code

![content.config.ts in VS Code with Zod schema](../../assets/images/guides/content-collections-2.jpg)

The schema definition gives you TypeScript autocomplete for every field.

![getCollection results in the browser](../../assets/images/guides/content-collections-3.jpg)