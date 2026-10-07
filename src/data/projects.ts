export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "DevOps" | "Cloud" | "Infrastructure" | "Full Stack";
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  year?: string;
  architectureHighlights: string[];
}

export const projects: Project[] = [
  {
    id: "three-tier-devops-automation",
    title: "Three-Tier Web Application Deployment with DevOps Automation",
    description:
      "A containerized three-tier web application deployed on AWS EC2 with automated CI/CD using Jenkins and GitHub.",
    technologies: [
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "Jenkins",
      "Terraform",
      "Nginx",
      "Linux",
      "React",
      "Node.js",
      "MySQL",
      "GitHub",
    ],
    category: "DevOps",
    featured: true,
    year: "2026",
    architectureHighlights: [
      "Containerized frontend (React), backend (Node.js), and database (MySQL) using multi-stage Docker builds",
      "Automated CI/CD deployment pipeline orchestrated with Jenkins and GitHub webhook triggers",
      "Declarative cloud infrastructure provisioning on AWS EC2 using Terraform",
      "Nginx reverse proxy configured for request routing, SSL termination, and static asset handling",
      "Isolated multi-container service networking managed with Docker Compose on Ubuntu Linux",
      "Zero-downtime rolling restart workflow with container health verification",
    ],
    // Only real links should be shown; since none were provided, github and live are omitted so buttons are cleanly hidden.
  },
];

export const projectCategories = [
  "All",
  "DevOps",
  "Cloud",
  "Infrastructure",
  "Full Stack",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
