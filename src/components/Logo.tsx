import { useId } from 'react'
import { cn } from '@/lib/utils'

/* The Vito Taxi winged V. */
export function Mark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const g = `url(#mg${id})`
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn('mark', className)}>
      <defs>
        <linearGradient id={`mg${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFE7A3" /><stop offset=".5" stopColor="#F5B82E" /><stop offset="1" stopColor="#B7811A" />
        </linearGradient>
      </defs>
      <circle className="mk-ring" cx="32" cy="32" r="19" fill="none" stroke={g} strokeWidth="2" />
      <g className="mk-wing" fill={g}><path d="M13.2 24.2 L1 25.4 L13 27.4Z" /><path d="M13 29.4 L3.5 30.6 L13.2 32.4Z" /><path d="M13.6 34.4 L6.5 35.6 L14.2 37.2Z" /></g>
      <g className="mk-wing r" fill={g}><path d="M50.8 24.2 L63 25.4 L51 27.4Z" /><path d="M51 29.4 L60.5 30.6 L50.8 32.4Z" /><path d="M50.4 34.4 L57.5 35.6 L49.8 37.2Z" /></g>
      <path className="mk-v" d="M21.5 21 H27.6 L32 35.2 L36.4 21 H42.5 L34.3 44.5 H29.7 Z" fill={g} />
      <path d="M29.4 21 L32 29.6 L34.6 21" fill="none" stroke="#0A0A0B" strokeWidth="1.1" opacity=".55" />
    </svg>
  )
}

export function Brand({ className }: { className?: string }) {
  return (
    <span className={cn('flex min-w-0 items-center gap-2.5', className)}>
      <Mark className="size-10 shrink-0" />
      <span>
        <b className="block text-[1.02rem] leading-none font-extrabold tracking-[.2em] whitespace-nowrap text-ivory">VITO TAXI</b>
        <small className="mt-1.5 block text-[.58rem] font-bold tracking-[.34em] whitespace-nowrap text-gold">BY CHARBEL</small>
      </span>
    </span>
  )
}
