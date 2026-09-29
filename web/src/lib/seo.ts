import { AREAS, AREA_FAQ, AREA_IMG, CFG, T, type Area, type Lang } from '@/content/data'

export type Route =
  | { kind: 'home'; lang: Lang }
  | { kind: 'area'; lang: Lang; area: Area }
  | { kind: 'credits'; lang: Lang }
  | { kind: 'notfound'; lang: Lang }

export const BIZ_ID = CFG.site + '/#business'

export function path(lang: Lang, slug = '') {
  return '/' + (lang === 'ar' ? 'ar/' : '') + (slug ? slug + '/' : '')
}
export const abs = (lang: Lang, slug = '') => CFG.site + path(lang, slug)

export function waLink(text: string) {
  return 'https://wa.me/' + CFG.wa + '?text=' + encodeURIComponent(text)
}

/* Strip the *gold* markers for places that need plain text (titles, schema). */
export const plain = (s: string) => s.replace(/\*/g, '')

export function resolve(pathname: string): Route {
  const parts = pathname.split('/').filter(Boolean)
  const lang: Lang = parts[0] === 'ar' ? 'ar' : 'en'
  if (lang === 'ar') parts.shift()
  if (parts.length === 0) return { kind: 'home', lang }
  if (parts.length === 1 && parts[0] === 'credits') return { kind: 'credits', lang }
  const area = parts.length === 1 ? AREAS.find(a => a.slug === parts[0]) : undefined
  if (area) return { kind: 'area', lang, area }
  return { kind: 'notfound', lang }
}

export function allPaths() {
  const out: string[] = []
  for (const l of ['en', 'ar'] as Lang[]) {
    out.push(path(l))
    for (const a of AREAS) out.push(path(l, a.slug))
    out.push(path(l, 'credits'))
  }
  return out
}

function slugOf(r: Route) {
  return r.kind === 'area' ? r.area.slug : r.kind === 'credits' ? 'credits' : ''
}

export function otherPath(r: Route) {
  const other: Lang = r.lang === 'en' ? 'ar' : 'en'
  return r.kind === 'notfound' ? path(other) : path(other, slugOf(r))
}

export interface Meta {
  lang: Lang
  dir: 'ltr' | 'rtl'
  title: string
  description: string
  canonical?: string
  alternates?: { en: string; ar: string }
  robots: string
  image: string
  preload?: string
  jsonld: object[]
}

function business() {
  return {
    '@type': 'LocalBusiness', '@id': BIZ_ID,
    name: CFG.name, alternateName: ['Vito Taxi', 'ڤيتو تاكسي', 'Vito Taxi By Charbel'],
    description: T.en.foot_about, slogan: 'Your comfort, our priority',
    url: CFG.site + '/', telephone: CFG.tel,
    image: [CFG.site + '/og.jpg', CFG.site + '/img/vito-night.webp'], logo: CFG.site + '/icon-512.png',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', streetAddress: 'Antelias Road', addressLocality: 'Antelias', addressRegion: 'Mount Lebanon', addressCountry: 'LB' },
    geo: { '@type': 'GeoCoordinates', latitude: CFG.lat, longitude: CFG.lng },
    hasMap: CFG.maps,
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    areaServed: [{ '@type': 'Country', name: 'Lebanon' }, ...AREAS.filter(a => a.slug !== 'lebanon-private-driver').map(a => ({ '@type': 'Place', name: a.en }))],
    sameAs: [CFG.instagram, CFG.facebook, CFG.maps],
    contactPoint: { '@type': 'ContactPoint', telephone: CFG.tel, contactType: 'reservations', availableLanguage: ['English', 'Arabic', 'French'] },
    founder: { '@type': 'Person', name: 'Charbel' },
  }
}

function service(lang: Lang, area?: Area) {
  return {
    '@type': 'TaxiService', provider: { '@id': BIZ_ID }, serviceType: 'Private taxi and airport transfers',
    name: CFG.name + (area ? ' — ' + area[lang] : ''),
    areaServed: area ? { '@type': area.place, name: area.en } : { '@type': 'Country', name: 'Lebanon' },
    availableChannel: { '@type': 'ServiceChannel', servicePhone: { '@type': 'ContactPoint', telephone: CFG.tel }, serviceUrl: waLink(T[lang].wa_hello) },
    inLanguage: lang,
  }
}

const faq = (pairs: string[][]) => ({
  '@type': 'FAQPage',
  mainEntity: pairs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
})

