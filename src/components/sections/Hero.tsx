import { useRef, type FormEvent } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Clock, Lock, Phone, Users } from 'lucide-react'
import { CFG } from '@/content/data'
import { Stars, WhatsAppIcon } from '@/components/icons'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Button } from '@/components/ui/button'
import { arDigits, useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'

const ease = [0.19, 1, 0.22, 1] as const
const intro = (d: number) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.1, ease, delay: d } })

export function Hero() {
  const { t, x, ar } = useLang()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const fade = useTransform(scrollYProgress, [0, 1], [1, .35])
  const rating = ar ? arDigits(CFG.rating) : CFG.rating
  const M = (d: number) => (reduce ? {} : intro(d))

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget), j = t.js, v = (k: string) => String(f.get(k) || '').trim()
    const line = (k: string, val: string) => (val ? `• ${k}: ${val}` : null)
    const lines = [j.hello, line(j.from, v('from')), line(j.to, v('to')), line(j.when, v('when') || j.now), line(j.pax, v('pax')), '', j.price]
    window.open(waLink(lines.filter(l => l !== null).join('\n')), '_blank', 'noopener')
  }

  const field = 'relative flex min-w-0 min-h-[52px] items-center gap-3 rounded-[14px] border border-line-2 bg-black/35 px-3.5 transition-colors focus-within:border-gold'
  const input = 'h-[50px] min-w-0 flex-1 border-0 bg-transparent text-[.97rem] text-ivory outline-none placeholder:text-muted-2'

  return (
    <section ref={ref} aria-labelledby="h1" className="relative isolate flex min-h-svh items-end overflow-hidden pt-32 pb-[clamp(40px,7vh,80px)]">
      <motion.div style={reduce ? undefined : { y, opacity: fade }} className="absolute inset-0 -z-20 overflow-hidden">
        <picture>
          <source media="(max-width: 700px)" srcSet="/img/vito-night-m.webp" />
          <img src="/img/vito-night.webp" alt="Black Mercedes-Benz Vito with its headlights on at night" width={2200} height={1466}
            fetchPriority="high" decoding="async" className="h-full w-full animate-kenburns object-cover object-[50%_45%]" />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,7,.55)_0%,rgba(6,6,7,.1)_30%,rgba(6,6,7,.35)_60%,rgba(6,6,7,.96)_100%),radial-gradient(60%_50%_at_50%_55%,transparent_30%,rgba(6,6,7,.55)_100%)]" />
      </motion.div>
      <div aria-hidden="true" className="pointer-events-none absolute top-[58%] left-1/2 -z-10 h-[30vw] w-[70vw] -translate-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,184,46,.18),transparent)] blur-[30px]" />

      <div className="wrap grid w-full grid-cols-[minmax(0,1fr)] items-end gap-9 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] lg:gap-14">
        <div>
          <motion.span {...M(.3)} className="inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white/7 py-2 ps-3 pe-4 text-[.84rem] font-semibold text-ivory backdrop-blur-md">
            <i className="size-[9px] shrink-0 animate-live rounded-full bg-[#3BE37F] shadow-[0_0_0_0_rgba(59,227,127,.7)]" />{x.live}
            <span className="h-3.5 w-px bg-line-3" /><Stars className="size-[13px]" /><b dir="ltr">{rating}</b> Google
          </motion.span>
          <SplitHeading id="h1" text={x.h1} className="my-5 text-h1" delay={.35} />
          <motion.p {...M(.6)} className="mb-7.5 max-w-[44ch] text-[clamp(1.05rem,1.5vw,1.22rem)] text-sand">{t.lead}</motion.p>
          <motion.div {...M(.75)} className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
            <Button asChild variant="gold" size="xl"><a href={waLink(t.wa_hello)} target="_blank" rel="noopener"><WhatsAppIcon />{t.book_wa}</a></Button>
            <Button asChild variant="glass" size="xl"><a href={`tel:${CFG.tel}`}><Phone />{t.call} <span dir="ltr">{CFG.tel_show}</span></a></Button>
          </motion.div>
        </div>

        <motion.form {...M(.9)} onSubmit={submit} aria-labelledby="q-h"
          className="glass gold-edge rounded-[28px] border border-line-2 bg-[rgba(14,14,17,.62)] p-5.5 shadow-[0_40px_90px_-40px_rgba(0,0,0,.95)]">
          <h2 id="q-h" className="mb-1 font-sans text-[1.05rem] font-bold">{x.q_h}</h2>
          <p className="mb-4 text-[.86rem] text-muted-foreground">{x.q_sub}</p>
          <div className="relative mb-2 grid gap-2 before:absolute before:start-[21px] before:top-[26px] before:bottom-[26px] before:border-s-[1.5px] before:border-dashed before:border-gold/50">
            <label className={field}><i className="z-1 size-[15px] shrink-0 rounded-full border-2 border-gold bg-ink" /><span className="sr-only">{t.f_from}</span>
              <input name="from" className={input} placeholder={x.q_from} autoComplete="street-address" /></label>
            <label className={field}><i className="z-1 size-[15px] shrink-0 rounded-[4px] bg-gold" /><span className="sr-only">{t.f_to}</span>
              <input name="to" className={input} placeholder={x.q_to} /></label>
          </div>
          <div className="mb-3.5 grid grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] gap-2">
            <label className={field}><Clock className="size-4 shrink-0 text-gold" /><span className="sr-only">{t.f_time}</span>
              <select name="when" className={input + ' select-native'}>{x.q_when.map(w => <option key={w}>{w}</option>)}</select></label>
            <label className={field}><Users className="size-4 shrink-0 text-gold" /><span className="sr-only">{t.f_pax}</span>
              <select name="pax" defaultValue="2" className={input + ' select-native'}>
                {['1', '2', '3', '4', '5', '6', '7+'].map(p => <option key={p} value={p}>{ar ? arDigits(p) : p} {x.q_pax}</option>)}
              </select></label>
          </div>
          <Button type="submit" variant="gold" size="xl" className="group w-full">{x.q_btn}<ArrowRight className="transition-transform duration-500 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" /></Button>
          <p className="mt-3 flex items-center justify-center gap-2 text-[.78rem] text-muted-2"><Lock className="size-3.5" />{x.q_note}</p>
        </motion.form>
      </div>
    </section>
  )
}
