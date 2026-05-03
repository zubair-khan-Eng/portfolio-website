import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function ResumeLayout() {
  return (
    <main className="container-main py-10 md:py-16">
      <div className="no-print mb-6 flex flex-wrap gap-3">
        <Link href="/" className="focus-ring rounded-full border border-[var(--border)] px-4 py-2 text-sm">
          Back to Portfolio
        </Link>
        <Link
          href={portfolioData.resumePdfPath}
          className="focus-ring rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </Link>
      </div>

      <article className="resume-print card mx-auto max-w-4xl p-6 md:p-10">
        <header className="border-b border-[var(--border)] pb-5">
          <h1 className="text-3xl font-bold md:text-4xl">{portfolioData.name}</h1>
          <p className="mt-2 font-medium text-[var(--muted)]">{portfolioData.role}</p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            {portfolioData.email} | {portfolioData.phone} | {portfolioData.location}
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            LinkedIn: {portfolioData.links.linkedIn} | GitHub: {portfolioData.links.github}
          </p>
        </header>

        <section className="pt-6">
          <h2 className="text-lg font-semibold">Professional Summary</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{portfolioData.summary}</p>
        </section>

        <section className="pt-6">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-2 grid gap-2 text-sm text-[var(--muted)] md:grid-cols-2">
            {portfolioData.skillGroups.map((group) => (
              <p key={group.title}>
                <span className="font-medium text-[var(--foreground)]">{group.title}: </span>
                {group.skills.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="mt-3 space-y-4">
            {portfolioData.experiences.map((item) => (
              <div key={`${item.company}-${item.period}`}>
                <p className="font-medium">
                  {item.role} - {item.company}
                </p>
                <p className="text-xs text-[var(--muted)]">
                  {item.period} | {item.location}
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-[var(--muted)]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-lg font-semibold">Projects</h2>
          <div className="mt-3 space-y-4">
            {portfolioData.projects.map((project) => (
              <div key={project.name}>
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-[var(--muted)]">{project.summary}</p>
                <p className="text-xs text-[var(--muted)]">Tech: {project.stack.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
            {portfolioData.education.map((item) => (
              <p key={`${item.institute}-${item.period}`}>
                <span className="font-medium text-[var(--foreground)]">{item.degree}</span> - {item.institute} ({item.period})
              </p>
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-lg font-semibold">Certifications</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-[var(--muted)]">
            {portfolioData.certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
