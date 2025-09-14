import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <AboutSection />
        <ExperienceSection />
      </div>
      <Footer />
    </main>
  )
}
