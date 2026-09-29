import { CREDITS } from '@/content/data'
import { Rich } from '@/components/Rich'
import { useLang } from '@/lib/i18n'

export default function Credits() {
  const { x } = useLang()
  const link = 'text-gold-2 underline underline-offset-4'
  return (
    <section className="pt-44 pb-24">
      <div className="wrap">
        <div className="mb-8 grid max-w-[820px] gap-4.5"><span className="eyebrow">{x.credits}</span>
          <h1 className="display text-h2"><Rich text={x.credits_h} /></h1><p className="text-muted-foreground">{x.credits_p}</p></div>
        <ul className="grid gap-2.5">
          <li className="rounded-2xl border border-line bg-tile px-4.5 py-4 text-[.92rem] text-muted-foreground"><b className="text-ivory">The Vito Taxi van</b> — Vito Taxi by Charbel’s own promotional image.</li>
          <li className="rounded-2xl border border-line bg-tile px-4.5 py-4 text-[.92rem] text-muted-foreground"><b className="text-ivory">Mercedes-Benz details</b> — Unsplash contributors, <a className={link} href="https://unsplash.com/license" target="_blank" rel="noopener">Unsplash License</a>. The photos illustrate the car model.</li>
          {Object.entries(CREDITS).map(([k, c]) => (
            <li key={k} className="rounded-2xl border border-line bg-tile px-4.5 py-4 text-[.92rem] text-muted-foreground">
              <b className="text-ivory">{c.title}</b> — {c.creator ?? 'Unknown'}, <a className={link} href={c.lurl ?? '#'} target="_blank" rel="noopener">{c.license === 'cc0' ? 'CC0' : `CC ${c.license.toUpperCase()} ${c.lv}`}</a> · <a className={link} href={c.src ?? '#'} target="_blank" rel="noopener">source</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
