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
    label: "Source Code",
    sublabel: "Git Version Control",
    tool: "Git / Local",
    icon: Code2,
    command: "git commit -m 'feat: infrastructure automation' && git push",
    details: [
      "Modular full-stack codebase",
      "Feature branching and commit hygiene",
      "Pre-commit linting and hygiene checks",
    ],
  },
  {
    id: "github",
    stepNumber: "02",
    label: "Version Control",
    sublabel: "Collaboration & Triggers",
    tool: "GitHub",
    icon: GitPullRequest,
    command: "POST /webhook payload -> Jenkins pipeline triggered",
    details: [
      "Protected branch policies",
      "Pull request reviews & status checks",
      "Automated webhook dispatch to CI runner",
    ],
  },
  {
    id: "cicd",
    stepNumber: "03",
    label: "CI/CD Pipeline",
    sublabel: "Automated Build & Test",
    tool: "Jenkins / Actions",
    icon: Workflow,
    command: "jenkins-runner: executing pipeline stages [100% PASS]",
    details: [
      "Automated unit testing & lint validation",
      "Artifact bundling & dependency audit",
      "Automated pipeline status notification",
    ],
  },
  {
    id: "docker",
    stepNumber: "04",
    label: "Containerization",
    sublabel: "Reproducible Packaging",
    tool: "Docker / Compose",
    icon: Box,
    command: "docker compose build --no-cache && docker tag ...",
    details: [
      "Multi-stage optimized Dockerfiles",
      "Isolated container networking",
      "Docker Compose multi-service definitions",
    ],
  },
  {
    id: "iac",
    stepNumber: "05",
    label: "Infrastructure as Code",
    sublabel: "Declarative Cloud",
    tool: "Terraform",
    icon: Binary,
    command: "terraform apply -input=false -auto-approve",
    details: [
      "Declarative state management",
      "Idempotent infrastructure provisioning",
      "Immutable resource definitions",
    ],
  },
  {
    id: "aws",
    stepNumber: "06",
    label: "Cloud Architecture",
    sublabel: "Compute & Networking",
    tool: "AWS (EC2, VPC, IAM)",
    icon: Cloud,
    command: "aws ec2 describe-instances --state-name running",
    details: [
      "Isolated VPC subnets & security groups",
      "Least-privilege IAM policies",
      "EC2 compute hosting with S3 storage",
    ],
  },
  {
    id: "deploy",
    stepNumber: "07",
    label: "Production Delivery",
    sublabel: "Zero-Downtime Traffic",
    tool: "Nginx / Systemd",
    icon: Rocket,
    command: "nginx -t && systemctl reload nginx [STATUS: 200 OK]",
    details: [
      "Reverse proxy routing & SSL termination",
      "Zero-downtime rolling reload",
      "Automated health checks & log telemetry",
    ],
  },
];

export function DevOpsFlow() {
  const [activeStepId, setActiveStepId] = useState<string>("cicd");
  const activeStep = pipelineSteps.find((s) => s.id === activeStepId) || pipelineSteps[2];

  return (
    <section id="pipeline" className="py-20 md:py-28 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col items-start mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-3">
              <span>// 04. PIPELINE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              How I Build & Deliver Infrastructure
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              From local commit to production deployment: an automated, reproducible lifecycle designed to eliminate human error and maintain 99.9% reliability.
            </p>
          </div>
        </MotionReveal>

        {/* Interactive Steps Bar / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {pipelineSteps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[92px] group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isActive
                    ? "bg-emerald-500/10 border-emerald-500/40 text-white shadow-lg shadow-emerald-500/10"
                    : "bg-[#0b101b] border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.15]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-[10px] font-mono ${isActive ? "text-emerald-400 font-bold" : "text-zinc-400"}`}>
                    {step.stepNumber}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-zinc-400 group-hover:text-zinc-300"}`} />
                </div>
                <div>
                  <div className={`text-xs font-semibold leading-tight ${isActive ? "text-white" : "text-zinc-300"}`}>
                    {step.label}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 truncate mt-0.5">
                    {step.tool}
                  </div>
                </div>

                {/* Active arrow indicator on bottom */}
                {isActive && (
                  <div className="hidden lg:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-emerald-500/60" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Console Box */}
        <MotionReveal delay={0.15}>
          <div className="rounded-2xl bg-[#0b101b] border border-white/[0.1] shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left detail info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Stage {activeStep.stepNumber}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {activeStep.sublabel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  {activeStep.label}
                  <span className="text-sm font-normal text-zinc-400">({activeStep.tool})</span>
                </h3>

                {/* Terminal command snippet */}
                <div className="p-3 rounded-xl bg-[#07090e] border border-white/[0.08] font-mono text-xs text-zinc-300 flex items-center gap-2 overflow-x-auto">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400">$</span>
                  <span className="text-zinc-200 select-all">{activeStep.command}</span>
                </div>

                {/* Bullet highlights */}
                <ul className="space-y-2 pt-2">
                  {activeStep.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Pipeline Telemetry Card */}
              <div className="lg:col-span-5">
                <div className="p-5 rounded-xl bg-[#07090e] border border-white/[0.08] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      PIPELINE TELEMETRY
                    </span>
                    <span className="text-emerald-400 font-semibold">STATUS: OK</span>
                  </div>

                  <div className="space-y-2 text-zinc-400 text-[11px] sm:text-xs">
                    <div className="flex justify-between">
                      <span>Active Stage:</span>
                      <span className="text-zinc-200">{activeStep.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Primary Tool:</span>
                      <span className="text-emerald-400">{activeStep.tool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Execution Mode:</span>
                      <span className="text-zinc-200">Automated Webhook</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reproducibility:</span>
                      <span className="text-zinc-200">100% Declarative</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Next Stage:</span>
                    <span className="text-zinc-200 flex items-center gap-1">
                      {activeStep.stepNumber === "07" ? "Feedback & Monitoring" : "Subsequent Pipeline Node"}
                      <ArrowRight className="w-3 h-3 text-emerald-400" />
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
