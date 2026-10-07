"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import {
  ExternalLink,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  Box,
  Terminal,
  ArrowUpRight,
  Database,
  Cloud,
  Workflow,
} from "lucide-react";
import { GithubIcon } from "./icons";

interface ProjectCardProps {
  project: Project;
  projectIndex?: number;
}

export function ProjectCard({ project, projectIndex = 1 }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"architecture" | "highlights" | "stack">(
    "architecture"
  );

  return (
    <div className="card-premium p-6 sm:p-9 shadow-md flex flex-col justify-between group">
      
      {/* Header Info */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#02365D] dark:bg-[#38BDF8] text-white dark:text-[#090D16] flex items-center justify-center font-mono font-bold text-xs">
              {projectIndex < 10 ? `0${projectIndex}` : projectIndex}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#02365D]/10 dark:bg-[#38BDF8]/10 text-[#02365D] dark:text-[#38BDF8] border border-[#02365D]/15 dark:border-[#38BDF8]/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#0B9FA5]/10 dark:bg-[#14B8A6]/10 text-[#087D82] dark:text-[#14B8A6] border border-[#0B9FA5]/20 dark:border-[#14B8A6]/20">
                Featured Architecture
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#5C6470] dark:text-[#94A3B8]">
            {project.year && (
              <span className="bg-[#FAF8F5] dark:bg-[#121929] px-2.5 py-1 rounded-md border border-[#EAE6DF] dark:border-[#1E283D]">
                Year: {project.year}
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] dark:text-[#F8FAFC] tracking-tight group-hover:text-[#02365D] dark:group-hover:text-[#38BDF8] transition-colors leading-tight">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="mt-3 text-sm sm:text-base text-[#5C6470] dark:text-[#94A3B8] leading-relaxed">
          {project.description}
        </p>

        {/* Interactive View Navigation Tabs */}
        <div className="mt-6 flex items-center gap-2 border-b border-[#EAE6DF] dark:border-[#1E283D] pb-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === "architecture"
                ? "border-[#02365D] text-[#02365D] dark:border-[#38BDF8] dark:text-[#38BDF8]"
                : "border-transparent text-[#5C6470] dark:text-[#94A3B8] hover:text-[#1C1E21] dark:hover:text-[#F8FAFC]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Multi-Tier Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab("highlights")}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === "highlights"
                ? "border-[#02365D] text-[#02365D] dark:border-[#38BDF8] dark:text-[#38BDF8]"
                : "border-transparent text-[#5C6470] dark:text-[#94A3B8] hover:text-[#1C1E21] dark:hover:text-[#F8FAFC]"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Implementation Highlights</span>
          </button>
          <button
            onClick={() => setActiveTab("stack")}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === "stack"
                ? "border-[#02365D] text-[#02365D] dark:border-[#38BDF8] dark:text-[#38BDF8]"
                : "border-transparent text-[#5C6470] dark:text-[#94A3B8] hover:text-[#1C1E21] dark:hover:text-[#F8FAFC]"
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Full Tech Stack</span>
          </button>
        </div>

        {/* Tab Panes */}
        <div className="py-5">
          {/* Tab 1: Architecture Layers */}
          {activeTab === "architecture" && project.architectureLayers && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {project.architectureLayers.map((layer) => (
                <div
                  key={layer.tier}
                  className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#121929] border border-[#EAE6DF] dark:border-[#1E283D] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold text-[#02365D] dark:text-[#38BDF8]">
                        {layer.tier}
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-[#0B9FA5] dark:text-[#14B8A6] bg-white dark:bg-[#101624] px-2 py-0.5 rounded border border-[#EAE6DF] dark:border-[#1E283D]">
                        {layer.technology}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C6470] dark:text-[#94A3B8] leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Implementation Highlights from Resume */}
          {activeTab === "highlights" && project.architectureHighlights && (
            <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#121929] border border-[#EAE6DF] dark:border-[#1E283D] space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#02365D] dark:text-[#38BDF8] flex items-center gap-1.5 pb-2 border-b border-[#EAE6DF] dark:border-[#1E283D]">
                <Terminal className="w-4 h-4 text-[#0B9FA5] dark:text-[#14B8A6]" />
                Resume Verified Technical Deliverables
              </div>
              <ul className="space-y-2">
                {project.architectureHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C1E21] dark:text-[#F8FAFC] leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#087D82] dark:text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tab 3: Technologies Grid */}
          {activeTab === "stack" && (
            <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#121929] border border-[#EAE6DF] dark:border-[#1E283D]">
              <div className="text-xs font-mono font-bold text-[#02365D] dark:text-[#38BDF8] mb-3">
                Technologies & Tools Employed:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-mono font-medium text-[#1C1E21] dark:text-[#F8FAFC] shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Footer / Links */}
      <div className="pt-5 border-t border-[#EAE6DF] dark:border-[#1E283D] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#5C6470] dark:text-[#94A3B8]">
          <span className="w-2 h-2 rounded-full bg-[#0B9FA5] dark:bg-[#14B8A6]" />
          <span>AWS EC2 • Docker • Jenkins • Terraform</span>
        </div>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1E21] dark:text-[#F8FAFC] hover:text-[#02365D] dark:hover:text-[#38BDF8] bg-white dark:bg-[#101624] hover:bg-[#FAF8F5] dark:hover:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] hover:border-[#D8D2C7] dark:hover:border-[#334155] px-4 py-2 rounded-xl transition-all shadow-xs min-h-[38px]"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#5C6470] dark:text-[#94A3B8]" />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#02365D] hover:bg-[#01243E] dark:bg-[#38BDF8] dark:text-[#090D16] dark:hover:bg-[#7DD3FC] px-4 py-2 rounded-xl transition-all shadow-xs min-h-[38px]"
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Deployment</span>
            </a>
          )}

          {!project.live && (
            <span className="text-[11px] font-mono text-[#087D82] dark:text-[#14B8A6] bg-[#0B9FA5]/10 dark:bg-[#14B8A6]/10 px-2.5 py-1 rounded-md border border-[#0B9FA5]/20 dark:border-[#14B8A6]/20">
              Verified Production Stack
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
