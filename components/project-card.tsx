import { ProjectIllustration } from "@/components/project-illustration"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import type { ProjectData, ProjectId } from "@/lib/data/projects"

const statusStyle = {
  completed: "border-primary/40 bg-primary/10 text-primary",
  ongoing: "border-chart-3/50 bg-chart-3/10 text-chart-3",
  paused: "border-chart-2/50 bg-chart-2/10 text-chart-2",
} as const

type Props = { project: ProjectData; dict: Dictionary; featured?: boolean; index?: number; className?: string }

export function ProjectCard({ project, dict, featured = false, index = 0, className = "" }: Props) {
  const text = dict.projects.items[project.id as ProjectId]
  const variant = "variant" in project ? project.variant : undefined

  return (
    <article
      data-reveal
      data-spotlight
      style={{ ["--d" as string]: `${(index % 3) * 80}ms` }}
      className={`surface group flex h-full overflow-hidden ${featured ? "flex-col md:flex-row" : "flex-col"} ${className}`}
    >
      <div className={`relative overflow-hidden bg-muted ${featured ? "flex items-center md:w-[52%]" : ""}`}>
        <ProjectIllustration
          kind={project.kind}
          variant={variant}
          fit={featured ? "meet" : "slice"}
          label={`${dict.projects.illustrationAlt}: ${text.title}`}
          className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${featured ? "aspect-[5/3] h-auto" : "h-48"}`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" aria-hidden />
      </div>

      <div className={`flex flex-1 flex-col gap-5 p-6 ${featured ? "md:p-9" : ""}`}>
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow !text-muted-foreground">{dict.projects.categories[project.category]}</span>
          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyle[project.status]}`}>
            {dict.projects.status[project.status]}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className={`font-semibold tracking-tight transition-colors group-hover:text-primary ${featured ? "text-3xl" : "text-xl"}`}>
            {text.title}
          </h3>
          <p className={`leading-relaxed text-muted-foreground ${featured ? "text-base" : "text-sm"}`}>{text.description}</p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-full border border-border bg-foreground/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-foreground/75">
              {tech}
            </li>
          ))}
        </ul>

        {project.group === "professional" && (
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground/70">{dict.common.private}</p>
        )}
      </div>
    </article>
  )
}
