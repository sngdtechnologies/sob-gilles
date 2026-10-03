import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/site-shell"
import { BlogPost } from "@/components/blog-post"
import { getPost, getPosts } from "@/lib/blog"
import { locales, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

type Props = { params: { lang: Locale; slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return locales.flatMap((lang) => getPosts(lang).map((post) => ({ lang, slug: post.slug })))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.lang, params.slug)
  if (!post) return {}

  const base = pageMetadata({
    lang: params.lang,
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt,
    type: "article",
  })

  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", publishedTime: post.date, authors: [siteConfig.name], tags: [post.category] },
  }
}

export default function BlogPostPage({ params }: Props) {
  const { lang, slug } = params
  const post = getPost(lang, slug)
  if (!post) notFound()

  const dict = getDictionary(lang)
  const url = `${siteConfig.url}/${lang}/blog/${post.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    inLanguage: lang,
    datePublished: post.date,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  }

  return (
    <SiteShell lang={lang} dict={dict} padded={false}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPost post={post} lang={lang} dict={dict} />
    </SiteShell>
  )
}
