import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education, experience, skillGroups } from "@/content/experience";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Experience, education, and capabilities for Himanshu Dongre.",
};

export default function ResumePage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Resume</span>
        <h1 className="page-title">A web version of the essentials.</h1>
        <p className="page-copy">
          A concise, public-facing summary of my background. The downloadable PDF
          remains available for formal use, while this page keeps the narrative
          a little more readable on the web.
        </p>
        <div className="resume-actions">
          <a
            className="button"
            href="/resume/himanshu-dongre-resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Open PDF
          </a>
          <a className="ghost-button" href={`mailto:${profile.email}`}>
            Contact
          </a>
        </div>
      </section>

      <section className="section">
        <div className="resume-layout">
          <div className="grid">
            <SectionHeading
              description="The through-line across these roles is a mix of production responsibility, system-level thinking, and staying close to the work."
              eyebrow="Experience"
              title="Professional history."
            />
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.period.start}`} className="resume-card" delay={index * 65}>
                <div className="resume-item">
                  <div className="card__kicker">
                    <span>{item.period.label}</span>
                    <span>{item.location}</span>
                  </div>
                  <h2 className="resume-role">
                    {item.role} · {item.company}
                  </h2>
                  <p>{item.summary}</p>
                  <ul className="resume-list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid">
            <SectionHeading
              description="A compact view of education and the technical areas I reach for most often."
              eyebrow="Background"
              title="Education and capabilities."
            />
            <Reveal className="resume-card" delay={50}>
              <h2>Education</h2>
              <ul className="education-list">
                {education.map((item) => (
                  <li key={`${item.institution}-${item.degree}`}>
                    <strong>{item.degree}</strong>
                    <br />
                    {item.institution}
                    <br />
                    {item.period}
                    {item.note ? (
                      <>
                        <br />
                        {item.note}
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="resume-card" delay={115}>
              <h2>Skills</h2>
              <div className="skill-columns">
                {skillGroups.map((group) => (
                  <section key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.items.join(", ")}</p>
                  </section>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
