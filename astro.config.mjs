// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// User site on GitHub Pages: served from the root, so `base` stays '/'.
export default defineConfig({
  site: 'https://EstebanBacuilima.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-EC', en: 'en' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
