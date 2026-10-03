import { Marquee } from "@/components/marquee"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { dict: Dictionary }

const stack = ["Next.js", "React", "TypeScript", "Laravel", "Spring Boot", "Kafka", "Kubernetes", "PostgreSQL", "Moodle", "Docker", "Keycloak", "HashiCorp Vault", "OpenAPI", "Cypress"]

export function CredibilityStrip({ dict }: Props) {
  const { credibility } = dict.home

  return (
    <section id="credibility" className="border-y border-border bg-foreground/[0.02] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-between gap-5 lg:flex-row" data-reveal>
          <p className="eyebrow shrink-0">{credibility.label}</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-lg font-medium tracking-tight text-foreground/80">
            {credibility.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Marquee items={stack} />
    </section>
  )
}
