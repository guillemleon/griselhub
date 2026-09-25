// Build-time prerender: turns the client build (dist/) into one real HTML file
// per route, each with its own <title>, description, canonical URL, social
// tags and JSON-LD, plus the rendered page content — so crawlers and link
// previews see the page without running JavaScript. Also writes 404.html and
// sitemap.xml.
//
// Files are flat (privacy.html, not privacy/index.html): Cloudflare Pages
// serves /privacy from privacy.html with no trailing-slash redirect, keeping
// the URLs already registered in App Store Connect unchanged.
//
// Runs after `vite build` and `vite build --ssr src/entry-server.jsx`.

import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)
const { PAGES, NOT_FOUND, SITE_URL, structuredData } = await import(
  pathToFileURL(resolve(root, 'src/seo.js')).href
)

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const OG_IMAGE = `${SITE_URL}/og-image.png`

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function head({ title, description }, url, { noindex = false, jsonLd = null } = {}) {
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    noindex
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="griselhub" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="griselhub — independent app studio" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ]
  if (jsonLd) {
    // "<" escaped so the JSON can never close the <script> element early
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
    )
  }
  return tags.join('\n    ')
}

function page(route, meta, opts) {
  const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`
  const html = template
    .replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, head(meta, url, opts))
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
  if (html === template) throw new Error(`prerender: template markers not found for ${route}`)
  return html
}

const { APPS } = await import(pathToFileURL(resolve(root, 'src/apps.js')).href)
const files = {
  '/': 'index.html',
  ...Object.fromEntries(APPS.map((a) => [`/${a.slug}`, `${a.slug}.html`])),
  '/privacy': 'privacy.html',
  '/terms': 'terms.html',
  '/support': 'support.html',
}

for (const [route, file] of Object.entries(files)) {
  writeFileSync(resolve(dist, file), page(route, PAGES[route], { jsonLd: structuredData(route) }))
  console.log(`  ✓ ${route.padEnd(9)} → dist/${file}`)
}

// Real 404 page: Cloudflare Pages serves it with status 404 for unknown URLs.
writeFileSync(resolve(dist, '404.html'), page('/__not-found__', NOT_FOUND, { noindex: true }))
console.log('  ✓ 404       → dist/404.html')

// sitemap.xml
const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(files)
  .map((r) => {
    const loc = r === '/' ? `${SITE_URL}/` : `${SITE_URL}${r}`
    const priority = r === '/' ? '1.0' : APPS.some((a) => r === `/${a.slug}`) ? '0.9' : r === '/support' ? '0.6' : '0.4'
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
  })
  .join('\n')}
</urlset>
`
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)
console.log('  ✓ sitemap   → dist/sitemap.xml')

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
