import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import {
  AboutSection,
  CvSection,
  LookingAhead,
  PillarsSection,
} from '@/components/portfolio-sections'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PillarsSection />
        <LookingAhead />
        <AboutSection />
        <CvSection />
      </main>
      <SiteFooter />
    </>
  )
}
