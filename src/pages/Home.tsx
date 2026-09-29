import { Bento } from '@/components/sections/Bento'
import { Booking } from '@/components/sections/Booking'
import { Destinations } from '@/components/sections/Destinations'
import { Faq } from '@/components/sections/Faq'
import { FinalCta } from '@/components/sections/FinalCta'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Review } from '@/components/sections/Review'
import { Services } from '@/components/sections/Services'
import { Steps } from '@/components/sections/Steps'
import { TheVito } from '@/components/sections/TheVito'
import { useLang } from '@/lib/i18n'

export default function Home() {
  const { t } = useLang()
  return (
    <>
      <Hero />
      <Marquee />
      <Bento />
      <Services />
      <TheVito />
      <Destinations />
      <Steps />
      <Booking />
      <Review />
      <Faq items={t.faq} />
      <FinalCta />
    </>
  )
}
