import { useState, type FormEvent } from 'react'
import { Lock, Phone } from 'lucide-react'
import { CFG } from '@/content/data'
import { Img } from '@/components/Img'
import { Rich } from '@/components/Rich'
import { InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useLang } from '@/lib/i18n'
import { waLink } from '@/lib/seo'
import { cn } from '@/lib/utils'

const field = 'h-[54px] rounded-[14px] border-line-2 bg-black/40 px-4 text-base text-ivory placeholder:text-muted-2 focus-visible:border-gold focus-visible:ring-gold/15 md:text-base'
const label = 'text-[.72rem] font-bold tracking-[.14em] text-muted-foreground uppercase rtl:text-[.88rem] rtl:tracking-normal'

export function Booking() {
  const { t, x, ar } = useLang()
  const [trip, setTrip] = useState('ride')
  const [to, setTo] = useState('')
  const today = new Date().toISOString().slice(0, 10)
  const wa = waLink(t.wa_hello)

  const pick = (v: string) => {
    if (!v) return
    setTrip(v)
    if (v === 'airport' && !to) setTo(t.js.airport)
  }
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget), j = t.js, v = (k: string) => String(f.get(k) || '').trim()
    const line = (k: string, val: string) => (val ? `• ${k}: ${val}` : null)
    const trips = j.trips as Record<string, string>
    const lines = [j.hello, line(j.type, trips[trip]), line(j.from, v('from')), line(j.to, v('to')),
      line(j.when, [v('date'), v('time')].filter(Boolean).join(' ') || j.now), line(x.car_msg, v('car') && v('car') !== x.car_opts[0] ? v('car') : ''), line(j.pax, v('pax')), line(j.bags, v('bags')),
      trip === 'airport' ? line(j.flight, v('flight')) : null, line(j.name, v('name')), line(j.notes, v('notes')), '', j.price]
    window.open(waLink(lines.filter(l => l !== null).join('\n')), '_blank', 'noopener')
  }

  const contacts = [
    { href: wa, ext: true, small: x.c_wa, big: CFG.tel_intl, ltr: true, icon: <WhatsAppIcon className="size-5" />, wa: true },
    { href: `tel:${CFG.tel}`, small: x.c_call, big: CFG.tel_intl, ltr: true, icon: <Phone className="size-5" /> },
    { href: CFG.instagram, ext: true, small: x.c_ig, big: '@vitotaxibycharbel', icon: <InstagramIcon className="size-5" /> },
  ]

  return (
    <section id="book" aria-labelledby="book-h" className="relative isolate overflow-hidden py-[clamp(90px,12vw,160px)]">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Img name="qadisha" className="opacity-30 saturate-[.85]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-ink)_0%,rgba(6,6,7,.72)_25%,rgba(6,6,7,.72)_75%,var(--color-ink)_100%)]" />
      </div>
      <div className="wrap grid items-start gap-11 lg:grid-cols-[.85fr_1.15fr] lg:gap-18">
        <div className="grid gap-5.5 lg:sticky lg:top-30">
          <Reveal><span className="eyebrow">{t.book_k}</span></Reveal>
          <Reveal delay={.05}><h2 id="book-h" className="display text-h2"><Rich text={t.book_h} /></h2></Reveal>
          <Reveal as="p" delay={.1} className="text-muted-foreground">{t.book_p}</Reveal>
          <Stagger className="mt-1.5 grid gap-2.5">
            {contacts.map(c => (
              <StaggerItem key={c.small}>
                <a href={c.href} {...(c.ext ? { target: '_blank', rel: 'noopener' } : {})}
                  className="flex items-center gap-3.5 rounded-[20px] border border-line-2 bg-[rgba(14,14,17,.65)] px-4.5 py-4 backdrop-blur-md transition-all duration-600 ease-lux hover:translate-x-1 hover:border-gold/50 rtl:hover:-translate-x-1">
                  <span className={cn('grid size-11.5 shrink-0 place-items-center rounded-full', c.wa ? 'bg-gradient-to-br from-[#2BE070] to-[#12A150] text-white' : 'bg-goldgrad text-gold-ink')}>{c.icon}</span>
                  <span><small className="block text-[.8rem] text-muted-foreground">{c.small}</small><b className="text-[1.05rem] text-ivory" dir={c.ltr ? 'ltr' : undefined}>{c.big}</b></span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <form id="bookform" noValidate onSubmit={submit}
            className="gold-edge rounded-[40px] border border-line-2 bg-[rgba(14,14,17,.8)] p-[clamp(22px,3.6vw,40px)] shadow-[0_50px_100px_-50px_#000] backdrop-blur-2xl">
            <h3 className="display mb-1 text-[2.4rem] rtl:text-[1.7rem]">{t.form_h}</h3>
            <p className="mb-6 text-[.95rem] text-muted-foreground">{t.form_sub}</p>
            <div className="grid gap-3.5">
              <div className="grid gap-2">
                <span className={label} id="trip-l">{t.trip_lbl}</span>
                <ToggleGroup type="single" dir={ar ? 'rtl' : 'ltr'} value={trip} onValueChange={pick} aria-labelledby="trip-l"
                  className="grid w-full grid-cols-2 gap-1 rounded-2xl border border-line-2 bg-black/40 p-1 sm:grid-cols-4">
                  {t.trips.map(([k, v]) => (
                    <ToggleGroupItem key={k} value={k}
                      className="h-11 rounded-xl! text-[.86rem] font-bold text-muted-foreground hover:bg-transparent hover:text-ivory data-[state=on]:bg-goldgrad data-[state=on]:text-gold-ink data-[state=on]:shadow-[0_8px_20px_-8px_rgba(245,184,46,.7)]">{v}</ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="grid gap-2"><Label htmlFor="f-from" className={label}>{t.f_from}</Label><Input id="f-from" name="from" autoComplete="street-address" placeholder={t.f_from_ph} className={field} /></div>
                <div className="grid gap-2"><Label htmlFor="f-to" className={label}>{t.f_to}</Label><Input id="f-to" name="to" value={to} onChange={e => setTo(e.target.value)} placeholder={t.f_to_ph} className={field} /></div>
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="grid gap-2"><Label htmlFor="f-date" className={label}>{t.f_date}</Label><Input id="f-date" name="date" type="date" min={today} className={field} /></div>
                <div className="grid gap-2"><Label htmlFor="f-time" className={label}>{t.f_time}</Label><Input id="f-time" name="time" type="time" className={field} /></div>
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="grid gap-2"><Label htmlFor="f-pax" className={label}>{t.f_pax}</Label>
                  <select id="f-pax" name="pax" defaultValue="2" className={cn(field, 'select-native w-full border')}>{t.pax_opts.map(o => <option key={o}>{o}</option>)}</select></div>
                <div className="grid gap-2"><Label htmlFor="f-bags" className={label}>{t.f_bags}</Label>
                  <select id="f-bags" name="bags" defaultValue="1" className={cn(field, 'select-native w-full border')}>{t.bags_opts.map(o => <option key={o}>{o}</option>)}</select></div>
              </div>
              <div className="grid gap-2"><Label htmlFor="f-car" className={label}>{x.f_car}</Label>
                <select id="f-car" name="car" defaultValue={x.car_opts[0]} className={cn(field, 'select-native w-full border')}>{x.car_opts.map(o => <option key={o}>{o}</option>)}</select></div>
              {trip === 'airport' && (
                <div className="grid gap-2"><Label htmlFor="f-flight" className={label}>{t.f_flight}</Label><Input id="f-flight" name="flight" placeholder={t.f_flight_ph} autoCapitalize="characters" className={field} /></div>
              )}
              <div className="grid gap-2"><Label htmlFor="f-name" className={label}>{t.f_name}</Label><Input id="f-name" name="name" autoComplete="name" placeholder={t.f_name_ph} className={field} /></div>
              <div className="grid gap-2"><Label htmlFor="f-notes" className={label}>{t.f_notes}</Label><Textarea id="f-notes" name="notes" rows={2} placeholder={t.f_notes_ph} className={cn(field, 'h-auto min-h-[90px] py-3.5')} /></div>
            </div>
            <div className="mt-5.5 grid gap-2.5 sm:grid-cols-[1.5fr_1fr]">
              <Button type="submit" variant="wa" size="xl"><WhatsAppIcon />{t.f_send}</Button>
              <Button asChild variant="glass" size="xl"><a href={`tel:${CFG.tel}`}><Phone />{t.f_call}</a></Button>
            </div>
            <p className="mt-3.5 flex items-start gap-2 text-[.82rem] text-muted-2"><Lock className="mt-[3px] size-[15px] shrink-0 text-gold-3" />{t.fine}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
