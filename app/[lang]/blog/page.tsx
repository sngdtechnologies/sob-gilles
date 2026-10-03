import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { BlogList } from "@/components/blog-list"
import { BlogSidebar } from "@/components/blog-sidebar"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { pageMetadata } from "@/lib/seo"

type Props = { params: { lang: Locale } }

export function generateMetadata({ params }: Props): Metadata {
  const { title, description } = getDictionary(params.lang).meta.blog
  return pageMetadata({ lang: params.lang, path: "/blog", title, description })
}

export default function BlogPage({ params }: Props) {
  const { lang } = params
  const dict = getDictionary(lang)

  return (
    <SiteShell lang={lang} dict={dict}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{dict.blog.title}</h1>
            <p className="text-balance text-xl text-muted-foreground">{dict.blog.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <BlogList lang={lang} dict={dict} />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar lang={lang} dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
