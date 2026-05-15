import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Venkat Vellapalem',
    template: '%s',
  },
  description: 'Cybersecurity student & builder. Exploring security, building tools, documenting what I learn.',
  keywords: ['cybersecurity', 'security researcher', 'CTF', 'portfolio', 'OSINT'],
    
    icons: {
  icon: [
    { url: '/favicon.ico' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
},

  manifest: '/site.webmanifest',
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
