import type React from "react"

type Props = {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  as?: "h1" | "h2"
  align?: "center" | "left"
}

export function SectionHeading({ eyebrow, title, subtitle, as: Tag = "h2", align = "center" }: Props) {
  const centered = align === "center"
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`} data-reveal>
      <p className="eyebrow mb-4 inline-flex items-center gap-3">
        <span className="h-px w-8 bg-primary/60" aria-hidden />
        {eyebrow}
        <span className={`h-px w-8 bg-primary/60 ${centered ? "" : "hidden"}`} aria-hidden />
      </p>
      <Tag className="text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</Tag>
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
