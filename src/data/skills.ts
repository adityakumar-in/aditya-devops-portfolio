export interface SkillItem {
  name: string;
  level?: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "devops-iac",
    title: "DevOps & Automation",
    description: "CI/CD pipelines, container orchestration, and infrastructure provisioning.",
    iconName: "Terminal",
    skills: [
      { name: "Docker", tag: "Containers" },
      { name: "Docker Compose", tag: "Orchestration" },
      { name: "Jenkins", tag: "CI/CD Automation" },
      { name: "GitHub Actions", tag: "Workflow Automation" },
      { name: "Terraform", tag: "IaC Provisioning" },
      { name: "Ansible", tag: "Configuration" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    description: "Architecting scalable and secure cloud environments on AWS.",
    iconName: "Cloud",
    skills: [
      { name: "AWS", tag: "Core Cloud" },
      { name: "Amazon EC2", tag: "Compute Instances" },
      { name: "AWS IAM", tag: "Security & Policies" },
      { name: "Amazon S3", tag: "Object Storage" },
      { name: "Amazon VPC", tag: "Networking & Subnets" },
    ],
  },
  {
    id: "systems-networking",
    title: "Systems & Web Servers",
    description: "Operating systems, reverse proxies, and database foundations.",
    iconName: "Cpu",
    skills: [
      { name: "Linux / Ubuntu", tag: "SysAdmin & Shell" },
      { name: "Windows Server", tag: "OS Management" },
      { name: "Nginx", tag: "Reverse Proxy & Web Server" },
      { name: "MySQL", tag: "Relational Database" },
    ],
  },
  {
    id: "vcs-scripting",
    title: "Scripting & Version Control",
    description: "Reliable automation scripts and collaborative Git workflows.",
    iconName: "GitBranch",
    skills: [
      { name: "Bash Scripting", tag: "Automation & Cron" },
      { name: "Git", tag: "Distributed VCS" },
      { name: "GitHub", tag: "Collaboration & Webhooks" },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Engineering Principles",
    description: "Foundational methodologies guiding reliable software delivery.",
    iconName: "Layers",
    skills: [
      { name: "CI/CD Pipeline Design", tag: "Automation" },
      { name: "Infrastructure as Code (IaC)", tag: "Declarative Infra" },
      { name: "Containerization", tag: "Reproducible Builds" },
      { name: "Cloud Architecture", tag: "Scalability" },
    ],
  },
];
