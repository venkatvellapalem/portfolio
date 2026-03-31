# venkat-portfolio

Personal portfolio for Jyothi Venkat Reddy Vellapalem — cybersecurity student & builder.

Built with Next.js 14 (App Router) + Tailwind CSS. Deployable on Vercel in minutes.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Clone & install

```bash
git clone https://github.com/venkatvellapalem/portfolio.git
cd portfolio
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
/app
  page.tsx              → Home (/)
  about/page.tsx        → About (/about)
  projects/page.tsx     → Projects (/projects)
  blogs/page.tsx        → Blog listing (/blogs)
  blogs/[slug]/page.tsx → Individual blog post (/blogs/slug)
  contact/page.tsx      → Contact (/contact)
  layout.tsx            → Root layout (Navbar + Footer)
  globals.css           → Global styles

/components
  Navbar.tsx            → Navigation bar
  Footer.tsx            → Footer
  ProjectCard.tsx       → Project display card
  BlogCard.tsx          → Blog listing card
  BlogContent.tsx       → Markdown renderer for blog posts

/content
  /blogs                → Your .md blog posts go here

/lib
  blog-utils.ts         → Blog reading, parsing, sorting utilities
```

---

## ✍️ Adding a New Blog Post

1. Create a `.md` file in `/content/blogs/`
2. Name it with a URL-friendly slug: `my-post-title.md`
3. Add frontmatter at the top:

```markdown
---
title: "Your Blog Title"
date: "2026-01-15"
description: "A short preview shown on the listing page."
tags: ["tag1", "tag2"]
---

# Your Blog Title

Write your content here in Markdown...
```

4. The post appears automatically at `/blogs/your-post-title`

**To hide a draft:**
```markdown
---
draft: true
---
```

---

## 🛠️ Adding a New Project

Open `app/projects/page.tsx` and add to the `projects` array:

```ts
{
  title: 'Your Project Name',
  description: 'Short description shown on the card (2-3 lines).',
  longDesc: 'Longer description (optional).',
  tech: ['Python', 'Tool1', 'Tool2'],
  github: 'https://github.com/you/repo',   // or null
  demo: 'https://your-demo.com',            // or null
  category: 'OSINT Tool',                   // choose or add a category
  status: 'Active',                         // Active | Complete | Research
},
```

---

## 🚢 Deploy on Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub → Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy

No environment variables needed — the blog system reads from the filesystem at build time.

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` → `theme.extend.colors`:
- `accent-green`: `#22c55e` — primary accent
- `bg`: `#0f172a` — page background

### Fonts
Change in `app/globals.css` — currently using **Sora** (display) + **JetBrains Mono** (code)

### Nav links
Edit the `navLinks` array in `components/Navbar.tsx`

---

## 📦 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Blog | Markdown + gray-matter |
| Deployment | Vercel |
| Fonts | Sora + JetBrains Mono (Google Fonts) |

---

## 📝 License

MIT — use freely, customize to make it yours.
