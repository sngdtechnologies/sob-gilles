import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { projects, type ProjectGroup } from "@/lib/data/projects"

type Props = { dict: Dictionary }

const groups: ProjectGroup[] = ["professional", "personal"]

export function ProjectsSection({ dict }: Props) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{dict.projects.title}</h1>
          <p className="text-balance text-xl text-muted-foreground">{dict.projects.subtitle}</p>
        </div>

        <Tabs defaultValue="professional" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2">
            {groups.map((group) => (
              <TabsTrigger key={group} value={group}>
                {dict.projects.tabs[group]}
              </TabsTrigger>
            ))}
          </TabsList>

          {groups.map((group) => (
            <TabsContent key={group} value={group} className="space-y-8">
              <div className="mb-8 text-center">
                <h2 className="mb-2 text-2xl font-semibold">{dict.projects.sections[group].title}</h2>
                <p className="text-muted-foreground">{dict.projects.sections[group].subtitle}</p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.group === group)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} dict={dict} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
