import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-accent-green text-6xl font-bold mb-4">404</p>
      <h1 className="text-2xl font-semibold text-text mb-2">Page not found</h1>
      <p className="text-text-muted font-mono text-sm mb-8">
        <span className="text-accent-green">{'> '}</span>
        The path you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="font-mono text-sm text-accent-green border border-accent-green/30 px-4 py-2 rounded-md hover:bg-accent-green/10 transition-colors"
      >
        ← Go home
      </Link>
    </div>
  )
}
