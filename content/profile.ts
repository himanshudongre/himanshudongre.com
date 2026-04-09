export const profile = {
  name: "Himanshu Dongre",
  headline: "Trying to understand intelligence by building it.",
  subheadline:
    "Senior AI systems engineer and research-driven builder working across production ML, real-world systems, and the broader study of intelligent systems.",
  introduction: [
    "I have spent the last 12+ years building production AI systems in environments where latency, compute, reliability, and operational reality shape every technical decision.",
    "Outside work, I keep returning to questions about intelligence, memory, state, agency, and how ideas become clearer when they are forced into systems that have to actually work.",
  ],
  epigraph: "Building to understand. Understanding to build.",
  email: "himanshudongre1991@gmail.com",
  location: "Pune, India",
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Himanshu Dongre under flowering branches.",
  },
  currentFocus: [
    "Research-driven systems for agents, memory, and trustworthy execution.",
    "Production ML systems that hold up under real constraints.",
    "Projects where implementation becomes a way of thinking more clearly.",
  ],
  metrics: [
    { value: "12+ years", label: "building production AI and software systems" },
    { value: "15-20 people", label: "teams led across delivery and architecture" },
    { value: "AI systems", label: "from perception platforms to agent infrastructure" },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/himanshudongre",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hdongre",
    },
    {
      label: "X",
      href: "https://x.com/himanshudongre",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/himanshu.dongre",
    },
  ],
} as const;

export const researchInterests = [
  "Intelligent systems",
  "Trustworthy agents",
  "Memory and state",
  "Representation learning",
  "Structured visual systems",
  "Real-world ML deployment",
  "Reasoning infrastructure",
  "Systems that remain legible under constraints",
] as const;

export const principles = [
  {
    title: "Stay close to first principles",
    description:
      "I like systems work that can still explain itself clearly when you strip away tooling, hype, and surface-level novelty.",
  },
  {
    title: "Let implementation sharpen the idea",
    description:
      "Building is not separate from thinking. The act of implementation usually reveals the real question faster than abstract debate does.",
  },
  {
    title: "Prefer durable systems over polished demos",
    description:
      "I respect elegant prototypes, but I trust work more when it survives constraints, complexity, and repeated contact with reality.",
  },
] as const;
