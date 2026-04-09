export type ProjectSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  role: string;
  status: string;
  year: string;
  updatedAt: string;
  featured: boolean;
  tags: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
  notes: string[];
};

export const projects: Project[] = [
  {
    slug: "smriti",
    title: "Smriti",
    kind: "Reasoning infrastructure",
    summary:
      "Version control for reasoning, with checkpoints, branching, and clean state restoration across long-running conversations and model switches.",
    role: "Concept, architecture, product, and implementation.",
    status: "Active",
    year: "2026",
    updatedAt: "2026-04-04",
    featured: true,
    tags: [
      "reasoning state",
      "agents",
      "multi-model workflows",
      "context management",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/himanshudongre/smriti",
        external: true,
      },
      {
        label: "Demo",
        href: "https://www.loom.com/share/0531ab1b6f114ceb9996ec5780052158",
        external: true,
      },
    ],
    sections: [
      {
        title: "Why it exists",
        paragraphs: [
          "I built Smriti out of frustration with how brittle context becomes during serious multi-model work. You can reach clarity, switch tools or directions, and suddenly spend half an hour reconstructing your own thinking.",
          "The project treats reasoning state as something explicit and restorable rather than something you hope a long chat history still conveys correctly.",
        ],
      },
      {
        title: "What it explores",
        bullets: [
          "Checkpointing decisions, assumptions, open questions, and artifacts as structured state.",
          "Restoring a clean reasoning context without leakage from later turns.",
          "Branching from checkpoints to compare how different lines of reasoning diverge.",
          "Treating the model as a renderer of reasoning state rather than the owner of that state.",
        ],
      },
      {
        title: "Why it matters to me",
        paragraphs: [
          "The more I work with agents and long-horizon problem solving, the more it feels like state is a fundamental systems problem rather than just a prompt problem.",
        ],
      },
    ],
    notes: [
      "Public repository with a working demo.",
      "The underlying idea remains broader than chat interfaces alone.",
    ],
  },
  {
    slug: "sentinel-os",
    title: "Sentinel OS",
    kind: "Trust kernel for agents",
    summary:
      "A local-first trust control plane for agentic systems focused on policy enforcement, verifiable execution, and cryptographic proof of what actually happened.",
    role: "Concept, system design, and implementation.",
    status: "Active",
    year: "2026",
    updatedAt: "2026-02-22",
    featured: true,
    tags: [
      "trustworthy agents",
      "policy enforcement",
      "cryptographic verification",
      "execution integrity",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/himanshudongre/sentinel-os",
        external: true,
      },
    ],
    sections: [
      {
        title: "Why it exists",
        paragraphs: [
          "The harder question for serious agent adoption is not whether an agent can do something. It is whether we can verify, constrain, and reconstruct what it did without relying on trust in the model alone.",
          "Sentinel OS explores what a stricter, systems-oriented answer to that problem could look like.",
        ],
      },
      {
        title: "Core ideas",
        bullets: [
          "An append-only, signed ledger of agent transitions.",
          "Deterministic policy evaluation with a default-deny stance.",
          "Offline-verifiable proof bundles rather than best-effort logs.",
          "A future memory layer where state changes are as auditable as actions.",
        ],
      },
      {
        title: "Why it matters to me",
        paragraphs: [
          "If intelligent systems become operational infrastructure, then integrity, replayability, and policy transparency stop being optional implementation details.",
        ],
      },
    ],
    notes: [
      "Current public milestone centers on signed policy decisions and append-only verification.",
    ],
  },
  {
    slug: "propops",
    title: "PropOps",
    kind: "Decision support system",
    summary:
      "An AI-assisted property transparency tool that pulls together fragmented registry and legal signals to help buyers reason about risk before they commit.",
    role: "Product framing, systems design, and implementation.",
    status: "Prototype",
    year: "2026",
    updatedAt: "2026-04-07",
    featured: true,
    tags: [
      "decision support",
      "retrieval",
      "risk analysis",
      "information synthesis",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/himanshudongre/propops",
        external: true,
      },
    ],
    sections: [
      {
        title: "Why it exists",
        paragraphs: [
          "Important decisions often fail not because information is unavailable, but because it is scattered, inconsistent, and painful to interpret under time pressure.",
          "PropOps is an attempt to make that synthesis legible and actionable for ordinary buyers.",
        ],
      },
      {
        title: "What it does",
        bullets: [
          "Cross-references registry, compliance, and legal signals across multiple sources.",
          "Surfaces risks, missing information, and inconsistencies that deserve human attention.",
          "Frames AI as a due-diligence assistant rather than as an oracle.",
        ],
      },
      {
        title: "Why it matters to me",
        paragraphs: [
          "I am interested in systems that reduce ambiguity around consequential decisions, especially when the real challenge is interpretation rather than raw prediction.",
        ],
      },
    ],
    notes: [
      "Early public prototype and an intentionally practical problem space.",
    ],
  },
  {
    slug: "production-ai-systems",
    title: "Production AI Systems for Mobility",
    kind: "Selected systems work",
    summary:
      "A confidentiality-safe snapshot of the kind of real-world AI systems work I have spent years doing: perception, in-cabin intelligence, optimization, and deployment under hard constraints.",
    role: "Technical leadership, architecture, optimization, and hands-on delivery.",
    status: "Ongoing",
    year: "2019 - Present",
    updatedAt: "2026-04-10",
    featured: true,
    tags: [
      "production ML",
      "perception systems",
      "optimization",
      "technical leadership",
    ],
    links: [],
    sections: [
      {
        title: "What this represents",
        paragraphs: [
          "A large share of my career has been spent on systems that do not get the luxury of being merely interesting. They have to be performant, robust, observable, and carefully engineered around compute and safety constraints.",
          "Publicly, I keep the description abstract enough to stay respectful of confidentiality while still showing the character of the work.",
        ],
      },
      {
        title: "Work patterns",
        bullets: [
          "Designing and optimizing multi-model, multi-sensor pipelines.",
          "Balancing model quality against latency, throughput, memory, and deployment limits.",
          "Working across architecture, execution planning, technical review, and customer-facing delivery.",
          "Building middleware and inference systems that support multiple perception components concurrently.",
        ],
      },
      {
        title: "Why it matters to me",
        paragraphs: [
          "This work shaped how I think. It taught me to respect reality, to care about interfaces and constraints, and to distrust any system claim that only survives inside idealized conditions.",
        ],
      },
    ],
    notes: [
      "Confidential program details intentionally omitted.",
    ],
  },
  {
    slug: "mlops-engineering-101",
    title: "MLOps Engineering 101",
    kind: "Learning systems",
    summary:
      "A practical zero-to-hero curriculum for ML engineers covering end-to-end training pipelines, infrastructure, and team-ready workflows.",
    role: "Curriculum design and repository creation.",
    status: "Published",
    year: "2026",
    updatedAt: "2026-03-31",
    featured: false,
    tags: [
      "mlops",
      "curriculum",
      "platform thinking",
      "engineering workflows",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/himanshudongre/mlops-engineering-101",
        external: true,
      },
    ],
    sections: [
      {
        title: "Why it exists",
        paragraphs: [
          "Strong ML engineers need more than model intuition. They also need a working mental model for pipelines, infrastructure, reproducibility, and team practices that make systems usable beyond the experiment stage.",
        ],
      },
      {
        title: "What it covers",
        bullets: [
          "End-to-end training pipelines and experiment tracking.",
          "Containerized workflows and infrastructure setup.",
          "The gap between isolated notebooks and operational ML systems.",
        ],
      },
    ],
    notes: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
