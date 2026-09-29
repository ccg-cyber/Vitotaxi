import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.19, 1, 0.22, 1] as const

/* Fades and lifts its content in when it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'p' | 'span' | 'li' }) {
  const reduce = useReducedMotion()
  const M = motion[as]
  if (reduce) return <M className={className}>{children}</M>
  return (
    <M className={className} data-reveal initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }} transition={{ duration: 1.1, ease, delay }}>
      {children}
    </M>
  )
}

const parent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
export const item: Variants = { hidden: { opacity: 0, y: 56 }, show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } } }

/* A group whose children rise in one after another. Children should be <StaggerItem>. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={parent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={item} data-reveal>{children}</motion.div>
}
