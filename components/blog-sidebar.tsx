import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  { name: "Next.js", count: 3 },
  { name: "React", count: 4 },
  { name: "Laravel", count: 2 },
  { name: "TypeScript", count: 3 },
  { name: "Database", count: 2 },
  { name: "CSS", count: 2 },
]

const recentPosts = [
  {
    title: "Building Scalable Web Applications with Next.js 15",
    slug: "building-scalable-web-applications-nextjs-15",
    date: "2024-03-15",
  },
  {
    title: "Laravel Best Practices for Modern Development",
    slug: "laravel-best-practices-modern-development",
    date: "2024-03-10",
  },
  {
    title: "React Server Components: The Future of React",
    slug: "react-server-components-future-react",
    date: "2024-03-05",
  },
]

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <Link
                  href={`/blog/category/${category.name.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {category.name}
                </Link>
                <Badge variant="outline" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium hover:text-primary transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-muted-foreground mt-1">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">About the Author</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Gilles SOB is a full-stack developer with expertise in Laravel, React, and Next.js. He enjoys sharing
            knowledge about modern web development practices and building scalable applications.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
