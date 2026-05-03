export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-main flex flex-col gap-2 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Zubair Khan. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
