import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface BlogPostProps {
  post: {
    id: number
    title: string
    content: string
    excerpt: string
    date: string
    category: string
    readTime: string
    slug: string
    author: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground gap-4">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {post.author}
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{post.excerpt}</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" className="rounded-lg" {...props}>
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
