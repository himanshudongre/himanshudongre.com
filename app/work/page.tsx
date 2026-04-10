import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Current independent projects from Himanshu Dongre.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Projects</span>
        <h1 className="page-title">Personal projects.</h1>
        <p className="page-copy">
          A narrow list of the independent systems I am actively building.
        </p>
      </section>

      <section className="section" id="personal-projects">
        <SectionHeading
          description="The independent systems I am actively building right now."
          eyebrow="Current work"
          title="Projects."
        />
        <div className="work-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
