import { Navigation } from "@/components/navigation"
import { BlogList } from "@/components/blog-list"
import { BlogSidebar } from "@/components/blog-sidebar"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Insights, tutorials, and thoughts on modern web development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BlogList />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
