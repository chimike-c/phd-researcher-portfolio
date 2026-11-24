import type { Metadata } from 'next'
import { Users } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageCta, PageIntro } from '@/components/section-parts'
import {
  AccessSection,
  BetaLearningSection,
  DeliverySection,
  EngagementSection,
  PrinciplesSection,
  ProgramsSection,
} from '@/components/service-sections'
import { profile } from '@/lib/profile'
import { serviceIntro } from '@/lib/service'

export const metadata: Metadata = {
  title: 'Service & Leadership | Divinegift J. Chimere',
  description:
    'Leadership, mentorship, and community impact: Beta-Learning programs for students from low-income families and students with learning differences, plus mentoring and professional engagement.',
}

export default function ServicePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Service & Leadership"
          title="Leadership, Mentorship, and Community Impact"
          statement={serviceIntro.statement}
          facts={serviceIntro.facts}
        />
        <BetaLearningSection />
        <AccessSection />
        <DeliverySection />
        <ProgramsSection />
        <EngagementSection />
        <PrinciplesSection />
        <PageCta
          icon={Users}
          title="Let’s work together"
          text="I am glad to talk about Beta-Learning, mentorship, or opportunities to expand access to learning."
          label="Get in touch"
          href={`mailto:${profile.email}?subject=Service%20and%20Leadership`}
        />
      </main>
      <SiteFooter />
    </>
  )
}
