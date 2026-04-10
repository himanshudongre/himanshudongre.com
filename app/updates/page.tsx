import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { UpdateCard } from "@/components/update-card";
import { updates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Public releases and meaningful changes across Himanshu Dongre's current independent projects.",
};

export default function UpdatesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Updates</span>
        <h1 className="page-title">Recent updates.</h1>
        <p className="page-copy">
          Public releases and meaningful changes across current independent projects.
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
