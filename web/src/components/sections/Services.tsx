import { Briefcase, Building2, Map, Plane, Users, Wine, type LucideIcon } from 'lucide-react'
import { Img } from '@/components/Img'
import { SectionHead } from '@/components/SectionHead'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useLang } from '@/lib/i18n'

const ICONS: Record<string, LucideIcon> = { plane: Plane, city: Building2, map: Map, glass: Wine, group: Users, brief: Briefcase }
const PHOTOS = ['vito-star', 'beirut-night', 'baalbek', 'raouche', 'jounieh', 'marina']

export function Services() {
  const { t } = useLang()
  return (
    <section id="services" aria-labelledby="svc-h" className="pb-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <SectionHead id="svc-h" eyebrow={t.svc_k} title={t.svc_h} text={t.svc_p} />
        <Stagger className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map(([ic, h, p], i) => {
            const Icon = ICONS[ic] ?? Map
            return (
              <StaggerItem key={h}>
                <article className="on-dark group relative isolate flex min-h-[480px] flex-col justify-end overflow-hidden rounded-[28px] border border-line">
                  <Img name={PHOTOS[i]} alt={h} className="absolute inset-0 -z-20 scale-[1.02] transition-transform duration-[1.6s] ease-lux group-hover:scale-110" />
                  <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,6,7,.2)_0%,rgba(6,6,7,.25)_35%,rgba(6,6,7,.96)_100%)]" />
                  <span className="absolute start-5.5 top-5.5 rounded-full border border-line-2 bg-black/40 px-2.5 py-1.5 font-mono text-[.78rem] text-gold-2 backdrop-blur-sm">0{i + 1}</span>
                  <span className="absolute end-4.5 top-4.5 grid size-12.5 place-items-center rounded-full bg-goldgrad text-gold-ink shadow-[0_10px_30px_-10px_rgba(245,184,46,.8)] transition-transform duration-700 ease-lux group-hover:rotate-[-12deg] group-hover:scale-110"><Icon className="size-[22px]" /></span>
                  <div className="p-7"><h3 className="display mb-2.5 text-[2.4rem] rtl:text-[1.6rem]">{h}</h3><p className="max-w-[38ch] text-[.98rem] text-sand">{p}</p></div>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
