import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import {
  ExperienceSection,
  PhilosophySection,
  PortfolioMaterialsSection,
  TeachingCta,
  TeachingDevelopmentSection,
  TeachingIntro,
} from '@/components/teaching-sections'

export const metadata: Metadata = {
  title: 'Teaching & Mentorship | Divinegift J. Chimere',
  description:
    'Teaching and mentorship experience, philosophy, and professional development of Divinegift J. Chimere, PhD researcher and Graduate Teaching Assistant at Howard University.',
}

export default function TeachingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <TeachingIntro />
        <ExperienceSection />
        <PhilosophySection />
        <TeachingDevelopmentSection />
        <PortfolioMaterialsSection />
        <TeachingCta />
      </main>
      <SiteFooter />
    </>
  )
}
