/**
 * Reusable Project Data Model
 * 
 * To add a new project in the future:
 * Simply add a new object to the `projects` array below matching the `Project` interface.
 * The UI components automatically render and adapt to any number of projects.
 */

export interface ArchitectureLayer {
  tier: string;
  technology: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "DevOps" | "Cloud" | "Automation" | "Full Stack" | "Infrastructure";
  github?: string;
  live?: string;
  featured?: boolean;
  year?: string;
  architectureHighlights?: string[];
  architectureLayers?: ArchitectureLayer[];
  metrics?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "three-tier-web-app-devops",
    title: "Three-Tier Web Application Deployment with DevOps Automation",
    description:
      "A containerized three-tier web application deployed on AWS EC2 with end-to-end automated CI/CD using Jenkins, Docker, and GitHub.",
    technologies: [
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "Jenkins",
      "Terraform",
      "Nginx",
      "Linux (Ubuntu)",
      "React",
      "Node.js",
      "MySQL",
      "Git",
      "GitHub",
    ],
    category: "DevOps",
    featured: true,
    year: "2026",
    role: "DevOps Engineer",
    metrics: "Automated Build & Deploy Pipeline",
    architectureLayers: [
      {
        tier: "Presentation Tier",
        technology: "React & Nginx",
        description: "Responsive client UI served through Nginx reverse proxy with SSL termination and optimized static routing.",
      },
      {
        tier: "Application Tier",
        technology: "Node.js & Docker",
        description: "Containerized REST API services running within isolated Docker networks on an AWS EC2 instance.",
      },
      {
        tier: "Database Tier",
        technology: "MySQL & Persistent Volumes",
        description: "Relational database service orchestrated with Docker Compose using durable volumes and scheduled backups.",
      },
      {
        tier: "DevOps & Automation Layer",
        technology: "Jenkins + Terraform + GitHub",
        description: "Automated CI/CD build & deployment triggered on GitHub push, with AWS cloud infrastructure provisioned via Terraform.",
      },
    ],
    architectureHighlights: [
      "Developed and deployed a containerized three-tier web application using React, Node.js, and MySQL on AWS EC2.",
      "Automated application build and deployment through Jenkins CI/CD pipelines integrated with GitHub.",
      "Containerized frontend, backend, and database services using Docker and Docker Compose for consistent development and staging parity.",
      "Provisioned AWS infrastructure using Terraform and maintained declarative, reproducible configurations.",
      "Configured Nginx as a reverse proxy to route traffic seamlessly across multi-container services.",
      "Implemented Git-based version control, branch hygiene, and DevOps best practices.",
    ],
    // When a public GitHub repository link is available, set it here (e.g., "https://github.com/adityakumar-in/three-tier-devops")
    github: "https://github.com/adityakumar-in",
  },
];

export const projectCategories = [
  "All",
  "DevOps",
  "Cloud",
  "Automation",
  "Infrastructure",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
