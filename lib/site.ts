import type { Locale } from "@/lib/i18n/config"

export const siteConfig = {
  name: "Gilles SOB",
  url: "https://sob-gilles.vercel.app",
  ogImage: "/og-image.png",
  email: "sngdtechnologies@gmail.com",
  phone: "+237 690 35 66 55",
  github: "https://github.com/sngdtechnologies",
  linkedin: "https://www.linkedin.com/in/gilles-descartes-sob-64132a1b3",
  facebook: "https://facebook.com/gilles.sob",
}

export const siteText: Record<Locale, { title: string; description: string; jobTitle: string }> = {
  en: {
    title: "Gilles SOB - Full Stack Developer",
    description:
      "Full stack developer and tech lead specializing in PHP/Laravel, Next.js and Spring Boot. Moodle headless platforms, secure APIs and event-driven banking microservices.",
    jobTitle: "Full Stack Developer & Tech Lead",
  },
  fr: {
    title: "Gilles SOB - Développeur Fullstack",
    description:
      "Développeur fullstack et lead technique spécialisé en PHP/Laravel, Next.js et Spring Boot. Plateformes Moodle headless, API sécurisées et microservices bancaires event-driven.",
    jobTitle: "Développeur Fullstack & Lead Technique",
  },
}
