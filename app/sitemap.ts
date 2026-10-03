import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/blog"
import { locales } from "@/lib/i18n/config"
import { siteConfig } from "@/lib/site"

const pages = ["", "/about", "/projects", "/skills", "/blog", "/contact"]

function entry(path: string, extra: Partial<MetadataRoute.Sitemap[number]> = {}): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((lang) => [lang, `${siteConfig.url}/${lang}${path}`]))
  return locales.map((lang) => ({
    url: `${siteConfig.url}/${lang}${path}`,
    alternates: { languages },
    ...extra,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.flatMap((path) =>
    entry(path, { changeFrequency: "monthly", priority: path === "" ? 1 : 0.8 }),
  )
  const posts = getPosts("en").flatMap((post) =>
    entry(`/blog/${post.slug}`, { lastModified: new Date(post.date), changeFrequency: "yearly", priority: 0.6 }),
  )
  return [...staticPages, ...posts]
}
