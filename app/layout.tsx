import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Re-export geist font variables so tokens in globals.css resolve.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venkat Vellapalem — Cybersecurity & Innovation",
  description:
    "Cybersecurity researcher, technical founder, and developer. Projects, writing, and CTFs.",
  metadataBase: new URL("https://venkatvellapalem.vercel.app"),
  openGraph: {
    title: "Venkat Vellapalem",
    description: "Cybersecurity researcher, technical founder, and developer.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pt-24">
          {children}
        </main>
        <Footer />

        {/* Reveal-on-scroll, no dependency */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if (typeof window === 'undefined') return;
                var io = new IntersectionObserver(function(entries){
                  entries.forEach(function(e){
                    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
                  });
                }, { threshold: 0.12 });
                var run = function(){ document.querySelectorAll('.reveal:not(.is-visible)').forEach(function(el){ io.observe(el); }); };
                run();
                new MutationObserver(run).observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}