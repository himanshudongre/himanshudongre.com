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
          <Link className="ghost-button" href="/work">
            Back to projects
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
            {project.snapshot ? (
              <Reveal className="detail-section" delay={0}>
                <h2>At a glance</h2>
                <div className="detail-snapshot-grid">
                  <article className="detail-mini-card">
                    <span>Problem</span>
                    <p>{project.snapshot.challenge}</p>
                  </article>
                  <article className="detail-mini-card">
                    <span>Approach</span>
                    <p>{project.snapshot.build}</p>
                  </article>
                  <article className="detail-mini-card">
                    <span>Why it matters</span>
                    <p>{project.snapshot.signal}</p>
                  </article>
                </div>
              </Reveal>
            ) : null}

            {project.systemMap?.length ? (
              <Reveal className="detail-section" delay={45}>
                <h2>System sketch</h2>
                <div className="detail-system-grid">
                  {project.systemMap.map((block) => (
                    <article key={block.title} className="detail-system-block">
                      <strong>{block.title}</strong>
                      <p>{block.description}</p>
                    </article>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {project.keyIdeas?.length ? (
              <Reveal className="detail-section" delay={90}>
                <h2>Design notes</h2>
                <div className="detail-idea-grid">
                  {project.keyIdeas.map((idea) => (
                    <article key={idea.title} className="detail-idea-card">
                      <strong>{idea.title}</strong>
                      <p>{idea.description}</p>
                    </article>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {project.sections.map((section, index) => (
              <Reveal
                key={section.title}
                className="detail-section"
                delay={140 + index * 60}
              >
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
              <h2>Status</h2>
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
                  <span>Type</span>
                  <strong>{project.kind}</strong>
                </div>
                <div>
                  <span>Updated</span>
                  <strong>{formatMonthYear(project.updatedAt)}</strong>
                </div>
              </div>
            </Reveal>

            <Reveal className="detail-sidebar__card" delay={120}>
              <h2>Topics</h2>
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
                <h2>Current state</h2>
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
