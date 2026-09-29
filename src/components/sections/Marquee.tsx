import { useLang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Marquee() {
  const { t, ar } = useLang()
  const list = (
    <ul className="m-0 flex list-none p-0">
      {t.marquee.map((m, i) => (
        <li key={m} className={cn('flex items-center gap-10 pe-10 font-serif text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.1] whitespace-nowrap after:size-3 after:shrink-0 after:rounded-full after:bg-goldgrad rtl:font-bold rtl:text-[clamp(1.6rem,3.2vw,2.6rem)]',
          i % 3 === 0 ? 'text-ivory' : 'outline-text', i % 3 === 1 && 'italic rtl:not-italic')}>{m}</li>
      ))}
    </ul>
  )
  return (
    <div aria-hidden="true" className="group overflow-hidden border-y border-line bg-ink-2 py-7">
      <div className={cn('flex w-max group-hover:[animation-play-state:paused]', ar ? 'animate-marquee-rtl' : 'animate-marquee')}>{list}{list}</div>
    </div>
  )
}
