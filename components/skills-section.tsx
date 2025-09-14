import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Skills data based on the original portfolio
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", years: 5, level: 90 },
      { name: "Next.js", years: 4, level: 85 },
      { name: "TypeScript", years: 3, level: 80 },
      { name: "JavaScript", years: 6, level: 95 },
      { name: "HTML/CSS", years: 8, level: 95 },
      { name: "Tailwind CSS", years: 3, level: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Laravel", years: 6, level: 95 },
      { name: "PHP", years: 8, level: 90 },
      { name: "Node.js", years: 4, level: 80 },
      { name: "REST API", years: 6, level: 90 },
      { name: "GraphQL", years: 2, level: 70 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", years: 7, level: 85 },
      { name: "PostgreSQL", years: 4, level: 80 },
      { name: "MongoDB", years: 3, level: 75 },
      { name: "Redis", years: 3, level: 70 },
      { name: "Git", years: 8, level: 90 },
      { name: "Docker", years: 3, level: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Symfony", years: 4, level: 80 },
      { name: "Spring Boot", years: 2, level: 65 },
      { name: "Bootstrap", years: 6, level: 85 },
      { name: "Material UI", years: 3, level: 75 },
      { name: "Prisma", years: 2, level: 70 },
    ],
  },
  {
    title: "Mobile & Other",
    skills: [
      { name: "React Native", years: 3, level: 75 },
      { name: "Flutter", years: 2, level: 65 },
      { name: "Alpine.js", years: 2, level: 70 },
      { name: "Livewire", years: 3, level: 80 },
      { name: "Cypress", years: 2, level: 70 },
    ],
  },
  {
    title: "Design & Productivity",
    skills: [
      { name: "Figma", years: 4, level: 80 },
      { name: "Photoshop", years: 5, level: 75 },
      { name: "Pest", years: 2, level: 70 },
      { name: "PHPUnit", years: 4, level: 80 },
    ],
  },
]

const getSkillColor = (level: number) => {
  if (level >= 90) return "bg-primary"
  if (level >= 80) return "bg-chart-2"
  if (level >= 70) return "bg-chart-3"
  return "bg-chart-4"
}

export function SkillsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Competences</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.years} {skill.years === 1 ? "year" : "years"}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <Progress value={skill.level} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Technical Expertise Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  Bachelor of Science (2017 - 2018)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A strong foundation in computer science fundamentals, algorithms, and software engineering principles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  HND Higher National Diploma (2020 - 2021)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced studies in software development with focus on practical application and industry standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  DTS Higher Technician Diploma (2021 - 2022)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized training in modern web technologies and full-stack development methodologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  Bachelor Degree in Software Engineering (2022 - 2023)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive education in software engineering principles, project management, and advanced
                  development practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
