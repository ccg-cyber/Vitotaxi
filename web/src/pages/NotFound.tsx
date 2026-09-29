import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'

export default function NotFound() {
  const { t, home } = useLang()
  return (
    <section className="grid min-h-svh place-items-center px-6 pt-36 pb-20 text-center">
      <div>
        <p className="eyebrow justify-center">404</p>
        <h1 className="display gold-text text-[clamp(7rem,24vw,16rem)] leading-[.8]">404</h1>
        <h2 className="display mt-2.5 text-h2">{t.nf_h}</h2>
        <p className="mx-auto mt-5 mb-7.5 max-w-[42ch] text-muted-foreground">{t.nf_p}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild variant="gold" size="xl" className="group"><Link to={home}>{t.nf_home}<ArrowRight className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100" /></Link></Button>
          <Button asChild variant="glass" size="xl"><a href={waLink(t.wa_hello)} target="_blank" rel="noopener"><WhatsAppIcon />WhatsApp</a></Button>
        </div>
      </div>
    </section>
  )
}
