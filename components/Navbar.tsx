"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/whoami", label: "whoami" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/ctfs", label: "CTFs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`shell mt-4 flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "nav-glass shadow-elevated" : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-fg"
          aria-label="Home"
        >
          <span className="text-accent">~$</span> venkat
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-sm"
              data-active={pathname === l.href || pathname?.startsWith(l.href + "/")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-fg-muted"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-current" />
          <span className="mt-1.5 block h-px w-6 bg-current" />
        </button>
      </div>

      {open && (
        <div className="shell mt-2 md:hidden">
          <div className="nav-glass rounded-2xl p-4">
            <ul className="flex flex-col gap-3">
              {links.slice(1).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="nav-link block py-1 text-base"
                    data-active={pathname === l.href}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}