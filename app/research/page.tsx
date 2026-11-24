import type { Metadata } from 'next'
import { FlaskConical } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageCta, PageIntro } from '@/components/section-parts'
import {
  DirectionSection,
  ImpactSection,
  MethodsSection,
  ProjectsSection,
  PublicationsSection,
  ThemesSection,
} from '@/components/research-sections'
import { profile } from '@/lib/profile'
import { researchIntro } from '@/lib/research'

export const metadata: Metadata = {
  title: 'Research | Divinegift J. Chimere',
  description:
    'Research on sustainable biomass fractionation and tribo-electrostatic separation (TES) at Howard University: themes, methods, projects, and publications.',
}

export default function ResearchPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Research"
          title="Advancing Sustainable Engineering"
          statement={researchIntro.statement}
          facts={researchIntro.facts}
        />
        <DirectionSection />
        <ThemesSection />
        <ImpactSection />
        <MethodsSection />
        <ProjectsSection />
        <PublicationsSection />
        <PageCta
          icon={FlaskConical}
          title="Interested in collaborating?"
          text="I welcome conversations about sustainable biomass processing, separation technologies, and related research."
          label="Get in touch"
          href={`mailto:${profile.email}?subject=Research%20Inquiry`}
        />
      </main>
      <SiteFooter />
    </>
  )
}
