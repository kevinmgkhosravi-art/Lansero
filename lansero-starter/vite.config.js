import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ROUTES } from './src/routes.js'
import { SITE_URL } from './src/siteConfig.js'

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = ROUTES.map(({ path, priority }) => [
    '  <url>',
    `    <loc>${SITE_URL}${path}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    '  </url>',
  ].join('\n'))

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}

function buildRobots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
}

function seoFiles() {
  const files = {
    'sitemap.xml': { type: 'application/xml', build: buildSitemap },
    'robots.txt': { type: 'text/plain', build: buildRobots },
  }

  return {
    name: 'seo-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = files[req.url?.slice(1)]
        if (!file) return next()
        res.setHeader('Content-Type', `${file.type}; charset=utf-8`)
        res.end(file.build())
      })
    },
    generateBundle() {
      for (const [fileName, file] of Object.entries(files)) {
        this.emitFile({ type: 'asset', fileName, source: file.build() })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), seoFiles()],
  server: {
    proxy: { '/api': 'http://localhost:8787' },
  },
})
