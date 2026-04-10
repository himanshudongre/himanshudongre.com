import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SocialIconLinks } from "@/components/social-icon-links";
import { UpdateCard } from "@/components/update-card";
import { experience } from "@/content/experience";
import { profile, principles, researchInterests } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { updates } from "@/content/updates";

const featuredUpdates = updates.slice(0, 3);
const [currentExperience, ...previousExperience] = experience;

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
            <h2>Current work</h2>
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
          description="The main line of my professional work."
          eyebrow="Experience"
          title="Experience."
        />
        <div className="experience-home">
          <Reveal delay={40}>
            <article className="timeline__item timeline__item--featured">
              <div className="timeline__meta">
                <span>{currentExperience.period.label}</span>
                <span>{currentExperience.location}</span>
              </div>
              <h3 className="timeline__title">
                {currentExperience.role} · {currentExperience.company}
              </h3>
              <p className="timeline__summary">{currentExperience.summary}</p>
              <div className="timeline__detail">
                <ul>
                  {currentExperience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal className="experience-compact" delay={110}>
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
                </li>
              ))}
            </ul>
            <Link className="text-link" href="/resume">
              Full background
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="Current independent work. I keep this list intentionally narrow."
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
          description="Recurring questions behind both the systems I build at work and the ones I build independently."
          eyebrow="Interests"
          title="Questions I keep returning to."
        />
        <div className="interest-layout">
          <Reveal className="interest-panel" delay={40}>
            <div className="interest-stack">
              {researchInterests.map((interest) => (
                <article key={interest.title} className="interest-item">
                  <strong>{interest.title}</strong>
                  <p>{interest.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="interest-panel" delay={110}>
            <p>
              I am most interested in intelligent systems when they become
              concrete: how state is represented, what can be verified, where
              interfaces fail, and how useful behavior survives real constraints.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="A few defaults that shape how I build and evaluate systems."
          eyebrow="Approach"
          title="Working defaults."
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
              I care about the loop between ideas and implementation. If an
              idea gets weaker once it touches code, constraints, interfaces,
              or data, it probably was not strong enough yet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          description="A short public record of releases and meaningful project changes."
          eyebrow="Log"
          title="Project log."
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
          description="The best entry points are the projects, repositories, and direct email."
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
            <h2>Public links</h2>
            <p>
              GitHub is the best place to start for current public work.
              LinkedIn and X carry occasional public updates and context.
            </p>
            <SocialIconLinks className="contact-card__socials" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
