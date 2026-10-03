import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { featuredProjectIds, projects } from "@/lib/data/projects"

type Props = { lang: Locale; dict: Dictionary }

export function LatestProjects({ lang, dict }: Props) {
  const featured = featuredProjectIds.map((id) => projects.find((project) => project.id === id)!)
  const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-6"]

  return (
    <section className="border-t border-border bg-foreground/[0.02] px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={dict.home.latestProjects.eyebrow}
          title={dict.home.latestProjects.title}
          subtitle={dict.home.latestProjects.subtitle}
        />

        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} dict={dict} featured={index !== 1} index={index} className={spans[index]} />
          ))}
        </div>

        <div className="text-center" data-reveal>
          <Button asChild size="lg" variant="outline">
            <Link href={localePath(lang, "/projects")}>
              {dict.home.latestProjects.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
