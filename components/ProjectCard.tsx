import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  year?: string | number;
};

export default function ProjectCard({ title, description, href, tags = [], year }: Props) {
  return (
    <Link
      href={href}
      className="group reveal relative block overflow-hidden rounded-2xl bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-surface-2"
      style={{ boxShadow: "inset 0 0 0 1px var(--hairline)" }}
    >
      {/* hover-only accent ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px var(--accent), 0 30px 60px -30px var(--accent-soft)" }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          {year && (
            <span className="font-mono text-xs uppercase tracking-widest text-fg-dim">
              {year}
            </span>
          )}
          <h3 className="mt-1 text-xl font-semibold text-fg">{title}</h3>
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-fg-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          strokeWidth={1.5}
        />
      </div>
      <p className="relative mt-4 text-[0.95rem] leading-relaxed text-fg-muted">
        {description}
      </p>
      {tags.length > 0 && (
        <ul className="relative mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-bg/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}