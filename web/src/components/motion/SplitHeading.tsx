import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ease = [0.19, 1, 0.22, 1] as const

/* A headline whose words rise from behind a mask. "*gold*" words keep the gold italic. */
export function SplitHeading({ text, className, id, delay = 0.2 }: { text: string; className?: string; id?: string; delay?: number }) {
  const reduce = useReducedMotion()
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean)
  let n = 0
  const words = (s: string) =>
    s.split(/(\s+)/).map((w, i) => {
      if (/^\s+$/.test(w) || !w) return w
      const k = n++
      return (
        <span key={i} className="inline-block overflow-hidden pb-[.08em] align-bottom">
          <motion.span className="w inline-block" data-reveal initial={reduce ? false : { y: '110%', opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: delay + k * 0.07 }}>{w}</motion.span>
        </span>
      )
    })
  return (
    <h1 id={id} className={cn('display', className)}>
      {parts.map((p, i) => (p.startsWith('*') ? <em key={i} className="g">{words(p.slice(1, -1))}</em> : <span key={i}>{words(p)}</span>))}
    </h1>
  )
}
