import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { MapPin, Calendar, Languages, Handshake, Music, Crown, Dribbble, Film, Telescope } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { dict: Dictionary }

const factIcons = [MapPin, Calendar, Languages, Handshake]
const interestIcons = { music: Music, chess: Crown, basketball: Dribbble, film: Film, watch: Telescope } as const

export function AboutSection({ dict }: Props) {
  const { about } = dict

  return (
    <section className="mb-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading as="h1" eyebrow={about.eyebrow} title={about.title} subtitle={about.subtitle} />

        <div className="mb-28 grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-5" data-reveal>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-px rounded-[2.1rem] bg-gradient-to-br from-primary/60 via-transparent to-gold/50 opacity-70" aria-hidden />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
                <Image
                  src="/images/gilles-profile.png"
                  alt={about.imageAlt}
                  width={640}
                  height={800}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>
            <ul className="mx-auto mt-8 grid max-w-sm gap-3 lg:max-w-none">
              {about.facts.map((fact, index) => {
                const Icon = factIcons[index]
                return (
                  <li key={fact.label} className="flex items-center gap-3 rounded-2xl border border-border bg-foreground/[0.03] px-4 py-3 text-sm">
                    <Icon className="h-4 w-4 text-primary" />
                    {fact.label}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="space-y-8 lg:col-span-7" data-reveal style={{ ["--d" as string]: "100ms" }}>
            <div>
              <h2 className="text-4xl font-semibold tracking-tight">Gilles SOB</h2>
              <p className="eyebrow mt-3 !text-muted-foreground">{about.fullName}</p>
            </div>
            <div className="space-y-6">
              {about.bio.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={`leading-relaxed ${index === 0 ? "text-2xl text-foreground sm:text-[1.65rem] sm:leading-snug" : "text-lg text-muted-foreground"}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="flex flex-wrap gap-2 pt-2">
              {about.beyond.qualities.map((quality) => (
                <li key={quality} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                  {quality}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SectionHeading eyebrow="01 / 02" title={about.strengthsTitle} />
        <div className="mb-28 grid grid-cols-1 gap-6 md:grid-cols-3">
          {about.strengths.map((strength, index) => (
            <div key={strength.title} data-reveal data-spotlight style={{ ["--d" as string]: `${index * 90}ms` }} className="surface overflow-hidden p-8">
              <p className="display text-5xl text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{strength.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{strength.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="02 / 02" title={about.beyond.title} subtitle={about.beyond.subtitle} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {about.beyond.interests.map((interest, index) => {
            const Icon = interestIcons[interest.icon as keyof typeof interestIcons]
            return (
              <div key={interest.title} data-reveal data-spotlight style={{ ["--d" as string]: `${index * 70}ms` }} className="surface overflow-hidden p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-semibold">{interest.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{interest.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
