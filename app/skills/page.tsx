import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Gilles SOB: Laravel, Spring Boot, React, Next.js, Moodle, databases and DevOps.",
  alternates: { canonical: "/skills" },
  openGraph: { url: "/skills", title: "Skills", description: "Technical skills of Gilles SOB: Laravel, Spring Boot, React, Next.js, Moodle, databases and DevOps." },
}

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
