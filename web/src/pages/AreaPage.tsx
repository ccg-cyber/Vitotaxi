import { Link } from 'react-router'
import { ArrowRight, Phone } from 'lucide-react'
import { AREA_FAQ, AREA_IMG, CFG, type Area } from '@/content/data'
import { Img } from '@/components/Img'
import { WhatsAppIcon } from '@/components/icons'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { Destinations } from '@/components/sections/Destinations'
import { Faq } from '@/components/sections/Faq'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'

export default function AreaPage({ area: a }: { area: Area }) {
  const { t, x, lang, ar, home } = useLang()
  const name = a[lang]
  const wa = waLink((ar ? 'مرحبا شربل، بدي مشوار — %s.' : 'Hello Charbel, I need a ride — %s.').replace('%s', name))
  return (
    <>
      <section className="on-dark relative isolate flex min-h-[88svh] items-end overflow-hidden pt-36 pb-18">
        <div className="absolute inset-0 -z-20">
          <Img name={AREA_IMG[a.slug]} alt={name} priority className="animate-kenburns" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,7,.6)_0%,rgba(6,6,7,.2)_35%,rgba(6,6,7,.96)_100%)]" />
        </div>
        <div className="wrap w-full">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-[.86rem] text-sand">
            <Link to={home} className="hover:text-gold">{t.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{name}</span>
          </nav>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white/7 py-2 ps-3 pe-4 text-[.84rem] font-semibold text-ivory backdrop-blur-md">
            <i className="size-[9px] animate-live rounded-full bg-[#3BE37F]" />{x.live}<span className="h-3.5 w-px bg-line-3" />{a[`${lang}_sub`]}
          </span>
          <SplitHeading text={a[`${lang}_h1`]} className="my-4 max-w-[14ch] text-h1" />
          <Reveal as="p" delay={.4} className="mb-7.5 max-w-[56ch] text-[clamp(1.05rem,1.5vw,1.22rem)] text-sand">{a[`${lang}_lede`]}</Reveal>
          <Reveal delay={.5} className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
            <Button asChild variant="gold" size="xl"><a href={wa} target="_blank" rel="noopener"><WhatsAppIcon />{t.book_wa}</a></Button>
            <Button asChild variant="glass" size="xl"><a href={`tel:${CFG.tel}`}><Phone />{t.call} <span dir="ltr">{CFG.tel_show}</span></a></Button>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(70px,9vw,120px)]">
        <div className="wrap grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-18">
          <div>
            <Reveal className="max-w-[720px] space-y-[1.1em] text-[1.1rem] text-muted-foreground">{a[`${lang}_body`].map(p => <p key={p}>{p}</p>)}</Reveal>
            <Stagger className="mt-9 grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-2.5">
              {a[`${lang}_hoods`].map(([h, s]) => (
                <StaggerItem key={h} className="rounded-2xl border border-line bg-tile px-5 py-4.5 transition-colors duration-500 hover:border-gold/40">
                  <b className="flex items-center gap-2 text-ivory before:size-1.5 before:rounded-full before:bg-gold">{h}</b><span className="text-[.88rem] text-muted-foreground">{s}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal className="grid gap-3 self-start rounded-[28px] border border-gold/28 bg-[radial-gradient(100%_80%_at_100%_0%,rgba(255,224,138,.12),transparent_60%)] bg-tile p-7.5 lg:sticky lg:top-30">
            <h2 className="display text-[2.1rem] rtl:text-[1.5rem]">{t.side_h}</h2>
            <p className="text-[.95rem] text-muted-foreground">{t.side_p}</p>
            <Button asChild variant="wa" size="xl"><a href={wa} target="_blank" rel="noopener"><WhatsAppIcon />{t.wa_short}</a></Button>
            <Button asChild variant="glass" size="xl"><a href={`tel:${CFG.tel}`}><Phone /><span dir="ltr">{CFG.tel_intl}</span></a></Button>
            <Button asChild variant="glass" size="xl" className="group"><a href={home + '#book'}>{t.nav[2][1]}<ArrowRight className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100" /></a></Button>
          </Reveal>
        </div>
      </section>

      <Faq id="area-faq" items={AREA_FAQ[a.slug][lang]} title={t.area_faq_h.replace('{a}', name)} />
      <Destinations exclude={a.slug} eyebrow={t.other_areas} title={x.dest_h} />
    </>
  )
}
