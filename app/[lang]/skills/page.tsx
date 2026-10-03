import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { SkillsSection } from "@/components/skills-section"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { pageMetadata } from "@/lib/seo"

type Props = { params: { lang: Locale } }

export function generateMetadata({ params }: Props): Metadata {
  const { title, description } = getDictionary(params.lang).meta.skills
  return pageMetadata({ lang: params.lang, path: "/skills", title, description })
}

export default function SkillsPage({ params }: Props) {
  const dict = getDictionary(params.lang)

  return (
    <SiteShell lang={params.lang} dict={dict}>
      <SkillsSection dict={dict} />
    </SiteShell>
  )
}
