import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Venkat Vellapalem.',
}

const contacts = [
  {
    label: 'Email',
    value: 'venkatvellapalem@gmail.com',
    href: 'mailto:venkatvellapalem@gmail.com',
    desc: 'Best for collaboration or opportunities',
    svg: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    fill: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/venkatvellapalem',
    href: 'https://github.com/venkatvellapalem',
    desc: 'Projects, tools, and open source work',
    svg: '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>',
    fill: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/venkatvellapalem',
    href: 'https://linkedin.com/in/venkatvellapalem',
    desc: 'Professional network and background',
    svg: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    fill: true,
  },
  {
    label: 'TryHackMe',
    value: 'Top 3% globally',
    href: 'https://tryhackme.com',
    desc: 'CTF & security challenges platform',
    svg: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    fill: false,
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
      <div className="mb-12">
        <p className="font-mono text-xs text-accent-green tracking-widest uppercase mb-3">~/contact</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-text mb-4">Get in Touch</h1>
        <p className="text-text-muted max-w-lg">
          Open to internships, research collaborations, CTF teams, and interesting security conversations.
          Reach out — I usually reply within a day.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact links */}
        <div className="space-y-3">
          {contacts.map(({ label, value, href, desc, svg, fill }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-lg border border-border bg-bg-secondary/20 card-hover"
            >
              <span className="text-text-dim group-hover:text-accent-green transition-colors mt-0.5 shrink-0">
                <svg
                  width="18" height="18" viewBox="0 0 24 24"
                  fill={fill ? 'currentColor' : 'none'}
                  stroke={fill ? 'none' : 'currentColor'}
                  strokeWidth={fill ? '0' : '1.5'}
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs text-text-dim mb-0.5">{label}</p>
                <p className="text-text text-sm font-medium truncate group-hover:text-accent-green transition-colors">{value}</p>
                <p className="text-text-dim text-xs mt-0.5">{desc}</p>
              </div>
              <span className="text-text-dim group-hover:text-accent-green group-hover:translate-x-1 transition-all text-sm shrink-0 mt-1">→</span>
            </a>
          ))}
        </div>

        {/* Client contact form */}
        <ContactForm />
      </div>

      <div className="mt-10 flex items-center gap-2 text-text-dim">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="font-mono text-xs">Nellore, Andhra Pradesh, India</span>
      </div>
    </div>
  )
}
