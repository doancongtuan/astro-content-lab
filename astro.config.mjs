// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://astro-content-lab.vercel.app',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});