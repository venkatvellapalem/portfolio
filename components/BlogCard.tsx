import Link from 'next/link'
import { BlogMeta, formatDate } from '@/lib/blog-utils'

interface BlogCardProps {
  blog: BlogMeta
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group block">
      <article className="p-5 rounded-lg border border-border bg-bg-secondary/10 card-hover">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <h2 className="text-text font-medium text-base group-hover:text-accent-green transition-colors">
            {blog.title}
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-xs text-text-dim">{blog.readingTime}</span>
            <span className="font-mono text-xs text-text-dim">{formatDate(blog.date)}</span>
          </div>
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-3">
          {blog.description}
        </p>

        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
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
      </article>
    </Link>
  )
}
