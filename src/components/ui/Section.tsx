type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-14 md:py-20 scroll-mt-24">
      <div className="container-main">
        <header className="mb-8 md:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Portfolio</p>
          <h2 className="mt-2 text-2xl font-bold md:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-3 max-w-3xl text-[var(--muted)]">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
