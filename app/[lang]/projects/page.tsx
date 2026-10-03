import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { ProjectsSection } from "@/components/projects-section"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { pageMetadata } from "@/lib/seo"

type Props = { params: { lang: Locale } }

export function generateMetadata({ params }: Props): Metadata {
  const { title, description } = getDictionary(params.lang).meta.projects
  return pageMetadata({ lang: params.lang, path: "/projects", title, description })
}

export default function ProjectsPage({ params }: Props) {
  const dict = getDictionary(params.lang)

  return (
    <SiteShell lang={params.lang} dict={dict}>
      <ProjectsSection dict={dict} />
    </SiteShell>
  )
}
