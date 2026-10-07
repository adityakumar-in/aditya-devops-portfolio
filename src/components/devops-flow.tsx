"use client";

import { useState } from "react";
import {
  Code2,
  GitPullRequest,
  Workflow,
  Box,
  Binary,
  Cloud,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Activity,
} from "lucide-react";
import { MotionReveal } from "./motion-wrapper";

interface PipelineStep {
  id: string;
  stepNumber: string;
  label: string;
  sublabel: string;
  tool: string;
  icon: typeof Code2;
  command: string;
  details: string[];
}

const pipelineSteps: PipelineStep[] = [
  {
    id: "code",
    stepNumber: "01",
    label: "Code & Version Control",
    sublabel: "Local Development",
    tool: "Git",
    icon: Code2,
    command: "git commit -m 'feat: automate application deployment' && git push",
    details: [
      "Modular full-stack codebase following Git best practices",
      "Branch-level isolation and disciplined commit documentation",
      "Local container verification before remote push",
    ],
  },
  {
    id: "github",
    stepNumber: "02",
    label: "Repository & Webhook",
    sublabel: "Event Dispatch",
    tool: "GitHub",
    icon: GitPullRequest,
    command: "POST /webhook payload -> Jenkins CI server triggered",
    details: [
      "GitHub repository hosting with branch protection rules",
      "Automated payload delivery to Jenkins CI runner upon commit",
      "Pull request reviews and change tracking",
    ],
  },
  {
    id: "cicd",
    stepNumber: "03",
    label: "Continuous Integration",
    sublabel: "Automated Build & Test",
    tool: "Jenkins / Actions",
    icon: Workflow,
    command: "jenkins-agent: executing automated pipeline stages",
    details: [
      "Automated build and test pipeline orchestration",
      "Drastic reduction in manual overhead (~60% effort saved)",
      "Automated health and build failure notifications",
    ],
  },
  {
    id: "docker",
    stepNumber: "04",
    label: "Container Packaging",
    sublabel: "Image Orchestration",
    tool: "Docker / Compose",
    icon: Box,
    command: "docker compose build && docker compose up -d",
    details: [
      "Containerizing frontend (React), backend (Node.js), and database (MySQL)",
      "Consistent environments across local machine and AWS cloud",
      "Isolated container bridge network for secure inter-service communication",
    ],
  },
  {
    id: "iac",
    stepNumber: "05",
    label: "Infrastructure as Code",
    sublabel: "Declarative Cloud",
    tool: "Terraform",
    icon: Binary,
    command: "terraform apply -auto-approve",
    details: [
      "Declarative provisioning of AWS cloud infrastructure",
      "Reproducible, version-controlled infrastructure state",
      "Automated configuration of security groups and compute resources",
    ],
  },
  {
    id: "aws",
    stepNumber: "06",
    label: "Cloud Compute & VPC",
    sublabel: "Production Hosting",
    tool: "AWS (EC2, VPC)",
    icon: Cloud,
    command: "aws ec2 describe-instances --filters 'Name=instance-state-name,Values=running'",
    details: [
      "Hosting containerized stack on reliable AWS EC2 instances",
      "Configured VPC subnets, route tables, and security groups",
      "IAM least-privilege role policies and secure key management",
    ],
  },
  {
    id: "deploy",
    stepNumber: "07",
    label: "Traffic Routing & Nginx",
    sublabel: "Reverse Proxy",
    tool: "Nginx / Linux",
    icon: Rocket,
    command: "nginx -t && systemctl reload nginx [200 OK]",
    details: [
      "Nginx configured as reverse proxy routing requests across containers",
      "SSL termination and optimized static asset delivery",
      "Zero-downtime rolling service reload and health verification",
    ],
  },
];

