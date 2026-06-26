import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Ticker } from '@/components/ticker'
import { Problem } from '@/components/problem'
import { Capabilities } from '@/components/capabilities'
import { LiveProof } from '@/components/live-proof'
import { Pricing } from '@/components/pricing'
import { RoiCalculator } from '@/components/roi-calculator'
import { Close } from '@/components/close'
import { SiteFooter } from '@/components/site-footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { MagneticCursor } from '@/components/magnetic-cursor'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <MagneticCursor />
      <SiteNav />
      <Hero />
      <Ticker />
      <Problem />
      <Capabilities />
      <LiveProof />
      <Pricing />
      <RoiCalculator />
      <Close />
      <SiteFooter />
    </main>
  )
}
