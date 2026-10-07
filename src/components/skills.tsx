"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import {
  Terminal,
  Cloud,
  Cpu,
  GitBranch,
  Layers,
  CheckCircle2,
  Server,
} from "lucide-react";
import { MotionReveal } from "./motion-wrapper";

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cloud":
        return <Cloud className="w-5 h-5 text-[#02365D] dark:text-[#38BDF8]" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-[#0B9FA5] dark:text-[#14B8A6]" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-[#E77922] dark:text-[#F59E0B]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#02365D] dark:text-[#38BDF8]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#0B9FA5] dark:text-[#14B8A6]" />;
      default:
        return <Server className="w-5 h-5 text-[#5C6470] dark:text-[#94A3B8]" />;
    }
  };

  const filteredCategories =
    selectedFilter === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedFilter);

  return (
    <section id="skills" className="py-12 md:py-16 relative bg-[var(--bg-canvas)] border-t border-[var(--border-warm)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-bold uppercase tracking-widest text-[#0B9FA5] dark:text-[#14B8A6] mb-3 shadow-xs">
                <span>// 02. Technical Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#02365D] dark:text-[#38BDF8]">
                Technical Tooling & Methodologies
              </h2>
              <p className="mt-3 text-[#5C6470] dark:text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
                Core technologies, automation platforms, and systems management tools proven in real DevOps workflows.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] shadow-xs">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === "all"
                    ? "bg-[#02365D] text-white dark:bg-[#38BDF8] dark:text-[#090D16] shadow-xs"
                    : "text-[#5C6470] dark:text-[#94A3B8] hover:text-[#1C1E21] dark:hover:text-[#F8FAFC]"
                }`}
              >
                All Domains
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedFilter === cat.id
                      ? "bg-[#02365D] text-white dark:bg-[#38BDF8] dark:text-[#090D16] shadow-xs"
                      : "text-[#5C6470] dark:text-[#94A3B8] hover:text-[#1C1E21] dark:hover:text-[#F8FAFC]"
                  }`}
                >
                  {cat.badge}
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
                className="card-premium p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] dark:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(category.iconName)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#02365D] dark:text-[#38BDF8] bg-[#02365D]/5 dark:bg-[#38BDF8]/10 px-2.5 py-1 rounded-md border border-[#02365D]/10 dark:border-[#38BDF8]/20">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1E21] dark:text-[#F8FAFC] tracking-tight mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#5C6470] dark:text-[#94A3B8] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#121929] border border-[#EAE6DF] dark:border-[#1E283D] hover:border-[#D8D2C7] dark:hover:border-[#334155] transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0B9FA5] dark:bg-[#14B8A6]" />
                          <span className="text-xs sm:text-sm font-semibold text-[#1C1E21] dark:text-[#F8FAFC]">
                            {skill.name}
                          </span>
                        </div>
                        {skill.tag && (
                          <span className="text-[10px] font-mono font-medium text-[#5C6470] dark:text-[#94A3B8] bg-white dark:bg-[#101624] px-2 py-0.5 rounded border border-[#EAE6DF] dark:border-[#1E283D]">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-6 pt-4 border-t border-[#EAE6DF] dark:border-[#1E283D] flex items-center justify-between text-[11px] font-mono text-[#5C6470] dark:text-[#94A3B8]">
                  <span className="flex items-center gap-1.5 text-[#087D82] dark:text-[#14B8A6]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified in Production
                  </span>
                  <span>{category.skills.length} items</span>
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
