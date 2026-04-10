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
      "A system for treating long-running reasoning as explicit state, with checkpoints, branching, and clean restoration across tools and model switches.",
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
        "Long-running reasoning work becomes fragile when state exists only as a transcript.",
      build:
        "Explicit checkpoints, branches, and restoration of reasoning state across tools and model switches.",
      signal:
        "The core object is not the chat log. It is the state you want to preserve, compare, and recover.",
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
          "The important unit is not the chat log. It is the reasoning state you want to preserve and recover.",
      },
      {
        title: "Model switches should be cheap",
        description:
          "Changing tools or models should not mean reconstructing your own context from scratch.",
      },
      {
        title: "Branches clarify thought",
        description:
          "Competing lines of reasoning become more useful when they are explicit objects you can revisit.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "I built Smriti after running into the same failure mode over and over during serious multi-model work: the reasoning was good, but the state was brittle.",
          "Once you change tools, switch models, or revisit a thread later, too much of the useful structure is buried inside prose. The goal here is to make that structure explicit enough to save, restore, branch, and inspect.",
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
      "The implementation currently centers on checkpoint capture, restore, and branching across multi-model workflows.",
      "The next real decision is how much structure the checkpoint object should carry before it slows the reasoning loop down.",
    ],
  },
  {
    slug: "sentinel-os",
    title: "Sentinel OS",
    kind: "Trust kernel for agents",
    summary:
      "A local-first trust layer for agent systems built around policy enforcement, append-only execution history, and verifiable outcomes.",
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
        "A local-first trust kernel with policy checks, append-only execution history, and verifiable outcomes.",
      signal:
        "Pushes agent safety away from vague logging and toward systems-level integrity guarantees.",
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
          "If a system cannot show what happened after the fact, it is not trustworthy enough for serious use.",
      },
      {
        title: "Policies should be visible",
        description:
          "Constraint systems matter more when humans can understand the rules that governed an action.",
      },
      {
        title: "Integrity is infrastructure",
        description:
          "Verification belongs in the system design, not as an afterthought once the demo already works.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "The harder question for serious agent use is not raw capability. It is whether actions can be constrained, reconstructed, and verified without trusting the model on its own terms.",
          "Sentinel OS is an attempt to answer that question at the systems layer instead of treating it as a logging or prompting problem.",
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
      "The next useful step is replay, richer inspection tooling, and a clearer model for state and memory transitions.",
    ],
  },
  {
    slug: "propops",
    title: "PropOps",
    kind: "Decision support system",
    summary:
      "A decision-support system for property diligence that gathers fragmented registry and legal signals, surfaces inconsistencies, and keeps the final judgment with the human user.",
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
        "Important real-estate decisions are slowed down by fragmented records and hard-to-interpret legal signals.",
      build:
        "An AI-assisted diligence workflow that gathers, cross-checks, and summarizes risk-relevant property signals.",
      signal:
        "The value is not prediction theatre. It is making evidence easier to inspect and reason about.",
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
          "The hard part is often not access to data. It is turning scattered evidence into a usable picture.",
      },
      {
        title: "AI should reduce ambiguity",
        description:
          "The system is more useful when it clarifies uncertainty than when it performs confidence theatre.",
      },
      {
        title: "Practical problems matter",
        description:
          "Some of the most interesting systems work lives in mundane decisions with real consequences.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "Important property decisions often break down at the interpretation layer. The underlying information exists, but it is fragmented, inconsistent, and expensive to reason through under time pressure.",
          "PropOps is an attempt to reduce that interpretive burden without pretending the final answer can be automated away.",
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
      "The current prototype is intentionally narrow: diligence before transaction commitment, not end-to-end transaction workflow.",
      "Most of the difficulty is in evidence normalization, source traceability, and uncertainty handling rather than summary generation.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
