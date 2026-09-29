import { CFG } from '@/content/data'
import { Img } from '@/components/Img'
import { Rich } from '@/components/Rich'
import { InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { Parallax } from '@/components/motion/Parallax'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'

export function FinalCta() {
  const { t } = useLang()
  return (
    <section aria-labelledby="final-h" className="pb-4">
      <div className="wrap">
        <Reveal className="relative isolate grid min-h-[640px] place-items-center overflow-hidden rounded-[40px] border border-line-2 px-6 py-22 text-center">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <Parallax amount={12} className="size-full"><Img name="vito-star" /></Parallax>
            <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(6,6,7,.5),rgba(6,6,7,.92))]" />
          </div>
          <div>
            <span className="eyebrow">{t.final_k}</span>
            <h2 id="final-h" className="display mx-auto my-5 max-w-[13ch] text-h2"><Rich text={t.final_h} /></h2>
            <p className="mx-auto mb-8.5 max-w-[44ch] text-[clamp(1.05rem,1.5vw,1.22rem)] text-sand">{t.final_p}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="gold" size="xl"><a href={waLink(t.wa_hello)} target="_blank" rel="noopener"><WhatsAppIcon />{t.book_wa}</a></Button>
              <Button asChild variant="glass" size="xl"><a href={CFG.instagram} target="_blank" rel="noopener"><InstagramIcon />Instagram</a></Button>
            </div>
            <a href={`tel:${CFG.tel}`} dir="ltr" className="gold-text mt-9 inline-block font-serif text-[clamp(2.4rem,6.5vw,4.6rem)]">{CFG.tel_intl}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
