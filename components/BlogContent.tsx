'use client'

import { useEffect, useState } from 'react'

interface BlogContentProps {
  content: string
}

// Simple markdown renderer using dangerouslySetInnerHTML with marked
// Or just render as pre-formatted text — we'll use a basic approach
export default function BlogContent({ content }: BlogContentProps) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    // Simple markdown to HTML conversion
    let result = content

    // Headers
    result = result.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-text mt-8 mb-3">$1</h3>')
    result = result.replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold text-text mt-10 mb-4">$1</h2>')
    result = result.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-semibold text-text mt-10 mb-4">$1</h1>')

    // Bold and italic
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong class="text-text font-semibold">$1</strong>')
    result = result.replace(/\*(.+?)\*/g, '<em>$1</em>')

    // Inline code
    result = result.replace(/`([^`]+)`/g, '<code class="font-mono text-sm text-accent-green bg-bg-secondary px-1.5 py-0.5 rounded">$1</code>')

    // Code blocks
    result = result.replace(/```(\w+)?\n([\s\S]+?)```/g,
      '<pre class="bg-bg-tertiary border border-border rounded-lg p-4 overflow-x-auto my-6"><code class="font-mono text-sm text-text-muted">$2</code></pre>')

    // Blockquote
    result = result.replace(/^> (.+)$/gm,
      '<blockquote class="border-l-2 border-accent-green pl-4 text-text-muted italic my-4">$1</blockquote>')

    // Horizontal rule
    result = result.replace(/^---$/gm, '<hr class="border-border my-8" />')

    // Links
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent-green hover:underline">$1</a>')

    // Unordered list
    result = result.replace(/^[*-] (.+)$/gm, '<li class="flex items-start gap-2 text-text-muted mb-1"><span class="text-accent-green mt-1 text-xs shrink-0">▸</span><span>$1</span></li>')
    result = result.replace(/(<li.*<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>')

    // Ordered list
    result = result.replace(/^\d+\. (.+)$/gm, '<li class="text-text-muted mb-1 ml-4 list-decimal">$1</li>')

    // Paragraphs (double newlines)
    result = result
      .split(/\n\n+/)
      .map((block) => {
        if (block.startsWith('<')) return block
        return `<p class="text-text-muted leading-relaxed mb-4">${block.replace(/\n/g, ' ')}</p>`
      })
      .join('\n')

    setHtml(result)
  }, [content])

  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
