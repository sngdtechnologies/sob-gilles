import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { pageMetadata } from "@/lib/seo"

type Props = { params: { lang: Locale } }

export function generateMetadata({ params }: Props): Metadata {
  const { title, description } = getDictionary(params.lang).meta.about
  return pageMetadata({ lang: params.lang, path: "/about", title, description })
}

export default function AboutPage({ params }: Props) {
  const dict = getDictionary(params.lang)

  return (
    <SiteShell lang={params.lang} dict={dict}>
      <AboutSection dict={dict} />
      <ExperienceSection dict={dict} />
    </SiteShell>
  )
}
