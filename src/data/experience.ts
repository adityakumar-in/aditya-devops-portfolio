export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  badge?: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "cs-soft-solutions",
    role: "DevOps Engineer Trainee",
    company: "CS Soft Solutions",
    location: "Mohali, India",
    period: "Jan 2026 – Jun 2026",
    startDate: "Jan 2026",
    endDate: "Jun 2026",
    badge: "6 Months Hands-On Trainee",
    summary:
      "Worked in a structured professional IT environment, following defined workflows and best practices for application deployment, CI/CD pipeline automation, and cloud infrastructure management.",
    achievements: [
      "Built automated CI/CD pipelines using Jenkins, GitHub Actions, Docker, Git, and Linux, reducing manual deployment effort by approximately 60%.",
      "Containerized applications using Docker and Docker Compose, enabling faster and more consistent development and testing environments.",
      "Provisioned and configured AWS services including EC2, IAM, S3, and VPC for application deployment.",
      "Performed Linux system administration, shell scripting, and troubleshooting to automate deployment tasks while maintaining consistency.",
      "Maintained technical documentation and followed Git-based workflows to ensure changes and operational activities were properly tracked.",
      "Collaborated with team members to resolve technical issues and complete operational tasks within established processes.",
    ],
    technologies: [
      "AWS (EC2, IAM, S3, VPC)",
      "Linux (Ubuntu)",
      "Docker",
      "Docker Compose",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "Ansible",
      "Git & GitHub",
      "Bash Scripting",
    ],
  },
];
