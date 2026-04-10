import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education, experience, skillGroups } from "@/content/experience";
import { profile } from "@/content/profile";

const [currentExperience, ...previousExperience] = experience;

export const metadata: Metadata = {
  title: "Background",
  description:
    "Professional history, education, and technical scope for Himanshu Dongre.",
};

export default function ResumePage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Background</span>
        <h1 className="page-title">Background.</h1>
        <p className="page-copy">
          Professional history, education, and the technical scope of my work.
          A downloadable CV is available when a formal document is useful.
        </p>
        <div className="resume-actions">
          <a
            className="button"
            href="/resume/himanshu-dongre-resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Download CV (PDF)
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
              description="Production AI, multi-sensor perception, optimization, and technical leadership across 12+ years."
              eyebrow="Experience"
              title="Professional history."
            />
            <Reveal className="resume-card" delay={0}>
              <div className="resume-item">
                <div className="card__kicker">
                  <span>{currentExperience.period.label}</span>
                  <span>{currentExperience.location}</span>
                </div>
                <h2 className="resume-role">
                  {currentExperience.role} · {currentExperience.company}
                </h2>
                <p>{currentExperience.summary}</p>
                <ul className="resume-list">
                  {currentExperience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="experience-compact" delay={70}>
              <h3>Earlier work</h3>
              <ul className="experience-compact__list">
                {previousExperience.map((item) => (
                  <li key={`${item.company}-${item.period.start}`}>
                    <strong>
                      {item.role} · {item.company}
                    </strong>
                    <span>
                      {item.period.label} · {item.location}
                    </span>
                    <p>{item.summary}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="grid">
            <SectionHeading
              description="Education and the technical scope I work across most often."
              eyebrow="Background"
              title="Education and technical scope."
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
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="resume-card" delay={115}>
              <h2>Technical scope</h2>
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
