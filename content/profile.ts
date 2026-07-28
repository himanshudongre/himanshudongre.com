export const profile = {
  name: "Himanshu Dongre",
  headline: "Applied AI systems, from perception to agent infrastructure.",
  subheadline:
    "Associate Technical Architect working across automotive perception, embedded deployment, and reliable agent systems.",
  introduction: [
    "I architect production AI systems across autonomous driving, in-cabin intelligence, and constrained embedded platforms, connecting model feasibility to runtime design and target-hardware validation.",
    "My independent work explores coordination, state, trust, and evidence-grounded decision support for agents through Smriti, Sentinel OS, and PropOps.",
  ],
  epigraph: "Ideas should survive code, data, and deployment.",
  email: "himanshudongre1991@gmail.com",
  location: "Pune, India",
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Himanshu Dongre under flowering branches.",
  },
  currentFocus: [
    "Multimodal perception and in-cabin intelligence under embedded constraints.",
    "Agent coordination, state, evaluation, and human approval.",
    "MLOps and DataOps architecture for repeatable experimentation and validation.",
  ],
  metrics: [
    { value: "12+ years", label: "building production software systems" },
    { value: "7+ years", label: "building and deploying AI systems" },
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
    title: "Perception and multimodal intelligence",
    description:
      "How models combine visual, temporal, and sensor evidence while meeting the constraints of deployed systems.",
  },
  {
    title: "Reasoning state and coordination",
    description:
      "How decisions, assumptions, and active work are represented, restored, and shared across agents.",
  },
  {
    title: "Evaluation and trust",
    description:
      "How agent systems expose evidence, policy, and execution history in forms people can inspect.",
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
