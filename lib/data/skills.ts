export const skillGroups = {
  frontend: ["Next.js (App Router, SSR)", "React.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "Material UI", "PrimeReact", "Bootstrap"],
  backend: ["PHP", "Laravel", "Livewire", "Node.js", "Prisma", "REST API", "OpenAPI", "Postman"],
  java: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "Kafka", "Kubernetes", "JUnit"],
  headless: ["Moodle", "Moodle Workplace", "Headless architecture", "Mustache", "Multi-tenant"],
  security: ["HMAC", "CORS", "Keycloak", "HashiCorp Vault", "Ollama", "Prompt injection mitigation"],
  data: ["MySQL", "PostgreSQL", "Power Designer"],
  quality: ["Cypress", "PHPUnit", "JUnit", "JaCoCo", "Checkstyle", "PMD", "SpotBugs"],
  tools: ["Git / GitHub / GitLab", "GitLab CI", "Docker", "Scrum", "OpenProject", "Figma", "Flutter", "Firebase"],
} as const

export type SkillGroupId = keyof typeof skillGroups

export const topSkills: { name: string; group: SkillGroupId }[] = [
  { name: "Next.js", group: "frontend" },
  { name: "React.js", group: "frontend" },
  { name: "TypeScript", group: "frontend" },
  { name: "Laravel", group: "backend" },
  { name: "Moodle", group: "headless" },
  { name: "Spring Boot", group: "java" },
  { name: "Kafka", group: "java" },
  { name: "PostgreSQL", group: "data" },
]
