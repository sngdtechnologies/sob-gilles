"use client"

import { Navigation } from "@/components/navigation"
import { BlogPost } from "@/components/blog-post"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function BlogPostPageClient({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogPost post={post} />
      <Footer />
    </main>
  )
}
