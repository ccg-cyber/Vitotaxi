import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { LangProvider } from '@/lib/i18n'
import type { Meta, Route } from '@/lib/seo'
import { otherPath } from '@/lib/seo'
import { Cursor } from './Cursor'
import { Footer } from './Footer'
import { Loader } from './Loader'
import { Nav } from './Nav'
import { SmoothScroll } from './SmoothScroll'
import { WhatsAppFab } from './WhatsAppFab'

/* Keeps <head> right when moving between pages without a reload. The first paint comes prerendered. */
function useHead(meta: Meta) {
  useEffect(() => {
    const d = document
    d.title = meta.title
    d.documentElement.lang = meta.lang === 'ar' ? 'ar-LB' : 'en'
    d.documentElement.dir = meta.dir
    d.querySelector('meta[name=description]')?.setAttribute('content', meta.description)
    if (meta.canonical) d.querySelector('link[rel=canonical]')?.setAttribute('href', meta.canonical)
  }, [meta])
}

export function Layout({ route, meta, children }: { route: Route; meta: Meta; children: ReactNode }) {
  useHead(meta)
  const { pathname, hash } = useLocation()
  useEffect(() => { if (!hash) window.scrollTo(0, 0) }, [pathname, hash])
  const onHome = route.kind === 'home'
  return (
    <LangProvider lang={route.lang}>
      <a href="#main" className="fixed start-3 -top-20 z-300 rounded-xl bg-gold px-4 py-2.5 font-extrabold text-gold-ink transition-[top] focus:top-3">{meta.lang === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
      <Loader />
      <SmoothScroll />
      <Nav onHome={onHome} otherHref={otherPath(route)} />
      <main id="main">{children}</main>
      <Footer onHome={onHome} />
      <WhatsAppFab />
      <Cursor />
    </LangProvider>
  )
}
