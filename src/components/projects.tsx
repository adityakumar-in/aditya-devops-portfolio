"use client";

import { useState } from "react";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { FolderGit2 } from "lucide-react";
import { MotionReveal } from "./motion-wrapper";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-12 md:py-16 relative bg-[var(--bg-canvas)] border-t border-[var(--border-warm)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-bold uppercase tracking-widest text-[#0B9FA5] dark:text-[#14B8A6] mb-3 shadow-xs">
                <span>// 05. Production Deployments</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#02365D] dark:text-[#38BDF8]">
                Featured DevOps Deployments
              </h2>
              <p className="mt-3 text-[#5C6470] dark:text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
                Production-grade multi-tier web applications, automated CI/CD pipelines, and cloud environments engineered using DevOps best practices.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] shadow-xs">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] dark:focus-visible:ring-[#38BDF8] ${
                    selectedCategory === cat
                      ? "bg-[#02365D] text-white dark:bg-[#38BDF8] dark:text-[#090D16] shadow-xs"
                      : "text-[#5C6470] dark:text-[#94A3B8] hover:text-[#1C1E21] dark:hover:text-[#F8FAFC]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </MotionReveal>

        {/* Projects Render Container (Data-Driven & Scalable) */}
        <MotionReveal delay={0.15}>
          {filteredProjects.length > 0 ? (
            <div className="space-y-10">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  projectIndex={index + 1}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-[#5C6470] dark:text-[#94A3B8]">
              <FolderGit2 className="w-8 h-8 text-[#8C94A0] dark:text-[#64748B] mx-auto mb-3" />
              <p className="text-sm font-mono">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-3 text-xs font-mono font-semibold text-[#02365D] dark:text-[#38BDF8] hover:underline cursor-pointer"
              >
                Reset filter
              </button>
            </div>
          )}
        </MotionReveal>

      </div>
    </section>
  );
}
