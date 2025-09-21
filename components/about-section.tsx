import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Get to know more about my journey, experience, and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/gilles-profile.png"
                  alt="Gilles SOB - Full Stack Developer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Gilles SOB</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As an experienced fullstack developer, I specialize in creating innovative web and mobile solutions.
                With a solid grasp of modern frameworks such as Laravel, Springboot, Next.js and Moodle, I take charge of
                complete development, from architecture design to application deployment and maintenance. My approach is
                based on performance optimization and continuous improvement of the user experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach is based on performance optimization and continuous improvement of the user experience. I'm
                passionate about staying up-to-date with the latest technologies and best practices in web development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Cameroon</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm">3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">14+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                Full-Stack Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Proficient in both frontend and backend technologies, enabling me to build complete, end-to-end
                solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                Modern Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Always staying current with the latest frameworks and tools to deliver cutting-edge solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                Performance Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Committed to building fast, scalable, and user-friendly applications that deliver exceptional
                experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
