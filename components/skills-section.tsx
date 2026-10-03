import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { skillGroups, type SkillGroupId } from "@/lib/data/skills"

type Props = { dict: Dictionary }

export function SkillsSection({ dict }: Props) {
  const { skills } = dict
  const groupIds = Object.keys(skillGroups) as SkillGroupId[]

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{skills.title}</h1>
          <p className="text-balance text-xl text-muted-foreground">{skills.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groupIds.map((id) => (
            <Card key={id} className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{skills.groups[id]}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {skillGroups[id].map((skill) => (
                    <li key={skill}>
                      <Badge variant="secondary" className="px-3 py-1 text-sm font-normal">
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">{skills.summaryTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                {skills.summary.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold">{skills.languagesTitle}</h2>
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.languages.map((language) => (
              <Card key={language.name}>
                <CardContent className="flex items-center justify-between pt-6">
                  <span className="text-lg font-medium">{language.name}</span>
                  <Badge>{language.level}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
