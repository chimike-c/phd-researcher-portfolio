import Link from 'next/link'
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  FileText,
  Heart,
  Sprout,
} from 'lucide-react'
import { developmentPrograms, profile } from '@/lib/profile'
import {
  experience,
  philosophy,
  portfolioMaterials,
  teachingIntro,
} from '@/lib/teaching'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  )
}

// Text in [brackets] is a placeholder to be replaced; show it in italics.
function Detail({ text }: { text: string }) {
  const isPlaceholder = text.startsWith('[')
  return (
    <li className="flex gap-3 text-sm leading-relaxed">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
      <span className={isPlaceholder ? 'text-muted-foreground italic' : 'text-foreground'}>
        {text}
      </span>
    </li>
  )
}

export function TeachingIntro() {
  return (
    <section aria-labelledby="teaching-heading" className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-20">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to home
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <Eyebrow>Teaching &amp; Mentorship</Eyebrow>
          <h1
            id="teaching-heading"
            className="mt-3 font-serif text-3xl font-semibold text-balance text-primary md:text-5xl"
          >
            Supporting Learning and Development
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-foreground">
            {teachingIntro.statement}
          </p>
        </div>

        <dl className="flex flex-col divide-y divide-border self-center rounded-xl border border-border bg-card">
          {teachingIntro.highlights.map((item) => (
            <div key={item.label} className="px-6 py-4">
              <dt className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {item.label}
              </dt>
              <dd className="mt-1 font-serif text-lg font-semibold text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Eyebrow>Experience</Eyebrow>
        <h2
          id="experience-heading"
          className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl"
        >
          Teaching &amp; Mentorship Experience
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {experience.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-xl border border-border bg-background p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-accent text-primary">
                  <Briefcase className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
              </div>
              <h3 className="mt-5 font-serif text-xl leading-snug font-semibold text-primary">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground">{item.organization}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <ul className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
                {item.details.map((d) => (
                  <Detail key={d} text={d} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="scroll-mt-20 border-t border-border bg-secondary"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-center gap-3">
          <Heart className="size-5 text-primary" aria-hidden="true" />
          <Eyebrow>Philosophy</Eyebrow>
        </div>
        <h2
          id="philosophy-heading"
          className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl"
        >
          Teaching &amp; Mentorship Philosophy
        </h2>
        <p className="mt-5 max-w-3xl font-serif text-xl leading-snug text-pretty text-foreground md:text-2xl">
          {philosophy.lead}
        </p>

        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {philosophy.principles.map((p, i) => (
            <li key={p.title} className="rounded-xl border border-border bg-card p-7">
              <span className="font-serif text-sm font-semibold text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-serif text-lg leading-snug font-semibold text-primary">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function TeachingDevelopmentSection() {
  return (
    <section
      id="teaching-development"
      aria-labelledby="teaching-development-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Eyebrow>Growth</Eyebrow>
        <h2
          id="teaching-development-heading"
          className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl"
        >
          Teaching-Related Professional Development
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Formal training that strengthens my teaching and prepares me for a faculty career.
          Entries are added as I complete new programs.
        </p>

        <ul className="mt-10 flex flex-col gap-4">
          {developmentPrograms.map((item) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-7"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                <Sprout className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-lg leading-snug font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-foreground">
                  {item.organization} · {item.years}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
          <li className="flex gap-4 rounded-xl border border-dashed border-border p-7 text-sm text-muted-foreground italic">
            <Award className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            [Add other teaching workshops, certificates, or training here]
          </li>
        </ul>
      </div>
    </section>
  )
}

export function PortfolioMaterialsSection() {
  return (
    <section
      id="materials"
      aria-labelledby="materials-heading"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Eyebrow>Evidence</Eyebrow>
        <h2
          id="materials-heading"
          className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl"
        >
          Teaching Portfolio Materials
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          This portfolio is growing alongside my training. Supporting materials will be added here as
          they are completed.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {portfolioMaterials.map((m) => (
            <article
              key={m.title}
              className="flex flex-col rounded-xl border border-border bg-background p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-md bg-accent text-primary">
                  <FileText className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  Coming soon
                </span>
              </div>
              <h3 className="mt-5 font-serif text-lg leading-snug font-semibold text-primary">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeachingCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <BookOpen className="mt-1 size-8 shrink-0" aria-hidden="true" />
          <div>
            <h2 className="font-serif text-2xl font-semibold">Interested in my teaching?</h2>
            <p className="mt-2 max-w-lg leading-relaxed text-primary-foreground/80">
              I am happy to share more about my teaching experience and approach.
            </p>
          </div>
        </div>
        <a
          href={`mailto:${profile.email}?subject=Teaching%20Portfolio`}
          className="inline-flex h-12 items-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary hover:bg-primary-foreground/90"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
