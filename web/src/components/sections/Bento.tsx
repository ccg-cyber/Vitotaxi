import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { AREAS, CFG } from '@/content/data'
import { Img } from '@/components/Img'
import { Stars } from '@/components/icons'
import { SectionHead } from '@/components/SectionHead'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { arDigits, useLang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

function Count({ to, ar }: { to: number; ar: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const dec = String(to).split('.')[1]?.length ?? 0
  const fmt = (n: number) => (ar ? arDigits(n.toFixed(dec)) : n.toFixed(dec))
  const [v, setV] = useState(fmt(to))
  useEffect(() => {
    if (!inView || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const c = animate(0, to, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: n => setV(fmt(n)) })
    return () => c.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])
  return <span ref={ref}>{v}</span>
}

const tile = 'relative isolate flex min-h-[250px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] border border-line bg-tile p-7 transition-colors duration-500 hover:border-line-3'
const big = 'font-serif text-[clamp(4.2rem,7vw,6.6rem)] leading-[.85] tracking-[-.03em] text-ivory rtl:font-sans rtl:font-bold rtl:tracking-normal'
const h3 = 'display text-[clamp(2.2rem,3.6vw,3.2rem)]'

export function Bento() {
  const { x, ar, lang } = useLang()
  return (
    <section id="why" aria-labelledby="why-h" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <SectionHead id="why-h" eyebrow={x.b_k} title={x.b_h} text={x.b_p} />
        <Stagger className="grid grid-cols-[minmax(0,1fr)] gap-3.5 md:grid-cols-2 lg:auto-rows-[minmax(250px,auto)] lg:grid-cols-4">
          <StaggerItem className="contents">
            <a href={CFG.maps} target="_blank" rel="noopener" className={cn(tile, 'on-dark group border-gold/30 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(255,224,138,.3),transparent_55%),linear-gradient(160deg,#261B07,#110C05_60%,#0B0806)]')}>
              <span className="tk">{x.t_rate}</span>
              <div>
                <div className={big}><Count to={Number(CFG.rating)} ar={ar} /></div>
                <div className="mt-3.5 flex items-center justify-between"><Stars /><span className="grid size-11.5 place-items-center rounded-full border border-line-3 text-ivory transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-gold-ink"><ArrowUpRight className="size-[18px]" /></span></div>
                <p className="mt-2 text-muted-foreground">{x.t_rate_p.replace('{n}', ar ? arDigits(CFG.reviews) : CFG.reviews)}</p>
              </div>
            </a>
          </StaggerItem>
          <StaggerItem className={tile}>
            <span className="tk">{x.t_247}</span>
            <span aria-hidden="true" className="clock absolute end-6 top-6 size-[86px] rounded-full border border-line-2 bg-[radial-gradient(circle,rgba(245,184,46,.08),transparent_70%)]"><i className="absolute top-1/2 left-1/2 -m-[3px] size-1.5 rounded-full bg-gold" /></span>
            <div><div className={big} dir="ltr">{x.open247}</div><p className="mt-3 text-muted-foreground">{x.t_247_p}</p></div>
          </StaggerItem>
          <StaggerItem className={cn(tile, 'on-dark group min-h-[340px] justify-end p-0 md:col-span-2 lg:row-span-2')}>
            <Img name="vito-charbel" alt={x.t_car_h} className="absolute inset-0 -z-20 transition-transform duration-[1.4s] ease-lux group-hover:scale-[1.06]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,6,7,.1)_20%,rgba(6,6,7,.92))]" />
            <div className="p-7"><span className="tk">{x.t_car}</span><h3 className={cn(h3, 'mt-2.5 mb-2')}>{x.t_car_h}</h3><p className="text-sand">{x.t_car_p}</p></div>
          </StaggerItem>
          <StaggerItem className={tile}>
            <span className="tk">{x.t_reg}</span>
            <div><div className={big}><Count to={9} ar={ar} /></div><p className="mt-3 text-muted-foreground">{x.t_reg_p}</p></div>
            <div className="flex flex-wrap gap-1.5">{AREAS.slice(0, 6).map(a => <span key={a.slug} className="rounded-full border border-line bg-ink-2 px-3 py-1.5 text-[.78rem] font-semibold">{a[lang].split(' (')[0].split(',')[0]}</span>)}</div>
          </StaggerItem>
          <StaggerItem className={tile}>
            <span className="tk">{x.t_zero}</span>
            <div><div className={big}>{x.t_zero_big}</div><p className="mt-3 text-muted-foreground">{x.t_zero_p}</p></div>
          </StaggerItem>
          <StaggerItem className={cn(tile, 'md:col-span-2')}>
            <svg aria-hidden="true" viewBox="0 0 600 300" preserveAspectRatio="none" className="absolute inset-0 -z-10 size-full opacity-70"><path className="flight-dash" d="M-20 260 C 160 250, 260 80, 620 40" fill="none" stroke="#FFE08A" strokeWidth="1.5" /></svg>
            <span className="tk">{x.t_air}</span>
            <div><h3 className={h3}>{x.t_air_h}</h3><p className="mt-2.5 max-w-[44ch] text-muted-foreground">{x.t_air_p}</p></div>
          </StaggerItem>
          <StaggerItem className={cn(tile, 'md:col-span-2')}>
            <span className="tk">{x.t_safe}</span>
            <div><h3 className={h3}>{x.t_safe_h}</h3><p className="mt-2.5 max-w-[44ch] text-muted-foreground">{x.t_safe_p}</p></div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
