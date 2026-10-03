import { SectionHeading } from "@/components/section-heading"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { skillGroups, type SkillGroupId } from "@/lib/data/skills"

type Props = { dict: Dictionary }

function countProps(value: string) {
  const match = value.match(/^(\d+)(\D*)$/)
  return match ? { "data-count": match[1], "data-suffix": match[2] } : {}
}

export function SkillsSection({ dict }: Props) {
  const { skills } = dict
  const groupIds = Object.keys(skillGroups) as SkillGroupId[]

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading as="h1" eyebrow={skills.eyebrow} title={skills.title} subtitle={skills.subtitle} />

        <dl className="mb-20 grid grid-cols-2 gap-x-8 gap-y-10 border-y border-border py-12 lg:grid-cols-4" data-reveal>
          {skills.summary.map((item) => (
            <div key={item.label} className="flex flex-col">
              <dt className="order-2 mt-2 text-sm text-muted-foreground">{item.label}</dt>
              <dd className="display order-1 text-5xl sm:text-6xl" {...countProps(item.value)}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groupIds.map((id, index) => (
            <div key={id} data-reveal data-spotlight style={{ ["--d" as string]: `${(index % 3) * 80}ms` }} className="surface overflow-hidden p-7">
              <p className="font-mono text-xs text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mb-6 mt-3 text-xl font-semibold tracking-tight">{skills.groups[id]}</h2>
              <ul className="flex flex-wrap gap-2">
                {skillGroups[id].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow={skills.languagesEyebrow} title={skills.languagesTitle} />
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.languages.map((language) => (
              <div key={language.name} data-reveal className="surface flex items-center justify-between p-6">
                <span className="text-lg font-medium">{language.name}</span>
                <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-sm text-primary">{language.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
