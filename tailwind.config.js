/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#0f172a',
          secondary: '#1e293b',
          tertiary: '#0a101e',
        },
        text: {
          DEFAULT: '#e2e8f0',
          muted: '#94a3b8',
          dim: '#64748b',
        },
        accent: {
          green: '#22c55e',
          blue: '#3b82f6',
          glow: 'rgba(34,197,94,0.15)',
        },
        border: {
          DEFAULT: '#1e293b',
          subtle: '#0f2236',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e2e8f0',
            a: { color: '#22c55e' },
            h1: { color: '#e2e8f0' },
            h2: { color: '#e2e8f0' },
            h3: { color: '#e2e8f0' },
            code: { color: '#22c55e', background: '#1e293b', padding: '0.2em 0.4em', borderRadius: '4px' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: { borderLeftColor: '#22c55e', color: '#94a3b8' },
            hr: { borderColor: '#1e293b' },
            strong: { color: '#e2e8f0' },
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
