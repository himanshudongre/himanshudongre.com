export const profile = {
  name: "Himanshu Dongre",
  headline: "Trying to understand intelligence by building it.",
  subheadline:
    "AI systems engineer working across production ML, intelligent systems, and applied research.",
  introduction: [
    "I build production AI systems and stay close to architecture, deployment, optimization, and the tradeoffs that only show up under real constraints.",
    "Outside work, I use small independent systems like Smriti, Sentinel OS, and PropOps to think more clearly about reasoning, agency, trust, and decision support.",
  ],
  epigraph: "Building to understand. Understanding to build.",
  email: "himanshudongre1991@gmail.com",
  location: "Pune, India",
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Himanshu Dongre under flowering branches.",
  },
  currentFocus: [
    "Reasoning state, memory, and agent workflows.",
    "Trust, policy, and verifiable execution for AI systems.",
    "Decision-support tools that make messy evidence easier to reason about.",
  ],
  metrics: [
    { value: "12+ years", label: "production AI and software systems" },
    { value: "14-20 engineers", label: "led across architecture and delivery" },
    { value: "33 FPS", label: "full-resolution detection pipeline" },
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
  {
    title: "Reasoning and state",
    description:
      "How decisions, assumptions, and partial work are represented, restored, and compared across tools and models.",
  },
  {
    title: "Trust and verification",
    description:
      "How agent systems expose policy, evidence, and execution history in ways that can actually be checked.",
  },
  {
    title: "Interfaces for intelligent systems",
    description:
      "Where abstractions remain legible to humans instead of collapsing into opaque workflows.",
  },
  {
    title: "Decision support under uncertainty",
    description:
      "How systems help judgment without pretending certainty where the evidence is incomplete or noisy.",
  },
] as const;

export const principles = [
  {
    title: "First principles",
    description:
      "The work should still make sense after you strip away tooling, hype, and surface detail.",
  },
  {
    title: "Implementation as a test",
    description:
      "Building is part of thinking. Weak assumptions usually show up faster in systems than in discussion.",
  },
  {
    title: "Clarity over theatre",
    description:
      "I care more about what survives scrutiny, constraints, and deployment than what merely performs well in a demo.",
  },
] as const;
