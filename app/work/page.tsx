import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
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
        <h1 className="page-title">Selected projects and systems work.</h1>
        <p className="page-copy">
          This page collects the projects I want to stand behind publicly. Some
          are open source and link directly to repositories. Some abstract
          confidential work into the underlying systems questions and design
          patterns.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          description="The public side of what I build, with enough structure that new work can be added without redesigning the whole site."
          eyebrow="Catalogue"
          title="A growing body of work."
        />
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
