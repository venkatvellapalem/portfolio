'use client'

import { useState, useMemo } from 'react'
import type { Metadata } from 'next'
import { ctfEvents, teamInfo, teamMembers, getYears } from '@/lib/ctfs'

// Note: For Next.js metadata with 'use client', export metadata from a
// separate layout.tsx or use generateMetadata in a server component wrapper.
// For simplicity, we use client component here. See FILE 2b below for metadata.

type SortKey = 'event' | 'ratingPoints' | 'place'
type SortDir = 'asc' | 'desc'

export default function CTFsPage() {
  const years = getYears(ctfEvents)
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all')
  const [sortKey, setSortKey] = useState<SortKey>('ratingPoints')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const filteredEvents = useMemo(() => {
    let events =
      selectedYear === 'all'
        ? [...ctfEvents]
        : ctfEvents.filter((e) => e.year === selectedYear)

    events.sort((a, b) => {
      let cmp = 0
      if (sortKey === 'event') cmp = a.event.localeCompare(b.event)
      else if (sortKey === 'ratingPoints') cmp = a.ratingPoints - b.ratingPoints
      else cmp = a.place - b.place
      return sortDir === 'desc' ? -cmp : cmp
    })

    return events
  }, [selectedYear, sortKey, sortDir])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir(key === 'place' ? 'asc' : 'desc')
    }
  }

  const sortIndicator = (key: SortKey) => {
    if (sortKey !== key) return ''
    return sortDir === 'asc' ? ' ↑' : ' ↓'
  }

  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-16 animate-fade-in">
      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs text-accent-green tracking-widest uppercase mb-3">~/ctfs</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-text mb-4">Capture The Flag Dashboard</h1>
        <p className="text-text-muted max-w-lg">
          Capture The Flag competition history for{' '}
          <a
            href={teamInfo.ctftimeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover:underline"
          >
            {teamInfo.name}
          </a>
        </p>
      </div>

      {/* Team Spotlight */}
      <div className="border border-border rounded-lg p-6 bg-bg-secondary mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-text flex items-center gap-2">
              <span className="text-accent-green">⚑</span>
              <a
                href={teamInfo.ctftimeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-green transition-colors"
              >
                {teamInfo.name}
              </a>
            </h2>
            <p className="text-xs text-text-muted mt-1">
              {teamInfo.type} · {teamInfo.affiliation}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-text-dim">Team Leader:</span>
            <span className="text-sm font-medium text-accent-green">{teamInfo.leader}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
          <span>{ctfEvents.length} events</span>
          <span className="text-border">|</span>
          <span>
            {years.length} year{years.length !== 1 ? 's' : ''}
          </span>
          <span className="text-border">|</span>
          <a
            href={teamInfo.ctftimeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline"
          >
            CTFtime ↗
          </a>
        </div>
      </div>

      {/* Year Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedYear('all')}
            className={`text-xs font-mono px-3 py-1 rounded border transition-colors ${
              selectedYear === 'all'
                ? 'border-accent-green text-accent-green bg-accent-glow'
                : 'border-border text-text-muted hover:text-text hover:border-text-muted'
            }`}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`text-xs font-mono px-3 py-1 rounded border transition-colors ${
                selectedYear === year
                  ? 'border-accent-green text-accent-green bg-accent-glow'
                  : 'border-border text-text-muted hover:text-text hover:border-text-muted'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        <p className="text-xs font-mono text-text-dim">Sort: click column headers</p>
      </div>

      {/* Events Table */}
      <div className="border border-border rounded-lg overflow-hidden mb-16">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-bg-secondary/50 border-b border-border">
                <th className="text-left px-4 py-3 text-xs font-mono text-text-muted">Year</th>
                <th
                  className="text-left px-4 py-3 text-xs font-mono text-text-muted cursor-pointer hover:text-text select-none"
                  onClick={() => handleSort('event')}
                >
                  Event{sortIndicator('event')}
                </th>
                <th
                  className="text-right px-4 py-3 text-xs font-mono text-text-muted cursor-pointer hover:text-text select-none"
                  onClick={() => handleSort('ratingPoints')}
                >
                  Rating{sortIndicator('ratingPoints')}
                </th>
                <th
                  className="text-right px-4 py-3 text-xs font-mono text-text-muted cursor-pointer hover:text-text select-none"
                  onClick={() => handleSort('place')}
                >
                  Place{sortIndicator('place')}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, idx) => (
                <tr
                  key={`${event.event}-${event.year}`}
                  className={`border-b border-border/50 hover:bg-accent-glow/50 transition-colors ${
                    idx % 2 === 0 ? 'bg-transparent' : 'bg-bg-secondary/20'
                  }`}
                >
                  <td className="px-4 py-3 text-xs font-mono text-text-dim">{event.year}</td>
                  <td className="px-4 py-3">
                    {event.ctftimeEventUrl ? (
                      <a
                        href={event.ctftimeEventUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text hover:text-accent-green transition-colors"
                      >
                        {event.event}
                        <span className="text-accent-blue text-xs ml-1">↗</span>
                      </a>
                    ) : (
                      <span className="text-text">{event.event}</span>
                    )}
                    {event.source === 'offline' && (
                      <span className="ml-2 text-[10px] font-mono text-accent-blue bg-accent-blue/10 px-1.5 py-0.5 rounded">
                        offline
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-sm text-accent-green">
                    {event.ratingPoints.toFixed(3)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-sm text-text-muted">
                    #{event.place}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredEvents.length === 0 && (
          <div className="text-center py-8 text-text-muted text-sm">
            No events found for this filter.
          </div>
        )}
      </div>

      {/* Team Members */}
      <div className="border border-border rounded-lg p-6 bg-bg-secondary">
        <h2 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
          <span className="text-accent-green">◆</span> Team Members
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="border border-border rounded-lg p-3 text-center card-hover bg-bg"
            >
              {member.ctftimeUrl ? (
                <a
                  href={member.ctftimeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-text hover:text-accent-green transition-colors"
                >
                  {member.name}
                </a>
              ) : (
                <span className="text-sm font-mono text-text">{member.name}</span>
              )}
              {member.name === teamInfo.leader && (
                <p className="text-[10px] text-accent-green mt-1">★ leader</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}