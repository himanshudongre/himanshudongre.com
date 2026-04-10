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

export type ProjectSnapshot = {
  challenge: string;
  build: string;
  signal: string;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectSystemBlock = {
  title: string;
  description: string;
};

export type ProjectIdea = {
  title: string;
  description: string;
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
  snapshot?: ProjectSnapshot;
  facts?: ProjectFact[];
  systemMap?: ProjectSystemBlock[];
  keyIdeas?: ProjectIdea[];
  sections: ProjectSection[];
  notes: string[];
};

export const projects: Project[] = [
  {
    slug: "smriti",
    title: "Smriti",
    kind: "Reasoning infrastructure",
    summary:
      "Checkpointed reasoning state for long-running, multi-model work.",
    role: "Concept, architecture, and implementation.",
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
    snapshot: {
      challenge:
        "Long-running reasoning becomes brittle when usable state only exists inside transcript text.",
      build:
        "Checkpoint, branch, and restore reasoning state across tools and model switches.",
      signal:
        "The core object is not the chat log. It is the state you want to preserve and recover.",
    },
    facts: [
      {
        label: "Primary object",
        value: "Checkpoints and branches for reasoning state.",
      },
      {
        label: "System boundary",
        value: "Capture, restore, and compare state across tools and models.",
      },
      {
        label: "Current artifact",
        value: "Public repository and demo.",
      },
      {
        label: "Pressure point",
        value: "Checkpoint granularity versus workflow overhead.",
      },
    ],
    systemMap: [
      {
        title: "Capture",
        description:
          "Freeze decisions, assumptions, open questions, and artifacts into an explicit checkpoint.",
      },
      {
        title: "Branch",
        description:
          "Fork from a clean checkpoint to compare alternatives without contaminating the base line of thought.",
      },
      {
        title: "Restore",
        description:
          "Re-enter a prior reasoning state without dragging in later turns that do not belong there.",
      },
      {
        title: "Compare",
        description:
          "Make divergent reasoning paths inspectable so the workflow stays model-agnostic and legible.",
      },
    ],
    keyIdeas: [
      {
        title: "State over transcript",
        description:
          "The important unit is the reasoning state, not the transcript around it.",
      },
      {
        title: "Model switches should be cheap",
        description:
          "Changing tools or models should not require rebuilding context by hand.",
      },
      {
        title: "Branches clarify thought",
        description:
          "Alternative lines of reasoning become more useful when they are explicit and revisitable.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "I built Smriti after repeatedly hitting the same failure mode in multi-model work: the reasoning was good, but the usable state was brittle.",
          "Once tools changed, models switched, or a thread was revisited later, too much of the structure had to be reconstructed from prose. The goal is to make that structure explicit enough to save, branch, restore, and inspect.",
        ],
      },
      {
        title: "Approach",
        bullets: [
          "Checkpoint decisions, assumptions, open questions, and artifacts as structured state rather than as implicit chat context.",
          "Restore a clean reasoning context without leaking in later turns that no longer belong.",
          "Branch from a checkpoint to compare alternatives without overwriting the base line of thought.",
          "Treat the model as a renderer of reasoning state, not the only place where that state lives.",
        ],
      },
      {
        title: "Open questions",
        bullets: [
          "What is the right granularity for a checkpoint: message-level, task-level, or decision-level?",
          "How should persistent memory differ from short-horizon reasoning state?",
          "How much structure is enough before the system becomes heavier than the reasoning workflow itself?",
        ],
      },
    ],
    notes: [
      "The public repository and demo are already live.",
      "The implementation currently centers on capture, restore, and branching across multi-model workflows.",
      "The next real decision is how much structure a checkpoint should carry before it slows the workflow down.",
    ],
  },
  {
    slug: "sentinel-os",
    title: "Sentinel OS",
    kind: "Trust kernel for agents",
    summary:
      "A local-first trust kernel for agent systems with policy checks, append-only history, and verification.",
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
    snapshot: {
      challenge:
        "Serious agents need enforceable boundaries and a trustworthy record of what they actually did.",
      build:
        "A local-first trust kernel with policy checks, append-only history, and verifiable outcomes.",
      signal:
        "Moves agent safety away from vague logging and toward systems-level integrity guarantees.",
    },
    facts: [
      {
        label: "Primary object",
        value: "Signed policy decisions and append-only action records.",
      },
      {
        label: "System boundary",
        value: "Pre-action constraint checks and post-action verification.",
      },
      {
        label: "Current artifact",
        value: "Local-first trust-kernel prototype.",
      },
      {
        label: "Pressure point",
        value: "Extending the same audit model to memory and state mutation.",
      },
    ],
    systemMap: [
      {
        title: "Constrain",
        description:
          "Policies are evaluated before actions run, with a bias toward explicit permission rather than best effort.",
      },
      {
        title: "Record",
        description:
          "Execution history is captured as an append-only sequence of transitions instead of scattered logs.",
      },
      {
        title: "Verify",
        description:
          "Outcomes are packaged so that integrity can be checked offline without trusting the running agent.",
      },
      {
        title: "Extend",
        description:
          "The structure is designed to grow toward auditable memory and tighter control planes for agents.",
      },
    ],
    keyIdeas: [
      {
        title: "Trust must be reconstructable",
        description:
          "If a system cannot show what happened after the fact, it is not trustworthy enough.",
      },
      {
        title: "Policies should be visible",
        description:
          "Constraint systems matter more when humans can see the rules that governed an action.",
      },
      {
        title: "Integrity is infrastructure",
        description:
          "Verification belongs in the system design, not as an afterthought.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "The harder question for serious agent use is not raw capability. It is whether actions can be constrained, reconstructed, and verified without trusting the model on its own terms.",
          "Sentinel OS treats that as a systems problem rather than a logging or prompting problem.",
        ],
      },
      {
        title: "Approach",
        bullets: [
          "Use append-only execution history instead of scattered logs.",
          "Bias policy evaluation toward explicit permission rather than best effort.",
          "Package outcomes so they can be verified offline after execution.",
          "Treat memory and state transitions as objects that should eventually be auditable too.",
        ],
      },
      {
        title: "Open questions",
        bullets: [
          "What is the smallest useful policy surface for practical agent systems?",
          "How should memory mutations be represented if they need the same audit trail as actions?",
          "Which guarantees are worth paying for in exchange for complexity and friction?",
        ],
      },
    ],
    notes: [
      "The current public milestone covers signed policy decisions, append-only records, and basic verification.",
      "The next useful step is replay, richer inspection tooling, and a clearer model for memory and state transitions.",
    ],
  },
  {
    slug: "propops",
    title: "PropOps",
    kind: "Decision support system",
    summary:
      "A property-diligence system that gathers fragmented records, surfaces inconsistencies, and keeps judgment with the human operator.",
    role: "Problem framing, systems design, and implementation.",
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
    snapshot: {
      challenge:
        "Important property decisions are slowed down by fragmented records and hard-to-interpret legal signals.",
      build:
        "An AI-assisted diligence workflow that gathers, cross-checks, and summarizes risk-relevant signals.",
      signal:
        "The value is not prediction theatre. It is making evidence easier to inspect.",
    },
    facts: [
      {
        label: "Primary object",
        value: "A diligence trace built from evidence, inconsistencies, and open questions.",
      },
      {
        label: "System boundary",
        value: "Retrieval, normalization, and risk surfacing across fragmented records.",
      },
      {
        label: "Current artifact",
        value: "Narrow property-diligence prototype.",
      },
      {
        label: "Pressure point",
        value: "Representing uncertainty without hiding the underlying evidence.",
      },
    ],
    systemMap: [
      {
        title: "Gather",
        description:
          "Pull registry, legal, and compliance context from multiple fragmented sources into one workflow.",
      },
      {
        title: "Normalize",
        description:
          "Convert scattered formats and inconsistent records into a shape that supports reasoning instead of manual hunting.",
      },
      {
        title: "Surface risk",
        description:
          "Highlight missing information, inconsistencies, and open diligence questions that deserve attention.",
      },
      {
        title: "Support judgment",
        description:
          "Keep the human decision-maker in control while making interpretation faster and more legible.",
      },
    ],
    keyIdeas: [
      {
        title: "Interpretation is the bottleneck",
        description:
          "The hard part is often not access to data. It is turning scattered evidence into something usable.",
      },
      {
        title: "AI should reduce ambiguity",
        description:
          "The system is more useful when it clarifies uncertainty than when it performs confidence theatre.",
      },
      {
        title: "Practical problems matter",
        description:
          "Some of the most interesting systems work lives in ordinary decisions with real consequences.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "Property diligence often breaks down at the interpretation layer. The information exists, but it is fragmented, inconsistent, and slow to reason through under time pressure.",
          "PropOps reduces that burden without pretending the decision itself can be automated away.",
        ],
      },
      {
        title: "Approach",
        bullets: [
          "Cross-reference registry, compliance, and legal signals across multiple sources.",
          "Surface missing information, inconsistencies, and open diligence questions explicitly.",
          "Use AI as a due-diligence assistant rather than as an oracle or a risk score generator.",
        ],
      },
      {
        title: "Open questions",
        bullets: [
          "How should uncertainty be represented without overwhelming the user?",
          "What evidence model makes manual review faster instead of simply generating another summary layer?",
          "Where should the boundary sit between automated synthesis and explicit human judgment?",
        ],
      },
    ],
    notes: [
      "The current prototype is intentionally narrow: diligence before commitment, not end-to-end transaction workflow.",
      "Most of the difficulty is in normalization, source traceability, and uncertainty handling rather than summary generation.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
