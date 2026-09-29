import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Armchair, Luggage, ShieldCheck, Snowflake, type LucideIcon } from 'lucide-react'
import { CFG } from '@/content/data'
import { Img } from '@/components/Img'
import { Rich } from '@/components/Rich'
import { Parallax } from '@/components/motion/Parallax'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useLang } from '@/lib/i18n'
import { useEffect, useState } from 'react'

const ICONS: Record<string, LucideIcon> = { seat: Armchair, bag: Luggage, snow: Snowflake, shield: ShieldCheck }

/* Photos the owner drops into public/photos appear here. Missing files are simply skipped. */
function Gallery() {
  const [ok, setOk] = useState<{ file: string; alt: string }[]>([])
  useEffect(() => {
    CFG.photos.forEach(p => { const i = new Image(); i.onload = () => setOk(o => [...o, p]); i.src = '/photos/' + p.file })
  }, [])
  if (!ok.length) return null
  return (
    <div className="mt-10 grid gap-3.5 md:grid-cols-3">
      {ok.map(p => <figure key={p.file} className="m-0 aspect-[4/3] overflow-hidden rounded-[28px] border border-line"><img src={'/photos/' + p.file} alt={p.alt} loading="lazy" className="size-full object-cover" /></figure>)}
    </div>
  )
}

export function TheVito() {
  const { t, ar } = useLang()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], ar ? ['-6%', '6%'] : ['6%', '-6%'])
  return (
    <section ref={ref} id="vito" aria-labelledby="car-h" className="relative overflow-hidden py-[clamp(90px,12vw,160px)]">
      <motion.div aria-hidden="true" style={reduce ? undefined : { x: drift }}
        className="pointer-events-none absolute inset-x-0 top-5 -z-10 text-center text-[clamp(5rem,19vw,17rem)] leading-[.8] font-extrabold tracking-[-.04em] whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1px_rgba(245,184,46,.1)]">MERCEDES VITO</motion.div>
      <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto aspect-[1/1.08] w-full max-w-[620px]">
          <figure className="absolute inset-[0_24%_16%_0] m-0 overflow-hidden rounded-[28px] border border-line-2 shadow-[0_40px_80px_-40px_#000] rtl:inset-[0_0_16%_24%]"><Parallax amount={14} className="size-full"><Img name="vito-grille" alt="Mercedes-Benz grille" /></Parallax></figure>
          <figure className="absolute inset-[40%_0_0_48%] m-0 overflow-hidden rounded-[28px] border border-line-2 shadow-[0_40px_80px_-40px_#000] rtl:inset-[40%_48%_0_0]"><Parallax amount={14} className="size-full"><Img name="vito-sunset" alt="Mercedes-Benz at sunset" /></Parallax></figure>
          <div aria-hidden="true" className="absolute end-[6%] top-[6%] z-2 grid size-32 place-items-center rounded-full border border-gold/40 bg-[rgba(12,12,14,.72)] backdrop-blur-md">
            <svg viewBox="0 0 128 128" className="absolute inset-0 size-full animate-spin-slow"><defs><path id="bc" d="M64 64 m-50 0 a50 50 0 1 1 100 0 a50 50 0 1 1 -100 0" /></defs>
              <text style={{ font: '800 8.4px/1 Manrope,sans-serif', letterSpacing: '.3em' }} fill="#FFE08A"><textPath href="#bc">MERCEDES-BENZ · VITO · FIRST CLASS · MERCEDES-BENZ · VITO · FIRST CLASS · </textPath></text></svg>
            <b className="font-serif text-[2.3rem] font-normal text-ivory" dir="ltr">V</b>
          </div>
        </Reveal>
        <div>
          <Reveal><span className="eyebrow">{t.car_k}</span></Reveal>
          <Reveal delay={.05}><h2 id="car-h" className="display my-4.5 text-h2"><Rich text={t.car_h} /></h2></Reveal>
          <Reveal as="p" delay={.1} className="max-w-[44ch] text-[clamp(1.05rem,1.5vw,1.22rem)] text-muted-foreground">{t.car_p}</Reveal>
          <Stagger className="mt-8.5 grid gap-3 sm:grid-cols-2">
            {t.feats.map(([ic, b, s]) => {
              const Icon = ICONS[ic] ?? ShieldCheck
              return (
                <StaggerItem key={b} className="flex gap-3.5 rounded-[20px] border border-line bg-tile p-4.5 transition-colors duration-500 hover:border-gold/35">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold/20 bg-gold/10 text-gold-2"><Icon className="size-[21px]" /></span>
                  <div><b className="mb-0.5 block text-[.98rem] text-ivory">{b}</b><span className="text-[.9rem] text-muted-foreground">{s}</span></div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
      <div className="wrap"><Gallery /></div>
    </section>
  )
}
