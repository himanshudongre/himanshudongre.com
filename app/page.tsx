import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SocialIconLinks } from "@/components/social-icon-links";
import { UpdateCard } from "@/components/update-card";
import { experience } from "@/content/experience";
import { profile, principles, researchInterests } from "@/content/profile";
import { personalProjects, professionalProjects } from "@/content/projects";
import { updates } from "@/content/updates";

const featuredProjects = personalProjects.filter((project) => project.featured);
const professionalTeaser = professionalProjects[0];
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
          <div className="hero__intro">
            <div className="hero__intro-copy">
              <h1 className="hero__title">{profile.headline}</h1>
              <p className="hero__lede">{profile.subheadline}</p>
            </div>
            <div className="hero__portrait-inline">
              <div className="hero__portrait-inline-frame">
                <Image
                  alt={profile.portrait.alt}
                  className="hero__portrait"
                  height={1600}
                  src={profile.portrait.src}
                  width={1200}
                />
              </div>
            </div>
          </div>

          <div className="hero__summary">
            {profile.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="hero__actions">
            <Link href="/work" className="button">
              Personal projects
            </Link>
            <Link href="/resume" className="ghost-button">
              Background
            </Link>
          </div>

          <SocialIconLinks className="hero__socials" />

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

      {professionalTeaser ? (
        <section className="section">
          <div className="home-signal-grid">
            <SectionHeading
              description="A confidentiality-safe look at the production AI systems work that shaped how I think about constraints, interfaces, and delivery."
              eyebrow="Professional"
              title="Selected professional systems work."
            />
            <Reveal className="professional-teaser" delay={90}>
              <div className="page-kicker">
                <span>{professionalTeaser.kind}</span>
                <span>{professionalTeaser.year}</span>
                <span>{professionalTeaser.status}</span>
              </div>
              <h3>{professionalTeaser.title}</h3>
              <p>{professionalTeaser.summary}</p>
              <ul className="professional-teaser__list">
                {professionalTeaser.keyIdeas?.slice(0, 3).map((idea) => (
                  <li key={idea.title}>
                    <strong>{idea.title}</strong>
                    <span>{idea.description}</span>
                  </li>
                ))}
              </ul>
              <div className="professional-teaser__links">
                <Link className="text-link" href="/work#professional-work">
                  View professional work
                </Link>
                <Link className="text-link" href={`/work/${professionalTeaser.slug}`}>
                  Open case study
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="section">
        <SectionHeading
          description="Projects that best reflect the problems, abstractions, and systems questions I keep returning to."
          eyebrow="Projects"
          title="Personal projects."
        />
        <div className="grid projects-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <ProjectCard project={project} tagLimit={3} />
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
                Download CV (PDF)
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-card" delay={110}>
            <h2>Elsewhere</h2>
            <p>
              GitHub is the best place to start for current public work.
              LinkedIn and X are where I usually post broader progress and
              context.
            </p>
            <SocialIconLinks className="contact-card__socials" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
