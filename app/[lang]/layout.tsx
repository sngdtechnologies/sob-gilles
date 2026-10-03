import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { isLocale, locales, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { pageMetadata } from "@/lib/seo"
import { siteConfig, siteText } from "@/lib/site"
import "../globals.css"

type Props = { children: React.ReactNode; params: { lang: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Locale = isLocale(params.lang) ? params.lang : "en"
  const text = siteText[lang]

  return {
    metadataBase: new URL(siteConfig.url),
    ...pageMetadata({ lang, title: text.title, description: text.description }),
    title: { default: text.title, template: `%s | ${siteConfig.name}` },
    keywords: [
      "Gilles SOB",
      "full stack developer",
      "développeur fullstack",
      "tech lead",
      "Laravel",
      "Spring Boot",
      "Next.js",
      "React",
      "Moodle",
      "Kafka",
      "Cameroun",
      "portfolio",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    robots: { index: true, follow: true },
    verification: { google: "Eyqatd8_uLLe2uy1UKak_cwEAysyNP8wolwc4ormGHU" },
  }
}

export default function RootLayout({ children, params }: Props) {
  if (!isLocale(params.lang)) notFound()
  const lang = params.lang
  const dict = getDictionary(lang)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: dict.about.fullName,
    url: `${siteConfig.url}/${lang}`,
    image: `${siteConfig.url}/images/gilles-profile.png`,
    jobTitle: siteText[lang].jobTitle,
    description: siteText[lang].description,
    nationality: { "@type": "Country", name: "Cameroon" },
    knowsLanguage: ["fr", "en"],
    knowsAbout: ["Laravel", "Spring Boot", "Next.js", "React", "TypeScript", "Moodle", "Kafka", "Kubernetes", "API security"],
    worksFor: { "@type": "Organization", name: "PKFOKAM Research Center" },
    sameAs: [siteConfig.github, siteConfig.linkedin],
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          {dict.common.skipToContent}
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
      </body>
    </html>
  )
}
