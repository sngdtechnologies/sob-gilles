import { BlogPostPageClient } from "./BlogPostPageClient"

export { generateStaticParams } from "./BlogPostPageClient"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostPageClient params={params} />
}
