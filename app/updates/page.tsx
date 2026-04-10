import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { UpdateCard } from "@/components/update-card";
import { updates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "A short public log of releases and meaningful changes across Himanshu Dongre's current independent projects.",
};

export default function UpdatesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Updates</span>
        <h1 className="page-title">Project log.</h1>
        <p className="page-copy">
          A short public record of releases and meaningful changes across current independent projects.
        </p>
      </section>

      <section className="section">
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
