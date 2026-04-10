import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal projects, selected systems work, and active technical ideas from Himanshu Dongre.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Projects</span>
        <h1 className="page-title">Personal projects.</h1>
        <p className="page-copy">
          Personal projects, selected systems work, and public technical threads.
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