export function metaFor(r: Route): Meta {
  const t = T[r.lang]
  const base = { lang: r.lang, dir: (r.lang === 'ar' ? 'rtl' : 'ltr') as 'ltr' | 'rtl', image: CFG.site + '/og.jpg' }
  const alts = (slug: string) => ({ en: abs('en', slug), ar: abs('ar', slug) })
  const website = { '@type': 'WebSite', '@id': CFG.site + '/#website', url: CFG.site + '/', name: CFG.name, inLanguage: ['en', 'ar'], publisher: { '@id': BIZ_ID } }
  if (r.kind === 'home') {
    return {
      ...base, title: t.title, description: t.desc, canonical: abs(r.lang), alternates: alts(''),
      robots: 'index,follow,max-image-preview:large', preload: 'vito-night',
      jsonld: [business(), service(r.lang), website,
        { '@type': 'WebPage', '@id': abs(r.lang) + '#webpage', url: abs(r.lang), name: t.title, isPartOf: { '@id': CFG.site + '/#website' }, about: { '@id': BIZ_ID }, inLanguage: r.lang, primaryImageOfPage: CFG.site + '/img/vito-night.webp' },
        faq(t.faq)],
    }
  }
  if (r.kind === 'area') {
    const a = r.area, u = abs(r.lang, a.slug)
    return {
      ...base, title: a[`${r.lang}_title`], description: a[`${r.lang}_desc`], canonical: u, alternates: alts(a.slug),
      robots: 'index,follow,max-image-preview:large', preload: AREA_IMG[a.slug],
      jsonld: [business(), service(r.lang, a),
        { '@type': 'WebPage', '@id': u + '#webpage', url: u, name: a[`${r.lang}_title`], isPartOf: { '@id': CFG.site + '/#website' }, about: { '@id': BIZ_ID }, inLanguage: r.lang, primaryImageOfPage: `${CFG.site}/img/${AREA_IMG[a.slug]}.webp` },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.home, item: abs(r.lang) },
          { '@type': 'ListItem', position: 2, name: a[r.lang], item: u }] },
        faq(AREA_FAQ[a.slug][r.lang])],
    }
  }
  if (r.kind === 'credits') {
    return { ...base, title: (r.lang === 'ar' ? 'حقوق الصور — ' : 'Photo credits — ') + CFG.name, description: t.desc,
      canonical: abs(r.lang, 'credits'), alternates: alts('credits'), robots: 'noindex,follow', jsonld: [] }
  }
  return { ...base, title: t.nf_title, description: t.desc, robots: 'noindex', jsonld: [] }
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/* The <head> contents written into every prerendered page. */
export function headHtml(m: Meta, isHome: boolean) {
  const t = T[m.lang]
  const other = m.lang === 'en' ? 'ar' : 'en'
  const ogTitle = isHome ? t.og_title : m.title
  const L: string[] = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}">`,
    `<meta name="robots" content="${m.robots}">`,
  ]
  if (m.canonical && m.alternates) {
    L.push(`<link rel="canonical" href="${m.canonical}">`,
      `<link rel="alternate" hreflang="en" href="${m.alternates.en}">`,
      `<link rel="alternate" hreflang="ar" href="${m.alternates.ar}">`,
      `<link rel="alternate" hreflang="x-default" href="${m.alternates.en}">`)
  }
  if (m.preload) L.push(`<link rel="preload" as="image" href="/img/${m.preload}.webp" fetchpriority="high">`)
  L.push(
    `<link rel="preload" href="/fonts/${m.lang === 'ar' ? 'plex-arabic-700' : 'instrument-serif'}.woff2" as="font" type="font/woff2" crossorigin>`,
    `<link rel="preload" href="/fonts/${m.lang === 'ar' ? 'plex-arabic-400' : 'manrope'}.woff2" as="font" type="font/woff2" crossorigin>`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(CFG.name)}">`,
    `<meta property="og:locale" content="${t.locale}">`,
    `<meta property="og:locale:alternate" content="${T[other].locale}">`,
    ...(m.canonical ? [`<meta property="og:url" content="${m.canonical}">`] : []),
    `<meta property="og:title" content="${esc(ogTitle)}">`,
    `<meta property="og:description" content="${esc(m.description)}">`,
    `<meta property="og:image" content="${m.image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(CFG.name)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(ogTitle)}">`,
    `<meta name="twitter:description" content="${esc(m.description)}">`,
    `<meta name="twitter:image" content="${m.image}">`,
  )
  if (m.jsonld.length) L.push(`<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': m.jsonld }).replace(/</g, '\\u003c')}</script>`)
  return L.join('\n')
}
