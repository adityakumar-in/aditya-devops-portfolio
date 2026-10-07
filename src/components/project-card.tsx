import { Project } from "@/data/projects";
import {
  ExternalLink,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  Box,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "./icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-[#0b101b] border border-white/[0.08] hover:border-emerald-500/35 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between">
      
      {/* Top Banner / Technical Console Header */}
      <div className="p-6 sm:p-7">
        
        {/* Meta Bar */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Featured Architecture
              </span>
            )}
          </div>
          {project.year && (
            <span className="text-xs font-mono text-zinc-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
              {project.year}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
          {project.description}
        </p>

        {/* Architecture Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mt-5 p-4 rounded-xl bg-[#07090e] border border-white/[0.06] space-y-2.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              Infrastructure & Automation Highlights
            </div>
            <ul className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mt-6 flex flex-wrap items-center gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-300 group-hover:border-white/[0.12] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Links */}
      <div className="px-6 py-4 bg-[#080d16] border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>AWS EC2 + Docker</span>
        </div>

        <div className="flex items-center gap-3">
          {/* GitHub Link: Only shown if provided */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] px-3 py-1.5 rounded-lg transition-colors min-h-[36px]"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}

          {/* Live Link: Only shown if provided */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 px-3 py-1.5 rounded-lg transition-colors min-h-[36px]"
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}

          {/* When no external URLs are provided, display verified badge */}
          {!project.github && !project.live && (
            <span className="text-[11px] font-mono text-zinc-400">
              Verified Architecture
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
