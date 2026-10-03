import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { formatDate, type BlogPost as Post } from "@/lib/blog"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { post: Post; lang: Locale; dict: Dictionary }

export function BlogPost({ post, lang, dict }: Props) {
  return (
    <article className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href={localePath(lang, "/blog")}
          className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          {dict.blog.backToBlog}
        </Link>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="eyebrow !text-gold">{post.category}</span>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.minutes} {dict.common.readTime}
              </div>
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {post.author}
              </div>
            </div>
          </div>
          <h1 className="mb-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl">{post.title}</h1>
          <p className="text-pretty text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
        </header>

        <div className="article">
          <ReactMarkdown
            components={{
              h1: () => null,
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return match ? (
                  <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" className="rounded-lg">
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
