import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "PKFokam Research Center",
    position: "Full-Stack Developer",
    period: "JANUARY 2025 - Now",
    location: "Cameroon",
    type: "Full-time",
    description:
      "LMS specialist responsible for the development and maintenance of educational platforms (KFokam 48, Moodle Workplace), actively contributing to DevOps practices and the continuous improvement of Moodle Core. I deepened my solid understanding of the development stack used (Moodle, PHP, PHPUnit, Next.js).",
    technologies: [
      "Moodle",
      "PHP",
      "Next.js",
      "Mustache",
      "Gerkin",
      "PHPUnit",
      "Tailwind CSS"
    ]
  },
  {
    id: 2,
    title: "DCE (Doho Consulting & Engineering)",
    position: "Full-Stack Developer",
    period: "AUGUST 2022 - SEPTEMBER 2024",
    location: "Cameroon",
    type: "Part-time",
    description:
      "It was my first experience in a team of developers. I knew nothing about the stack used (React js, TypeScript, Springboot, Jhipster, Mysql, JPA, Spring security, Cypress, Git/Github, OpenProject, Postman, Scrum, Hibernate, JUnit) and little by little I was able to build a complete application from scratch. With them, I had to contribute to web applications: GESCO, GESCO WEB, Eshop and others. I had to contribute to web applications updating, design, integration, layout, deployment principled.",
    technologies: [
      "React js", 
      "TypeScript", 
      "Springboot", 
      "Jhipster", 
      "Mysql", 
      "JPA", 
      "Spring security", 
      "Cypress", 
      "Git/Github", 
      "OpenProject", 
      "Postman", 
      "Hibernate", 
      "JUnit"
    ]
  },
  {
    id: 3,
    title: "MVENG ENGINEERING",
    position: "Full-Stack Developer",
    period: "JUIN 2022 - SEPTEMBRE 2024",
    location: "Cameroon",
    type: "Part-time",
    description:
      "Having completed three academic internships with them, I've deepened a solid understanding of the development stack used (React js, Next.js, TypeScript, Laravel, Livewire, Alpin Js, Mysql, Cypress, Git/Github, Postman, Cpanel, Figma, Bootstrap, Material UI, PHPUnit, Flutter, Firebase). Since then, I've been carrying out the projects.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Laravel",
      "Livewire",
      "Alpin Js",
      "MySQL",
      "Cypress",
      "Git/Github",
      "Postman",
      "LWS",
      "Cpanel",
      "Figma",
      "PHPUnit", 
      "Flutter", 
      "Firebase"
    ],
  },
]

const education = [
  {
    id: 1,
    title: "Bachelor Degree in Software Engineering",
    institution: "IAI Cameroon",
    period: "2022 - 2023",
    description:
      "Comprehensive education in software engineering principles, project management, and advanced development practices.",
  },
  {
    id: 2,
    title: "DTS Higher Technician Diploma",
    institution: "IAI Cameroon",
    period: "2021 - 2022",
    description: "Specialized training in modern web technologies and full-stack development methodologies.",
  },
  {
    id: 3,
    title: "HND Higher National Diploma",
    institution: "ISIM Bertoua",
    period: "2020 - 2021",
    description: "Advanced studies in software development with focus on practical application and industry standards.",
  },
  {
    id: 4,
    title: "Baccalaureate series D",
    institution: "Collège Billingue Adventist Boma de Bertoua",
    period: "2017 - 2018",
    description:
      "In 2018, I obtained my Baccalaureate series D. A diploma I'm very proud of because it opened the doors to university for me.",
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
