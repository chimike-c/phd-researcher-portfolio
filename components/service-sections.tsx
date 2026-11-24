import Link from 'next/link'
import { ArrowRight, Handshake, Heart, Puzzle, Rocket, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  access,
  betaLearning,
  delivery,
  engagement,
  inDevelopment,
  principles,
  tracks,
} from '@/lib/service'
import {
  BulletList,
  IconBadge,
  Placeholder,
  SectionHeader,
  StatusBadge,
} from '@/components/section-parts'

const accessIcons: Record<string, LucideIcon> = { heart: Heart, puzzle: Puzzle }

export function BetaLearningSection() {
  return (
    <section
      id="beta-learning"
      aria-labelledby="beta-heading"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader id="beta-heading" eyebrow="Leadership" title="Beta-Learning" />
        <p className="mt-3 font-medium text-foreground">
          {betaLearning.role} · {betaLearning.period}
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-pretty text-foreground">
              {betaLearning.summary}
            </p>
            <blockquote className="mt-6 border-l-2 border-primary/40 pl-5 font-serif text-lg leading-snug text-primary">
              {betaLearning.vision}
            </blockquote>

            <h3 className="mt-10 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Who We Serve
            </h3>
            <div className="mt-4">
              <BulletList items={betaLearning.audiences} />
            </div>
          </div>

          <div className="self-start rounded-xl border border-border bg-background p-7">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              My Leadership Responsibilities
            </h3>
            <div className="mt-5">
              <BulletList items={betaLearning.responsibilities} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AccessSection() {
  return (
    <section
      id="access"
      aria-labelledby="access-heading"
      className="scroll-mt-20 border-t border-border bg-secondary"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          id="access-heading"
          eyebrow="Community Impact"
          title="Expanding Access to Learning"
          intro="Two areas of Beta-Learning’s work that matter most to me."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {access.map((a) => (
            <article key={a.id} className="flex flex-col rounded-xl border border-border bg-card p-7">
              <IconBadge icon={accessIcons[a.icon]} />
              <h3 className="mt-5 font-serif text-xl leading-snug font-semibold text-primary">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
              <div className="mt-5 border-t border-border pt-5">
                <BulletList items={[...a.points]} />
                <ul className="mt-3 flex flex-col gap-3">
                  {a.placeholders.map((t) => (
                    <Placeholder key={t} text={t} />
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DeliverySection() {
  return (
    <section
      id="model"
      aria-labelledby="model-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          id="model-heading"
          eyebrow="How It Works"
          title="A Structured, Accountable Program Model"
          intro="I moved Beta-Learning from informal tutoring arrangements toward a coordinated model that gives students, tutors, and families a clear picture of progress."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {delivery.map((s) => (
            <li key={s.step} className="rounded-xl border border-border bg-card p-6">
              <span className="font-serif text-sm font-semibold text-muted-foreground">{s.step}</span>
              <h3 className="mt-2 font-serif text-lg leading-snug font-semibold text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ProgramsSection() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          id="programs-heading"
          eyebrow="Programs"
          title="Programs & Learning Tracks"
          intro="The range of learners and needs that Beta-Learning supports, from early childhood to college-level technical development."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <article key={t.title} className="rounded-xl border border-border bg-background p-7">
              <h3 className="font-serif text-lg leading-snug font-semibold text-primary">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-border p-7">
          <div className="flex items-center gap-3">
            <Rocket className="size-5 text-primary" aria-hidden="true" />
            <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              In Development
            </h3>
            <StatusBadge>Proposed</StatusBadge>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {inDevelopment.map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function EngagementSection() {
  return (
    <section
      id="engagement"
      aria-labelledby="engagement-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          id="engagement-heading"
          eyebrow="Engagement"
          title="Mentorship & Professional Engagement"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {engagement.map((e) => (
            <article key={e.title} className="flex flex-col rounded-xl border border-border bg-card p-7">
              <IconBadge icon={Handshake} />
              <h3 className="mt-5 font-serif text-lg leading-snug font-semibold text-primary">
                {e.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground">{e.organization}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              {'href' in e && e.href ? (
                <Link
                  href={e.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Teaching &amp; Mentorship
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="scroll-mt-20 border-t border-border bg-secondary"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-center gap-3">
          <Users className="size-5 text-primary" aria-hidden="true" />
          <h2
            id="principles-heading"
            className="font-serif text-3xl font-semibold text-primary md:text-4xl"
          >
            Guiding Principles
          </h2>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li key={p.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
