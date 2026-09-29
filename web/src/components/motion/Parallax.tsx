import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* Moves its child slowly against the scroll. The wrapper clips the overflow. */
export function Parallax({ children, className, amount = 12 }: { children: ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount / 2}%`, `${amount / 2}%`])
  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div style={reduce ? undefined : { y }} className="h-[118%] w-full -translate-y-[4%]">{children}</motion.div>
    </div>
  )
}
