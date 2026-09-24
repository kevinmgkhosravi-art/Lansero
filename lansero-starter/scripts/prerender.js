// Renders every route to static HTML after `vite build` and the SSR build.
import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const serverDir = resolve(root, 'dist-server')

const { render, ROUTES, NOT_FOUND, SITE_URL } = await import(
  new URL(`file:///${resolve(serverDir, 'entry-server.js').replace(/\\/g, '/')}`).href
)

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function setAttr(html, pattern, value) {
  if (!pattern.test(html)) throw new Error(`Template is missing ${pattern}`)
  return html.replace(pattern, (_, before, after) => `${before}${escape(value)}${after}`)
}

function buildPage(meta, url) {
  const pageUrl = SITE_URL + meta.path
  let html = template.replace('<!--app-html-->', render(url))
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(meta.title)}</title>`)
  html = setAttr(html, /(<meta name="description" content=")[^"]*(")/, meta.description)
  html = setAttr(html, /(<meta name="robots" content=")[^"]*(")/, meta.noindex ? 'noindex' : 'index, follow')
  html = setAttr(html, /(<meta property="og:title" content=")[^"]*(")/, meta.title)
  html = setAttr(html, /(<meta property="og:description" content=")[^"]*(")/, meta.description)
  html = setAttr(html, /(<meta property="og:url" content=")[^"]*(")/, pageUrl)
  html = meta.noindex
    ? html.replace(/\s*<link rel="canonical"[^>]*>/, '')
    : setAttr(html, /(<link rel="canonical" href=")[^"]*(")/, pageUrl)
  return html
}

const outFile = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`)

for (const meta of ROUTES) {
  const file = resolve(dist, outFile(meta.path))
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, buildPage(meta, meta.path))
  console.log(`prerendered ${meta.path} -> ${outFile(meta.path)}`)
}

writeFileSync(resolve(dist, '404.html'), buildPage(NOT_FOUND, '/sidan-finns-inte'))
console.log('prerendered 404 -> 404.html')

rmSync(serverDir, { recursive: true, force: true })
