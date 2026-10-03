import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { siteConfig } from "@/lib/site"

type Props = { lang: Locale; dict: Dictionary }

export function HeroSection({ lang, dict }: Props) {
  const { home } = dict
  const iconLink = "text-muted-foreground transition-colors hover:text-primary"

  return (
    <section className="px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold sm:text-5xl lg:text-6xl">
                {home.greeting} <span className="text-primary">{home.name}</span>
              </h1>
              <p className="text-2xl font-medium text-foreground/90">{home.role}</p>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{home.intro}</p>
              <ul className="flex flex-wrap gap-2 pt-2">
                {home.highlights.map((item) => (
                  <li key={item}>
                    <Badge variant="secondary" className="text-sm font-normal">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={localePath(lang, "/contact")}>
                  <Mail className="mr-2 h-5 w-5" />
                  {home.contactCta}
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  {home.githubCta}
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Link>
              <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href={`mailto:${siteConfig.email}`} className={iconLink} aria-label="Email">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/gilles-profile.png"
                  alt={home.imageAlt}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -right-4 -top-4 h-8 w-8 animate-pulse rounded-full bg-primary" aria-hidden />
              <div className="absolute -bottom-4 -left-4 h-6 w-6 animate-pulse rounded-full bg-primary/60" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
