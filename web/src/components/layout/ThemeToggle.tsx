import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useLang } from '@/lib/i18n'

type Theme = 'day' | 'night'
const auto = (): Theme => { const h = new Date().getHours(); return h >= 6 && h < 18 ? 'day' : 'night' }

function apply(t: Theme) {
  document.documentElement.setAttribute('data-theme', t)
  document.querySelector('meta[name=theme-color]')?.setAttribute('content', t === 'day' ? '#F7F3EA' : '#060607')
}

/* Sun/moon switch. The site follows the clock by default; a tap overrides it for this visit only. */
export function ThemeToggle() {
  const { ar } = useLang()
  const [theme, setTheme] = useState<Theme | null>(null)
  useEffect(() => {
    setTheme((document.documentElement.getAttribute('data-theme') as Theme) || auto())
    // Follow the clock across 6:00 and 18:00 while the page stays open, unless the visitor chose.
    const id = setInterval(() => {
      let chosen = false
      try { chosen = !!sessionStorage.getItem('vt-theme') } catch { /* ignore */ }
      if (!chosen) { const t = auto(); apply(t); setTheme(t) }
    }, 60000)
    return () => clearInterval(id)
  }, [])
  const next: Theme = theme === 'day' ? 'night' : 'day'
  const label = ar ? (next === 'day' ? 'الوضع النهاري' : 'الوضع الليلي') : next === 'day' ? 'Switch to day mode' : 'Switch to night mode'
  return (
    <button type="button" aria-label={label} title={label}
      onClick={() => { apply(next); setTheme(next); try { sessionStorage.setItem('vt-theme', next) } catch { /* ignore */ } }}
      className="grid size-11 place-items-center rounded-full border border-line-2 text-ivory transition-colors hover:border-gold hover:text-gold-2">
      {theme === 'day' ? <Moon className="size-[18px]" /> : <Sun className="size-[18px]" />}
    </button>
  )
}
