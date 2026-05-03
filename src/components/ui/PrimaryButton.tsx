import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  label: string;
  newTab?: boolean;
};

export function PrimaryButton({ href, label, newTab }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className="focus-ring inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
    >
      {label}
    </Link>
  );
}
