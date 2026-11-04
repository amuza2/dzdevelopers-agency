import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  // Canonical origin. Used for canonical links, Open Graph URLs and the sitemap.
  // The bare domain redirects here, so every page advertises exactly one URL.
  site: 'https://agency.dzdevelopers.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
