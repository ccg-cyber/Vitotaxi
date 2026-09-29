import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { Layout } from '@/components/layout/Layout'
import { metaFor, resolve } from '@/lib/seo'
import AreaPage from '@/pages/AreaPage'
import Credits from '@/pages/Credits'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

/* One route table for the browser and the prerenderer: /, /ar/, /<area>/, /ar/<area>/, /credits/, /ar/credits/. */
export default function App() {
  const { pathname } = useLocation()
  const route = useMemo(() => resolve(pathname), [pathname])
  const meta = useMemo(() => metaFor(route), [route])
  return (
    <Layout route={route} meta={meta}>
      {route.kind === 'home' && <Home />}
      {route.kind === 'area' && <AreaPage key={route.area.slug} area={route.area} />}
      {route.kind === 'credits' && <Credits />}
      {route.kind === 'notfound' && <NotFound />}
    </Layout>
  )
}
