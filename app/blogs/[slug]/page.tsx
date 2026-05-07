import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import { getBlogBySlug, getAllBlogs, formatDate } from "@/lib/blog-utils";

import BlogContent from "@/components/BlogContent";
import ReadingProgress from "@/components/blog/ReadingProgress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <div className="min-h-screen">
      <ReadingProgress />

      <main className="shell py-24">
        {/* Back link */}
        <div className="mx-auto mb-12 max-w-[68ch]">
          <Link
            href="/blogs"
            className="nav-link inline-flex items-center gap-2 text-sm"
          >
            ← Back to blogs
          </Link>
        </div>

        <article className="prose-cyber mx-auto max-w-[68ch]">
          {/* Tags */}
          {blog.tags?.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {blog.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider text-fg-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1>{blog.title}</h1>

          {/* Meta */}
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-fg-dim">
            <time>{formatDate(blog.date)}</time>

            {blog.readingTime && (
              <>
                <span>·</span>
                <span>{blog.readingTime}</span>
              </>
            )}
          </div>

          {/* Description */}
          {blog.description && (
            <p className="text-lg text-fg-muted">
              {blog.description}
            </p>
          )}

          {/* Blog content */}
          <BlogContent
            title={blog.title}
            date={formatDate(blog.date)}
            readingTime={blog.readingTime}
            tags={blog.tags}
            html={blog.content}
          />
        </article>

        {/* Footer nav */}
        <div className="mx-auto mt-16 flex max-w-[68ch] justify-between text-sm text-fg-muted">
          <Link
            href="/blogs"
            className="nav-link"
          >
            ← All posts
          </Link>

          <a href="#" className="nav-link">
  Back to top ↑
</a>
        </div>
      </main>
    </div>
  );
}