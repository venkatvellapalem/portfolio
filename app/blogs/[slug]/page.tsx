import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getBlogBySlug, getAllBlogs, formatDate } from '@/lib/blog-utils'
import Link from 'next/link'
import BlogContent from '@/components/BlogContent'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug)
  if (!blog) return { title: 'Not Found' }
  return {
    title: blog.title,
    description: blog.description,
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const blog = getBlogBySlug(params.slug)

  if (!blog) notFound()

  return (
    <div className="max-w-2xl mx-auto px-6 pt-28 pb-16">

      {/* Back */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 font-mono text-xs text-text-dim hover:text-accent-green transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        all posts
      </Link>

      {/* Meta */}
      <header className="mb-10">
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 rounded border border-accent-green/20 text-accent-green/70 bg-accent-green/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl font-semibold text-text mb-4 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-text-dim">{formatDate(blog.date)}</span>
          <span className="text-border">·</span>
          <span className="font-mono text-xs text-text-dim">{blog.readingTime}</span>
        </div>

        {blog.description && (
          <p className="mt-4 text-text-muted leading-relaxed border-l-2 border-accent-green/30 pl-4 italic">
            {blog.description}
          </p>
        )}
      </header>

      {/* Divider */}
      <div className="border-t border-border mb-10" />

      {/* Content */}
      <BlogContent content={blog.content} />

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-dim hover:text-accent-green transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          back to all posts
        </Link>
      </div>
    </div>
  )
}
