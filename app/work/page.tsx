import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { personalProjects, professionalProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal projects and confidentiality-safe summaries of professional systems work from Himanshu Dongre.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Projects</span>
        <h1 className="page-title">Projects.</h1>
        <p className="page-copy">
          Personal projects, plus a separate public view of selected professional systems work.
        </p>
      </section>

      <section className="section" id="personal-projects">
        <SectionHeading
          description="Independent projects that best reflect the problems, abstractions, and systems questions I keep returning to."
          eyebrow="Personal"
          title="Personal projects."
        />
        <div className="work-grid">
          {personalProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {professionalProjects.length ? (
        <section className="section" id="professional-work">
          <SectionHeading
            description="A confidentiality-safe slice of the production AI systems work I have spent years building and leading."
            eyebrow="Professional"
            title="Selected professional systems work."
          />
          <div className="work-grid">
            {professionalProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
