import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { getProjectBySlug, projects } from "@/content/projects";
import { formatMonthYear } from "@/lib/utils";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const backHref = project.group === "professional" ? "/work#professional-work" : "/work";
  const backLabel =
    project.group === "professional" ? "Back to professional work" : "Back to projects";

  return (
    <>
      <section className="detail-hero">
        <div className="detail-kicker">
          <span>{project.kind}</span>
          <span>{project.year}</span>
          <span>{project.status}</span>
        </div>
        <h1 className="detail-hero__title">{project.title}</h1>
        <p className="detail-hero__summary">{project.summary}</p>
        <div className="detail-links">
          <Link className="ghost-button" href={backHref}>
            {backLabel}
          </Link>
          {project.links.map((link) => (
            <a
              key={link.href}
              className="button"
              href={link.href}
              rel="noreferrer"
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="detail-layout">
          <div className="detail-content">
            {project.sections.map((section, index) => (
              <Reveal key={section.title} className="detail-section" delay={index * 60}>
                <h2>{section.title}</h2>
                <div className="detail-copy">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="bullets">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="detail-sidebar">
            <Reveal className="detail-sidebar__card" delay={50}>
              <h2>Project details</h2>
              <div className="detail-sidebar__meta">
                <div>
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>{project.status}</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>{project.kind}</strong>
                </div>
                <div>
                  <span>Updated</span>
                  <strong>{formatMonthYear(project.updatedAt)}</strong>
                </div>
              </div>
            </Reveal>

            <Reveal className="detail-sidebar__card" delay={120}>
              <h2>Tags</h2>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            {project.notes.length ? (
              <Reveal className="detail-sidebar__card" delay={190}>
                <h2>Notes</h2>
                <ul className="detail-sidebar__list">
                  {project.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
