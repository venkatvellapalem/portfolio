import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'cytrus:~/whoami/# _',
  description: 'Learn more about Venkat Vellapalem — cybersecurity student, CTF player, and builder.',
}

const certifications = [
  'Google Cybersecurity Professional',
  'ISC2 Certified in Cybersecurity (CC)',
  'Cisco CyberOps Associate',
  'CompTIA Security+ (In Progress)',
]

const skills = {
  'Security Domains': ['Network Security', 'VAPT', 'Bug Hunting', 'Digital Forensics', 'Incident Response', 'Threat Intelligence'],
  'Tools': ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'Autopsy', 'Volatility', 'Splunk', 'Shodan'],
  'Frameworks': ['OWASP Top 10', 'OSINT Framework', 'Log Analysis', 'Threat Hunting', 'SOAR'],
}

const timeline = [
  {
    period: 'Aug 2023 — Present',
    title: 'B.Tech CSE (Cyber Security)',
    org: 'MITS Madanapalle',
    desc: 'GPA: 8.0 — Building a strong foundation in security while pursuing real-world experience.',
    tag: 'Education',
  },
  {
    period: 'Jun 2025 — Aug 2025',
    title: 'Research Intern',
    org: 'NIT Puducherry',
    desc: 'Developed AI-based authentication systems for autonomous vehicle networks. Designed blockchain security protocols for V2I communications.',
    tag: 'Research',
  },
  {
    period: 'Feb 2025 — Jul 2025',
    title: 'Business Research Intern',
    org: 'Systech IT Consulting',
    desc: 'Analyzed market competitors and threat landscapes to support strategic decision-making.',
    tag: 'Internship',
  },
  {
    period: 'Sep 2024 — Oct 2024',
    title: 'Security Auditor',
    org: 'Gyaantrix Technologies',
    desc: 'Conducted comprehensive vulnerability assessments. Identified critical business logic flaws and delivered prioritized remediation reports.',
    tag: 'Security',
  },
  {
    period: 'Sep 2024 — Present',
    title: 'Forensics Researcher',
    org: 'Caff3in3-DB (CTF Team)',
    desc: 'Solving complex digital forensics challenges — steganography, log analysis, reverse engineering, and cryptanalysis in CTF competitions.',
    tag: 'CTF',
  },
  {
    period: 'Oct 2024 — Present',
    title: 'University Innovation Fellow',
    org: 'Stanford d.school',
    desc: 'Applying Design Thinking to identify campus problems and develop innovative solutions.',
    tag: 'Leadership',
  },
]

const tagColors: Record<string, string> = {
  Education: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  Research: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
  Security: 'text-red-400 border-red-400/30 bg-red-400/5',
  CTF: 'text-accent-green border-accent-green/30 bg-accent-green/5',
  Leadership: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  Internship: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">

      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs text-accent-green tracking-widest uppercase mb-3">whoami</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-text mb-4">About Me</h1>
        <p className="text-text-muted max-w-xl leading-relaxed">
          Cybersecurity student from Nellore, Andhra Pradesh — currently pursuing B.Tech in CS with a specialization in Cybersecurity. I&apos;m drawn to the intersection of security and systems — finding vulnerabilities, building defensive tools, and understanding how things break.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Left column */}
        <div className="md:col-span-1 space-y-6">

          {/* Current Focus */}
          <div className="p-4 rounded-lg border border-border bg-bg-secondary/20">
            <p className="font-mono text-xs text-accent-green mb-3 tracking-widest">CURRENT FOCUS</p>
            <ul className="space-y-2">
              {[
                'Digital forensics & CTF competitions',
                'AI/ML applications in cybersecurity',
                'Autonomous vehicle security research',
                'OSINT tool development',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="text-accent-green mt-0.5 text-xs">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="p-4 rounded-lg border border-border bg-bg-secondary/20">
            <p className="font-mono text-xs text-accent-green mb-3 tracking-widest">CERTIFICATIONS</p>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-xs text-text-muted font-mono leading-relaxed">
                  <span className="text-accent-green">✓</span> {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Honors */}
          <div className="p-4 rounded-lg border border-border bg-bg-secondary/20">
            <p className="font-mono text-xs text-accent-green mb-3 tracking-widest">HONORS</p>
            <ul className="space-y-2">
              {[
                '🥇 1st Place — CTF, MITS (Jan 2026)',
                '📱 Contributor — India Mobile Congress 2024',
                '🎯 Top 3% — TryHackMe',
              ].map((item) => (
                <li key={item} className="text-xs text-text-muted leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="p-4 rounded-lg border border-border bg-bg-secondary/20">
            <p className="font-mono text-xs text-accent-green mb-3 tracking-widest">SKILLS</p>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-3">
                <p className="text-xs text-text-dim font-mono mb-1.5">{category}</p>
                <div className="flex flex-wrap gap-1">
                  {items.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-0.5 rounded border border-border text-text-dim bg-bg/50 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="md:col-span-2">
          <p className="font-mono text-xs text-text-dim tracking-widest uppercase mb-6">TIMELINE</p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-6">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full border border-accent-green bg-bg -translate-x-0.5" />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-text-dim">{item.period}</span>
                    <span className={`font-mono text-xs px-2 py-0.5 rounded border ${tagColors[item.tag]}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-text font-medium text-sm mb-0.5">{item.title}</h3>
                  <p className="text-accent-green font-mono text-xs mb-2">{item.org}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
