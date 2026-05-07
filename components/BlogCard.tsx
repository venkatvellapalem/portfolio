import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  readingTime?: string;
  tags?: string[];
};

export default function BlogCard({ slug, title, excerpt, date, readingTime, tags = [] }: Props) {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="group reveal block rounded-xl px-2 py-6 transition-colors duration-300 hover:bg-surface"
    >
      <div className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-widest text-fg-dim">
        {date && <time>{date}</time>}
        {readingTime && <span>· {readingTime}</span>}
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-fg transition-colors group-hover:text-accent md:text-[1.65rem]">
        {title}
      </h3>
      {excerpt && (
        <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-fg-muted">
          {excerpt}
        </p>
      )}
      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="font-mono text-[11px] uppercase tracking-wider text-fg-dim">
              #{t}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}