import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Venkat Vellapalem — Cybersecurity',
    template: '%s',
  },
  description: 'Cybersecurity student & builder. Exploring security, building tools, documenting what I learn.',
  keywords: ['cybersecurity', 'security researcher', 'CTF', 'portfolio', 'OSINT'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://venkatvellapalem.vercel.app',
    title: 'Venkat Vellapalem — Cybersecurity',
    description: 'Cybersecurity student & builder.',
    siteName: 'Venkat Vellapalem',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
