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
  return {
    title: blog.title,
    description: blog.description,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) notFound()

  return (
    <main className="min-h-screen bg-black text-green-400 px-6 py-16 max-w-3xl mx-auto font-mono">

      {/* Back */}
      <Link href="/blogs" className="text-green-600 hover:text-green-400 text-sm mb-8 inline-block">
        ← all posts
      </Link>

      {/* Meta */}
      <header className="mb-8">
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span key={tag} className="text-xs bg-green-900/40 text-green-400 px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl font-bold text-green-300 mb-2">
          {blog.title}
        </h1>

        <p className="text-sm text-green-600">
          {formatDate(blog.date)} · {blog.readingTime}
        </p>

        {blog.description && (
          <p className="text-green-500 mt-3">
            {blog.description}
          </p>
        )}
      </header>

      {/* Divider */}
      <hr className="border-green-900 mb-8" />

      {/* Content */}
      <BlogContent content={blog.content} />

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-green-900">
        <Link href="/blogs" className="text-green-600 hover:text-green-400 text-sm">
          ← back to all posts
        </Link>
      </footer>

    </main>
  )
}
