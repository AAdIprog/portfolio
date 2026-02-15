// Portfolio Content Configuration
// Update this file with your personal information

export const personalInfo = {
  name: "Aadi Shah",
  title: "UI/UX & Web3 Developer",
  tagline: "Building beautiful interfaces & decentralized systems",
  bio: "I'm a UI/UX and Web3 developer with a passion for creating intuitive, beautiful user experiences and decentralized applications. I specialize in React, TypeScript, and blockchain technologies. When I'm not crafting interfaces, I contribute to open source projects in the cloud-native and Kubernetes ecosystem, focusing on improving developer tools and testing infrastructure.",
  email: "aadishah132@gmail.com",
  resume: "/resume.pdf", // Place your resume.pdf in the public folder
  social: {
    github: "https://github.com/AAdIprog",
    linkedin: "https://www.linkedin.com/in/aadishah-",
    phone: "+91 8779786640",
  }
};

export const stats = {
  prsmerged: "12+", // Keeping as is or should I update this too? User only mentioned issues and repos. I'll leave it unless asked.
  issuesResolved: "15+",
  repositories: "25+",
};

export const skills = {
  frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Framer Motion",
  ],
  design: [
    "UI/UX Design",
    "Figma",
    "Design Systems",
    "Responsive Design",
    "Accessibility",
  ],
  web3: [
    "Solidity",
    "Ethers.js",
    "Web3.js",
    "Smart Contracts",
    "Hardhat",
  ],
  backend: [
    "Kubernetes",
    "Go",
    "Node.js",
    "REST APIs",
  ],
  tools: [
    "Git",
    "Docker",
    "CI/CD",
    "Testing (E2E, Unit)",
    "Webpack/Vite",
  ],
};

export const openSourceProjects = [
  {
    id: "volcano",
    name: "Volcano",
    repo: "volcano-sh/volcano",
    url: "https://github.com/volcano-sh/volcano",
    prLink: "https://github.com/volcano-sh/kthena/pull/695",
    description: "Kubernetes-native batch scheduling system for high-performance workload orchestration",
    contribution: "Comprehensive End-to-End Test Suites",
    details: [
      "Wrote extensive E2E test suites to ensure system reliability",
      "Improved test coverage for critical batch scheduling workflows",
      "Enhanced CI/CD pipeline stability",
    ],
    technologies: ["Go", "Kubernetes", "Testing Frameworks"],
    category: "Cloud Native Infrastructure",
  },
  {
    id: "opencost",
    name: "OpenCost",
    repo: "opencost/opencost",
    url: "https://github.com/opencost/opencost",
    prLink: "https://github.com/opencost/opencost-ui/pull/188",
    description: "Kubernetes cost monitoring and management tool for cloud cost optimization",
    contribution: "Complete UI/UX Redesign",
    details: [
      "Redesigned entire dashboard using IBM Carbon Design System",
      "Improved data visualization and user experience",
      "Enhanced accessibility and responsive design",
      "Implemented new Assets page with advanced filtering",
    ],
    technologies: ["React", "CSS", "Carbon Design", "Data Visualization"],
    category: "Cloud Native Infrastructure",
  },
  {
    id: "openkruise",
    name: "OpenKruise",
    repo: "openkruise/kruise",
    url: "https://github.com/openkruise/kruise",
    prLink: "https://github.com/openkruise/kruise/pull/2302",
    description: "Automating application management on Kubernetes",
    contribution: "API Version Promotion",
    details: [
      "Promoted API version to v1beta1 to enhance stability",
      "Refactored core controller logic for better performance",
      "Ensured backward compatibility during API upgrade",
    ],
    technologies: ["Go", "Kubernetes", "CRDs"],
    category: "Cloud Native Infrastructure",
  },
  {
    id: "kmesh",
    name: "Kmesh",
    repo: "kmesh-net/kmesh",
    url: "https://github.com/kmesh-net/kmesh",
    prLink: "https://github.com/kmesh-net/kmesh/pull/1566",
    description: "High-performance kernel-native service mesh",
    contribution: "Core Functionality Enhancements",
    details: [
      "Implemented key networking features for service mesh",
      "Optimized data plane performance using eBPF",
      "Enhanced observability and telemetry collection",
    ],
    technologies: ["Go", "eBPF", "Networking"],
    category: "Cloud Native Infrastructure",
  },
];

export const personalProjects = [
  {
    id: "bitcoin-explorer",
    name: "Bitcoin Block Explorer",
    url: "https://bitcoin-block-explorer.vercel.app/",
    github: "https://github.com/AAdIprog/bitcoin-block-explorer",
    description: "Real-time blockchain explorer displaying live Bitcoin transactions, blocks, and network statistics",
    features: [
      "Live transaction monitoring with real-time updates",
      "Block explorer with detailed transaction data",
      "Network statistics and mempool visualization",
      "Responsive design with smooth animations",
    ],
    technologies: ["React", "Web3", "Real-time APIs", "Data Visualization"],
    image: "/bitcoin-explorer-preview.png", // TODO: Add screenshot to public folder
  },
];

export const timeline = [
  {
    year: "2024-Present",
    title: "Web3 & Open Source Contributor",
    description: "Building decentralized applications and contributing to cloud-native projects like Volcano and OpenCost",
  },
  {
    year: "2023-2024",
    title: "UI/UX Developer",
    description: "Building modern web applications with React, TypeScript, and Web3 integration",
  },
  {
    year: "2023",
    title: "Started Open Source & Web3 Journey",
    description: "First contributions to Kubernetes ecosystem and exploring blockchain protocols",
  },
];
