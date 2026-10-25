import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection, CvSection, WorkAreas } from '@/components/portfolio-sections'
import { profile } from '@/lib/profile'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <WorkAreas />
        <CvSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <a href={`mailto:${profile.email}`} className="hover:text-primary">
            {profile.email}
          </a>
        </div>
      </footer>
    </>
  )
}
