'use client'

import { useEffect, useState } from 'react'

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    let result = content

    // Code blocks (must come first to protect content inside)
    const codeBlocks: string[] = []
    result = result.replace(/```(\w+)?\n([\s\S]+?)```/g, (_, lang, code) => {
      const index = codeBlocks.length
      const langLabel = lang
        ? `<div style="position:absolute;top:0;right:0;padding:2px 10px;font-size:0.65rem;color:#22c55e;opacity:0.5;font-family:'JetBrains Mono',monospace;text-transform:uppercase;">${lang}</div>`
        : ''
      codeBlocks.push(
        `<div style="position:relative;margin:1.5rem 0;"><pre style="background:#0a101e;border:1px solid #1e293b;border-radius:8px;padding:1.25rem;overflow-x:auto;">${langLabel}<code style="font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#e2e8f0;line-height:1.7;">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre></div>`
      )
      return `%%CODEBLOCK_${index}%%`
    })

    // Inline code (protect next)
    const inlineCodes: string[] = []
    result = result.replace(/`([^`]+)`/g, (_, code) => {
      const index = inlineCodes.length
      inlineCodes.push(
        `<code style="background:#1e293b;color:#22c55e;padding:2px 6px;border-radius:4px;font-size:0.85em;font-family:'JetBrains Mono',monospace;">${code}</code>`
      )
      return `%%INLINE_${index}%%`
    })

    // Headers
    result = result.replace(/^### (.+)$/gm,
      '<h3 style="font-size:1.15rem;font-weight:600;color:#e2e8f0;margin:2rem 0 0.75rem;font-family:\'Sora\',sans-serif;">$1</h3>')
    result = result.replace(/^## (.+)$/gm,
      '<h2 style="font-size:1.35rem;font-weight:700;color:#e2e8f0;margin:1.8rem 0 0.6rem;padding-bottom:0.5rem;border-bottom:1px solid #1e293b;font-family:\'Sora\',sans-serif;">$1</h2>')
    result = result.replace(/^# (.+)$/gm,
      '<h1 style="font-size:1.75rem;font-weight:700;color:#e2e8f0;margin:1.8rem 0 0.6rem;font-family:\'Sora\',sans-serif;">$1</h1>')

    // Bold and italic
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#e2e8f0;font-weight:600;">$1</strong>')
    result = result.replace(/\*(.+?)\*/g, '<em style="color:#94a3b8;">$1</em>')

    // Blockquotes
    result = result.replace(/^> (.+)$/gm,
      '<blockquote style="border-left:3px solid #22c55e;padding:0.75rem 1rem;margin:1.5rem 0;background:#22c55e08;color:#94a3b8;border-radius:0 6px 6px 0;font-style:italic;">$1</blockquote>')

    // Horizontal rule
    result = result.replace(/^---$/gm,
      '<hr style="border:none;border-top:1px solid #1e293b;margin:2rem 0;" />')
    // Images (IMPORTANT - add before links)
    result = result.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank"><img src="$2" alt="$1" style="display:block;margin:2rem auto;border-radius:12px;border:1px solid #1e293b;max-width:100%;height:auto;" /></a>'
    )

    // Links
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#22c55e;text-decoration:none;border-bottom:1px solid #22c55e40;transition:border-color 0.2s;" onmouseover="this.style.borderColor=\'#22c55e\'" onmouseout="this.style.borderColor=\'#22c55e40\'">$1</a>')

    // Unordered list items
    result = result.replace(/^[\*\-] (.+)$/gm,
      '<li style="padding-left:0.5rem;margin:0.2rem 0;color:#e2e8f0;list-style:none;"><span style="color:#22c55e;margin-right:0.5rem;">▸</span>$1</li>')

    // Ordered list items
    result = result.replace(/^(\d+)\. (.+)$/gm,
      '<li style="padding-left:0.5rem;margin:0.35rem 0;color:#e2e8f0;list-style:none;"><span style="color:#22c55e;margin-right:0.5rem;font-mono;font-size:0.85em;">$1.</span>$2</li>')

    // Wrap consecutive <li> in a container
    result = result.replace(/((?:<li[^>]*>.*<\/li>\s*)+)/g,
      '<ul style="margin:1rem 0;padding:0;">$1</ul>')

    // Paragraphs
    result = result
      .split(/\n\n+/)
      .map((block) => {
        const trimmed = block.trim()
        if (!trimmed) return ''
        if (trimmed.startsWith('<')) return trimmed
        if (trimmed.startsWith('%%CODEBLOCK_')) return trimmed
        return `<p style="color:#94a3b8;line-height:1.6;margin:0.6rem 0;font-size:1rem;">${trimmed}</p>`
      })
      .join('\n')

    // Restore code blocks and inline code
    inlineCodes.forEach((code, i) => {
      result = result.replace(`%%INLINE_${i}%%`, code)
    })
    codeBlocks.forEach((block, i) => {
      result = result.replace(`%%CODEBLOCK_${i}%%`, block)
    })

    setHtml(result)
  }, [content])

  return (
    <div
      className="animate-fade-in"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
