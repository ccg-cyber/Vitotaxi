import { Link } from 'react-router'
import { MapPin } from 'lucide-react'
import { AREAS, CFG } from '@/content/data'
import { Brand } from '@/components/Logo'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'

export function Footer({ onHome }: { onHome: boolean }) {
  const { t, x, ar, home, to } = useLang()
  const wa = waLink(t.wa_hello)
  const social = [
    { href: wa, label: 'WhatsApp', icon: <WhatsAppIcon className="size-[18px]" /> },
    { href: CFG.instagram, label: 'Instagram', icon: <InstagramIcon className="size-[18px]" /> },
    { href: CFG.facebook, label: 'Facebook', icon: <FacebookIcon className="size-[18px]" /> },
    { href: CFG.maps, label: 'Google Maps', icon: <MapPin className="size-[18px]" /> },
  ]
  const h4 = 'mb-4 text-[.72rem] font-bold tracking-[.22em] text-gold uppercase rtl:tracking-normal rtl:text-[.9rem]'
  const a = 'text-muted-foreground transition-colors hover:text-ivory'
  return (
    <footer className="relative overflow-hidden pt-24 pb-8">
      <div className="wrap">
        <div className="grid gap-9 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to={home}><Brand /></Link>
            <p className="mt-3.5 font-serif text-[1.4rem] text-gold-2 italic rtl:font-sans rtl:text-[1.1rem] rtl:font-bold rtl:not-italic">{ar ? 'راحتك أولويتنا.' : 'Your comfort, our priority.'}</p>
            <p className="mt-4 max-w-[38ch] text-[.95rem] text-muted-foreground">{t.foot_about}</p>
            <div className="mt-5.5 flex gap-2">
              {social.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}
                  className="grid size-11.5 place-items-center rounded-full border border-line-2 text-ivory transition-all duration-500 ease-lux hover:-translate-y-[3px] hover:border-gold hover:bg-gold hover:text-gold-ink">{s.icon}</a>
              ))}
            </div>
          </div>
          <div><h4 className={h4}>{t.f_services}</h4>
            <ul className="grid gap-2.5">{t.services.map(s => <li key={s[1]}><a className={a} href={(onHome ? '' : home) + '#services'}>{s[1]}</a></li>)}</ul></div>
          <div><h4 className={h4}>{t.f_areas}</h4>
            <ul className="grid gap-2.5">{AREAS.map(ar_ => <li key={ar_.slug}><Link className={a} to={to(ar_.slug)}>{ar_[ar ? 'ar' : 'en']}</Link></li>)}</ul></div>
          <div><h4 className={h4}>{t.f_contact}</h4>
            <ul className="grid gap-2.5">
              <li><a className={a} href={`tel:${CFG.tel}`} dir="ltr">{CFG.tel_intl}</a></li>
              <li><a className={a} href={wa} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a className={a} href={CFG.instagram} target="_blank" rel="noopener">@vitotaxibycharbel</a></li>
              <li><a className={a} href={CFG.maps} target="_blank" rel="noopener">{t.find_us}</a></li>
              <li><a className={a} href="/vito-taxi.vcf" download>{t.save_contact}</a></li>
              <li className="text-muted-foreground">{t.addr}</li>
            </ul></div>
        </div>
        <div aria-hidden="true" className="mt-20 text-center text-[clamp(3.4rem,15vw,15rem)] leading-[.78] font-extrabold tracking-[-.045em] whitespace-nowrap select-none"
          style={{ background: 'linear-gradient(180deg,rgba(245,184,46,.55),rgba(245,184,46,.02) 90%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>VITO TAXI</div>
        <div className="mt-6 flex flex-wrap justify-between gap-3 border-t border-line pt-5.5 text-[.84rem] text-muted-2">
          <span>© {new Date().getFullYear()} {CFG.name}. {t.rights}</span>
          <Link to={to('credits')} className="underline underline-offset-4 hover:text-ivory">{x.credits}</Link>
        </div>
      </div>
    </footer>
  )
}
