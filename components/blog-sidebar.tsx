import Link from "next/link"
import { formatDate, getPosts } from "@/lib/blog"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { lang: Locale; dict: Dictionary }

export function BlogSidebar({ lang, dict }: Props) {
  return (
    <div className="space-y-6 lg:sticky lg:top-32">
      <div className="surface p-7" data-reveal>
        <h2 className="eyebrow mb-6">{dict.blog.recent}</h2>
        <ul className="space-y-5">
          {getPosts(lang)
            .slice(0, 4)
            .map((post) => (
              <li key={post.slug}>
                <Link href={localePath(lang, `/blog/${post.slug}`)} className="line-clamp-2 text-sm font-medium leading-snug transition-colors hover:text-primary">
                  {post.title}
                </Link>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{formatDate(post.date, lang)}</p>
              </li>
            ))}
        </ul>
      </div>

      <div className="surface p-7" data-reveal style={{ ["--d" as string]: "80ms" }}>
        <h2 className="eyebrow mb-4">{dict.blog.aboutAuthor}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{dict.blog.aboutAuthorText}</p>
      </div>
    </div>
  )
}
