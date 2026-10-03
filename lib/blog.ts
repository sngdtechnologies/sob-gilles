import type { Locale } from "@/lib/i18n/config"
import { blogPosts } from "@/lib/blog-posts"
import { blogPostsFr } from "@/lib/blog-posts-fr"

export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  minutes: number
  author: string
}

export function getPosts(lang: Locale): BlogPost[] {
  return blogPosts.map((post) => {
    const translated = lang === "fr" ? blogPostsFr[post.slug] : undefined
    return {
      id: post.id,
      slug: post.slug,
      title: translated?.title ?? post.title,
      excerpt: translated?.excerpt ?? post.excerpt,
      content: translated?.content ?? post.content,
      date: post.date,
      category: post.category,
      minutes: parseInt(post.readTime, 10) || 5,
      author: post.author,
    }
  })
}

export function getPost(lang: Locale, slug: string) {
  return getPosts(lang).find((post) => post.slug === slug)
}

export function formatDate(date: string, lang: Locale) {
  return new Date(date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
