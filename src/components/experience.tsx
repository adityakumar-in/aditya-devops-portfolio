"use client";

import { experiences } from "@/data/experience";
import { Briefcase, Calendar, CheckCircle2, Terminal, TrendingUp } from "lucide-react";
import { MotionReveal } from "./motion-wrapper";

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 relative bg-[var(--bg-canvas)] border-t border-[var(--border-warm)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col items-start mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-bold uppercase tracking-widest text-[#0B9FA5] dark:text-[#14B8A6] mb-3 shadow-xs">
              <span>// 03. Professional History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#02365D] dark:text-[#38BDF8]">
              Work Experience & Impact
            </h2>
            <p className="mt-3 text-[#5C6470] dark:text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
              Hands-on contributions in a structured professional IT environment, managing automated CI/CD deployments and cloud infrastructure.
            </p>
          </div>
        </MotionReveal>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <MotionReveal key={exp.id} delay={0.1}>
              <div className="card-premium p-6 sm:p-8 relative">
                
                {/* Top Info Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#EAE6DF] dark:border-[#1E283D] pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] dark:text-[#F8FAFC] tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#02365D]/10 dark:bg-[#38BDF8]/10 text-[#02365D] dark:text-[#38BDF8] border border-[#02365D]/15 dark:border-[#38BDF8]/20">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-bold text-[#02365D] dark:text-[#38BDF8] mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#0B9FA5] dark:text-[#14B8A6]" />
                      <span>{exp.company}</span>
                      <span className="text-[#8C94A0] dark:text-[#64748B]">•</span>
                      <span className="text-sm font-normal text-[#5C6470] dark:text-[#94A3B8]">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                    <div className="flex items-center gap-1.5 bg-[#FAF8F5] dark:bg-[#121929] border border-[#EAE6DF] dark:border-[#1E283D] px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-[#1C1E21] dark:text-[#F8FAFC]">
                      <Calendar className="w-3.5 h-3.5 text-[#02365D] dark:text-[#38BDF8]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Key Highlight Banner (Metric from resume) */}
                <div className="my-6 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#121929] border border-[#EAE6DF] dark:border-[#1E283D] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0B9FA5]/15 dark:bg-[#14B8A6]/15 text-[#087D82] dark:text-[#14B8A6] flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#02365D] dark:text-[#38BDF8]">
                        Quantifiable Operational Impact
                      </div>
                      <div className="text-sm font-semibold text-[#1C1E21] dark:text-[#F8FAFC]">
                        Reduced manual deployment effort by approximately 60%
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#5C6470] dark:text-[#94A3B8] bg-white dark:bg-[#101624] px-2.5 py-1 rounded-lg border border-[#EAE6DF] dark:border-[#1E283D] self-start sm:self-auto">
                    CI/CD Automation
                  </span>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base text-[#5C6470] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Detailed Checklist from Resume */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#02365D] dark:text-[#38BDF8] mb-3 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#0B9FA5] dark:text-[#14B8A6]" />
                    Core Responsibilities & Workflow Execution
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#1C1E21] dark:text-[#F8FAFC] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#087D82] dark:text-[#14B8A6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Stack Chips */}
                <div className="mt-8 pt-6 border-t border-[#EAE6DF] dark:border-[#1E283D] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#5C6470] dark:text-[#94A3B8] mr-2">Environment:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] dark:bg-[#121929] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-mono font-medium text-[#1C1E21] dark:text-[#F8FAFC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
