import type { Metadata } from "next"
import { localePath, locales, ogLocales, type Locale } from "@/lib/i18n/config"
import { siteConfig } from "@/lib/site"

type PageMetadata = {
  lang: Locale
  path?: string
  title: string
  description: string
  type?: "website" | "article"
}

export function pageMetadata({ lang, path = "", title, description, type = "website" }: PageMetadata): Metadata {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, localePath(l, path)]))
  languages["x-default"] = localePath("en", path)

  return {
    title,
    description,
    alternates: { canonical: localePath(lang, path), languages },
    openGraph: {
      type,
      url: localePath(lang, path),
      title,
      description,
      siteName: siteConfig.name,
      locale: ogLocales[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [siteConfig.ogImage] },
  }
}
