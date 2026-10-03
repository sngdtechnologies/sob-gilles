import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { experienceOrder, experienceTech } from "@/lib/data/experience"

type Props = { dict: Dictionary }

export function ExperienceSection({ dict }: Props) {
  const { experience } = dict

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold">{experience.title}</h2>
          <ol className="space-y-8">
            {experienceOrder.map((id) => {
              const item = experience.items[id]
              return (
                <li key={id}>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="flex items-center gap-2 text-xl">
                            <Building className="h-5 w-5 text-primary" />
                            {item.company}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-foreground">{item.role}</CardDescription>
                        </div>
                        <div className="space-y-1 sm:text-right">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground sm:justify-end">
                            <Calendar className="h-4 w-4" />
                            {item.period}
                          </div>
                          <Badge variant="outline">{item.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{experience.projectsLabel}:</span> {item.projects}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experienceTech[id].map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </li>
              )
            })}
          </ol>
        </div>

        <div>
          <h2 className="mb-12 text-center text-3xl font-bold">{experience.educationTitle}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {experience.education.map((edu) => (
              <Card key={edu.title}>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-primary" />
                    {edu.title}
                  </CardTitle>
                  <CardDescription className="font-medium">{edu.institution}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
