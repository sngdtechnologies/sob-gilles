import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { projects, type ProjectGroup } from "@/lib/data/projects"

type Props = { dict: Dictionary }

const groups: ProjectGroup[] = ["professional", "personal"]

export function ProjectsSection({ dict }: Props) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading as="h1" eyebrow={dict.projects.eyebrow} title={dict.projects.title} subtitle={dict.projects.subtitle} />

        <Tabs defaultValue="professional" className="w-full">
          <div className="mb-12 flex justify-center" data-reveal>
            <TabsList className="grid w-full max-w-xl grid-cols-2">
              {groups.map((group) => (
                <TabsTrigger key={group} value={group}>
                  {dict.projects.tabs[group]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {groups.map((group) => (
            <TabsContent key={group} value={group} className="space-y-10">
              <div className="text-center">
                <h2 className="mb-2 text-2xl font-semibold">{dict.projects.sections[group].title}</h2>
                <p className="text-muted-foreground">{dict.projects.sections[group].subtitle}</p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.group === group)
                  .map((project, index) => (
                    <ProjectCard key={project.id} project={project} dict={dict} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
