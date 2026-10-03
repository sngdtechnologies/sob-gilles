export const experienceTech = {
  "core-banking": ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Kubernetes", "Keycloak", "HashiCorp Vault", "Gradle", "GitLab CI"],
  "moodle-lead": ["Next.js", "TypeScript", "PHP", "Moodle", "MySQL", "Mustache", "OpenAPI", "PHPUnit", "GitLab"],
  "moodle-dev": ["PHP", "Moodle", "MySQL", "GitLab", "Postman"],
  mveng: ["Laravel", "Livewire", "Alpine.js", "React.js", "Next.js", "TypeScript", "MySQL", "Cypress", "PHPUnit", "Figma"],
  dce: ["Spring Boot", "React", "TypeScript", "JPA", "MySQL", "Cypress", "OpenProject", "Scrum"],
  internship: ["PHP", "MySQL", "Flutter", "Firebase", "Git/GitHub"],
} as const

export type ExperienceId = keyof typeof experienceTech
export const experienceOrder: ExperienceId[] = ["core-banking", "moodle-lead", "moodle-dev", "mveng", "dce", "internship"]
