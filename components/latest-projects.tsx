import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Eye } from "lucide-react"

// Featured projects for homepage
const featuredProjects = [
  {
    id: 1,
    title: "GESCO WEB",
    description:
      "Saas platform for parents to view their children's results and for teachers to manage disciplinary matters.",
    image: "/school-management-dashboard.png",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    category: "Web Application",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "ESHOP",
    description: "Saas data tracking platform with product, store and mobile part.",
    image: "/ecommerce-dashboard.png",
    technologies: ["Laravel", "React", "MySQL", "API"],
    category: "E-commerce",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "SYNCOBE",
    description:
      "Discover the showcase site of an association I developed with a backoffice, a digital platform that reflects its mission and values.",
    image: "/association-website-showcase.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    category: "Website",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function LatestProjects() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-primary text-primary-foreground"
      case "In Progress":
        return "bg-chart-2 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Projects</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Recent work showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
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
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-1 h-4 w-4" />
                        View
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
