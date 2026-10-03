import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, experience and expertise of Gilles SOB, full stack developer working with Laravel, Spring Boot, React and Next.js.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About", description: "Background, experience and expertise of Gilles SOB, full stack developer working with Laravel, Spring Boot, React and Next.js." },
}

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
