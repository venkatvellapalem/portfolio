import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'vᴇɴᴋᴀᴛvᴇʟʟᴀᴘᴀʟᴇᴍ:~# _',
}

const links = [
  {
    href: 'https://venkatvellapalem.vercel.app/projects',
    label: 'Projects',
    icon: '◈',
    desc: 'Tools I\'ve built',
  },
  {
    href: 'https://venkatvellapalem.vercel.app/blogs',
    label: 'Blogs',
    icon: '◎',
    desc: 'What I\'ve learned',
  },
  {
    href: 'https://venkatvellapalem.vercel.app/portfolio',
    label: 'Portfolio',
    icon: '◉',
    desc: 'Full overview',
  },
]

const badges = [
  'Network Security',
  'Digital Forensics',
  'CTF Player',
  'OSINT',
  'VAPT',
  'Threat Hunting',
]

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-2xl w-full mx-auto">

        {/* Status badge */}
        <div className="animate-fade-in opacity-0 delay-100 flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-green/30 bg-accent-green/5 text-xs font-mono text-accent-green">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-slow inline-block" />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-slide-up opacity-0 delay-100 font-sans text-2xl md:text-3xl lg:text-4xl font-semibold text-text leading-tight mb-4 tracking-tight">
          Vellapalem Jyothi Venkat Reddy<br />
          <span className="text-text-muted font-light">@Cytrus</span>
        </h1>

        {/* Role */}
        <div className="animate-slide-up opacity-0 delay-200 flex items-center gap-2 mb-6">
          <span className="font-mono text-accent-green text-sm">{'> '}</span>
          <p className="font-mono text-sm text-text-muted tracking-wide">
            Cybersecurity Student & Builder
          </p>
        </div>

        {/* Bio */}
        <p className="animate-slide-up opacity-0 delay-300 text-text-muted leading-relaxed mb-8 text-base max-w-lg">
          I explore cybersecurity, build tools, and document what I learn.
          Focused on solving real-world security problems and creating practical solutions.
        </p>

        {/* Skill badges */}
        <div className="animate-slide-up opacity-0 delay-400 flex flex-wrap gap-2 mb-10">
          {badges.map((badge) => (
            <span
              key={badge}
              className="font-mono text-xs px-2 py-1 rounded border border-border text-text-dim bg-bg-secondary/50"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Links */}
        <div className="animate-slide-up opacity-0 delay-500 flex flex-col sm:flex-row gap-3">
          {links.map(({ href, label, icon, desc }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-bg-secondary/30 hover:border-accent-green/40 hover:bg-accent-green/5 transition-all duration-200 card-hover"
            >
              <span className="text-accent-green font-mono text-base group-hover:scale-110 transition-transform">
                {icon}
              </span>
              <div>
                <span className="block text-text text-sm font-medium">{label}</span>
                <span className="block text-text-dim text-xs font-mono">{desc}</span>
              </div>
              <span className="ml-auto text-text-dim group-hover:text-accent-green group-hover:translate-x-1 transition-all text-sm">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Internal nav hint */}
        <div className="animate-fade-in opacity-0 delay-500 mt-12 pt-8 border-t border-border/30">
          <p className="font-mono text-xs text-text-dim mb-3">explore more</p>
          <div className="flex gap-6">
            <Link href="/whoami" className="font-mono text-xs text-text-dim hover:text-accent-green transition-colors hover-underline">
              /whoami
            </Link>
            <Link href="/projects" className="font-mono text-xs text-text-dim hover:text-accent-green transition-colors hover-underline">
              /projects
            </Link>
            <Link href="/blogs" className="font-mono text-xs text-text-dim hover:text-accent-green transition-colors hover-underline">
              /blogs
            </Link>
            <Link href="/contact" className="font-mono text-xs text-text-dim hover:text-accent-green transition-colors hover-underline">
              /contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
