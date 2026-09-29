import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

/* A gold ring that trails the pointer and swells over anything clickable. Desktop only. */
export function Cursor() {
  const [on, setOn] = useState(false)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: .6 }), sy = useSpring(y, { stiffness: 500, damping: 40, mass: .6 })
  useEffect(() => {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setOn(true)
    const move = (e: PointerEvent) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e: PointerEvent) => setHover(!!(e.target as Element).closest?.('a,button,summary,input,select,textarea,[role=button]'))
    addEventListener('pointermove', move, { passive: true }); addEventListener('pointerover', over, { passive: true })
    return () => { removeEventListener('pointermove', move); removeEventListener('pointerover', over) }
  }, [x, y])
  if (!on) return null
  return (
    <>
      <motion.div style={{ x: sx, y: sy }} className={cn('pointer-events-none fixed top-0 left-0 z-500 -ms-5 -mt-5 size-10 rounded-full border border-gold/70 transition-[width,height,margin,background-color] duration-400 ease-lux',
        hover && '-ms-[37px] -mt-[37px] size-[74px] border-gold bg-gold/10')} />
      <motion.div style={{ x, y }} className="pointer-events-none fixed top-0 left-0 z-500 -ms-[3px] -mt-[3px] size-1.5 rounded-full bg-gold" />
    </>
  )
}
