export const profile = {
  name: "Himanshu Dongre",
  headline: "Trying to understand intelligence by building it.",
  subheadline:
    "AI systems engineer building production ML systems and research-driven software.",
  introduction: [
    "I build production AI systems and stay close to architecture, deployment, optimization, and the engineering tradeoffs that only show up under real constraints.",
    "Outside work, I build independent systems like Smriti, Sentinel OS, and PropOps to explore reasoning, agency, trust, and decision support in a more research-driven way.",
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
  "Intelligent systems",
  "Reasoning and state",
  "Agents and tool use",
  "Trust and verification",
  "Representation learning",
  "Decision support",
  "Real-world ML deployment",
  "Systems that remain legible under constraints",
] as const;

export const principles = [
  {
    title: "Stay close to first principles",
    description:
      "The work should still make sense after you strip away tooling, hype, and surface detail.",
  },
  {
    title: "Use implementation as a test",
    description:
      "Building is part of thinking. Implementation exposes weak assumptions faster than abstract discussion does.",
  },
  {
    title: "Prefer clarity over theatre",
    description:
      "I care more about what survives scrutiny, constraints, and deployment than what merely presents well in a demo.",
  },
] as const;
