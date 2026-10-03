import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web and mobile projects built by Gilles SOB: e-commerce, management platforms and business applications.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", title: "Projects", description: "Selected web and mobile projects built by Gilles SOB: e-commerce, management platforms and business applications." },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
