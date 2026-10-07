"use client";

import { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import {
  Terminal,
  Cloud,
  Cpu,
  GitBranch,
  Layers,
  CheckCircle2,
  Server,
  Database,
  Filter,
} from "lucide-react";
import { MotionReveal } from "./motion-wrapper";

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const getIcon = (name: string) => {
    switch (name) {
      case "Terminal":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-purple-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-emerald-400" />;
      default:
        return <Server className="w-5 h-5 text-zinc-400" />;
    }
  };

  const filteredCategories =
    selectedFilter === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedFilter);

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-3">
                <span>// 03. SKILLS & TOOLING</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Technical Arsenal & Tooling
              </h2>
              <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Curated stack of cloud primitives, automation platforms, container runtimes, and engineering fundamentals.
              </p>
            </div>

            {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedFilter === "all"
                  ? "bg-emerald-400 text-zinc-950 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedFilter === cat.id
                    ? "bg-emerald-400 text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
        </MotionReveal>

        {/* Skills Cards Grid */}
        <MotionReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-[#0b101b] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(category.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]">
                    {category.skills.length} skills
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List with Tags */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-200">
                          {skill.name}
                        </span>
                      </div>
                      {skill.tag && (
                        <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer status */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Production Ready
                </span>
                <span className="text-zinc-400">Active</span>
              </div>
            </div>
          ))}
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
