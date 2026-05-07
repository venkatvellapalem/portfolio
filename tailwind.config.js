/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-dim": "var(--fg-dim)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        hairline: "var(--hairline)",
      },

      maxWidth: {
        prose: "68ch",
        shell: "1200px",
      },

      fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },

      boxShadow: {
        elevated:
          "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 50px -20px rgba(0,0,0,0.6)",

        glow:
          "0 0 0 1px rgba(52,211,153,0.25), 0 10px 40px -10px rgba(52,211,153,0.25)",
      },

      letterSpacing: {
        tightest: "-0.04em",
      },

      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "fade-in": "fadeIn 0.6s ease both",
        "cursor-blink": "cursorBlink 1.1s steps(2) infinite",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(14px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        cursorBlink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
      },
    },
  },

  plugins: [],
};