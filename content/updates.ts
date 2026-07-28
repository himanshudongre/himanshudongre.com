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
    date: "2026-05-23",
    kind: "Release",
    title: "Smriti: coordination beyond handoff files.",
    summary:
      "Added active claims, stable task IDs, freshness checks, repository drift detection, worktrees, 21 MCP tools, and a local-first quickstart.",
    links: [
      { label: "Notes", href: "/work/smriti" },
      { label: "Website", href: "https://smritistate.dev" },
    ],
  },
  {
    date: "2026-04-27",
    kind: "Prototype",
    title: "PropOps: evidence-grounded property research.",
    summary:
      "Expanded the public prototype across 19 workflows, state RERA and IGRS sources, eCourts, builder entity resolution, and batch evaluation.",
    links: [
      { label: "Notes", href: "/work/propops" },
      { label: "Repository", href: "https://github.com/himanshudongre/propops" },
    ],
  },
  {
    date: "2026-02-22",
    kind: "Milestone",
    title: "Sentinel OS: MCP enforcement proxy.",
    summary:
      "The v0.3 prototype intercepts filesystem MCP calls, applies default-deny policy, and records signed transitions for offline verification.",
    links: [
      { label: "Notes", href: "/work/sentinel-os" },
      {
        label: "Repository",
        href: "https://github.com/himanshudongre/sentinel-os",
      },
    ],
  },
];
