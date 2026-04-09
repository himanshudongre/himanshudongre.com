import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { UpdateCard } from "@/components/update-card";
import { education, experience } from "@/content/experience";
import { profile, principles, researchInterests } from "@/content/profile";
import { projects } from "@/content/projects";
import { updates } from "@/content/updates";

const featuredProjects = projects.filter((project) => project.featured);
const featuredUpdates = updates.slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="hero">
        <Reveal className="hero__content" delay={40}>
          <div className="hero__meta">
            <span className="eyebrow">Himanshu Dongre</span>
            <span className="hero__location">{profile.location}</span>
          </div>
          <h1 className="hero__title">{profile.headline}</h1>
          <p className="hero__lede">{profile.subheadline}</p>

          <div className="hero__summary">
            {profile.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="hero__actions">
            <Link href="/work" className="button">
              View selected work
            </Link>
            <Link href="/resume" className="ghost-button">
              View resume
            </Link>
          </div>

          <div className="hero__socials">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                className="hero__social-link"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hero__metrics">
            {profile.metrics.map((metric) => (
              <div key={metric.label} className="metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero__portrait-card" delay={120}>
          <div className="hero__portrait-frame">
            <Image
              priority
              alt={profile.portrait.alt}
              className="hero__portrait"
              height={1600}
              src={profile.portrait.src}
              width={1200}
            />
          </div>
          <div className="hero__focus">
            <h2>Currently exploring</h2>
            <ul>
              {profile.currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <SectionHeading
          description="Projects that best reflect the problems, abstractions, and systems questions I keep returning to."
          eyebrow="Selected work"
          title="Selected work."
        />
        <div className="grid projects-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="Themes that keep showing up across both the systems I build and the questions I keep thinking about."
          eyebrow="Interests"
          title="Research interests."
        />
        <div className="interest-layout">
          <Reveal className="interest-panel" delay={40}>
            <div className="interest-list">
              {researchInterests.map((interest) => (
                <span key={interest} className="tag">
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="interest-panel" delay={110}>
            <p>
              I am most interested in intelligent systems that remain legible
              under real constraints, especially around reasoning, memory,
              representation, and trust.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="Production AI, technical leadership, and systems built under hard constraints."
          eyebrow="Experience"
          title="Experience."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period.start}`} delay={index * 70}>
              <article className="timeline__item">
                <div className="timeline__meta">
                  <span>{item.period.label}</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="timeline__title">
                  {item.role} · {item.company}
                </h3>
                <p className="timeline__summary">{item.summary}</p>
                <div className="timeline__detail">
                  <ul>
                    {item.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="A few principles that shape how I approach both engineering work and longer-horizon research questions."
          eyebrow="Philosophy"
          title="Working principles."
        />
        <div className="philosophy-layout">
          <Reveal delay={50}>
            <ul className="principles">
              {principles.map((principle) => (
                <li key={principle.title}>
                  <strong>{principle.title}</strong>
                  <span>{principle.description}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="philosophy-callout" delay={120}>
            <blockquote>{profile.epigraph}</blockquote>
            <p>
              I like the loop between inquiry and implementation. Ideas become
              more precise when they survive contact with code, interfaces,
              data, and time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="A short record of public releases, milestones, and notable changes."
          eyebrow="Updates"
          title="Recent updates."
        />
        <div className="updates-grid">
          {featuredUpdates.map((update, index) => (
            <Reveal key={update.title} delay={index * 70}>
              <UpdateCard update={update} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="The projects and repositories are the best place to start. The links below are the easiest way to reach me or follow current work."
          eyebrow="Links"
          title="Contact."
        />
        <div className="contact-layout">
          <Reveal className="contact-card" delay={50}>
            <h2 className="contact-card__title">Reach out or follow along</h2>
            <p>
              Email is the easiest way to reach me. You can also find current
              public work through GitHub, LinkedIn, X, and Instagram.
            </p>
            <div className="contact-card__actions">
              <a className="button" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a
                className="ghost-button"
                href="/resume/himanshu-dongre-resume.pdf"
                rel="noreferrer"
                target="_blank"
              >
                Resume PDF
              </a>
              <a
                className="ghost-button"
                href={profile.socialLinks[0].href}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-card" delay={110}>
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
        </div>
      </section>
    </>
  );
}
