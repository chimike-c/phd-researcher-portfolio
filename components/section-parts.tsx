import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Small building blocks shared by the Research and Service & Leadership pages.

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  )
}

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
      <Icon className="size-5" aria-hidden="true" />
    </span>
  )
}

export function StatusBadge({
  children,
  tone = 'muted',
}: {
  children: React.ReactNode
  tone?: 'solid' | 'muted'
}) {
  return (
    <span
      className={
        tone === 'solid'
          ? 'shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground'
          : 'shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground'
      }
    >
      {children}
    </span>
  )
}

// Text in [brackets] is a placeholder; it renders in italics so it is easy to spot.
export function Placeholder({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground italic">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-border" aria-hidden="true" />
      <span>{text}</span>
    </li>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((text) => (
        <li key={text} className="flex gap-3 text-sm leading-relaxed text-foreground">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  )
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-border p-7 text-sm leading-relaxed text-muted-foreground">
      {children}
    </div>
  )
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </>
  )
}

export type Fact = { label: string; value: string }

export function PageIntro({
  eyebrow,
  title,
  statement,
  facts,
}: {
  eyebrow: string
  title: string
  statement: string
  facts: Fact[]
}) {
  return (
    <section
      aria-labelledby="page-heading"
      className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pb-20"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to home
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            id="page-heading"
            className="mt-3 font-serif text-3xl font-semibold text-balance text-primary md:text-5xl"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-foreground">
            {statement}
          </p>
        </div>

        <dl className="flex flex-col divide-y divide-border self-center rounded-xl border border-border bg-card">
          {facts.map((item) => (
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

export function PageCta({
  icon: Icon,
  title,
  text,
  label,
  href,
}: {
  icon: LucideIcon
  title: string
  text: string
  label: string
  href: string
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <Icon className="mt-1 size-8 shrink-0" aria-hidden="true" />
          <div>
            <h2 className="font-serif text-2xl font-semibold">{title}</h2>
            <p className="mt-2 max-w-lg leading-relaxed text-primary-foreground/80">{text}</p>
          </div>
        </div>
        <a
          href={href}
          className="inline-flex h-12 items-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary hover:bg-primary-foreground/90"
        >
          {label}
        </a>
      </div>
    </section>
  )
}
