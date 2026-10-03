import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects", "/skills", "/blog", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }))

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...pages, ...posts]
}
