import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_82%,transparent)] backdrop-blur">
      <nav className="container-main flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded text-sm font-semibold md:text-base">
          Zubair Khan
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-3 text-sm md:gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="focus-ring rounded px-1 py-0.5 text-[var(--muted)] hover:text-[var(--foreground)]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
