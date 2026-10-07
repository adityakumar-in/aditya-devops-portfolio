import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from "lucide-react";
import { MotionReveal } from "./motion-wrapper";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col items-start mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-3">
              <span>// 02. EXPERIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Work Experience & Track Record
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Hands-on technical contributions in production environments, automating deployment lifecycles and managing cloud infrastructure.
            </p>
          </div>
        </MotionReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <MotionReveal key={exp.id} delay={0.1}>
                <div className="relative md:pl-12 group">
                  {/* Timeline node icon */}
                  <div className="hidden md:flex absolute left-0 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b101b] border border-emerald-500/40 items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-4 h-4" />
                  </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101b] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
                  {/* Top Details Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/[0.06] pb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-base text-zinc-300 font-medium mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-400">
                      <div className="flex items-center gap-1.5 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <p className="mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements Checklist */}
                  <div className="mt-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      Key Responsibilities & Impact
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Chips */}
                  <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400 mr-2">Environment:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
}
