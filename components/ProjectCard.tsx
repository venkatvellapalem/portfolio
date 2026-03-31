import Link from 'next/link'

interface Project {
  title: string
  description: string
  longDesc?: string
  tech: string[]
  github: string | null
  demo: string | null
  category: string
  status: string
}

interface ProjectCardProps {
  project: Project
  categoryColors: Record<string, string>
}

const statusColors: Record<string, string> = {
  Active: 'text-accent-green',
  Complete: 'text-blue-400',
  Research: 'text-yellow-400',
}

export default function ProjectCard({ project, categoryColors }: ProjectCardProps) {
  return (
    <div className="group p-5 rounded-lg border border-border bg-bg-secondary/20 card-hover flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`font-mono text-xs px-2 py-0.5 rounded border ${categoryColors[project.category]}`}>
              {project.category}
            </span>
            <span className={`font-mono text-xs ${statusColors[project.status]}`}>
              <span className="mr-1">●</span>{project.status}
            </span>
          </div>
          <h3 className="text-text font-semibold text-base group-hover:text-accent-green transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs px-2 py-0.5 rounded bg-bg/60 border border-border/60 text-text-dim">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-accent-green transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-accent-green transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Demo
          </a>
        )}
        {!project.github && !project.demo && (
          <span className="font-mono text-xs text-text-dim italic">Private / Research</span>
        )}
      </div>
    </div>
  )
}
