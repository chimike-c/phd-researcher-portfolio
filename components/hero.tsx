import { ArrowRight, FileText } from 'lucide-react'
import { profile } from '@/lib/profile'
import { Headshot } from '@/components/headshot'

export function Hero() {
  const cvHref = profile.cvUrl ?? '#cv'

  return (
    <section id="home" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-14 pb-16 md:pt-20 md:pb-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            {profile.roles.join(' · ')}
          </p>

          <h1 className="mt-4 font-serif text-3xl font-semibold text-primary md:text-4xl">
            {profile.name}
            <span className="ml-2 text-lg font-normal text-muted-foreground md:text-xl">
              {profile.credentials}
            </span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            {profile.title.join(' | ')}
          </p>

          <p className="mt-8 font-serif text-2xl leading-snug font-medium text-balance text-foreground md:text-3xl lg:text-4xl">
            Advancing sustainable engineering solutions through research, innovation, and
            education.
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-pretty text-muted-foreground">
            I am passionate about advancing sustainable engineering solutions through research,
            innovation, and education. My professional journey brings together engineering
            research, industry experience, teaching, and mentorship, driven by a commitment to
            solving real-world challenges, developing future engineers, and creating meaningful
            societal impact.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none"
            >
              Explore My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={cvHref}
              {...(profile.cvUrl ? { download: true } : {})}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary px-6 text-sm font-medium text-primary transition-colors hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none"
            >
              <FileText className="size-4" aria-hidden="true" />
              View Academic CV
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Headshot />
        </div>
      </div>
    </section>
  )
}
