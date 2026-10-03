import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { ContactSection } from "@/components/contact-section"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { pageMetadata } from "@/lib/seo"

type Props = { params: { lang: Locale } }

export function generateMetadata({ params }: Props): Metadata {
  const { title, description } = getDictionary(params.lang).meta.contact
  return pageMetadata({ lang: params.lang, path: "/contact", title, description })
}

export default function ContactPage({ params }: Props) {
  const dict = getDictionary(params.lang)

  return (
    <SiteShell lang={params.lang} dict={dict}>
      <ContactSection lang={params.lang} dict={dict} />
    </SiteShell>
  )
}
