"use client";

import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Terminal,
  CheckCircle2,
  Server,
  Cloud,
  Layers,
  Cpu,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon } from "./icons";

export function Hero() {
  const [copiedCmd, setCopiedCmd] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("ssh aditya@infra.cluster.internal");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 mask-hero pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-xs font-mono text-zinc-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-400">Environment:</span>
              <span className="text-emerald-400 font-semibold">Production Ready</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 hidden sm:inline">Uptime: 99.9%</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Aditya Kumar
              <span className="block mt-1 sm:mt-2 text-xl sm:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                DevOps Engineer
              </span>
            </h1>

            {/* Supporting Copy from Resume */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              DevOps Engineer with hands-on experience in AWS, Linux, Docker, Jenkins, Terraform, and CI/CD automation. Focused on building reproducible infrastructure and streamlining automated delivery pipelines.
            </p>

            {/* Infrastructure Core Pillars Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300 flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                AWS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                Linux
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-blue-400" />
                Docker
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                Jenkins
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                Terraform
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px] w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/adityakumar-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-200 hover:text-white font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px] w-full sm:w-auto"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-white/[0.03] text-zinc-400 hover:text-zinc-200 font-medium text-sm transition-all focus-visible:outline-none min-h-[44px] w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                Let&apos;s Connect
              </a>
            </div>
          </div>

          {/* Right Column: Infrastructure Telemetry / Terminal Console */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0b101b] border border-white/[0.1] shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080d16] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-xs font-mono text-zinc-400">devops-infra ~ session</span>
                </div>
                <button
                  onClick={copyCommand}
                  className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                  title="Copy session command"
                  aria-label="Copy session command"
                >
                  {copiedCmd ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Console Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3.5 text-zinc-300">
                {/* Command 1: Terraform */}
                <div>
                  <div className="flex items-center gap-2 text-zinc-400 flex-wrap">
                    <span className="text-emerald-400">$</span>
                    <span className="text-zinc-200 break-all">terraform apply -auto-approve</span>
                  </div>
                  <div className="text-emerald-400/90 pl-3 border-l border-white/10 mt-1 space-y-0.5 text-[11px] sm:text-xs break-all">
                    <p>aws_vpc.main: Creation complete [id: vpc-0a81f]</p>
                    <p>aws_instance.ec2: Provisioned [type: t3.medium]</p>
                    <p className="text-zinc-400">Apply complete! Resources: 4 added, 0 changed.</p>
                  </div>
                </div>

                {/* Command 2: Docker & CI/CD */}
                <div>
                  <div className="flex items-center gap-2 text-zinc-400 flex-wrap">
                    <span className="text-emerald-400">$</span>
                    <span className="text-zinc-200 break-all">jenkins-pipeline --status</span>
                  </div>
                  <div className="pl-3 border-l border-white/10 mt-1 space-y-0.5 text-[11px] sm:text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-400 flex-wrap">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Stage: Lint & Test [PASSED]</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 flex-wrap">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Stage: Docker Build & Compose [TAG: v1.4.0]</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 flex-wrap">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Stage: Zero-Downtime Deploy [ACTIVE]</span>
                    </div>
                  </div>
                </div>

                {/* Live Node Telemetry Mini-Card */}
                <div className="pt-2 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-2.5">
                    <span className="text-zinc-500 block text-[10px]">INFRA METRIC</span>
                    <span className="text-zinc-200 font-semibold block mt-0.5">Deployment Cycle</span>
                    <span className="text-emerald-400 font-mono text-[11px]">-60% Manual Effort</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-2.5">
                    <span className="text-zinc-500 block text-[10px]">ORCHESTRATION</span>
                    <span className="text-zinc-200 font-semibold block mt-0.5">Containers</span>
                    <span className="text-cyan-400 font-mono text-[11px]">Docker + Compose</span>
                  </div>
                </div>
              </div>

              {/* Console Status Bar */}
              <div className="px-4 py-2 bg-[#080d16] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Cluster: Healthy
                </span>
                <span className="text-zinc-500">region: ap-south-1</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
