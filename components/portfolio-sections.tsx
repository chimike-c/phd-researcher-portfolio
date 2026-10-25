import { BookOpen, Download, FlaskConical, GraduationCap, Mail, Sprout, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { profile } from '@/lib/profile'

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-semibold text-balance text-primary md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <SectionHeading eyebrow="About" title="About & Academic Background" />
        <div className="flex flex-col gap-6 text-base leading-relaxed text-foreground md:text-lg">
          <p className="text-pretty">
            I am a doctoral researcher in Biomedical and Chemical Engineering at Howard University,
            with a background spanning engineering research, manufacturing, teaching, and
            educational leadership.
          </p>
          <p className="text-pretty">
            As a graduate researcher, teaching assistant, and co-founder of Beta-Learning, I am
            passionate about advancing sustainable engineering solutions, supporting student
            development, and connecting research with meaningful educational and societal impact.
          </p>
          <div className="rounded-lg border-l-4 border-primary bg-secondary p-6">
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">Career Goals</h3>
            <p className="mt-2 text-base text-pretty">
              To pursue a career combining engineering research, industry innovation, and higher
              education, with a commitment to advancing sustainable technologies, teaching,
              mentorship, and service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

type Area = { id: string; icon: LucideIcon; title: string; description: string }

const areas: Area[] = [
  {
    id: 'teaching',
    icon: BookOpen,
    title: 'Teaching',
    description:
      'Teaching assistantship, course support, and an evolving teaching philosophy centered on student growth.',
  },
  {
    id: 'research',
    icon: FlaskConical,
    title: 'Research',
    description:
      'Sustainable bioprocess engineering: biomass fractionation, separation technologies, and sustainable materials.',
  },
  {
    id: 'service',
    icon: Users,
    title: 'Service & Leadership',
    description:
      'Educational leadership, mentorship, and co-founding Beta-Learning to expand access to learning.',
  },
  {
    id: 'development',
    icon: Sprout,
    title: 'Professional Development',
    description:
      'Workshops, training, and experiences preparing for a career in research, industry, and academia.',
  },
]

export function WorkAreas() {
  return (
    <section aria-labelledby="work-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Portfolio</p>
          <h2 id="work-heading" className="font-serif text-3xl font-semibold text-primary md:text-4xl">
            Explore My Work
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {areas.map(({ id, icon: Icon, title, description }) => (
            <article
              key={id}
              id={id}
              className="scroll-mt-20 rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-md bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CvSection() {
  return (
    <section id="cv" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <GraduationCap className="mt-1 size-8 shrink-0" aria-hidden="true" />
          <div>
            <h2 className="font-serif text-3xl font-semibold">Academic CV</h2>
            <p className="mt-2 max-w-lg leading-relaxed text-primary-foreground/80">
              {profile.cvUrl
                ? 'Download a complete record of my education, research, teaching, and service.'
                : 'My full academic CV will be available to download here shortly. In the meantime, feel free to reach out directly.'}
            </p>
          </div>
        </div>
        {profile.cvUrl ? (
          <a
            href={profile.cvUrl}
            download
            className="inline-flex h-12 items-center gap-2 rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary hover:bg-primary-foreground/90"
          >
            <Download className="size-4" aria-hidden="true" />
            Download CV
          </a>
        ) : (
          <a
            href={`mailto:${profile.email}?subject=CV%20Request`}
            className="inline-flex h-12 items-center gap-2 rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary hover:bg-primary-foreground/90"
          >
            <Mail className="size-4" aria-hidden="true" />
            Request CV by Email
          </a>
        )}
      </div>
    </section>
  )
}
