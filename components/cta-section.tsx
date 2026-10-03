import { Button } from "@/components/ui/button"
import { CopyEmailButton } from "@/components/copy-email-button"
import { ArrowUpRight } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { siteConfig } from "@/lib/site"

type Props = { dict: Dictionary }

export function CtaSection({ dict }: Props) {
  const { cta } = dict.home

  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="surface relative isolate mx-auto max-w-7xl overflow-hidden px-6 py-20 text-center sm:px-12 sm:py-28" data-reveal>
        <div className="aurora left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 bg-primary/40" aria-hidden />
        <p className="eyebrow mb-6">{dict.nav.getInTouch}</p>
        <h2 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
          {cta.title} <span className="display text-gradient text-[1.08em] italic">{cta.accent}</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{cta.text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <CopyEmailButton email={siteConfig.email} label={cta.copy} doneLabel={cta.copied} />
        </div>
      </div>
    </section>
  )
}
