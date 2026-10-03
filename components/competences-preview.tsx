import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { topSkills } from "@/lib/data/skills"

type Props = { lang: Locale; dict: Dictionary }

export function CompetencesPreview({ lang, dict }: Props) {
  const { competences } = dict.home

  return (
    <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{competences.title}</h2>
          <p className="text-balance text-xl text-muted-foreground">{competences.subtitle}</p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {topSkills.map((skill) => (
            <Card key={skill.name} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="h-auto whitespace-normal text-xs">
                  {dict.skills.groups[skill.group]}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {competences.stats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-center">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href={localePath(lang, "/skills")}>
              {competences.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
