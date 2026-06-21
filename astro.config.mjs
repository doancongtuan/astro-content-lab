// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { unified } from '@astrojs/markdown-remark';
import { visit } from 'unist-util-visit';
import { SITE_URL } from './src/config';

function rehypeGoLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'a' &&
        typeof node.properties?.href === 'string' &&
        node.properties.href.startsWith('/go/')
      ) {
        node.properties.target = '_blank';
        node.properties.rel = ['sponsored', 'nofollow'];
      }
    });
  };
}

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx()],
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeGoLinks],
    }),
  },
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel()
});