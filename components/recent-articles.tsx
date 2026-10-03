import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { formatDate, getPosts } from "@/lib/blog"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { lang: Locale; dict: Dictionary }

export function RecentArticles({ lang, dict }: Props) {
  const articles = getPosts(lang).slice(0, 3)

  return (
    <section className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={dict.home.articles.eyebrow} title={dict.home.articles.title} subtitle={dict.home.articles.subtitle} />

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={localePath(lang, `/blog/${article.slug}`)}
              data-reveal
              data-spotlight
              style={{ ["--d" as string]: `${index * 80}ms` }}
              className="surface group flex flex-col gap-5 p-7"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow !text-muted-foreground">{article.category}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">{article.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
              <p className="mt-auto pt-2 font-mono text-xs text-muted-foreground/80">
                {formatDate(article.date, lang)} · {article.minutes} {dict.common.readTime}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center" data-reveal>
          <Button asChild size="lg" variant="outline">
            <Link href={localePath(lang, "/blog")}>
              {dict.home.articles.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
