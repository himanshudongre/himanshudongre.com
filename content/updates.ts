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
    title: "PropOps public prototype released.",
    summary:
      "An early public prototype for AI-assisted property diligence, focused on making fragmented legal and registry risk easier to read.",
    links: [
      { label: "Project page", href: "/work/propops" },
      { label: "Repository", href: "https://github.com/himanshudongre/propops" },
    ],
  },
  {
    date: "2026-04-04",
    kind: "Release",
    title: "Smriti public repo and demo released.",
    summary:
      "A reasoning-state system built around checkpoints, branching, and cleaner recovery from context drift across models and sessions.",
    links: [
      { label: "Project page", href: "/work/smriti" },
      { label: "Repository", href: "https://github.com/himanshudongre/smriti" },
    ],
  },
  {
    date: "2026-03-31",
    kind: "Repository",
    title: "MLOps Engineering 101 published.",
    summary:
      "A practical curriculum focused on turning ML knowledge into engineering systems teams can actually run and maintain.",
    links: [
      { label: "Project page", href: "/work/mlops-engineering-101" },
      {
        label: "Repository",
        href: "https://github.com/himanshudongre/mlops-engineering-101",
      },
    ],
  },
  {
    date: "2026-02-22",
    kind: "Open source",
    title: "Sentinel OS public milestone.",
    summary:
      "The repository captures a clearer direction for local-first policy enforcement and verifiable agent execution.",
    links: [
      { label: "Project page", href: "/work/sentinel-os" },
      {
        label: "Repository",
        href: "https://github.com/himanshudongre/sentinel-os",
      },
    ],
  },
];
