import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-dim">
          <span className="text-accent-green">{'>'}</span>{' '}
          © {new Date().getFullYear()} Venkat Vellapalem
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/venkatvellapalem"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-dim hover:text-accent-green transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/venkatvellapalem"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-dim hover:text-accent-green transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:venkatvellapalem@gmail.com"
            className="font-mono text-xs text-text-dim hover:text-accent-green transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}
