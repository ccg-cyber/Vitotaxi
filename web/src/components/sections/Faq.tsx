import { Rich } from '@/components/Rich'
import { WhatsAppIcon } from '@/components/icons'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'

/* Answers stay in the HTML even when closed (forceMount), so they match the FAQPage schema word for word. */
export function Faq({ items, title, id = 'faq' }: { items: string[][]; title?: string; id?: string }) {
  const { t, ar } = useLang()
  return (
    <section id={id} aria-labelledby={id + '-h'} className="pb-[clamp(90px,12vw,160px)]">
      <div className="wrap grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal className="grid content-start gap-4.5 lg:sticky lg:top-30 lg:self-start">
          <span className="eyebrow">{t.faq_k}</span>
          <h2 id={id + '-h'} className="display text-h2"><Rich text={title ?? t.faq_h} /></h2>
          <Button asChild variant="glass" size="xl" className="mt-2 w-fit"><a href={waLink(t.wa_hello)} target="_blank" rel="noopener"><WhatsAppIcon />{t.wa_short}</a></Button>
        </Reveal>
        <Accordion type="single" collapsible dir={ar ? 'rtl' : 'ltr'}>
          <Stagger className="grid gap-2.5">
            {items.map(([q, a], i) => (
              <StaggerItem key={q}>
                <AccordionItem value={'q' + i} className="rounded-[20px] border border-line bg-tile px-6 transition-colors duration-500 last:border-b data-[state=open]:border-gold/35 data-[state=open]:bg-tile-2">
                  <AccordionTrigger className="py-5.5 text-start text-[1.05rem] font-bold text-ivory hover:no-underline [&>svg]:size-5 [&>svg]:text-gold">{q}</AccordionTrigger>
                  <AccordionContent forceMount className="max-w-[68ch] pb-5.5 text-base text-muted-foreground" >{a}</AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Stagger>
        </Accordion>
      </div>
    </section>
  )
}
