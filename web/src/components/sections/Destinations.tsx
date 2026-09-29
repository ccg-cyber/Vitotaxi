import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { AREAS, AREA_IMG, type Area } from '@/content/data'
import { Img } from '@/components/Img'
import { SectionHead } from '@/components/SectionHead'
import { useLang } from '@/lib/i18n'

const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect

function Card({ a, n }: { a: Area; n: number }) {
  const { lang, to } = useLang()
  return (
    <Link to={to(a.slug)} className="group relative isolate block aspect-[3/4] w-[min(78vw,360px)] shrink-0 snap-start overflow-hidden rounded-[28px] border border-line lg:w-[400px]">
      <Img name={AREA_IMG[a.slug]} alt={a[lang]} className="absolute inset-0 -z-20 transition-transform duration-[1.6s] ease-lux group-hover:scale-[1.08]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,6,7,0)_35%,rgba(6,6,7,.93))]" />
      <span className="absolute start-5 top-5 rounded-full border border-line-2 bg-black/35 px-2.5 py-1.5 font-mono text-[.76rem] text-ivory backdrop-blur-sm">{String(n).padStart(2, '0')}</span>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
        <div><b className="display block text-[2.5rem] font-normal text-ivory rtl:text-[1.7rem]">{a[lang]}</b><span className="mt-2 block text-[.9rem] text-sand">{a[`${lang}_sub`]}</span></div>
        <span className="grid size-11.5 shrink-0 place-items-center rounded-full border border-line-3 bg-black/30 text-ivory backdrop-blur-sm transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-ink"><ArrowUpRight className="size-[18px] rtl:-scale-x-100" /></span>
      </div>
    </Link>
  )
}

/* On large screens the section pins and the cards travel sideways as you scroll down.
   On phones it's a native swipe row with snap points. */
export function Destinations({ exclude, title, eyebrow }: { exclude?: string; title?: string; eyebrow?: string }) {
  const { x, ar } = useLang()
  const list = AREAS.filter(a => a.slug !== exclude)
  const outer = useRef<HTMLElement>(null), track = useRef<HTMLDivElement>(null), row = useRef<HTMLDivElement>(null)
  const [dist, setDist] = useState(0)
  const [pinned, setPinned] = useState(false)
  const [prog, setProg] = useState(0)

  useIso(() => {
    const mq = matchMedia('(min-width: 1060px) and (prefers-reduced-motion: no-preference)')
    const measure = () => {
      const on = mq.matches
      setPinned(on)
      if (on && track.current) setDist(Math.max(0, track.current.scrollWidth - innerWidth))
    }
    measure(); addEventListener('resize', measure); mq.addEventListener('change', measure)
    return () => { removeEventListener('resize', measure); mq.removeEventListener('change', measure) }
  }, [])

  useEffect(() => { if (pinned && track.current) setDist(Math.max(0, track.current.scrollWidth - innerWidth)) }, [pinned])

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: .4 })
  const tx = useTransform(smooth, [0, 1], [0, (ar ? 1 : -1) * dist])
  useMotionValueEvent(smooth, 'change', v => pinned && setProg(v))

  const head = (
    <div className="wrap w-full pt-[clamp(40px,6vw,90px)]">
      <SectionHead id={exclude ? 'more-h' : 'areas-h'} eyebrow={eyebrow ?? x.dest_k} title={title ?? x.dest_h} text={exclude ? undefined : x.dest_p} />
    </div>
  )
  const bar = (
    <div className="wrap w-full"><div className="mt-7 flex items-center gap-4 text-[.84rem] text-muted-foreground">
      <span>{x.swipe}</span>
      <div className="h-0.5 flex-1 overflow-hidden rounded bg-line-2"><div className="h-full bg-goldgrad" style={{ width: `${12 + prog * 88}%` }} /></div>
    </div></div>
  )
  const cards = list.map((a, i) => <Card key={a.slug} a={a} n={i + 1} />)

  if (pinned) {
    return (
      <section ref={outer} id={exclude ? undefined : 'areas'} aria-labelledby={exclude ? 'more-h' : 'areas-h'} className="relative" style={{ height: `calc(100vh + ${dist}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          {head}
          <motion.div ref={track} style={{ x: tx }} className="flex w-max gap-4 px-[clamp(16px,4.5vw,64px)]">{cards}</motion.div>
          {bar}
        </div>
      </section>
    )
  }
  return (
    <section ref={outer} id={exclude ? undefined : 'areas'} aria-labelledby={exclude ? 'more-h' : 'areas-h'} className="relative pb-[clamp(90px,12vw,160px)]">
      {head}
      <div ref={node => { row.current = node; track.current = node }}
        onScroll={e => { const el = e.currentTarget, m = el.scrollWidth - el.clientWidth; if (m > 0) setProg(Math.abs(el.scrollLeft) / m) }}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[clamp(16px,4.5vw,64px)] pb-1.5">{cards}</div>
      {bar}
    </section>
  )
}
