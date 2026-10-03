import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate, getPosts } from "@/lib/blog"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { lang: Locale; dict: Dictionary }

export function BlogSidebar({ lang, dict }: Props) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{dict.blog.recent}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {getPosts(lang)
              .slice(0, 4)
              .map((post) => (
                <li key={post.slug}>
                  <Link
                    href={localePath(lang, `/blog/${post.slug}`)}
                    className="line-clamp-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-1 text-xs text-muted-foreground">{formatDate(post.date, lang)}</p>
                </li>
              ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{dict.blog.aboutAuthor}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">{dict.blog.aboutAuthorText}</p>
        </CardContent>
      </Card>
    </div>
  )
}
