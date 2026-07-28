type Period = {
  start: string;
  end?: string;
  label: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: Period;
  summary: string;
  highlights: string[];
};

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

export type PatentItem = {
  title: string;
  filing: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "KPIT Technologies",
    role: "Associate Technical Architect",
    location: "Bengaluru / Tokyo / Pune",
    period: {
      start: "2019-01-01",
      label: "2019 - Present",
    },
    summary:
      "Architects AI systems across automotive perception, in-cabin intelligence, model industrialization, and the platforms that carry them into production.",
    highlights: [
      "Leads technical direction from feasibility and architecture through C++ integration, optimization, and validation on target hardware.",
      "Defined a multi-model in-cabin system spanning whole-body pose, gaze, and temporal action and skeleton forecasting on NVIDIA Jetson.",
      "Developed reusable deployment patterns across NVIDIA DRIVE and Jetson, Qualcomm Snapdragon Ride, Ambarella, and Renesas platforms.",
      "Enabled deep-learning workloads on constrained automotive ECUs through runtime selection, custom operators, quantization, graph optimization, and Python-to-C++ redesign.",
      "Built perception middleware and vehicle interfaces across camera, LiDAR, radar, traffic-light recognition, tracking, and concurrent inference.",
      "Leads MLOps and DataOps architecture, and advises internal teams on agent use cases, evaluation, orchestration, tool integration, state and memory, and human approval.",
    ],
  },
  {
    company: "Independent / Freelance Work",
    role: "Software Engineer",
    location: "Bengaluru",
    period: {
      start: "2017-01-01",
      end: "2018-12-31",
      label: "2017 - 2018",
    },
    summary:
      "Built product-oriented ML and web systems before moving fully into production AI.",
    highlights: [
      "Developed a deep learning based neural style transfer system for mobile applications.",
      "Built a full-stack platform for healthcare billing workflows.",
    ],
  },
  {
    company: "Accenture",
    role: "Software Engineer",
    location: "Bengaluru",
    period: {
      start: "2014-01-01",
      end: "2017-12-31",
      label: "2014 - 2017",
    },
    summary:
      "Worked on backend and telecom platforms where automation, migration work, and production correctness mattered.",
    highlights: [
      "Built automated testing systems for telecom services.",
      "Contributed to rating, billing, and backend modernization work in production settings.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "University of Colorado Boulder",
    degree: "M.S. Computer Science",
    period: "In progress · GPA 4.0",
  },
  {
    institution: "IIIT Bangalore",
    degree: "Executive PG Programme in ML & AI",
    period: "",
  },
  {
    institution: "Nagpur University",
    degree: "B.E. Computer Engineering",
    period: "",
  },
] as const;

export const patents: PatentItem[] = [
  {
    title: "Mobile Device Performance Improvement System Using Cloud Computing",
    filing: "Indian patent application 1922/MUM/2013",
  },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "C++", "Rust", "C"],
  },
  {
    title: "ML / CV",
    items: [
      "PyTorch",
      "TensorFlow",
      "ONNX",
      "ONNX Runtime",
      "TensorRT",
      "OpenCV",
      "scikit-learn",
    ],
  },
  {
    title: "Deployment",
    items: [
      "Model optimization",
      "Quantization",
      "Distillation",
      "Graph optimization",
      "Inference profiling",
      "Embedded pipelines",
    ],
  },
  {
    title: "Domains",
    items: [
      "Perception systems",
      "Autonomous driving",
      "In-cabin sensing",
      "Driver monitoring",
      "Multi-modal pipelines",
      "Agent infrastructure",
      "Agent evaluation",
      "Technical architecture",
    ],
  },
] as const;
