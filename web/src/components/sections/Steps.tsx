import { SectionHead } from '@/components/SectionHead'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useLang } from '@/lib/i18n'

export function Steps() {
  const { t, x } = useLang()
  return (
    <section aria-labelledby="st-h" className="pb-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <SectionHead center id="st-h" eyebrow={x.st_k} title={x.st_h} />
        <Stagger className="grid gap-3.5 md:grid-cols-3">
          {t.steps.map(([a, b], i) => (
            <StaggerItem key={a} className="relative overflow-hidden rounded-[28px] border border-line bg-tile px-7.5 py-8.5 before:absolute before:inset-x-7.5 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(245,184,46,.6),transparent)]">
              <span className="gold-text mb-6.5 block font-serif text-[5.6rem] leading-[.8]">0{i + 1}</span>
              <h3 className="mb-2 font-sans text-[1.2rem] font-bold tracking-[-.02em]">{a}</h3>
              <p className="text-muted-foreground">{b}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
