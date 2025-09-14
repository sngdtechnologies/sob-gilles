import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

// Mock blog data - in a real app, this would come from a CMS or database
const recentArticles = [
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
]

export function RecentArticles() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Insights and tutorials from my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{article.readTime}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                <Button variant="ghost" asChild className="p-0 h-auto">
                  <Link href={`/blog/${article.slug}`} className="inline-flex items-center">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
