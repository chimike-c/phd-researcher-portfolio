import Image from 'next/image'
import { profile } from '@/lib/profile'

/** Set to "/images/headshot.jpg" after adding the photo to /public/images. */
const HEADSHOT_SRC: string | null = null

export function Headshot() {
  return (
    <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
      <div aria-hidden="true" className="absolute -right-3 -bottom-3 h-full w-full rounded-lg bg-accent" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-primary">
        {HEADSHOT_SRC ? (
          <Image
            src={HEADSHOT_SRC}
            alt={`Professional headshot of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 768px) 384px, 320px"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`Portrait placeholder for ${profile.name}`}
            className="flex h-full w-full flex-col items-center justify-center gap-3 text-primary-foreground"
          >
            <span className="font-serif text-7xl font-semibold tracking-tight">DC</span>
            <span className="text-xs tracking-widest text-primary-foreground/70 uppercase">
              Headshot coming soon
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
