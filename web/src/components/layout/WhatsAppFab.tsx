import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, X as Close } from 'lucide-react'
import { CFG } from '@/content/data'
import { Mark } from '@/components/Logo'
import { WhatsAppIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'
import { cn } from '@/lib/utils'

/* Glass pill with a rotating gold ring. Opens to a label on hover, and greets once per visit. */
export function WhatsAppFab() {
  const { t, x, ar } = useLang()
  const [bubble, setBubble] = useState(false)
  useEffect(() => {
    let seen = false
    try { seen = sessionStorage.getItem('vt-bubble') === '1' } catch { /* private mode */ }
    if (seen) return
    const id = setTimeout(() => setBubble(true), 9000)
    return () => clearTimeout(id)
  }, [])
  const close = () => { setBubble(false); try { sessionStorage.setItem('vt-bubble', '1') } catch { /* ignore */ } }
  const href = waLink(t.wa_hello)
  return (
    <>
      <AnimatePresence>
        {bubble && (
          <motion.div role="dialog" aria-label={x.fab_b}
            initial={{ opacity: 0, y: 14, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: .96 }}
            transition={{ duration: .6, ease: [0.19, 1, 0.22, 1] }}
            className={cn('fixed end-[18px] bottom-[calc(100px+env(safe-area-inset-bottom,0px))] z-119 w-[min(310px,calc(100vw-36px))] rounded-[22px] rounded-ee-md border border-line-2 bg-[rgba(18,18,22,.94)] p-4.5 shadow-[0_30px_60px_-20px_#000] backdrop-blur-xl',
              ar ? 'origin-bottom-left' : 'origin-bottom-right')}>
            <button onClick={close} aria-label="Close" className="absolute end-2.5 top-2.5 grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-white/8 hover:text-ivory"><Close className="size-4" /></button>
            <div className="mb-2.5 flex items-center gap-2.5">
              <Mark className="size-9" />
              <div><b className="block text-[.92rem] text-ivory">{x.bub_name}</b>
                <small className="flex items-center gap-1.5 text-[.74rem] text-[#3BE37F]"><i className="size-1.5 rounded-full bg-[#3BE37F]" />{x.bub_on}</small></div>
            </div>
            <p className="rounded-2xl rounded-ss-sm bg-white/6 px-3.5 py-3 text-[.93rem]">{x.bub_msg}</p>
            <Button asChild variant="wa" size="pill" className="mt-3 w-full"><a href={href} target="_blank" rel="noopener" onClick={close}><WhatsAppIcon />{x.bub_go}</a></Button>
          </motion.div>
        )}
      </AnimatePresence>

      <a href={href} target="_blank" rel="noopener" aria-label={x.fab_b} onClick={close}
        className="wa-ring group fixed end-[18px] bottom-[calc(18px+env(safe-area-inset-bottom,0px))] z-120 flex h-[68px] items-center rounded-full bg-[rgba(12,12,14,.8)] p-1.5 text-ivory shadow-[0_22px_50px_-16px_rgba(0,0,0,.95),inset_0_0_0_1px_rgba(245,184,46,.22)] backdrop-blur-xl transition-transform duration-500 ease-lux hover:-translate-y-[3px]">
        <span className="relative grid size-14 shrink-0 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#5CF29A,#1FBF5B_55%,#0E8A45)] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,.5),0_8px_22px_-6px_rgba(37,211,102,.8)]">
          <WhatsAppIcon className="size-[29px]" />
          <span className="absolute -inset-[5px] animate-ring rounded-full border-2 border-[rgba(37,211,102,.55)]" />
        </span>
        <span className={cn('grid max-w-0 overflow-hidden whitespace-nowrap transition-all duration-700 ease-lux group-hover:max-w-60 group-hover:ps-3.5 group-hover:pe-5', bubble && 'max-w-60 ps-3.5 pe-5')}>
          <b className="text-[.98rem] leading-tight">{x.fab_b}</b>
          <small className="flex items-center gap-1.5 text-[.76rem] text-muted-foreground"><i className="size-[7px] rounded-full bg-[#3BE37F] shadow-[0_0_8px_#3BE37F]" />{x.fab_s}</small>
        </span>
      </a>

      <a href={`tel:${CFG.tel}`} aria-label={`${t.call} ${CFG.tel_show}`}
        className="fixed start-[18px] bottom-[calc(22px+env(safe-area-inset-bottom,0px))] z-120 grid size-[60px] place-items-center rounded-full bg-goldgrad text-gold-ink shadow-[0_18px_40px_-14px_rgba(245,184,46,.8)] transition-transform duration-500 ease-lux hover:-translate-y-[3px] lg:hidden">
        <Phone className="size-6" />
      </a>
    </>
  )
}
