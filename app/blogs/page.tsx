import type { Metadata } from 'next'
import { getAllBlogs, formatDate } from '@/lib/blog-utils'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Security write-ups, CTF walkthroughs, and learning notes by Venkat Vellapalem.',
}

export default function BlogsPage() {
  const blogs = getAllBlogs()

  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">

      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs text-accent-green tracking-widest uppercase mb-3">~/blogs</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-text mb-4">Writing</h1>
        <p className="text-text-muted max-w-lg">
          Security write-ups, CTF walkthroughs, tool breakdowns, and notes from what I&apos;m learning.
          Writing helps me understand things better.
        </p>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-mono text-text-dim text-sm mb-2">No posts yet.</p>
          <p className="font-mono text-xs text-text-dim">
            Add <code className="text-accent-green">.md</code> files to{' '}
            <code className="text-accent-green">content/blogs/</code>
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      )}
    </div>
  )
}
