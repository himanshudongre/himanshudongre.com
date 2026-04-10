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
  group: "personal" | "professional";
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
  systemMap?: ProjectSystemBlock[];
  keyIdeas?: ProjectIdea[];
  sections: ProjectSection[];
  notes: string[];
};

export const projects: Project[] = [
  {
    slug: "smriti",
    group: "personal",
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
    snapshot: {
      challenge:
        "Long-running reasoning work becomes fragile when state lives only inside chat history.",
      build:
        "A system for checkpoints, branching, and clean restoration of reasoning state across tools and model switches.",
      signal:
        "Treats reasoning state as first-class infrastructure rather than as a prompt artifact.",
    },
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
    group: "personal",
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
    snapshot: {
      challenge:
        "Serious agents need enforceable boundaries and a trustworthy record of what they actually did.",
      build:
        "A local-first trust kernel with policy checks, append-only execution history, and verifiable outcomes.",
      signal:
        "Pushes agent safety away from vague logging and toward systems-level integrity guarantees.",
    },
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
    group: "personal",
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
    snapshot: {
      challenge:
        "Important real-estate decisions are slowed down by fragmented records and hard-to-interpret legal signals.",
      build:
        "An AI-assisted diligence workflow that gathers, cross-checks, and summarizes risk-relevant property signals.",
      signal:
        "Uses AI to reduce ambiguity around consequential decisions rather than to pretend certainty.",
    },
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
    group: "professional",
    title: "Production AI Systems for Mobility",
    kind: "Selected systems work",
    summary:
      "A confidentiality-safe snapshot of the kind of real-world AI systems work I have spent years doing: perception, in-cabin intelligence, optimization, and deployment under hard constraints.",
    role: "Technical leadership, architecture, optimization, and hands-on delivery.",
    status: "Ongoing",
    year: "2019 - Present",
    updatedAt: "2026-04-10",
    featured: false,
    tags: [
      "production ML",
      "perception systems",
      "optimization",
      "technical leadership",
    ],
    links: [],
    snapshot: {
      challenge:
        "Production AI in mobility has to survive latency, safety, compute, and delivery constraints at the same time.",
      build:
        "Led and built multi-model systems spanning perception, in-cabin intelligence, optimization, and deployment.",
      signal:
        "This is the body of work that shaped how I think about reliability, interfaces, and systems under pressure.",
    },
    systemMap: [
      {
        title: "Sense",
        description:
          "Work across multi-sensor perception pipelines and model components that have to cooperate in real time.",
      },
      {
        title: "Optimize",
        description:
          "Balance quality against latency, memory, throughput, and deployment constraints instead of treating them separately.",
      },
      {
        title: "Ship",
        description:
          "Build systems that can actually be tested, reviewed, integrated, and maintained across long program timelines.",
      },
      {
        title: "Lead",
        description:
          "Stay close enough to the work to guide architecture and delivery without losing implementation reality.",
      },
    ],
    keyIdeas: [
      {
        title: "Reality is the filter",
        description:
          "The most important technical claims are the ones that still hold after deployment constraints show up.",
      },
      {
        title: "Systems shape judgment",
        description:
          "Years of production work build intuition about interfaces, failure modes, and what can be trusted.",
      },
      {
        title: "Confidentiality changes storytelling",
        description:
          "The public version stays abstract, but the systems questions and engineering patterns are still worth surfacing.",
      },
    ],
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
    group: "personal",
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
    snapshot: {
      challenge:
        "Many ML engineers learn isolated tools without building a clear systems model for production work.",
      build:
        "A practical curriculum that connects experiments, pipelines, infrastructure, and team-ready engineering habits.",
      signal:
        "A teaching artifact for turning fragmented ML knowledge into operational engineering judgment.",
    },
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

export const personalProjects = projects.filter((project) => project.group === "personal");

export const professionalProjects = projects.filter(
  (project) => project.group === "professional",
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
