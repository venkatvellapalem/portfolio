'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${name} via portfolio`)
    const body = encodeURIComponent(message)
    window.location.href = `mailto:venkatvellapalem@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="p-6 rounded-lg border border-border bg-bg-secondary/10">
      <p className="font-mono text-xs text-accent-green tracking-widest mb-4">SEND A MESSAGE</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-mono text-xs text-text-dim mb-1.5">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
            className="w-full bg-bg border border-border rounded-md px-3 py-2 text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-accent-green/50 transition-colors font-mono"
          />
        </div>
        <div>
          <label className="block font-mono text-xs text-text-dim mb-1.5">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            placeholder="What's on your mind?"
            className="w-full bg-bg border border-border rounded-md px-3 py-2 text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-accent-green/50 transition-colors font-mono resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 px-4 rounded-md border border-accent-green/40 bg-accent-green/10 text-accent-green font-mono text-sm hover:bg-accent-green/20 transition-colors"
        >
          Send via Email →
        </button>
      </form>
    </div>
  )
}
