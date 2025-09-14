import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { RecentArticles } from "@/components/recent-articles"
import { CompetencesPreview } from "@/components/competences-preview"
import { LatestProjects } from "@/components/latest-projects"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompetencesPreview />
      <LatestProjects />
      <RecentArticles />
      <Footer />
    </main>
  )
}
