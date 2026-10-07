"use client";

import { Cpu, Server, GitMerge, ShieldCheck, CheckCircle2, GraduationCap, MapPin, Calendar } from "lucide-react";
import { MotionReveal } from "./motion-wrapper";
import { education } from "@/data/education";

export function About() {
  const pillars = [
    {
      icon: GitMerge,
      title: "Automated CI/CD Delivery",
      description:
        "Building automated deployment pipelines with Jenkins and GitHub Actions, cutting manual deployment effort by approximately 60% with reproducible builds.",
      tag: "Jenkins & Actions",
    },
    {
      icon: Server,
      title: "Containerization & Orchestration",
      description:
        "Packaging multi-tier web applications with Docker and Docker Compose for consistent development and staging environment parity.",
      tag: "Docker & Compose",
    },
    {
      icon: ShieldCheck,
      title: "Cloud Infrastructure as Code",
      description:
        "Provisioning AWS cloud resources (EC2, VPC, IAM, S3) with Terraform, enforcing security policies, isolation, and repeatable declarative configurations.",
      tag: "AWS & Terraform",
    },
    {
      icon: Cpu,
      title: "Linux & Systems Administration",
      description:
        "Managing Ubuntu Linux server environments, crafting robust Bash automation scripts, and routing traffic with Nginx reverse proxy.",
      tag: "Linux & Bash",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative bg-[var(--bg-canvas)] border-t border-[var(--border-warm)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col items-start mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-bold uppercase tracking-widest text-[#0B9FA5] dark:text-[#14B8A6] mb-3 shadow-xs">
              <span>// 01. Professional Direction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#02365D] dark:text-[#38BDF8]">
              Engineering Reliable Systems From Code to Cloud
            </h2>
            <p className="mt-3 text-[#5C6470] dark:text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
              Bridging application development and production infrastructure through automation, containerization, and clean architectural practices.
            </p>
          </div>
        </MotionReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative & Academic Foundation Column */}
          <div className="lg:col-span-5 space-y-6">
            <MotionReveal delay={0.1}>
              <div className="card-premium p-6 sm:p-7 space-y-4">
                <h3 className="text-lg font-bold text-[#1C1E21] dark:text-[#F8FAFC] tracking-tight">
                  DevOps & Cloud Specialization
                </h3>
                <p className="text-sm text-[#5C6470] dark:text-[#94A3B8] leading-relaxed">
                  As a <strong className="text-[#1C1E21] dark:text-[#F8FAFC] font-semibold">DevOps Engineer</strong>, I focus on eliminating deployment friction and building automated, repeatable infrastructure.
                </p>
                <p className="text-sm text-[#5C6470] dark:text-[#94A3B8] leading-relaxed">
                  Through hands-on work in a structured professional IT environment at <strong className="text-[#02365D] dark:text-[#38BDF8]">CS Soft Solutions (Mohali, India)</strong>, I engineered automated CI/CD pipelines using Jenkins, GitHub Actions, Docker, and Linux, reducing manual deployment effort by approximately 60%.
                </p>
                <p className="text-sm text-[#5C6470] dark:text-[#94A3B8] leading-relaxed">
                  My technical focus centers on provisioning AWS resources with Terraform, containerizing multi-tier applications, writing robust Bash scripts, and configuring Nginx reverse proxies for dependable traffic routing.
                </p>
                <div className="pt-3 border-t border-[#EAE6DF] dark:border-[#1E283D] flex items-center justify-between text-xs font-mono text-[#5C6470] dark:text-[#94A3B8]">
                  <span>Work Location:</span>
                  <span className="font-semibold text-[#02365D] dark:text-[#38BDF8] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E77922] dark:text-[#F59E0B]" />
                    Mohali, India
                  </span>
                </div>
              </div>
            </MotionReveal>

            {/* Academic Foundation Card (MCA + BCA) */}
            <MotionReveal delay={0.15}>
              <div className="card-premium p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#EAE6DF] dark:border-[#1E283D]">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#02365D] dark:text-[#38BDF8]">
                    <GraduationCap className="w-4 h-4 text-[#0B9FA5] dark:text-[#14B8A6]" />
                    <span>Academic Foundation</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#5C6470] dark:text-[#94A3B8]">
                    Higher Education
                  </span>
                </div>

                <div className="space-y-4 pt-1">
                  {education.map((edu, idx) => (
                    <div
                      key={edu.id}
                      className={idx > 0 ? "pt-3.5 border-t border-[#EAE6DF]/60 dark:border-[#1E283D]/60" : ""}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-[#1C1E21] dark:text-[#F8FAFC] leading-snug">
                            {edu.degree}
                          </h4>
                          <p className="text-xs sm:text-sm font-semibold text-[#02365D] dark:text-[#38BDF8] mt-0.5">
                            {edu.institution}, {edu.location}
                          </p>
                        </div>
                        {edu.statusBadge && (
                          <span className="shrink-0 text-[10px] font-mono font-bold text-[#0B9FA5] dark:text-[#14B8A6] bg-[#0B9FA5]/10 dark:bg-[#14B8A6]/10 px-2 py-0.5 rounded-full border border-[#0B9FA5]/20 dark:border-[#14B8A6]/20">
                            {edu.statusBadge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#5C6470] dark:text-[#94A3B8] mt-1.5">
                        <Calendar className="w-3 h-3 text-[#E77922] dark:text-[#F59E0B]" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Pillars Cards Column */}
          <div className="lg:col-span-7">
            <MotionReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="card-premium p-5 sm:p-6 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] dark:bg-[#161F33] border border-[#EAE6DF] dark:border-[#1E283D] flex items-center justify-center text-[#02365D] dark:text-[#38BDF8] group-hover:bg-[#02365D] group-hover:text-white dark:group-hover:bg-[#38BDF8] dark:group-hover:text-[#090D16] transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono font-semibold text-[#5C6470] dark:text-[#94A3B8] bg-[#FAF8F5] dark:bg-[#161F33] px-2 py-0.5 rounded border border-[#EAE6DF] dark:border-[#1E283D]">
                            {pillar.tag}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#1C1E21] dark:text-[#F8FAFC] mb-2 tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5C6470] dark:text-[#94A3B8] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#EAE6DF] dark:border-[#1E283D] flex items-center gap-1.5 text-[11px] font-mono text-[#087D82] dark:text-[#14B8A6]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Hands-on Experience</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
