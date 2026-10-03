import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { formatDate, getPosts } from "@/lib/blog"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { lang: Locale; dict: Dictionary }

export function BlogList({ lang, dict }: Props) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {getPosts(lang).map((post, index) => (
        <li key={post.id} data-reveal style={{ ["--d" as string]: `${index * 50}ms` }}>
          <Link href={localePath(lang, `/blog/${post.slug}`)} className="group grid gap-3 py-9 sm:grid-cols-12 sm:gap-8">
            <div className="sm:col-span-3">
              <p className="eyebrow !text-gold">{post.category}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {formatDate(post.date, lang)} · {post.minutes} {dict.common.readTime}
              </p>
            </div>
            <div className="sm:col-span-8">
              <h2 className="text-2xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">{post.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </div>
            <ArrowUpRight className="hidden h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary sm:col-span-1 sm:block sm:justify-self-end" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
