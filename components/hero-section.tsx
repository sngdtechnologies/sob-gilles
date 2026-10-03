import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { siteConfig } from "@/lib/site"

type Props = { lang: Locale; dict: Dictionary }

function countProps(value: string) {
  const match = value.match(/^(\d+)(\D*)$/)
  return match ? { "data-count": match[1], "data-suffix": match[2] } : {}
}

export function HeroSection({ lang, dict }: Props) {
  const { home } = dict
  const social = "flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"

  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      <div className="aurora -left-24 top-10 -z-10 h-[28rem] w-[28rem] bg-primary/40" aria-hidden />
      <div className="aurora -right-20 top-40 -z-10 h-[24rem] w-[24rem] bg-gold/30 [animation-delay:-6s]" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-foreground/[0.04] py-1.5 pl-3 pr-4 text-sm text-muted-foreground backdrop-blur"
              data-reveal
            >
              <span className="live-dot h-2 w-2 rounded-full bg-primary" aria-hidden />
              {home.hero.availability}
            </div>

            <p className="eyebrow mb-5" data-reveal style={{ ["--d" as string]: "80ms" }}>
              {home.name} · {home.hero.eyebrow}
            </p>

            <h1
              className="text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
              data-reveal
              style={{ ["--d" as string]: "140ms" }}
            >
              {home.hero.headline}{" "}
              <span className="display text-gradient text-[1.08em] italic">{home.hero.accent}</span>
            </h1>

            <p
              className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
              data-reveal
              style={{ ["--d" as string]: "220ms" }}
            >
              {home.intro}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" data-reveal style={{ ["--d" as string]: "300ms" }}>
              <Button asChild size="lg">
                <Link href={localePath(lang, "/contact")}>
                  {home.hero.ctaPrimary}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href={localePath(lang, "/projects")}>{home.hero.ctaSecondary}</Link>
              </Button>
              <div className="flex items-center gap-2 sm:ml-2">
                <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={social} aria-label="GitHub">
                  <Github className="h-[18px] w-[18px]" />
                </Link>
                <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={social} aria-label="LinkedIn">
                  <Linkedin className="h-[18px] w-[18px]" />
                </Link>
                <Link href={`mailto:${siteConfig.email}`} className={social} aria-label="Email">
                  <Mail className="h-[18px] w-[18px]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-reveal style={{ ["--d" as string]: "200ms" }}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-px rounded-[2.1rem] bg-gradient-to-br from-primary/60 via-transparent to-gold/50 opacity-70 blur-[1px]" aria-hidden />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
                <Image
                  src="/images/gilles-profile.png"
                  alt={home.imageAlt}
                  width={640}
                  height={800}
                  className="aspect-[4/5] w-full object-cover object-top dark:brightness-90"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-6 pt-24">
                  <p className="text-2xl font-semibold tracking-tight">{home.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{home.role}</p>
                </div>
              </div>
              <div className="absolute -left-4 top-10 hidden rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm shadow-xl backdrop-blur-xl sm:block">
                <p className="eyebrow !text-[0.62rem]">Tech lead</p>
                <p className="mt-1 font-medium">KFOKAM Academy</p>
              </div>
              <div className="absolute -right-3 bottom-28 hidden rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm shadow-xl backdrop-blur-xl sm:block">
                <p className="eyebrow !text-[0.62rem]">Core Banking</p>
                <p className="mt-1 font-medium">Spring Boot · Kafka</p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 lg:grid-cols-4" data-reveal>
          {home.competences.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-2 text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="display order-1 text-5xl text-foreground sm:text-6xl" {...countProps(stat.value)}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#credibility"
          className="mx-auto mt-14 hidden w-fit items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary md:flex"
        >
          {home.hero.scroll}
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
