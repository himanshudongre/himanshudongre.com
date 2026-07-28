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
    kind: "Multi-agent coordination",
    summary:
      "Version control for project reasoning state across coding agents.",
    role: "Concept, architecture, and implementation.",
    status: "Active",
    year: "2026",
    updatedAt: "2026-05-23",
    featured: true,
    tags: [
      "multi-agent systems",
      "reasoning state",
      "coordination",
      "MCP",
    ],
    links: [
      {
        label: "Website",
        href: "https://smritistate.dev",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/himanshudongre/smriti",
        external: true,
      },
    ],
    snapshot: {
      challenge:
        "Long-running reasoning becomes brittle when usable state only exists inside transcript text.",
      build:
        "Version, branch, compare, and restore reasoning state while agents coordinate through claims and structured tasks.",
      signal:
        "Agents can share current project state without treating a transcript or handoff file as the source of truth.",
    },
    facts: [
      {
        label: "Primary object",
        value: "Structured checkpoints for decisions, assumptions, tasks, and open questions.",
      },
      {
        label: "System boundary",
        value: "CLI, 21 MCP tools, agent skill packs, and a human-facing UI.",
      },
      {
        label: "Current artifact",
        value: "Local-first SQLite workflow, with Postgres for shared team use.",
      },
      {
        label: "Pressure point",
        value: "Keeping shared state fresh without turning coordination into overhead.",
      },
    ],
    systemMap: [
      {
        title: "Checkpoint",
        description:
          "Record decisions, assumptions, tasks, open questions, and repository state as one structured snapshot.",
      },
      {
        title: "Branch",
        description:
          "Fork from a clean checkpoint to compare alternatives without contaminating the base line of thought.",
      },
      {
        title: "Coordinate",
        description:
          "Use time-bounded claims, stable task IDs, and freshness checks so agents can see overlapping work before they collide.",
      },
      {
        title: "Verify",
        description:
          "Compare recorded reasoning with the live Git repository and surface branch, commit, worktree, and dirty-state drift.",
      },
    ],
    keyIdeas: [
      {
        title: "The handoff is structured state",
        description:
          "A current project state with stable objects carries more usable context than another handoff document.",
      },
      {
        title: "Coordination should remain advisory",
        description:
          "Claims make intent visible without turning Smriti into a scheduler or lock manager.",
      },
      {
        title: "Recorded state must admit drift",
        description:
          "A checkpoint is useful only if the system can show when the codebase has moved past it.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "I built Smriti after running Claude Code and Codex on the same projects. Each agent could write code, but neither could see the other agent's decisions, assumptions, or active work.",
          "Handoff files helped with simple continuation. They broke down when work branched, two agents started near-simultaneously, or the repository moved past the recorded state.",
        ],
      },
      {
        title: "Approach",
        bullets: [
          "Store decisions, assumptions, tasks, open questions, and artifacts as versioned checkpoints.",
          "Fork, compare, and restore reasoning branches without rewriting the base state.",
          "Expose active claims, stable task IDs, freshness checks, and repository drift through the CLI and MCP.",
          "Keep core coordination local and deterministic; use an LLM only for optional extraction, review, and chat features.",
        ],
      },
      {
        title: "Open questions",
        bullets: [
          "What checkpoint granularity preserves enough context without encouraging constant bookkeeping?",
          "Which coordination signals should remain advisory, and which need stronger enforcement?",
          "How should reasoning state evolve when agents work across repositories and longer time horizons?",
        ],
      },
    ],
    notes: [
      "The public site and repository include a guided quickstart that runs without API keys.",
      "Smriti is dogfooded across active Claude Code and Codex projects.",
      "The current system spans local and shared backends, 21 MCP tools, agent skill packs, repository drift checks, claims, worktrees, and a human-facing UI.",
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
        "A local-first trust kernel with default-deny policy checks, signed transitions, and an MCP enforcement proxy.",
      signal:
        "Policy decisions and execution history can be checked without relying on the model's account of its own actions.",
    },
    facts: [
      {
        label: "Primary object",
        value: "Canonical, signed transitions in an append-only hash chain.",
      },
      {
        label: "System boundary",
        value: "Policy evaluation, MCP tool interception, proof generation, and offline verification.",
      },
      {
        label: "Current artifact",
        value: "v0.3 prototype with a filesystem MCP proxy and Seatbelt enforcement.",
      },
      {
        label: "Pressure point",
        value: "Extending the audit model from tool calls to memory and state mutation.",
      },
    ],
    systemMap: [
      {
        title: "Constrain",
        description:
          "Seatbelt evaluates transition intent before execution using a deterministic default-deny policy.",
      },
      {
        title: "Record",
        description:
          "Sentinel writes canonical execution digests, policy references, signatures, and hashes to an append-only ledger.",
      },
      {
        title: "Verify",
        description:
          "The command-line verifier reconstructs the chain and checks integrity offline.",
      },
      {
        title: "Extend",
        description:
          "The next system boundary is auditable memory writes, retrievals, and state replay.",
      },
    ],
    keyIdeas: [
      {
        title: "Execution should be reconstructable",
        description:
          "A signed transition chain gives operators evidence beyond application logs.",
      },
      {
        title: "Authorization belongs outside the client",
        description:
          "The agent can request an action, but the authoritative policy decision comes from the enforcement layer.",
      },
      {
        title: "Verification should be vendor-neutral",
        description:
          "Canonicalization, hashing, and Ed25519 signatures let operators verify the record without a model provider.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "Serious agent use requires actions that can be constrained, reconstructed, and verified without trusting the model's own account.",
          "Sentinel OS puts that responsibility in a policy and integrity layer outside the agent.",
        ],
      },
      {
        title: "Approach",
        bullets: [
          "Use append-only execution history instead of scattered logs.",
          "Require explicit permission through a deterministic default-deny policy.",
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
      "The v0.3 prototype intercepts filesystem MCP calls before execution and binds the policy decision into the proof chain.",
      "The next milestone is a clearer model for replay, memory writes, and state transitions.",
    ],
  },
  {
    slug: "propops",
    title: "PropOps",
    kind: "Evidence-grounded agent",
    summary:
      "An open-source research agent that joins government property records into an inspectable diligence workflow.",
    role: "Problem framing, systems design, and implementation.",
    status: "Public prototype",
    year: "2026",
    updatedAt: "2026-04-27",
    featured: true,
    tags: [
      "agent workflows",
      "government data",
      "entity resolution",
      "human-in-the-loop",
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
        "Nineteen agent workflows combine registry, RERA, and court data with entity resolution, risk checks, and batch evaluation.",
      signal:
        "The output keeps sources, gaps, and judgment visible instead of hiding them behind one score.",
    },
    facts: [
      {
        label: "Primary object",
        value: "An evidence-linked property or builder report with explicit risks and open questions.",
      },
      {
        label: "System boundary",
        value: "IGRS, five state RERA portals, a national aggregator, and eCourts.",
      },
      {
        label: "Current artifact",
        value: "TypeScript and Playwright research workflows, plus a Go terminal dashboard.",
      },
      {
        label: "Pressure point",
        value: "Portal drift, incomplete disclosures, and cross-entity builder matching.",
      },
    ],
    systemMap: [
      {
        title: "Gather",
        description:
          "Collect registration prices, project records, complaints, litigation, and listing context from public sources.",
      },
      {
        title: "Normalize",
        description:
          "Resolve builder identities across legal entities, naming variants, contact details, directors, and addresses.",
      },
      {
        title: "Surface risk",
        description:
          "Flag missing records, conflicting claims, delayed projects, litigation, contract clauses, and financial stress.",
      },
      {
        title: "Support judgment",
        description:
          "Preserve the source trail and reserve outreach, negotiation, legal review, and purchase decisions for the buyer.",
      },
    ],
    keyIdeas: [
      {
        title: "Entity resolution changes the answer",
        description:
          "A project-level lookup misses history when one builder operates through multiple legal entities and name variants.",
      },
      {
        title: "Sources should remain inspectable",
        description:
          "Every summary is more useful when a buyer can inspect the records, limitations, and unresolved gaps behind it.",
      },
      {
        title: "Automation stops before the decision",
        description:
          "The agent gathers, compares, and drafts. The human controls outreach, legal review, negotiation, and purchase.",
      },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "Indian property records are public, but the useful evidence sits across registration portals, state RERA systems, court databases, builder entities, and listing sites.",
          "PropOps turns that fragmented search into a repeatable research workflow while preserving the source trail and known limitations.",
        ],
      },
      {
        title: "Approach",
        bullets: [
          "Route a question through 19 modes covering discovery, evaluation, builder research, litigation, finance, agreement review, and post-purchase checks.",
          "Cross-reference IGRS, state RERA portals, the MoHUA aggregator, and eCourts using dedicated scrapers and fallbacks.",
          "Resolve related builder entities before aggregating project history, complaints, and litigation.",
          "Run batch evaluations with parallel agents while leaving high-impact actions with the buyer.",
        ],
      },
      {
        title: "Open questions",
        bullets: [
          "How can scraper failures and portal changes be detected before they create false confidence?",
          "Which evidence model makes missing and contradictory records easy to review?",
          "How far can entity resolution go before a probable match needs explicit human confirmation?",
        ],
      },
    ],
    notes: [
      "PropOps is open source and includes one-command installers for non-technical users.",
      "The builder pipeline combines state-specific scrapers, cross-entity matching, and national court search.",
      "The system never contacts builders or submits applications; the buyer retains control of consequential actions.",
    ],
  },
];

const featuredOrder = ["smriti", "propops", "sentinel-os"];

export const featuredProjects = featuredOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project?.featured));

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
