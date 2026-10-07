import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { DevOpsFlow } from "@/components/devops-flow";
import { Projects } from "@/components/projects";
import { GithubSection } from "@/components/github-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] dark:bg-[#090D16] text-[#1C1E21] dark:text-[#F8FAFC] flex flex-col transition-colors">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Identity & Console */}
        <Hero />

        {/* 2. Professional Direction & Education */}
        <About />

        {/* 3. Technical Capabilities & Tooling */}
        <Skills />

        {/* 4. Professional Experience & Impact */}
        <Experience />

        {/* 5. End-to-End DevOps Pipeline Architecture */}
        <DevOpsFlow />

        {/* 6. Production Deployments (Data-Driven & Scalable) */}
        <Projects />

        {/* 7. GitHub & Open Source Configurations */}
        <GithubSection />

        {/* 8. Contact CTA & Availability */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
