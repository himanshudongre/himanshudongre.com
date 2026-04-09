import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { UpdateCard } from "@/components/update-card";
import { updates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "A simple running log of recent launches, active work, and notable project changes.",
};

export default function UpdatesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Updates</span>
        <h1 className="page-title">A lightweight, maintainable running log.</h1>
        <p className="page-copy">
          This is the part of the site meant to evolve most often. New launches,
          milestones, project revisions, and important notes can be added here
          without touching the overall design system.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          description="The website stays current by updating this list and the project content directly, rather than depending on external social feeds."
          eyebrow="Timeline"
          title="Recent activity."
        />
        <div className="updates-grid">
          {updates.map((update, index) => (
            <Reveal key={`${update.date}-${update.title}`} delay={index * 55}>
              <UpdateCard update={update} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
