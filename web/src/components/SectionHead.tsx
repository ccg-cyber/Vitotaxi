import { Reveal } from '@/components/motion/Reveal'
import { Rich } from '@/components/Rich'
import { cn } from '@/lib/utils'

export function SectionHead({ eyebrow, title, text, id, center, as: H = 'h2' }: { eyebrow?: string; title: string; text?: string; id?: string; center?: boolean; as?: 'h1' | 'h2' }) {
  if (center) {
    return (
      <Reveal className="mx-auto mb-[clamp(40px,6vw,70px)] grid max-w-[820px] justify-items-center gap-4.5 text-center">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <H id={id} className="display text-h2"><Rich text={title} /></H>
        {text && <p className="max-w-[58ch] text-[1.08rem] text-muted-foreground">{text}</p>}
      </Reveal>
    )
  }
  return (
    <div className={cn('mb-[clamp(40px,6vw,70px)] grid items-end gap-6', text && 'md:grid-cols-[1.2fr_.8fr]')}>
      <Reveal className="grid gap-4.5">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <H id={id} className="display text-h2"><Rich text={title} /></H>
      </Reveal>
      {text && <Reveal as="p" delay={.1} className="text-[1.06rem] text-muted-foreground">{text}</Reveal>}
    </div>
  )
}
