import { SiteShell } from "@/components/site-shell"
import { HeroSection } from "@/components/hero-section"
import { RecentArticles } from "@/components/recent-articles"
import { CompetencesPreview } from "@/components/competences-preview"
import { LatestProjects } from "@/components/latest-projects"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const { lang } = params
  const dict = getDictionary(lang)

  return (
    <SiteShell lang={lang} dict={dict} padded={false}>
      <HeroSection lang={lang} dict={dict} />
      <CompetencesPreview lang={lang} dict={dict} />
      <LatestProjects lang={lang} dict={dict} />
      <RecentArticles lang={lang} dict={dict} />
    </SiteShell>
  )
}
