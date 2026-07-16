import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'cytrus:~/projects/# _',
  description: 'Security tools, research projects, and open-source contributions by Venkat Vellapalem.',
}

// --- Add your projects here ---
export const projects = [
  {
  title: 'External Exposure Monitor (EASM)',
  description:
    'Enterprise Attack Surface Management platform for discovering, monitoring, and assessing internet-facing assets.',
  longDesc:
    'An automated External Attack Surface Management (EASM) solution that continuously discovers internet-facing assets, monitors exposed services, enriches findings with threat intelligence, and provides organizations with real-time visibility into their external attack surface through a centralized dashboard.',
  tech: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
  github: 'https://github.com/venkatvellapalem/External-Exposure-Monitor',
  demo: null,
  category: 'Attack Surface Management',
  status: 'Active',
},
  {
  title: 'Enterprise Malware Analysis Platform',
  description:
    'Cloud and on-premise malware analysis sandbox with automated static and dynamic analysis pipelines.',
  longDesc:
    'An enterprise-grade malware analysis platform that combines cloud infrastructure with on-premise sandboxing to automate static analysis, dynamic execution, IOC extraction, and threat intelligence enrichment. Built with scalable worker nodes and a centralized dashboard for efficient malware investigation.',
  tech: ['Python', 'FastAPI', 'Docker', 'React'],
  github: 'https://github.com/venkatvellapalem/Malware-Analysis-Platform',
  demo: null,
  category: 'Malware Analysis',
  status: 'Active',
},
  {
  title: 'ShadowLink',
  description:
    'Phishing detection browser extension that analyzes URLs in real time, detects phishing indicators, and warns users before visiting malicious websites.',
  longDesc:
    'Built a modern cybersecurity browser extension capable of detecting homoglyph attacks, suspicious domains, fake login pages, shortened URLs, and malicious phishing indicators using heuristic analysis and threat intelligence APIs. Features include real-time risk scoring, phishing warning overlays, screenshot evidence capture, PDF investigation report generation, and optional AI-assisted threat explanations for enhanced user awareness and security analysis.',
  tech: [
    'JavaScript',
    'Chrome Extension API',
    'Manifest V3',
    'TailwindCSS',
    'VirusTotal API',
  ],
  github: 'https://github.com/venkatvellapalem/ShadowLink/',
  demo: null,
  category: 'Threat Intelligence',
  status: 'Active',
},
  {
    title: 'Personal Portfolio',
    description:
      'My personal cybersecurity portfolio showcasing projects, CTF journey, blogs, and learning arc.',
    longDesc:
      'Built with Next.js and TailwindCSS, designed with a minimal linux-style interface. Continuously updated with projects, CTF stats, blogs and technical writeups.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com/venkatvellapalem/portfolio',
    demo: null,
    category: 'Portfolio',
    status: 'Active',
  },
{
    title: 'Astra',
    description:
      'Python CLI tool for law enforcement to automate social media monitoring and OSINT analysis. Reduces investigation time from hours to minutes through automated multi-platform data collection.',
    longDesc: 'Implements both Active and Passive OSINT collection modes with multi-OS deployment capability. Automated data processing pipelines significantly reduce manual errors and improve investigative efficiency.',
    tech: ['Python', 'OSINT', 'CLI', 'Multi-platform'],
    github: 'https://github.com/venkatvellapalem/astra',
    demo: null,
    category: 'OSINT Tool',
    status: 'Complete',
  },
  {
    title: 'Home Network SIEM - Wazuh',
    description:
      'Deployed Wazuh SIEM on Linux managing two endpoints with centralized monitoring, File Integrity Monitoring, and automated compliance scans to detect unauthorized modifications.',
    longDesc: 'Developed custom monitoring rules for endpoint browsing activity analysis, behavior pattern assessment, and anomaly detection. Includes log analysis and event correlation for real-time threat detection.',
    tech: ['Wazuh', 'Linux', 'SIEM', 'Log Analysis', 'FIM'],
    github: 'https://github.com/venkatvellapalem/wazuh-home-siem',
    demo: null,
    category: 'Security Infra',
    status: 'Complete',
  },
  {
    title: 'AI Fraud Detection System',
    description:
      'Machine learning model to detect fraudulent SWIFT banking transactions using optimized classification models - KNN and Random Forest - achieving ~81% accuracy.',
    longDesc: 'Used GridSearchCV hyperparameter tuning to optimize models on imbalanced transaction datasets. Achieved enhanced ROC-AUC and F1-scores. Focuses on reducing false negatives in financial fraud detection.',
    tech: ['Python', 'Scikit-learn', 'KNN', 'Random Forest', 'Machine Learning'],
    github: 'https://github.com/venkatvellapalem/ai-fraud-detection',
    demo: null,
    category: 'ML / Security',
    status: 'Complete',
  },
  {
    title: 'Autonomous Vehicle Security Research',
    description:
      'AI-based authentication system for autonomous vehicle networks to improve security and reduce V2I communication delays. Designed at NIT Puducherry.',
    longDesc: 'Designed blockchain-based security protocol to protect vehicle-to-infrastructure communications from unauthorized access. Performed security analysis and threat assessment for transportation cyber-physical systems.',
    tech: ['Blockchain', 'AI', 'V2X', 'Cryptography', 'Python'],
    github: null,
    demo: null,
    category: 'Research',
    status: 'Research',
  },
]

const categoryColors: Record<string, string> = {
  'OSINT Tool': 'text-accent-green border-accent-green/30 bg-accent-green/5',
  'Security Infra': 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  'ML / Security': 'text-purple-400 border-purple-400/30 bg-purple-400/5',
  'Research': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  'Portfolio': 'text-pink-400 border-pink-400/30 bg-pink-400/5',
  'Threat Intelligence': 'text-red-400 border-red-400/30 bg-red-400/5',
  'Attack Surface Management': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
  'Malware Analysis': 'text-orange-400 border-orange-400/30 bg-orange-400/5',
}

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">

      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs text-accent-green tracking-widest uppercase mb-3">~/projects</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-text mb-4">Projects</h1>
        <p className="text-text-muted max-w-lg">
          Tools I&apos;ve built, research I&apos;ve done, and problems I&apos;ve solved. Each project is a learning experiment in the security space.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          { label: 'Projects', value: projects.length },
          { label: 'Active', value: projects.filter(p => p.status === 'Active').length },
          { label: 'Research', value: projects.filter(p => p.status === 'Research').length },
        ].map(({ label, value }) => (
          <div key={label} className="p-4 rounded-lg border border-border bg-bg-secondary/20 text-center">
            <p className="text-2xl font-semibold text-text font-mono">{value}</p>
            <p className="font-mono text-xs text-text-dim mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            categoryColors={categoryColors}
          />
        ))}
      </div>

      {/* Add more hint */}
      <div className="mt-12 p-4 rounded-lg border border-dashed border-border/60 text-center">
        <p className="font-mono text-xs text-text-dim">
          More projects on{' '}
          <a
            href="https://github.com/venkatvellapalem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover-underline"
          >
            GitHub →
          </a>
        </p>
      </div>
    </div>
  )
}
