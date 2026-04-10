export type NoteEntry = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
};

export const notesConfig = {
  enabled: false,
  description:
    "Scaffolded for future essays, technical notes, and research fragments.",
} as const;

export const notes: NoteEntry[] = [];
