export interface SkillItem {
  name: string;
  tag?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconName: "Cloud" | "Terminal" | "GitBranch" | "Cpu" | "Server" | "Database" | "Layers";
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    badge: "AWS",
    description: "Cloud compute, identity access management, scalable storage, and virtual networking.",
    iconName: "Cloud",
    skills: [
      { name: "AWS", tag: "Primary Cloud" },
      { name: "Amazon EC2", tag: "Compute Instances" },
      { name: "AWS IAM", tag: "Identity & Security Policies" },
      { name: "Amazon S3", tag: "Object Storage" },
      { name: "Amazon VPC", tag: "Networking & Subnets" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Automation",
    badge: "CI/CD & Containers",
    description: "Continuous integration, containerized deployments, and infrastructure as code orchestration.",
    iconName: "Terminal",
    skills: [
      { name: "Docker", tag: "Containerization" },
      { name: "Docker Compose", tag: "Multi-Container" },
      { name: "Jenkins", tag: "CI/CD Pipelines" },
      { name: "GitHub Actions", tag: "Workflow Automation" },
      { name: "Terraform", tag: "Infrastructure as Code" },
      { name: "Ansible", tag: "Config Management" },
    ],
  },
  {
    id: "vcs-scripting",
    title: "Version Control & Scripting",
    badge: "Git & Shell",
    description: "Distributed code collaboration, commit history governance, and automated shell workflows.",
    iconName: "GitBranch",
    skills: [
      { name: "Git", tag: "Distributed VCS" },
      { name: "GitHub", tag: "Code Hosting & Webhooks" },
      { name: "Bash", tag: "Shell Automation Scripting" },
    ],
  },
  {
    id: "systems-web",
    title: "Operating Systems & Web Servers",
    badge: "Linux & Nginx",
    description: "Production Linux environment administration, reverse proxies, and database foundations.",
    iconName: "Cpu",
    skills: [
      { name: "Linux (Ubuntu)", tag: "Server Administration" },
      { name: "Windows", tag: "Operating System" },
      { name: "Nginx", tag: "Reverse Proxy & Web Server" },
      { name: "MySQL", tag: "Relational Database" },
    ],
  },
  {
    id: "concepts",
    title: "Core Methodologies",
    badge: "Engineering Principles",
    description: "Foundational software delivery and system reliability principles.",
    iconName: "Layers",
    skills: [
      { name: "CI/CD Automation", tag: "Continuous Delivery" },
      { name: "Infrastructure as Code (IaC)", tag: "Declarative Infra" },
      { name: "Containerization", tag: "Environment Parity" },
      { name: "Cloud Infrastructure", tag: "Scalability & Resilience" },
    ],
  },
];
