import Link from "next/link";
import GlowButton from "@/components/ui/GlowButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 hero-glow" />

      <div className="shell relative flex min-h-[78vh] flex-col justify-center py-24">
        <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-fg-dim">
          <span className="text-accent">~$</span> whoami
        </p>

        <h1 className="reveal mt-6 max-w-5xl text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-tightest">
          Cybersecurity research,
          <br />
          <span className="text-fg-muted">
            engineered for the next decade.
          </span>
        </h1>

        <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">
          I’m Venkat — a security researcher and technical founder
          building tools, writing about offensive and defensive
          systems, and shipping products that take privacy seriously.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <GlowButton href="/projects">
            View projects
          </GlowButton>

          <Link href="/blogs" className="nav-link text-sm">
            Read the blog →
          </Link>
        </div>

        <p className="reveal mt-16 font-mono text-xs text-fg-dim terminal-cursor">
          status: available_for_collaborations
        </p>
      </div>
    </section>
  );
}