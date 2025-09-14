"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Eye } from "lucide-react"

// Projects data based on the original portfolio
const projects = {
  professional: [
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
      title: "GESCO",
      description:
        "Saas platform for managing secondary school students, teachers, subjects, grades and report card generation.",
      image: "/student-management-system.jpg",
      technologies: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS"],
      category: "Management System",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
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
      id: 4,
      title: "ABCOM",
      description:
        "Saas platform for secondary school management, with modules ranging from student enrollment to report card generation to financial management.",
      image: "/comprehensive-school-management.jpg",
      technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      category: "Management System",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  personal: [
    {
      id: 5,
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
    {
      id: 6,
      title: "ARMADA",
      description:
        "Discover the work I've done to update the e-commerce site. I not only improved the user experience but also added new features to enrich the shopping experience.",
      image: "/modern-ecommerce-website.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "KENDEL",
      description:
        "Saas platform for university management, with modules ranging from student enrollment to report card generation to financial management.",
      image: "/university-management-platform.jpg",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
      category: "Management System",
      status: "In Progress",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  online: [
    {
      id: 8,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js and featuring a blog system.",
      image: "/developer-portfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
      category: "Portfolio",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 9,
      title: "Task Management App",
      description: "Full-stack task management application with real-time updates and team collaboration features.",
      image: "/task-management-app.png",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      category: "Web Application",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 10,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and historical data visualization.",
      image: "/weather-dashboard-interface.png",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind CSS"],
      category: "Dashboard",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("professional")

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

  const renderProjects = (projectList: typeof projects.professional) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project) => (
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
  )

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground text-balance">
            A showcase of my work across different domains and technologies
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="professional">Professional Projects</TabsTrigger>
            <TabsTrigger value="personal">Personal Projects</TabsTrigger>
            <TabsTrigger value="online">Online Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="professional" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Professional Projects</h2>
              <p className="text-muted-foreground">
                Enterprise-level applications and systems I've built for clients and organizations
              </p>
            </div>
            {renderProjects(projects.professional)}
          </TabsContent>

          <TabsContent value="personal" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Personal Projects</h2>
              <p className="text-muted-foreground">
                Side projects and experiments that showcase my creativity and technical skills
              </p>
            </div>
            {renderProjects(projects.personal)}
          </TabsContent>

          <TabsContent value="online" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Online Projects</h2>
              <p className="text-muted-foreground">
                Web applications and tools available online for public use and demonstration
              </p>
            </div>
            {renderProjects(projects.online)}
          </TabsContent>
        </Tabs>

        {/* Project Statistics */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Project Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Technologies Used</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
