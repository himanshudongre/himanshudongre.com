import Link from "next/link";

import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <div className="card__kicker">
        <span>{project.kind}</span>
        <span>{project.year}</span>
        <span>{project.status}</span>
      </div>
      <h3>
        <Link href={`/work/${project.slug}`}>{project.title}</Link>
      </h3>
      <p>{project.summary}</p>
      <div className="tag-list">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="inline-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="card-links">
        <Link className="ghost-button" href={`/work/${project.slug}`}>
          Read more
        </Link>
        {project.links[0] ? (
          <a
            className="button"
            href={project.links[0].href}
            rel="noreferrer"
            target={project.links[0].external ? "_blank" : undefined}
          >
            {project.links[0].label}
          </a>
        ) : null}
      </div>
    </article>
  );
}
