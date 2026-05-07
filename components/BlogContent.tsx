import ReadingProgress from "@/components/blog/ReadingProgress";
import TableOfContents from "@/components/blog/TableOfContents";

type Props = {
  title: string;
  date?: string;
  readingTime?: string;
  tags?: string[];
  /** rendered HTML from your markdown pipeline */
  html: string;
  headings?: { id: string; text: string; level: number }[];
};

export default function BlogContent({
  title, date, readingTime, tags = [], html, headings = [],
}: Props) {
  return (
    <>
      <ReadingProgress />
      <article className="shell relative grid grid-cols-1 gap-16 py-16 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          <header className="mx-auto max-w-prose">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-fg-dim">
              {date && <time>{date}</time>}
              {readingTime && <span>· {readingTime}</span>}
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tightest md:text-5xl">
              {title}
            </h1>
            {tags.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[11px] uppercase tracking-wider text-fg-muted"
                  >
                    #{t}
                  </li>
                ))}
              </ul>
            )}
          </header>

          <div className="mt-14 prose-cyber" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        {headings.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        )}
      </article>
    </>
  );
}