export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  statusBadge?: string;
  cgpa?: string;
  highlights?: string[];
}

export const education: EducationItem[] = [
  {
    id: "mca-manipal",
    degree: "Master of Computer Applications (MCA)",
    institution: "Manipal University",
    location: "Jaipur, India",
    period: "2026 – 2028 (Expected)",
    statusBadge: "Expected 2026–2028",
    highlights: [
      "Advanced studies in software architecture, cloud distributed systems, and modern computing paradigms.",
    ],
  },
  {
    id: "bca-chitkara",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Chitkara University",
    location: "Punjab, India",
    period: "2023 – 2026",
    cgpa: "7.56",
    statusBadge: "CGPA: 7.56",
    highlights: [
      "Rigorous coursework in computer networking, operating systems, database management systems, and software engineering principles.",
      "Practical labs focusing on Linux administration, shell scripting, and distributed systems architecture.",
    ],
  },
];
