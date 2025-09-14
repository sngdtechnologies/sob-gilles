import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "DCE (Doha Consulting & Engineering)",
    position: "Full-Stack Developer",
    period: "AUGUST 2022 - SEPTEMBER 2024",
    location: "Cameroon",
    type: "Full-time",
    description:
      "It was my first experience in a team of developers. I knew nothing about the stack used (Laravel, Symfony, MySQL, JS, Spring security, Cypress, Postman) and little by little I was able to build a complete application from scratch. With them, I had to contribute to web applications: GESCO, GESCO WEB, Eshop and others. I had to contribute to web applications updating, design, integration, layout, deployment principled on the projects (updating, design, integration, layout, deployment).",
    technologies: ["Laravel", "Symfony", "MySQL", "JavaScript", "Spring Security", "Cypress", "Postman"],
  },
  {
    id: 2,
    title: "MIXING ENGINEERING",
    position: "Full-Stack Developer",
    period: "JUIN 2022 - SEPTEMBRE 2024",
    location: "Cameroon",
    type: "Part-time",
    description:
      "Having completed three academic internships with them, I've deepened a solid understanding of the development stack used (React.js, Next.js, TypeScript, Laravel, Symfony, Spring Boot, MySQL, PHP, FLUTTER, FIREBASE). Since then, I've been carrying out the projects (updating, design, integration, layout, deployment principled on Material UI, PHPUnit, Pest, FLUTTER, FIREBASE). Seen them, I've been carrying out the projects (updating, design, integration, layout, deployment).",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Laravel",
      "Symfony",
      "Spring Boot",
      "MySQL",
      "PHP",
      "Flutter",
      "Firebase",
    ],
  },
]

const education = [
  {
    id: 1,
    title: "Bachelor Degree in Software Engineering",
    institution: "Higher Institute of Technology",
    period: "2022 - 2023",
    description:
      "Comprehensive education in software engineering principles, project management, and advanced development practices.",
  },
  {
    id: 2,
    title: "DTS Higher Technician Diploma",
    institution: "Technical Institute",
    period: "2021 - 2022",
    description: "Specialized training in modern web technologies and full-stack development methodologies.",
  },
  {
    id: 3,
    title: "HND Higher National Diploma",
    institution: "National Polytechnic",
    period: "2020 - 2021",
    description: "Advanced studies in software development with focus on practical application and industry standards.",
  },
  {
    id: 4,
    title: "Bachelor of Science",
    institution: "University of Technology",
    period: "2017 - 2018",
    description:
      "A strong foundation in computer science fundamentals, algorithms, and software engineering principles.",
  },
]

export function ExperienceSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Professional Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="relative">
                {index < experiences.length - 1 && <div className="absolute left-8 top-full w-0.5 h-8 bg-border"></div>}
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">{exp.position}</CardDescription>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Education & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    {edu.title}
                  </CardTitle>
                  <CardDescription className="font-medium">{edu.institution}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
