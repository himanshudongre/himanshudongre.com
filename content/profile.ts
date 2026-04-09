export const profile = {
  name: "Himanshu Dongre",
  headline: "Trying to understand intelligence by building it.",
  subheadline:
    "AI systems engineer working across production ML, intelligent systems, and applied research.",
  introduction: [
    "I have spent 12+ years building production AI systems, leading engineering teams, and shipping work shaped by latency, compute, reliability, and deployment constraints.",
    "I keep returning to questions about intelligence, memory, agency, representation, and what changes when ideas are forced into real systems.",
  ],
  epigraph: "Building to understand. Understanding to build.",
  email: "himanshudongre1991@gmail.com",
  location: "Pune, India",
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Himanshu Dongre under flowering branches.",
  },
  currentFocus: [
    "Reasoning systems, memory, and agent workflows.",
    "Production ML systems built for latency, reliability, and deployment constraints.",
    "Projects where research questions become usable software.",
  ],
  metrics: [
    { value: "12+ years", label: "production AI and software systems" },
    { value: "15-20 people", label: "teams led across architecture and delivery" },
    { value: "ML to agents", label: "from perception systems to reasoning infrastructure" },
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
      "The work should still make sense after you strip away tooling, hype, and surface-level novelty.",
  },
  {
    title: "Let implementation sharpen the idea",
    description:
      "Building is part of thinking. Implementation often reveals the real question faster than abstraction does.",
  },
  {
    title: "Prefer durable systems over polished demos",
    description:
      "A good prototype matters, but I trust work more when it survives constraints, complexity, and repeated contact with reality.",
  },
] as const;
