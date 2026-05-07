import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOGS_DIR = path.join(process.cwd(), 'content/blogs')

export interface BlogMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  readingTime: string
  music?: string
  draft?: boolean
}

export interface Blog extends BlogMeta {
  content: string
}

function ensureBlogsDir() {
  if (!fs.existsSync(BLOGS_DIR)) {
    fs.mkdirSync(BLOGS_DIR, { recursive: true })
  }
}

export function getAllBlogs(): BlogMeta[] {
  ensureBlogsDir()

  const files = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))

  const blogs = files
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, '')
      const raw = fs.readFileSync(path.join(BLOGS_DIR, file), 'utf-8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)

      return {
  slug,
  title: data.title || slug,
  date: data.date || '',
  description: data.description || '',
  tags: data.tags || [],
  readingTime: rt.text,
  music: data.music || '',
  content,
  draft: data.draft || false,
} as BlogMeta
    })
    .filter((b) => !b.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return blogs
}

export function getBlogBySlug(slug: string): Blog | null {
  ensureBlogsDir()

  const extensions = ['md', 'mdx']
  let raw: string | null = null

  for (const ext of extensions) {
    const filePath = path.join(BLOGS_DIR, `${slug}.${ext}`)
    if (fs.existsSync(filePath)) {
      raw = fs.readFileSync(filePath, 'utf-8')
      break
    }
  }

  if (!raw) return null

  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    description: data.description || '',
    tags: data.tags || [],
    readingTime: rt.text,
    content,
    draft: data.draft || false,
  }
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
