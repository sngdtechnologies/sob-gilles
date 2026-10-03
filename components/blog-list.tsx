import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { formatDate, getPosts } from "@/lib/blog"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { lang: Locale; dict: Dictionary }

export function BlogList({ lang, dict }: Props) {
  return (
    <div className="space-y-8">
      {getPosts(lang).map((post) => (
        <Card key={post.id} className="group transition-shadow duration-300 hover:shadow-lg">
          <CardHeader>
            <div className="mb-2 flex items-center justify-between">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {formatDate(post.date, lang)}
              </div>
            </div>
            <CardTitle className="text-2xl transition-colors group-hover:text-primary">
              <Link href={localePath(lang, `/blog/${post.slug}`)}>{post.title}</Link>
            </CardTitle>
            <CardDescription>
              {post.minutes} {dict.common.readTime}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <Button variant="ghost" asChild className="h-auto p-0">
              <Link href={localePath(lang, `/blog/${post.slug}`)} className="inline-flex items-center">
                {dict.common.readMore}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
