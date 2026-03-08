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
      image: "/gesco-web.png",
      technologies: ["SpringBoot", "MySQL", "TypeScript", "React.js", "Cypress"],
      category: "Management System",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "GESCO",
      description:
        "Saas platform for managing secondary school students, teachers, subjects, grades and report card generation.",
      image: "/gesco.png",
      technologies: ["SpringBoot", "MySQL", "TypeScript", "React.js", "Cypress"],
      category: "Management System",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "ESHOP",
      description: "Saas data tracking platform with product, store and mobile part.",
      image: "/eshop.jpg",
      technologies: ["SpringBoot", "MySQL", "TypeScript", "React.js", "Cypress"],
      category: "E-commerce",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "ARGON",
      description:
        "Saas platform for secondary school management, with modules ranging from student enrollment to report card generation to financial management.",
      image: "/argon.png",
      technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      category: "Management System",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "SYNCOBE",
      description:
        "Discover the showcase site of an association I developed with a backOffice, a digital platform that reflects its mission and values. The site's design is simple and elegant, offering easy navigation for visitors. You'll find detailed information on their activities, current projects and past achievements. In addition, the site features a news section to keep you up to date with the latest association news and events.",
      image: "/assoc.png",
      technologies: ["Laravel", "Livewire", "HTML 5", "CSS 3", "MySQL", "jQuery"],
      category: "Website",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "ARMADA",
      description:
        "Discover the work I've done to update this e-commerce site. I not only improved the user interface for smoother navigation, but also added new features to enrich the shopping experience. Among these additions, I integrated a personalized recommendation system and a payment api.",
      image: "/armada.png",
      technologies: ["Laravel", "MySQL", "Orange Money API", "Mobile Money API", "Stripe API"],
      category: "E-commerce",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "KENDEL",
      description:
        "Saas platform for university management, with modules ranging from student enrolment to financial management and transcript generation.",
      image: "/kendel.png",
      technologies: ["Laravel", "Livewire", "jQuery", "MySQL"],
      category: "Management System",
      status: "In Paused",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  personal: [
    {
      id: 8,
      title: "TESTLANG",
      description:
        "Language exam preparation platform that lets you take several tests to prepare for the real thing. The platform also offers a personal learning coach.",
      image: "/testlang.png",
      technologies: ["Laravel", "Livewire", "jQuery", "MySQL", "Next JS"],
      category: "Management System",
      status: "In Paused",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 9,
      title: "ECOPRA",
      description:
        "An online management system for secondary schools, offering a range of modules, from student registration to the production of report cards, certificates and lists, including financial management.",
      image: "/ecopra.png",
      technologies: ["Laravel", "Livewire", "jQuery", "MySQL"],
      category: "Management System",
      status: "In Paused",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 10,
      title: "DESIGN OF A LANGUAGE EXAM PREPARATION PLATFORM (learner side)",
      description:
        "The design was meticulously crafted to deliver an optimal user experience for learners. I worked on an intuitive interface, with clear menus and easily accessible buttons for effortless navigation.",
      image: "/smultest-design.jpeg",
      technologies: ["Figma"],
      category: "UI/UX Design",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 11,
      title: "DESIGN OF AN ACCOMMODATION SEARCH SITE",
      description:
        "The design was meticulously crafted to deliver an optimal user experience. I worked on an intuitive interface, with clear menus and easily accessible buttons for effortless navigation. The design of our home search site is the result of rigorous work and attention to detail to make the search for accommodation as easy as possible.",
      image: "/logement.jpeg",
      technologies: ["Figma"],
      category: "UI/UX Design",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 12,
      title: "SNHEALTH",
      description:
        "An online medical teleconsultation platform that lets you consult qualified, experienced doctors directly from the comfort of your own home. Thanks to a secure, user-friendly service, users benefit from medical diagnosis, personalized advice and prescriptions, all without having to travel.",
      image: "/snhealth.jpg",
      technologies: ["Laravel", "Livewire", "jQuery", "MySQL", "Next JS", "Zoom API"],
      category: "Management System",
      status: "In Paused",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 13,
      title: "DESIGN OF A BOOKING SITE",
      description:
        "Immerse yourself in the world of travel with the design of a tourist site search application. The design has been meticulously crafted to deliver an optimal user experience.",
      image: "/booking.png",
      technologies: ["Figma"],
      category: "UI/UX Design",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 14,
      title: "DESIGN A MARKETPLACE MOBILE APPLICATION",
      description:
        "Discover the design of our marketplace mobile application, a digital platform designed to facilitate transactions between buyers and sellers. The aim of the project is to enable the virtualization of shopping centers. The design has been meticulously crafted to deliver an optimal user experience.",
      image: "/shopapp.png",
      technologies: ["Figma"],
      category: "UI/UX Design",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  online: [
    {
      id: 1,
      title: "GESCO WEB",
      description:
        "Saas platform for parents to view their children's results and for teachers to manage disciplinary matters.",
      image: "/gesco-web.png",
      technologies: ["SpringBoot", "MySQL", "TypeScript", "React.js", "Cypress"],
      category: "Management System",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "GESCO",
      description:
        "Saas platform for managing secondary school students, teachers, subjects, grades and report card generation.",
      image: "/gesco.png",
      technologies: ["SpringBoot", "MySQL", "TypeScript", "React.js", "Cypress"],
      category: "Management System",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "ESHOP",
      description: "Saas data tracking platform with product, store and mobile part.",
      image: "/eshop.jpg",
      technologies: ["SpringBoot", "MySQL", "TypeScript", "React.js", "Cypress"],
      category: "E-commerce",
      status: "Completed",
      isPrivate: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "ARGON",
      description:
        "Saas platform for secondary school management, with modules ranging from student enrollment to report card generation to financial management.",
      image: "/argon.png",
      technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      category: "Management System",
      status: "Completed",
      isPrivate: true,
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
      case "In Paused":
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
                {project.isPrivate ? (
                  <Button size="sm" variant="outline">
                    Private
                  </Button>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card >
      ))
      }
    </div >
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
