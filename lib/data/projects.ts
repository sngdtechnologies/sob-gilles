export type ProjectKind =
  | "lms"
  | "multitenant"
  | "banking"
  | "school"
  | "university"
  | "ecommerce"
  | "website"
  | "exam"
  | "health"
  | "ai"
  | "design-exam"
  | "design-housing"
  | "design-booking"
  | "design-marketplace"

export type ProjectStatus = "ongoing" | "completed" | "paused"
export type ProjectCategory = "lms" | "banking" | "management" | "ecommerce" | "website" | "education" | "health" | "ai" | "design"
export type ProjectGroup = "professional" | "personal"

export type ProjectData = {
  id: string
  kind: ProjectKind
  category: ProjectCategory
  status: ProjectStatus
  group: ProjectGroup
  technologies: string[]
  variant?: 0 | 1 | 2
}

export const projects = [
  {
    id: "core-banking",
    kind: "banking",
    category: "banking",
    status: "ongoing",
    group: "professional",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Kubernetes", "Keycloak", "HashiCorp Vault", "GitLab CI"],
  },
  {
    id: "kfokam-academy",
    kind: "lms",
    category: "lms",
    status: "ongoing",
    group: "professional",
    technologies: ["Next.js", "TypeScript", "PHP", "Moodle", "MySQL", "OpenAPI", "PHPUnit", "GitLab"],
  },
  {
    id: "kfokam-48",
    kind: "multitenant",
    category: "lms",
    status: "ongoing",
    group: "professional",
    technologies: ["PHP", "Moodle", "MySQL", "Mustache", "Postman", "GitLab"],
  },
  {
    id: "gesco-web",
    kind: "school",
    category: "management",
    status: "completed",
    group: "professional",
    variant: 1,
    technologies: ["Spring Boot", "MySQL", "TypeScript", "React.js", "Cypress"],
  },
  {
    id: "gesco",
    kind: "school",
    category: "management",
    status: "completed",
    group: "professional",
    technologies: ["Spring Boot", "MySQL", "TypeScript", "React.js", "Cypress"],
  },
  {
    id: "eshop",
    kind: "ecommerce",
    category: "ecommerce",
    status: "completed",
    group: "professional",
    technologies: ["Spring Boot", "MySQL", "TypeScript", "React.js", "Cypress"],
  },
  {
    id: "argon",
    kind: "school",
    category: "management",
    status: "completed",
    group: "professional",
    variant: 2,
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: "syncobe",
    kind: "website",
    category: "website",
    status: "completed",
    group: "professional",
    technologies: ["Laravel", "Livewire", "HTML 5", "CSS 3", "MySQL", "jQuery"],
  },
  {
    id: "armada",
    kind: "ecommerce",
    category: "ecommerce",
    status: "completed",
    group: "professional",
    variant: 1,
    technologies: ["Laravel", "MySQL", "Orange Money API", "Mobile Money API", "Stripe API"],
  },
  {
    id: "kendel",
    kind: "university",
    category: "management",
    status: "paused",
    group: "professional",
    technologies: ["Laravel", "Livewire", "jQuery", "MySQL"],
  },
  {
    id: "moodle-ai",
    kind: "ai",
    category: "ai",
    status: "completed",
    group: "personal",
    technologies: ["Docker", "Ollama", "Moodle", "PHP"],
  },
  {
    id: "ecopra",
    kind: "school",
    category: "management",
    status: "paused",
    group: "personal",
    variant: 1,
    technologies: ["Laravel", "Livewire", "Alpine.js", "MySQL", "Bootstrap"],
  },
  {
    id: "testlang",
    kind: "exam",
    category: "education",
    status: "paused",
    group: "personal",
    technologies: ["Laravel", "Livewire", "jQuery", "MySQL", "Next.js"],
  },
  {
    id: "snhealth",
    kind: "health",
    category: "health",
    status: "paused",
    group: "personal",
    technologies: ["Laravel", "Livewire", "jQuery", "MySQL", "Next.js", "Zoom API"],
  },
  {
    id: "design-exam",
    kind: "design-exam",
    category: "design",
    status: "completed",
    group: "personal",
    technologies: ["Figma"],
  },
  {
    id: "design-housing",
    kind: "design-housing",
    category: "design",
    status: "completed",
    group: "personal",
    technologies: ["Figma"],
  },
  {
    id: "design-booking",
    kind: "design-booking",
    category: "design",
    status: "completed",
    group: "personal",
    technologies: ["Figma"],
  },
  {
    id: "design-marketplace",
    kind: "design-marketplace",
    category: "design",
    status: "completed",
    group: "personal",
    technologies: ["Figma"],
  },
] as const satisfies readonly ProjectData[]

export type ProjectId = (typeof projects)[number]["id"]

export const featuredProjectIds: ProjectId[] = ["core-banking", "kfokam-academy", "gesco"]
