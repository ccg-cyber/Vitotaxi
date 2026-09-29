import { createContext, useContext, type ReactNode } from 'react'
import { T, X, type Lang } from '@/content/data'
import { path } from '@/lib/seo'

type Ctx = { lang: Lang; t: (typeof T)['en']; x: (typeof X)['en']; ar: boolean; home: string; to: (slug?: string) => string }
const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const value: Ctx = { lang, t: T[lang], x: X[lang], ar: lang === 'ar', home: path(lang), to: (slug = '') => path(lang, slug) }
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const c = useContext(LangContext)
  if (!c) throw new Error('useLang outside LangProvider')
  return c
}

/* Western digits to Arabic-Indic, for the Arabic pages. */
export const arDigits = (s: string) => s.replace(/[0-9.]/g, d => (d === '.' ? '٫' : '٠١٢٣٤٥٦٧٨٩'[+d]))
