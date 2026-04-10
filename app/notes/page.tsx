import type { Metadata } from "next";

import { notes, notesConfig } from "@/content/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "A reserved space for future essays, technical notes, and research fragments.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotesPage() {
  return (
    <section className="page-hero">
      <span className="eyebrow">Notes</span>
      <h1 className="page-title">Notes.</h1>
      <p className="page-copy">
        {notesConfig.description} This section is intentionally dormant for now.
      </p>
      {notes.length ? null : (
        <div className="notes-placeholder">
          <p>
            When this section is enabled, it will hold essays, technical notes,
            and project fragments that are better suited to a site-owned archive
            than to social posts.
          </p>
        </div>
      )}
    </section>
  );
}
