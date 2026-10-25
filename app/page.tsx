import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import {
  AboutSection,
  CvSection,
  DevelopmentSection,
  LookingAhead,
  PillarsSection,
} from '@/components/portfolio-sections'
import { profile } from '@/lib/profile'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PillarsSection />
        <LookingAhead />
        <AboutSection />
        <DevelopmentSection />
        <CvSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-6">
            <a href={`mailto:${profile.email}`} className="hover:text-primary">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
