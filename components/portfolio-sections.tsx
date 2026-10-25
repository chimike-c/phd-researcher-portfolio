import {
  ArrowRight,
  Download,
  FlaskConical,
  GraduationCap,
  Mail,
  Sprout,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { profile } from '@/lib/profile'

type Pillar = {
  id: string
  icon: LucideIcon
  label: string
  title: string
  description: string
  linkLabel: string
}

const pillars: Pillar[] = [
  {
    id: 'research',
    icon: FlaskConical,
    label: 'Research',
    title: 'Advancing Sustainable Engineering',
    description:
      'My research focuses on developing sustainable processes and separation technologies for the recovery and utilization of valuable materials from agricultural biomass. I combine experimental research, process development, and data analysis to explore resource-efficient engineering solutions.',
    linkLabel: 'Explore Research',
  },
  {
    id: 'teaching',
    icon: GraduationCap,
    label: 'Teaching',
    title: 'Supporting Learning and Development',
    description:
      'I am committed to creating engaging, inclusive, and supportive STEM learning environments. Through undergraduate laboratory instruction, academic mentorship, and educational program development, I aim to help students build confidence, strengthen technical understanding, and develop practical problem-solving skills.',
    linkLabel: 'Explore Teaching',
  },
  {
    id: 'service',
    icon: Users,
    label: 'Service',
    title: 'Leadership, Mentorship, and Community Impact',
    description:
      'I believe engineering expertise should extend beyond research and the classroom. Through educational leadership, mentorship, professional engagement, and my work with Beta-Learning, I contribute to initiatives that expand learning opportunities and support student and community development.',
    linkLabel: 'Explore Service',
  },
]

export function PillarsSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          My Work
        </p>
        <h2 id="work-heading" className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl">
          Three Professional Pillars
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map(({ id, icon: Icon, label, title, description, linkLabel }) => (
            <article
              key={id}
              id={id}
              className="flex scroll-mt-20 flex-col rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {label}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl leading-snug font-semibold text-balance text-primary">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <a
                href={`#${id}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                {linkLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LookingAhead() {
  return (
    <section aria-labelledby="ahead-heading" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <h2 id="ahead-heading" className="font-serif text-3xl font-semibold text-primary">
          Looking Ahead
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-pretty text-foreground">
          My long-term goal is to build a career that integrates engineering research, sustainable
          technology development, and higher education, while contributing to industry innovation,
          mentoring future engineers, and advancing meaningful community engagement.
        </p>
        <a
          href="#about"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Learn More About Me
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.6fr] md:gap-16 md:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">About</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl">
            Academic Background
          </h2>
        </div>
        <div className="flex flex-col gap-6 text-base leading-relaxed text-foreground md:text-lg">
          <p className="text-pretty">
            I am a PhD researcher in Biomedical and Chemical Engineering at Howard University,
            specializing in sustainable biomass processing, separation technologies, and materials
            development.
          </p>
          <p className="text-pretty">
            My broader interests include process optimization, engineering education, and
            translating research into practical applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export function DevelopmentSection() {
  return (
    <section id="development" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-14 md:flex-row md:items-center md:gap-10">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
          <Sprout className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary">Professional Development</h2>
          <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
            Workshops, training, and reflective accounts of the experiences preparing me for a
            career in research, industry, and higher education.
          </p>
        </div>
      </div>
    </section>
  )
}

export function CvSection() {
  return (
    <section id="cv" className="scroll-mt-20 bg-primary text-primary-foreground">
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
