import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostPageClient } from "./BlogPostPageClient"
import { blogPosts } from "@/lib/blog-posts"
import { siteConfig } from "@/lib/site"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  const url = `/blog/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: [post.category],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostPageClient params={params} />
    </>
  )
}
