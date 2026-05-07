import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getBlogBySlug, getAllBlogs, formatDate } from '@/lib/blog-utils'
import Link from 'next/link'
import BlogContent from '@/components/BlogContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return { title: 'Not Found' }
  return { title: blog.title, description: blog.description }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) notFound()

  return (
    <main className="blog-page min-h-screen relative z-10">
  <div className="max-w-[64ch] mx-auto px-6">
      {/* Top bar with back link */}
      <div className="max-w-[78ch] pt-12 pb-4">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#22c55e] transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-mono text-xs">cd ../blogs</span>
        </Link>
      </div>

      {/* Hero header */}
      <header className="max-w-[78ch] pb-10 border-b border-[#d4d4d8]">
        {/* Tags */}
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-full border border-[#22c55e]/20 text-[#22c55e]/80 bg-[#22c55e]/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1
  className="text-4xl sm:text-5xl font-bold text-[#e2e8f0] leading-tight mb-4 tracking-tight max-w-4xl"
  style={{ fontFamily: "'Sora', system-ui, sans-serif" }}
>
          {blog.title}
        </h1>

        {/* Meta line */}
        <div className="flex items-center gap-3 text-sm text-[#94a3b8] font-mono">
          <time>{formatDate(blog.date)}</time>
          <span className="text-[#22c55e]/40">•</span>
          <span>{blog.readingTime}</span>
        </div>

        {/* Description */}
        {blog.description && (
          <p className="mt-5 text-[#94a3b8] text-base leading-relaxed max-w-3xl">
            {blog.description}
          </p>
        )}
      </header>

      {/* Blog content */}
      <article className="max-w-[78ch] py-12">
        <BlogContent content={blog.content} />
      </article>

      {/* Footer */}
      <footer className="max-w-[78ch] pb-16">
        <div className="border-t border-[#1e293b] pt-8 flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#22c55e] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            back to all posts
          </Link>
          <span className="text-xs text-[#94a3b8]/40 font-mono">EOF</span>
        </div>
      </footer>
       </div>
    </main>
  )
}
