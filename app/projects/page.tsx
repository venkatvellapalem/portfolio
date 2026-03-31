import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Security tools, research projects, and open-source contributions by Venkat Vellapalem.',
}

// --- Add your projects here ---
export const projects = [
  {
    title: 'Astra',
    description:
      'Python CLI tool for law enforcement to automate social media monitoring and OSINT analysis. Reduces investigation time from hours to minutes through automated multi-platform data collection.',
    longDesc: 'Implements both Active and Passive OSINT collection modes with multi-OS deployment capability. Automated data processing pipelines significantly reduce manual errors and improve investigative efficiency.',
    tech: ['Python', 'OSINT', 'CLI', 'Multi-platform'],
    github: 'https://github.com/venkatvellapalem/astra',
    demo: null,
    category: 'OSINT Tool',
    status: 'Active',
  },
  {
    title: 'Home Network SIEM — Wazuh',
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
      'Machine learning model to detect fraudulent SWIFT banking transactions using optimized classification models — KNN and Random Forest — achieving ~81% accuracy.',
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
