import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Menu, Phone } from 'lucide-react'
import { CFG } from '@/content/data'
import { Brand } from '@/components/Logo'
import { WhatsAppIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Nav({ onHome, otherHref }: { onHome: boolean; otherHref: string }) {
  const { t, home, ar } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40)
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  const href = (h: string) => (onHome ? h : home + h)
  return (
    <header className="pointer-events-none fixed inset-x-0 top-[calc(14px+env(safe-area-inset-top,0px))] z-100">
      <div className={cn('nav-pill on-dark glass pointer-events-auto mx-auto flex items-center justify-between gap-3 rounded-full border border-line-2 py-2 ps-4.5 pe-2 shadow-[0_20px_50px_-25px_rgba(0,0,0,.9)] transition-all duration-700 ease-lux',
        scrolled ? 'w-[min(1080px,calc(100%-24px))] bg-[rgba(10,10,12,.82)]' : 'w-[min(1180px,calc(100%-24px))]')}>
        <Link to={home} aria-label={CFG.name}><Brand /></Link>
        <nav className="hidden gap-0.5 lg:flex" aria-label="Main">
          {t.nav.map(([h, l]) => (
            <a key={h} href={href(h)} className="rounded-full px-3.5 py-2.5 text-[.9rem] font-semibold text-muted-foreground transition-colors hover:bg-white/6 hover:text-ivory">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <a href={otherHref} hrefLang={ar ? 'en' : 'ar'} lang={ar ? 'en' : 'ar'} aria-label={t.other_name}
            className="grid h-11 min-w-11 place-items-center rounded-full border border-line-2 px-3 text-[.88rem] font-bold text-ivory transition-colors hover:border-gold">{t.other_label}</a>
          <ThemeToggle />
          <Button asChild variant="glass" size="pill" className="hidden lg:inline-flex">
            <a href={`tel:${CFG.tel}`}><Phone /><span dir="ltr">{CFG.tel_show}</span></a>
          </Button>
          <Button asChild variant="gold" size="pill" className="max-sm:hidden">
            <a href={waLink(t.wa_hello)} target="_blank" rel="noopener"><WhatsAppIcon /><span className="max-[420px]:hidden">{t.nav[2][1]}</span></a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="grid size-11 place-items-center rounded-full border border-line-2 text-ivory lg:hidden" aria-label="Menu"><Menu className="size-5" /></button>
            </SheetTrigger>
            <SheetContent side={ar ? 'left' : 'right'} className="on-dark w-[86vw] max-w-sm border-line-2 bg-ink/95 p-6 backdrop-blur-xl">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Brand className="mb-10" />
              <nav className="grid gap-1" aria-label="Mobile">
                {t.nav.map(([h, l]) => (
                  <a key={h} href={href(h)} onClick={() => setOpen(false)} className="display border-b border-line py-4 text-4xl text-ivory">{l}</a>
                ))}
              </nav>
              <div className="mt-auto grid gap-2.5 pt-8">
                <Button asChild variant="wa" size="xl"><a href={waLink(t.wa_hello)} target="_blank" rel="noopener"><WhatsAppIcon />{t.book_wa}</a></Button>
                <Button asChild variant="glass" size="xl"><a href={`tel:${CFG.tel}`}><Phone /><span dir="ltr">{CFG.tel_intl}</span></a></Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
