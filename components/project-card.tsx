import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectIllustration } from "@/components/project-illustration"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import type { ProjectData, ProjectId } from "@/lib/data/projects"

const statusStyle = {
  completed: "bg-primary text-primary-foreground",
  ongoing: "bg-chart-3 text-white",
  paused: "bg-chart-2 text-white",
} as const

type Props = { project: ProjectData; dict: Dictionary }

export function ProjectCard({ project, dict }: Props) {
  const text = dict.projects.items[project.id as ProjectId]

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <ProjectIllustration
          kind={project.kind}
          variant={"variant" in project ? project.variant : undefined}
          label={`${dict.projects.illustrationAlt}: ${text.title}`}
          className="h-48 w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline">{dict.projects.categories[project.category]}</Badge>
          <Badge className={statusStyle[project.status]}>{dict.projects.status[project.status]}</Badge>
        </div>
        <CardTitle className="transition-colors group-hover:text-primary">{text.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{text.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          {project.group === "professional" && (
            <Badge variant="outline" className="text-xs">
              {dict.common.private}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
