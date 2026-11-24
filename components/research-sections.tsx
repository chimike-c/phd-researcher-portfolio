import {
  BarChart3,
  Beaker,
  Leaf,
  Microscope,
  Recycle,
  Sprout,
  Target,
  Wheat,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  approach,
  computational,
  direction,
  impact,
  instruments,
  presentations,
  projects,
  publications,
  publicationsNote,
  themes,
} from '@/lib/research'
import type { Project } from '@/lib/research'
import { profile } from '@/lib/profile'
import { BulletList, EmptyState, IconBadge, SectionHeader, StatusBadge } from '@/components/section-parts'

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  zap: Zap,
  chart: BarChart3,
  recycle: Recycle,
  leaf: Leaf,
  target: Target,
  wheat: Wheat,
}

export function DirectionSection() {
  return (
    <section
      id="direction"
      aria-labelledby="direction-heading"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader id="direction-heading" eyebrow="Direction" title="Overall Research Direction" />
        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <p className="font-serif text-xl leading-snug text-pretty text-foreground md:text-2xl">
            {direction.lead}
          </p>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Guiding Questions
            </h3>
            <ol className="mt-4 flex flex-col gap-4">
              {direction.questions.map((q, i) => (
                <li key={q} className="flex gap-4 text-sm leading-relaxed text-foreground">
                  <span className="font-serif font-semibold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ThemesSection() {
  return (
    <section
      id="themes"
      aria-labelledby="themes-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader id="themes-heading" eyebrow="Themes" title="Research Themes" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {themes.map((t) => (
            <article key={t.title} className="rounded-xl border border-border bg-card p-7">
              <IconBadge icon={icons[t.icon]} />
              <h3 className="mt-5 font-serif text-xl leading-snug font-semibold text-primary">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ImpactSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="scroll-mt-20 border-t border-border bg-secondary"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          id="impact-heading"
          eyebrow="Impact"
          title="Expected Impact"
          intro="Where this work could make a difference, from the lab bench to sustainable industry."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-card p-6">
              <IconBadge icon={icons[item.icon]} />
              <h3 className="mt-4 font-serif text-lg leading-snug font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MethodsSection() {
  return (
    <section
      id="methods"
      aria-labelledby="methods-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          id="methods-heading"
          eyebrow="Methods"
          title="Experimental Approach, Tools & Skills"
          intro="How the research moves from raw biomass to interpreted results."
        />

        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {approach.map((s) => (
            <li key={s.step} className="rounded-xl border border-border bg-card p-6">
              <span className="font-serif text-sm font-semibold text-muted-foreground">{s.step}</span>
              <h3 className="mt-2 font-serif text-lg leading-snug font-semibold text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <Microscope className="size-5 text-primary" aria-hidden="true" />
              <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Instrumentation &amp; Experimental Setup
              </h3>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {instruments.map((i) => (
                <li key={i.name} className="rounded-xl border border-border bg-card p-5">
                  <p className="font-serif text-lg font-semibold text-primary">{i.name}</p>
                  <p className="text-xs text-muted-foreground">{i.full}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{i.use}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Beaker className="size-5 text-primary" aria-hidden="true" />
              <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Computational &amp; Analytical Skills
              </h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {computational.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-background p-7">
      <div className="flex items-center justify-between gap-3">
        <StatusBadge tone={project.status === 'Ongoing' ? 'solid' : 'muted'}>
          {project.status}
        </StatusBadge>
        {project.period ? (
          <span className="text-sm font-medium text-muted-foreground">{project.period}</span>
        ) : null}
      </div>
      <h4 className="mt-4 font-serif text-xl leading-snug font-semibold text-primary">
        {project.title}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      {project.points.length > 0 ? (
        <div className="mt-5 border-t border-border pt-5">
          <BulletList items={project.points} />
        </div>
      ) : null}
    </article>
  )
}

export function ProjectsSection() {
  const ongoing = projects.filter((p) => p.status === 'Ongoing')
  const completed = projects.filter((p) => p.status === 'Completed')
  const future = projects.filter((p) => p.status === 'Future direction')

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader id="projects-heading" eyebrow="Projects" title="Ongoing, Completed & Future Projects" />

        <h3 className="mt-10 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Ongoing
        </h3>
        <div className="mt-4 grid gap-6">
          {ongoing.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <h3 className="mt-12 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Completed
        </h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {completed.length > 0 ? (
            completed.map((p) => <ProjectCard key={p.id} project={p} />)
          ) : (
            <EmptyState>Completed projects will be added here as results are finalized.</EmptyState>
          )}
        </div>

        <h3 className="mt-12 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Future Directions
        </h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {future.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function PublicationsSection() {
  const sorted = [...publications].sort((a, b) => b.year.localeCompare(a.year))
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          id="publications-heading"
          eyebrow="Scholarship"
          title="Publications & Presentations"
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Publications
            </h3>
            <div className="mt-4">
              {sorted.length === 0 ? (
                <EmptyState>
                  {publicationsNote}{' '}
                  {profile.cvUrl ? (
                    <a
                      href={profile.cvUrl}
                      download
                      className="font-medium text-primary underline underline-offset-4"
                    >
                      Download CV
                    </a>
                  ) : null}
                </EmptyState>
              ) : (
                <ul className="flex flex-col gap-4">
                  {sorted.map((p) => (
                    <li key={p.title} className="rounded-xl border border-border bg-card p-6">
                      <p className="font-serif text-lg leading-snug font-semibold text-primary">
                        {p.href ? (
                          <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {p.title}
                          </a>
                        ) : (
                          p.title
                        )}
                      </p>
                      <p className="mt-1 text-sm text-foreground">{p.authors}</p>
                      <p className="mt-1 text-sm text-muted-foreground italic">
                        {p.venue}, {p.year}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Presentations &amp; Symposia
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              {presentations.map((p) => (
                <li key={p.title} className="rounded-xl border border-border bg-card p-6">
                  <p className="font-medium text-foreground">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.venue}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
