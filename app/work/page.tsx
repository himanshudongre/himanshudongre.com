import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects, public systems work, and active ideas from Himanshu Dongre.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Work</span>
        <h1 className="page-title">Work.</h1>
        <p className="page-copy">
          Public projects, selected systems work, and current lines of
          exploration.
        </p>
      </section>

      <section className="section">
        <div className="work-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
