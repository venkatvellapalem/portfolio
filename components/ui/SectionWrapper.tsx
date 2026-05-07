type Props = {
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({ title, eyebrow, description, children }: Props) {
  return (
    <section className="shell py-28 md:py-36">
      <header className="reveal mb-14 max-w-3xl">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-dim">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 text-3xl font-semibold tracking-tightest md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">{description}</p>
        )}
      </header>
      {children}
    </section>
  );
}