import { ArrowRight, FileText, ExternalLink as Linkedin, Mail } from 'lucide-react'
import { profile } from '@/lib/profile'
import { Headshot } from '@/components/headshot'

export function Hero() {
  const cvHref = profile.cvUrl ?? '#cv'

  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            {profile.title.join('  ·  ')}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-balance text-primary md:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-2 block text-xl font-normal text-muted-foreground md:text-2xl">
              {profile.credentials}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-foreground">
            I conduct research in sustainable bioprocess engineering, focusing on biomass
            fractionation, separation technologies, and sustainable materials development.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none"
            >
              Explore My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={cvHref}
              {...(profile.cvUrl ? { download: true } : {})}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary px-6 text-sm font-medium text-primary transition-colors hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none"
            >
              <FileText className="size-4" aria-hidden="true" />
              View Academic CV
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Mail className="size-4" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <Headshot />
        </div>
      </div>
    </section>
  )
}
