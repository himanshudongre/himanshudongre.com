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
  note?: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "KPIT Technologies",
    role: "Sr. Tech Lead, AI/ML Autonomous Systems",
    location: "Bengaluru / Tokyo / Pune",
    period: {
      start: "2019-01-01",
      label: "2019 - Present",
    },
    summary:
      "Led AI/ML systems work across perception, in-cabin sensing, and deployment while staying hands-on with architecture, optimization, middleware, and delivery.",
    highlights: [
      "Led teams of 14-20 engineers across perception and in-cabin AI programs, covering architecture, execution planning, technical reviews, and delivery.",
      "Built multi-model, multi-sensor systems spanning camera, LiDAR, radar, pose, gaze, and anticipation components.",
      "Optimized and deployed models on constrained platforms using ONNX, TensorRT, quantization, distillation, graph optimization, and inference acceleration.",
      "Designed middleware for concurrent perception workloads and tuned a custom CenterNet pipeline to 33 FPS on full-resolution input.",
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
    period: "2024 - Present",
    note: "GPA: 4.0",
  },
  {
    institution: "IIIT Bangalore",
    degree: "Executive PG Programme in ML & AI",
    period: "2022 - 2023",
    note: "CGPA: 3.66 / 4.0",
  },
  {
    institution: "Nagpur University",
    degree: "B.E. Computer Engineering",
    period: "2013",
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
      "Technical leadership",
    ],
  },
] as const;
