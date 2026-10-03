import { SectionHeading } from "@/components/section-heading"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { experienceOrder, experienceTech } from "@/lib/data/experience"

type Props = { dict: Dictionary }

export function ExperienceSection({ dict }: Props) {
  const { experience } = dict

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={experience.eyebrow} title={experience.title} />

        <ol className="relative mb-28 ml-3 space-y-12 border-l border-border pl-8 sm:ml-6 sm:pl-12">
          {experienceOrder.map((id, index) => {
            const item = experience.items[id]
            return (
              <li key={id} className="relative" data-reveal>
                <span
                  className={`absolute -left-[2.45rem] top-8 h-3 w-3 rounded-full border-2 border-background sm:-left-[3.45rem] ${
                    index < 2 ? "bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_25%,transparent)]" : "bg-muted-foreground/60"
                  }`}
                  aria-hidden
                />
                <article data-spotlight className="surface overflow-hidden p-7 sm:p-9">
                  <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow !text-gold">{item.period}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.role}</h3>
                      <p className="mt-1 text-muted-foreground">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{item.type}</span>
                  </header>

                  <ul className="space-y-3 leading-relaxed text-muted-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{experience.projectsLabel}:</span> {item.projects}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {experienceTech[id].map((tech) => (
                      <li key={tech} className="rounded-full border border-border bg-foreground/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-foreground/75">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            )
          })}
        </ol>

        <SectionHeading eyebrow={experience.educationEyebrow} title={experience.educationTitle} />
        <ul className="divide-y divide-border border-y border-border">
          {experience.education.map((edu) => (
            <li key={edu.title} className="grid gap-2 py-7 sm:grid-cols-12 sm:gap-8" data-reveal>
              <p className="eyebrow !text-gold sm:col-span-2">{edu.period}</p>
              <div className="sm:col-span-10">
                <h3 className="text-xl font-semibold tracking-tight">{edu.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{edu.institution}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{edu.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
