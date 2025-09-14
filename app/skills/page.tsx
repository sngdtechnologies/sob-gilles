import { Navigation } from "@/components/navigation"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <SkillsSection />
      </div>
      <Footer />
    </main>
  )
}
