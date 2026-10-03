import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Languages, Handshake, Music, Crown, Dribbble, Film, Telescope } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { dict: Dictionary }

const factIcons = [MapPin, Calendar, Languages, Handshake]
const interestIcons = { music: Music, chess: Crown, basketball: Dribbble, film: Film, watch: Telescope } as const

export function AboutSection({ dict }: Props) {
  const { about } = dict

  return (
    <section className="mb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{about.title}</h1>
          <p className="text-balance text-xl text-muted-foreground">{about.subtitle}</p>
        </div>

        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="h-80 w-80 overflow-hidden rounded-2xl border-4 border-primary/20 shadow-2xl">
              <Image
                src="/images/gilles-profile.png"
                alt={about.imageAlt}
                width={320}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-1 text-3xl font-bold">Gilles SOB</h2>
              <p className="mb-4 text-sm text-muted-foreground">{about.fullName}</p>
              <div className="space-y-4">
                {about.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.facts.map((fact, index) => {
                const Icon = factIcons[index]
                return (
                  <li key={fact.label} className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm">{fact.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <h2 className="mb-8 text-center text-3xl font-bold">{about.strengthsTitle}</h2>
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {about.strengths.map((strength) => (
            <Card key={strength.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  {strength.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{strength.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-4 text-center">
          <h2 className="mb-2 text-3xl font-bold">{about.beyond.title}</h2>
          <p className="text-muted-foreground">{about.beyond.subtitle}</p>
        </div>
        <div className="mb-10 mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {about.beyond.interests.map((interest) => {
            const Icon = interestIcons[interest.icon as keyof typeof interestIcons]
            return (
              <Card key={interest.title} className="text-center transition-shadow hover:shadow-lg">
                <CardContent className="space-y-3 pt-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{interest.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{interest.text}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <h3 className="mb-4 text-lg font-semibold">{about.beyond.qualitiesTitle}</h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {about.beyond.qualities.map((quality) => (
              <li key={quality}>
                <Badge variant="secondary" className="px-3 py-1 text-sm font-normal">
                  {quality}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
