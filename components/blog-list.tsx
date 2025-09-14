import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

// Mock blog data - in a real app, this would come from a CMS or database
const allBlogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and how they can help you build more performant and scalable web applications.",
    date: "2024-03-15",
    category: "Next.js",
    readTime: "5 min read",
    slug: "building-scalable-web-applications-nextjs-15",
  },
  {
    id: 2,
    title: "Laravel Best Practices for Modern Development",
    excerpt:
      "Discover essential Laravel patterns and practices that will make your PHP applications more maintainable and secure.",
    date: "2024-03-10",
    category: "Laravel",
    readTime: "8 min read",
    slug: "laravel-best-practices-modern-development",
  },
  {
    id: 3,
    title: "React Server Components: The Future of React",
    excerpt:
      "Understanding React Server Components and how they're changing the way we think about React applications.",
    date: "2024-03-05",
    category: "React",
    readTime: "6 min read",
    slug: "react-server-components-future-react",
  },
  {
    id: 4,
    title: "TypeScript Tips for Better Code Quality",
    excerpt: "Learn advanced TypeScript techniques that will help you write more robust and maintainable code.",
    date: "2024-02-28",
    category: "TypeScript",
    readTime: "7 min read",
    slug: "typescript-tips-better-code-quality",
  },
  {
    id: 5,
    title: "Database Optimization Strategies",
    excerpt:
      "Practical approaches to optimize database performance in web applications, from indexing to query optimization.",
    date: "2024-02-20",
    category: "Database",
    readTime: "10 min read",
    slug: "database-optimization-strategies",
  },
  {
    id: 6,
    title: "Modern CSS Techniques for Responsive Design",
    excerpt: "Explore modern CSS features like Grid, Flexbox, and Container Queries for creating responsive layouts.",
    date: "2024-02-15",
    category: "CSS",
    readTime: "6 min read",
    slug: "modern-css-techniques-responsive-design",
  },
]

export function BlogList() {
  return (
    <div className="space-y-8">
      {allBlogPosts.map((post) => (
        <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{post.readTime}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
            <Button variant="ghost" asChild className="p-0 h-auto">
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center">
                Read full article
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
