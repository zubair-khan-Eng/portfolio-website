import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Section } from "@/components/ui/Section";

export function HomeSections() {
  return (
    <>
      <section className="container-main grid gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
            Open to impactful software engineering roles
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            {portfolioData.name}
            <span className="block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
              {portfolioData.role}
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">{portfolioData.heroTagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/resume" label="View Professional Resume" />
            <PrimaryButton href={portfolioData.links.linkedIn} label="LinkedIn Profile" newTab />
          </div>
        </div>
        <aside className="card p-6">
          <div className="mb-5">
            <Image
              src={portfolioData.profileImage}
              alt="Zubair Khan profile photo"
              width={220}
              height={220}
              className="mx-auto rounded-2xl border border-[var(--border)] object-cover shadow-sm"
              priority
            />
          </div>
          <h2 className="text-lg font-semibold">Quick Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <li>Email: {portfolioData.email}</li>
            <li>Phone: {portfolioData.phone}</li>
            <li>Location: {portfolioData.location}</li>
          </ul>
        </aside>
      </section>

      <Section id="about" title="About" subtitle="A concise, recruiter-friendly overview with clarity and credibility.">
        <div className="card p-6 leading-7 text-[var(--muted)] md:p-8">{portfolioData.about}</div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Organized by domain for fast scanning by recruiters and hiring teams.">
        <div className="grid gap-5 md:grid-cols-3">
          {portfolioData.skillGroups.map((group) => (
            <article key={group.title} className="card p-5">
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {group.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-5">
          {portfolioData.experiences.map((item) => (
            <article key={`${item.company}-${item.period}`} className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-[var(--muted)]">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {item.company} • {item.location}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <article key={project.name} className="card p-6">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">{project.stack.join(" • ")}</p>
              <div className="mt-5 flex gap-3 text-sm">
                {project.liveUrl ? (
                  <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="focus-ring rounded underline">
                    Live
                  </Link>
                ) : null}
                {project.repoUrl ? (
                  <Link href={project.repoUrl} target="_blank" rel="noreferrer" className="focus-ring rounded underline">
                    Code
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let us collaborate on building scalable, user-focused software products.">
        <div className="card p-6 md:p-8">
          <p className="text-[var(--muted)]">Email: {portfolioData.email}</p>
          <p className="mt-2 text-[var(--muted)]">Phone: {portfolioData.phone}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton href={`mailto:${portfolioData.email}`} label="Send Email" />
            <PrimaryButton href={portfolioData.links.github} label="GitHub" newTab />
          </div>
        </div>
      </Section>
    </>
  );
}
