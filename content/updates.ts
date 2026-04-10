export type UpdateEntry = {
  date: string;
  kind: string;
  title: string;
  summary: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const updates: UpdateEntry[] = [
  {
    date: "2026-04-07",
    kind: "Prototype",
    title: "PropOps: early prototype.",
    summary:
      "A narrow public prototype for property diligence, centered on gathering fragmented legal and registry signals and surfacing inconsistencies for human review.",
    links: [
      { label: "Notes", href: "/work/propops" },
      { label: "Repository", href: "https://github.com/himanshudongre/propops" },
    ],
  },
  {
    date: "2026-04-04",
    kind: "Release",
    title: "Smriti: public repo and demo.",
    summary:
      "Checkpointing, branching, and restoration for long-running reasoning state across sessions, tools, and model switches.",
    links: [
      { label: "Notes", href: "/work/smriti" },
      { label: "Repository", href: "https://github.com/himanshudongre/smriti" },
    ],
  },
  {
    date: "2026-02-22",
    kind: "Milestone",
    title: "Sentinel OS: first public milestone.",
    summary:
      "A clearer public direction for local-first policy enforcement, append-only execution history, and verifiable agent behavior.",
    links: [
      { label: "Notes", href: "/work/sentinel-os" },
      {
        label: "Repository",
        href: "https://github.com/himanshudongre/sentinel-os",
      },
    ],
  },
];
