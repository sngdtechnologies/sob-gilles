import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { formatDate, getPosts } from "@/lib/blog"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { lang: Locale; dict: Dictionary }

export function RecentArticles({ lang, dict }: Props) {
  const articles = getPosts(lang).slice(0, 3)

  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{dict.home.articles.title}</h2>
          <p className="text-balance text-xl text-muted-foreground">{dict.home.articles.subtitle}</p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="group transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formatDate(article.date, lang)}
                  </div>
                </div>
                <CardTitle className="transition-colors group-hover:text-primary">
                  <Link href={localePath(lang, `/blog/${article.slug}`)}>{article.title}</Link>
                </CardTitle>
                <CardDescription>
                  {article.minutes} {dict.common.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 leading-relaxed text-muted-foreground">{article.excerpt}</p>
                <Button variant="ghost" asChild className="h-auto p-0">
                  <Link href={localePath(lang, `/blog/${article.slug}`)} className="inline-flex items-center">
                    {dict.common.readMore}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href={localePath(lang, "/blog")}>
              {dict.home.articles.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
