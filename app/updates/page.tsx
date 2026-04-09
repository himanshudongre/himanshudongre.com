import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { UpdateCard } from "@/components/update-card";
import { updates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Recent public launches, milestones, and repository updates from Himanshu Dongre.",
};

export default function UpdatesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Updates</span>
        <h1 className="page-title">Recent updates.</h1>
        <p className="page-copy">
          Public launches, milestones, and notable changes across projects and repositories.
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
