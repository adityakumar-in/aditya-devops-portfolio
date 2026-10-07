import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { DevOpsFlow } from "@/components/devops-flow";
import { Projects } from "@/components/projects";
import { GithubSection } from "@/components/github-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#f3f4f6] flex flex-col selection:bg-emerald-500/20 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Unique DevOps CI/CD Architecture Flow */}
        <DevOpsFlow />

        {/* Projects Section */}
        <Projects />

        {/* GitHub / Open Source Repositories */}
        <GithubSection />

        {/* Contact Closing Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
