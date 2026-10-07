export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  badge?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "cs-soft-solutions",
    role: "DevOps Engineer Trainee",
    company: "CS Soft Solutions",
    location: "India",
    period: "January 2026 – June 2026",
    startDate: "Jan 2026",
    endDate: "Jun 2026",
    badge: "6 Months Hands-on",
    description:
      "Trained and worked on enterprise DevOps workflows, cloud infrastructure provisioning, and continuous integration/deployment automation.",
    achievements: [
      "Built automated CI/CD pipelines using Jenkins, GitHub Actions, Docker, Git, and Linux to streamline deployment cycles.",
      "Reduced manual deployment effort by approximately 60% through standardized automation scripts and pipeline triggers.",
      "Containerized applications using Docker and Docker Compose for consistent local development and staging parity.",
      "Provisioned and configured core AWS services including EC2 instances, IAM roles & policies, S3 buckets, and custom VPC networking.",
      "Performed Linux system administration, bash shell scripting, server optimization, and proactive infrastructure troubleshooting.",
      "Collaborated using structured Git-based workflows, branch protection policies, and DevOps best practices.",
    ],
    technologies: [
      "AWS (EC2, IAM, S3, VPC)",
      "Linux",
      "Docker",
      "Docker Compose",
      "Jenkins",
      "GitHub Actions",
      "Git",
      "Bash",
      "Terraform",
    ],
  },
];
