"use client";

import { useState } from "react";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Layers, FolderGit2 } from "lucide-react";
import { MotionReveal } from "./motion-wrapper";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-3">
                <span>// 05. PROJECTS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Featured Infrastructure Projects
              </h2>
              <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Real-world systems, containerized deployments, and automated pipelines engineered with DevOps best practices.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    selectedCategory === cat
                      ? "bg-emerald-400 text-zinc-950 font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </MotionReveal>

        {/* Projects Grid */}
        <MotionReveal delay={0.15}>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-[#0b101b] border border-white/[0.08] text-zinc-400">
              <FolderGit2 className="w-8 h-8 text-zinc-500 mx-auto mb-3" />
              <p className="text-sm font-mono">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-3 text-xs font-mono text-emerald-400 hover:underline"
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
