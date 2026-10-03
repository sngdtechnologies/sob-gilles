import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ArrowRight } from "lucide-react"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { topSkills } from "@/lib/data/skills"

type Props = { lang: Locale; dict: Dictionary }

export function CompetencesPreview({ lang, dict }: Props) {
  const { competences, standards } = dict.home

  return (
    <section className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={competences.eyebrow} title={competences.title} subtitle={competences.subtitle} />

        <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {topSkills.map((skill, index) => (
            <div
              key={skill.name}
              data-reveal
              data-spotlight
              style={{ ["--d" as string]: `${(index % 4) * 70}ms` }}
              className="surface group overflow-hidden p-6"
            >
              <p className="font-mono text-xs text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-10 text-2xl font-semibold tracking-tight">{skill.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{dict.skills.groups[skill.group]}</p>
              <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-primary/50 transition-all group-hover:scale-150 group-hover:bg-primary" aria-hidden />
            </div>
          ))}
        </div>

        <div className="surface mb-14 flex flex-col items-start gap-6 p-8 lg:flex-row lg:items-center" data-reveal>
          <p className="eyebrow shrink-0 !text-gold">{standards.label}</p>
          <ul className="flex flex-wrap gap-2">
            {standards.items.map((item) => (
              <li key={item} className="rounded-full border border-border bg-foreground/[0.03] px-4 py-1.5 font-mono text-xs text-foreground/80">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center" data-reveal>
          <Button asChild size="lg" variant="outline">
            <Link href={localePath(lang, "/skills")}>
              {competences.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
