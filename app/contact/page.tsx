import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gilles SOB for a full stack development project or collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact", description: "Get in touch with Gilles SOB for a full stack development project or collaboration." },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
