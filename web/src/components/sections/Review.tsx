import { ArrowRight } from 'lucide-react'
import { CFG } from '@/content/data'
import { Rich } from '@/components/Rich'
import { GoogleIcon, Stars } from '@/components/icons'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'
import { arDigits, useLang } from '@/lib/i18n'

export function Review() {
  const { t, ar } = useLang()
  const r = ar ? arDigits(CFG.rating) : CFG.rating, n = ar ? arDigits(CFG.reviews) : CFG.reviews
  return (
    <section aria-labelledby="rate-h" className="pb-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <Reveal className="on-dark relative isolate grid items-center gap-9 overflow-hidden rounded-[40px] border border-gold/25 bg-[radial-gradient(70%_100%_at_0%_0%,rgba(255,224,138,.16),transparent_60%),linear-gradient(160deg,#17130B,#0B0A08)] p-[clamp(34px,6vw,72px)] lg:grid-cols-[auto_1fr] lg:gap-18">
          <div className="flex items-center gap-5.5">
            <span className="gold-text font-serif text-[clamp(7rem,15vw,12rem)] leading-[.8] rtl:font-sans rtl:font-bold">{r}</span>
            <div><Stars className="size-[22px]" /><small className="mt-2.5 block text-muted-foreground">{t.out_of}</small></div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[.86rem] font-bold text-[#222]"><GoogleIcon className="size-[18px]" />Google</span>
            <h2 id="rate-h" className="display my-3.5 text-h2"><Rich text={t.rate_h} /></h2>
            <p className="text-muted-foreground">{t.rate_p.replace('{r}', r).replace('{n}', n)}</p>
            <Button asChild variant="gold" size="xl" className="group mt-6"><a href={CFG.maps} target="_blank" rel="noopener">{t.rate_btn}<ArrowRight className="transition-transform duration-500 group-hover:translate-x-1 rtl:-scale-x-100" /></a></Button>
            <p className="mt-3.5 text-[.8rem] text-muted-2">{t.rate_asof.replace('{d}', ar ? CFG.rating_asof_ar : CFG.rating_asof)}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
