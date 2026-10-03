import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { featuredProjectIds, projects } from "@/lib/data/projects"

type Props = { lang: Locale; dict: Dictionary }

export function LatestProjects({ lang, dict }: Props) {
  const featured = featuredProjectIds.map((id) => projects.find((project) => project.id === id)!)

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{dict.home.latestProjects.title}</h2>
          <p className="text-balance text-xl text-muted-foreground">{dict.home.latestProjects.subtitle}</p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href={localePath(lang, "/projects")}>
              {dict.home.latestProjects.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
