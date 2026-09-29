import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { headHtml, metaFor, resolve } from './lib/seo'

/* Used only at build time by scripts/prerender.mjs to turn each route into static HTML. */
export function render(url: string) {
  const route = resolve(url)
  const meta = metaFor(route)
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head: headHtml(meta, route.kind === 'home'), lang: meta.lang === 'ar' ? 'ar-LB' : 'en', dir: meta.dir }
}

export { allPaths } from './lib/seo'
export { AREAS, AREA_IMG, CFG } from './content/data'
