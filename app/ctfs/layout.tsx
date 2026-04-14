import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'cytrus:~/CTFs/# _',
  description: 'CTF competition history for team adjac3nt_n0d3.',
  openGraph: {
    title: 'CTFs — adjac3nt_n0d3',
    description: 'CTF competition history and team info.',
  },
}

export default function CTFsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}