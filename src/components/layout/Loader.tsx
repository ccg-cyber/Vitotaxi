import { Mark } from '@/components/Logo'
import { useLang } from '@/lib/i18n'

/* Pure CSS: draws the mark, then lifts away on its own. Skipped on repeat visits by a script in <head>. */
export function Loader() {
  const { x } = useLang()
  return (
    <div className="loader" aria-hidden="true">
      <div className="text-center">
        <Mark className="mx-auto size-28" />
        <div className="loader-word mt-5 ps-[.5em] text-[.8rem] font-extrabold tracking-[.5em] text-ivory">
          VITO TAXI<small className="mt-1.5 block text-[.62rem] tracking-[.35em] text-gold">{x.loader}</small>
        </div>
      </div>
    </div>
  )
}
