'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/whoami', label: 'WHOAMI' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur
        ${scrolled ? 'bg-bg/80 border-b border-border/50' : 'bg-transparent'}`}
    >
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-accent-green text-sm font-medium">
            {'> '}
          </span>
          <span className="font-mono text-text text-sm font-medium tracking-wider group-hover:text-accent-green transition-colors">
            venkat<span className="text-accent-green">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors hover-underline
                    ${isActive ? 'text-accent-green' : 'text-text-muted hover:text-text'}`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-muted hover:text-text transition-colors p-1"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-bg/95 nav-blur">
          <ul className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-mono text-xs tracking-widest uppercase transition-colors block py-1
                      ${isActive ? 'text-accent-green' : 'text-text-muted hover:text-text'}`}
                  >
                    <span className="text-accent-green mr-2">{'>'}</span>
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
