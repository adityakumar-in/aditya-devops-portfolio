# Aditya Kumar — DevOps Engineer Portfolio

A premium, modern personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion (Framer Motion)**. Designed with an authentic, restrained engineering aesthetic: dark theme, subtle telemetry interfaces, continuous delivery pipeline visualization, and centralized data scalability.

---

## ⚡ Quick Start

```bash
# Navigate to the project directory
cd devops-portfolio

# Install dependencies (if not already installed)
npm install

# Run the local development server (with Turbopack)
npm run dev

# Or build and start for production
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Architecture & Project Structure

```text
devops-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global layout with SEO, OpenGraph metadata & fonts
│   │   ├── page.tsx           # Assembles all portfolio sections
│   │   └── globals.css        # Theme variables, tech grid, vignette masks & a11y
│   ├── components/
│   │   ├── navbar.tsx         # Responsive navbar with mobile drawer & status pill
│   │   ├── hero.tsx           # Technical hero with telemetry HUD terminal
│   │   ├── about.tsx          # Engineering narrative & core architectural pillars
│   │   ├── experience.tsx     # Structured career timeline (CS Soft Solutions)
│   │   ├── skills.tsx         # Domain-categorized technical skills & tools
│   │   ├── devops-flow.tsx    # Interactive CI/CD Pipeline Architecture flow
│   │   ├── projects.tsx       # Dynamic project filter & grid
│   │   ├── project-card.tsx   # Premium project card with architecture highlights
│   │   ├── github-section.tsx # Authentic GitHub showcase & git CLI snippet
│   │   ├── contact.tsx        # Direct contact, copy-to-clipboard email & availability
│   │   ├── footer.tsx         # Clean minimal footer with social links & back-to-top
│   │   ├── icons.tsx          # Crisp SVG icon components (GitHub, LinkedIn)
│   │   └── motion-wrapper.tsx # Smooth viewport reveal wrappers with reduced-motion support
│   ├── data/
│   │   ├── projects.ts        # Centralized project data file (Easy to add new projects)
│   │   ├── skills.ts          # Centralized skills data file
│   │   └── experience.ts      # Centralized experience timeline data
│   └── lib/
│       └── utils.ts           # Class merger utility (clsx + tailwind-merge)
```

---

## 🚀 How to Add New Projects Easily

Adding new projects does **not** require editing any UI components. Simply add a new project object to the array in `src/data/projects.ts`:

```typescript
// src/data/projects.ts

export const projects: Project[] = [
  // Existing project...
  
  // Add your new project here:
  {
    id: "kubernetes-gitops-automation",
    title: "Production Kubernetes GitOps with ArgoCD & Terraform",
    description: "Automated Kubernetes cluster provisioning and continuous deployment.",
    technologies: ["Kubernetes", "ArgoCD", "Terraform", "AWS EKS", "Helm"],
    category: "DevOps", // "DevOps" | "Cloud" | "Infrastructure" | "Full Stack"
    featured: false,
    year: "2026",
    architectureHighlights: [
      "Declarative Kubernetes cluster provisioning with Terraform on AWS EKS",
      "GitOps continuous synchronization with ArgoCD and Helm chart templates",
      "Automated canary deployments and ingress traffic routing",
    ],
    // Optional links: If omitted, buttons are automatically and cleanly hidden
    github: "https://github.com/adityakumar-in/k8s-gitops",
    live: "https://demo.example.com",
  },
];
```

The UI will automatically render the new project card, apply category filters, and conditionally render the GitHub or Live Demo buttons only if URLs are provided.

---

## 🛠️ How to Update Skills

To add, edit, or categorize technical skills, update `src/data/skills.ts`. Each category contains a title, description, icon, and an array of skills with descriptive tags.

---

## 💼 How to Update Experience

To add internships or full-time roles, edit `src/data/experience.ts`. The timeline UI in `src/components/experience.tsx` automatically scales to display all items.

---

## 🎨 Design System & Highlights

- **Dark Mode Primary**: Deep space void (`#07090e`), subtle card surfaces (`#0b101b`), and controlled borders (`rgba(255, 255, 255, 0.08)`).
- **Subtle Technical Accent**: Refined emerald/cyan accents representing production health (200 OK, active nodes, 99.9% uptime).
- **Responsive Layout**: Precision-crafted for screen widths from 360px up to 1440px+. Touch targets >= 44px with zero horizontal viewport overflow.
- **Accessibility**: Semantic HTML5 landmarks, keyboard navigation `:focus-visible` outlines, and full support for `prefers-reduced-motion`.
- **Authentic Content**: 100% faithful to Aditya Kumar's actual resume data without fabricated claims or fake metrics.