export function DevOpsFlow() {
  const [activeStepId, setActiveStepId] = useState<string>("cicd");
  const activeStep =
    pipelineSteps.find((s) => s.id === activeStepId) || pipelineSteps[2];

  return (
    <section id="pipeline" className="py-12 md:py-16 relative bg-[var(--bg-canvas)] border-t border-[var(--border-warm)] transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col items-start mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#101624] border border-[#EAE6DF] dark:border-[#1E283D] text-xs font-bold uppercase tracking-widest text-[#0B9FA5] dark:text-[#14B8A6] mb-3 shadow-xs">
              <span>// 04. Pipeline Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#02365D] dark:text-[#38BDF8]">
              End-to-End DevOps Delivery Flow
            </h2>
            <p className="mt-3 text-[#5C6470] dark:text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
              From local commit to production traffic: an automated, repeatable lifecycle designed to eliminate manual toil and guarantee high reliability.
            </p>
          </div>
        </MotionReveal>

        {/* Interactive Steps Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {pipelineSteps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[96px] group relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] dark:focus-visible:ring-[#38BDF8] ${
                  isActive
                    ? "bg-[#02365D] border-[#02365D] dark:bg-[#0369A1] dark:border-[#38BDF8] text-white shadow-md -translate-y-1"
                    : "bg-white dark:bg-[#101624] border-[#EAE6DF] dark:border-[#1E283D] text-[#5C6470] dark:text-[#94A3B8] hover:text-[#1C1E21] dark:hover:text-[#F8FAFC] hover:border-[#D8D2C7] dark:hover:border-[#334155] shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isActive ? "text-[#38BDF8]" : "text-[#8C94A0] dark:text-[#64748B]"
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-[#38BDF8]" : "text-[#02365D] dark:text-[#38BDF8]"
                    }`}
                  />
                </div>
                <div>
                  <div
                    className={`text-xs font-bold leading-tight ${
                      isActive ? "text-white" : "text-[#1C1E21] dark:text-[#F8FAFC]"
                    }`}
                  >
                    {step.label}
                  </div>
                  <div
                    className={`text-[10px] font-mono truncate mt-0.5 ${
                      isActive ? "text-slate-300" : "text-[#5C6470] dark:text-[#94A3B8]"
                    }`}
                  >
                    {step.tool}
                  </div>
                </div>

                {/* Arrow Pointer on Active */}
                {isActive && (
                  <div className="hidden lg:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#02365D] dark:border-t-[#0369A1]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <MotionReveal delay={0.15}>
          <div className="card-premium p-6 sm:p-8 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Detail Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#02365D]/10 dark:bg-[#38BDF8]/10 text-[#02365D] dark:text-[#38BDF8] border border-[#02365D]/20 dark:border-[#38BDF8]/20">
                    Stage {activeStep.stepNumber}
                  </span>
                  <span className="text-xs font-mono text-[#5C6470] dark:text-[#94A3B8]">
                    {activeStep.sublabel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1E21] dark:text-[#F8FAFC] tracking-tight flex items-center gap-2">
                  {activeStep.label}
                  <span className="text-sm font-normal text-[#5C6470] dark:text-[#94A3B8]">({activeStep.tool})</span>
                </h3>

                {/* Terminal Shell Snippet */}
                <div className="p-3.5 rounded-xl bg-[#121721] border border-[#232B3D] font-mono text-xs text-[#E2E8F0] flex items-center gap-2 overflow-x-auto">
                  <Terminal className="w-4 h-4 text-[#0B9FA5] dark:text-[#14B8A6] shrink-0" />
                  <span className="text-[#38BDF8]">$</span>
                  <span className="select-all">{activeStep.command}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pt-1">
                  {activeStep.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C1E21] dark:text-[#F8FAFC]">
                      <CheckCircle2 className="w-4 h-4 text-[#087D82] dark:text-[#14B8A6] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Pipeline Telemetry Card */}
              <div className="lg:col-span-5">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-[#121929] border border-[#EAE6DF] dark:border-[#1E283D] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF] dark:border-[#1E283D]">
                    <span className="flex items-center gap-2 font-bold text-[#02365D] dark:text-[#38BDF8]">
                      <Activity className="w-4 h-4 text-[#0B9FA5] dark:text-[#14B8A6]" />
                      PIPELINE TELEMETRY
                    </span>
                    <span className="text-[#087D82] dark:text-[#14B8A6] font-semibold text-[11px] bg-[#0B9FA5]/10 dark:bg-[#14B8A6]/10 px-2 py-0.5 rounded-md">
                      STATUS: ACTIVE
                    </span>
                  </div>

                  <div className="space-y-2.5 text-[#5C6470] dark:text-[#94A3B8] text-xs">
                    <div className="flex justify-between">
                      <span>Active Stage:</span>
                      <span className="font-semibold text-[#1C1E21] dark:text-[#F8FAFC]">{activeStep.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Primary Tooling:</span>
                      <span className="font-semibold text-[#02365D] dark:text-[#38BDF8]">{activeStep.tool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Strategy:</span>
                      <span className="text-[#1C1E21] dark:text-[#F8FAFC]">Automated Webhook CI</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reproducibility:</span>
                      <span className="text-[#1C1E21] dark:text-[#F8FAFC]">Declarative Code & Containers</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#EAE6DF] dark:border-[#1E283D] flex items-center justify-between text-[11px]">
                    <span className="text-[#5C6470] dark:text-[#94A3B8]">Next Pipeline Node:</span>
                    <span className="text-[#02365D] dark:text-[#38BDF8] font-bold flex items-center gap-1">
                      {activeStep.stepNumber === "07" ? "Monitoring & Feedback" : "Subsequent Automated Step"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
