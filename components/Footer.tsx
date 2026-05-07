import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shell mt-32 pb-12">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-fg-dim">
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            online · {new Date().getFullYear()}
          </p>
          <p className="mt-3 max-w-md text-fg-muted">
            Building at the intersection of cybersecurity, AI and product.
          </p>
        </div>
        <nav className="flex gap-6 text-sm" aria-label="Footer">
          <a className="nav-link" href="https://github.com/venkatvellapalem">GitHub</a>
          <a className="nav-link" href="https://x.com/">X</a>
          <Link className="nav-link" href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}