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
          <span className="eyebrow">Himanshu Dongre</span>
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
            <h2>Current focus</h2>
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
          description="A curated set of projects that best represent how I think, what I build, and the questions I keep returning to."
          eyebrow="Selected work"
          title="Projects where ideas and systems meet."
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
          description="The themes that keep pulling my attention back, whether the work looks like engineering, research, or something in between."
          eyebrow="Interests"
          title="What I keep thinking about."
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
              under real constraints. That includes how they reason, how they
              store and recover state, how they earn trust, and how ideas change
              when they leave a notebook and meet the world.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="A compressed view of the environments where I have spent most of my time: production ML, technical leadership, and systems that do not get to fail gracefully."
          eyebrow="Experience"
          title="A short timeline."
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
          description="The part of the website that should feel the most personal: not a manifesto, just the habits of mind I keep returning to."
          eyebrow="Philosophy"
          title="How I like to work."
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
              I like the loop between inquiry and implementation. Good ideas
              become more precise when they have to survive contact with code,
              interfaces, data, and time. Good engineering gets better when it
              stays close to first principles.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="A simple, site-owned record of launches, milestones, and ongoing work. This is where future updates can be added without changing the overall design."
          eyebrow="Updates"
          title="Recent signals."
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
          description="The website is intentionally lightweight to maintain. Projects, updates, profile changes, and resume edits can all be made from structured content files."
          eyebrow="Contact"
          title="Elsewhere on the internet."
        />
        <div className="contact-layout">
          <Reveal className="contact-card" delay={50}>
            <h2 className="contact-card__title">Reach out or follow along</h2>
            <p>
              The fastest way to understand what I am working on is through the
              projects and updates here, then the repositories and social links
              behind them.
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
