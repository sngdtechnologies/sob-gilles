import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { lang: Locale; dict: Dictionary; children: React.ReactNode; padded?: boolean }

export function SiteShell({ lang, dict, children, padded = true }: Props) {
  return (
    <>
      <Navigation lang={lang} dict={dict} />
      <main id="main" className="min-h-screen">
        {padded ? <div className="pb-16 pt-24">{children}</div> : children}
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
