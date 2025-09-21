import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Top skills to display on homepage
const topSkills = [
  { name: "Laravel", years: 3, level: 80, category: "Backend" },
  { name: "Next.js", years: 2, level: 75, category: "Frontend" },
  { name: "React.js", years: 2, level: 75, category: "Frontend" },
  { name: "Springboot", years: 2, level: 75, category: "Backend" },
  { name: "PHP", years: 5, level: 90, category: "Backend" },
  { name: "MySQL", years: 5, level: 85, category: "Database" },
  { name: "TypeScript", years: 2, level: 75, category: "Frontend" },
  { name: "Moodle", years: 1, level: 35, category: "LMS" },
]

export function CompetencesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Competences</h2>
          <p className="text-xl text-muted-foreground text-balance">
            My expertise in modern web development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topSkills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">{skill.years} years</span>
                  </div>
                  <div className="space-y-2">
                    <Progress value={skill.level} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">14+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/skills">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
