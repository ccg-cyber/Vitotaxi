// Turns the built React app into static HTML, one file per route, so every page is fully readable by
// search engines and paints instantly. React then hydrates it in the browser.
// Runs after `vite build` and `vite build --ssr` (see `npm run build`).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssr = path.join(root, 'dist-ssr')
const entry = fs.readdirSync(ssr).find(f => /^entry-server\.(m?js)$/.test(f))
const { render, allPaths, AREAS, AREA_IMG, CFG } = await import(pathToFileURL(path.join(ssr, entry)).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

function page(url) {
  const { html, head, lang, dir } = render(url)
  return template
    .replace('<html lang="en" dir="ltr">', `<html lang="${lang}" dir="${dir}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)
}

const write = (rel, text) => {
  const f = path.join(dist, rel)
  fs.mkdirSync(path.dirname(f), { recursive: true })
  fs.writeFileSync(f, text)
  console.log('  prerendered', rel)
}

for (const url of allPaths()) write(path.join(url, 'index.html'), page(url))
write('404.html', page('/404-not-found/'))

// sitemap.xml with language alternates and the page's lead photo
const site = CFG.site
const rows = []
for (const [slug, pr] of [['', '1.0'], ...AREAS.map(a => [a.slug, '0.8'])]) {
  for (const lang of ['en', 'ar']) {
    const u = (l) => `${site}/${l === 'ar' ? 'ar/' : ''}${slug ? slug + '/' : ''}`
    rows.push(`  <url>
    <loc>${u(lang)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${u('en')}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${u('ar')}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${u('en')}"/>
    <image:image><image:loc>${site}/img/${AREA_IMG[slug] ?? 'vito-night'}.webp</image:loc></image:image>
    <changefreq>monthly</changefreq>
    <priority>${lang === 'en' ? pr : slug ? '0.7' : '0.9'}</priority>
  </url>`)
  }
}
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${rows.join('\n')}
</urlset>
`)
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)
write('site.webmanifest', JSON.stringify({
  name: CFG.name, short_name: 'Vito Taxi', start_url: '/', display: 'standalone', background_color: '#060607', theme_color: '#060607', lang: 'en',
  icons: [{ src: '/icon-180.png', sizes: '180x180', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }],
}, null, 2) + '\n')
write('vito-taxi.vcf', ['BEGIN:VCARD', 'VERSION:3.0', `FN:${CFG.name}`, `N:;${CFG.name};;;`, `ORG:${CFG.name}`, `TEL;TYPE=CELL,VOICE:${CFG.tel}`,
  'ADR;TYPE=WORK:;;Antelias Road;Antelias;Mount Lebanon;;Lebanon', `URL:${site}/`, `X-SOCIALPROFILE;TYPE=instagram:${CFG.instagram}`,
  `NOTE:Your comfort, our priority. 24/7 Mercedes Vito taxi — airport transfers, daily rides, trips and events. WhatsApp ${CFG.tel_intl}`,
  'END:VCARD', ''].join('\r\n'))

fs.rmSync(ssr, { recursive: true, force: true })
console.log('Done: dist/ is ready to deploy.')
