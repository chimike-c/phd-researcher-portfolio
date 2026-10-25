import Image from 'next/image'
import { ExternalLink as Linkedin, Mail, UserRound } from 'lucide-react'
import { profile } from '@/lib/profile'

/** Set to "/images/headshot.jpg" after adding the photo to /public/images. */
const HEADSHOT_SRC: string | null = null

export function Headshot() {
  return (
    <figure className="mx-auto flex w-full max-w-sm flex-col items-center">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-secondary shadow-sm">
        {HEADSHOT_SRC ? (
          <Image
            src={HEADSHOT_SRC}
            alt={`Professional headshot of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 768px) 384px, 90vw"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`Headshot placeholder for ${profile.name}`}
            className="flex h-full w-full flex-col items-center justify-center gap-3 text-primary/60"
          >
            <UserRound className="size-12" strokeWidth={1.25} aria-hidden="true" />
            <span className="text-sm">Professional headshot</span>
          </div>
        )}
      </div>

      <figcaption className="mt-5 flex flex-col items-center text-center">
        <span className="font-serif text-lg font-semibold text-primary">{profile.name}</span>
        <span className="mt-1 text-sm text-muted-foreground">{profile.affiliation}</span>
        <span className="text-sm text-muted-foreground">{profile.department}</span>
        <div className="mt-3 flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex size-9 items-center justify-center rounded-md text-primary transition-colors hover:bg-accent"
          >
            <Mail className="size-4" aria-hidden="true" />
            <span className="sr-only">Email {profile.email}</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-md text-primary transition-colors hover:bg-accent"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            <span className="sr-only">LinkedIn profile (opens in a new tab)</span>
          </a>
        </div>
      </figcaption>
    </figure>
  )
}
